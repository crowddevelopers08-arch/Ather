import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

interface TestRideLeadData {
  name: string
  phone: string
  treatment?: string      // Model interested (ather-450, ather-rizta)
  concern?: string        // Location/landmark
  preferredDateTime?: string
  source?: string
  formName?: string
  consent?: boolean
  email?: string
}

interface TelecrmResponse {
  [key: string]: any
}

/**
 * Generate form data string for TeleCRM system notes
 */
function generateFormDataString(leadData: TestRideLeadData): string {
  const details: string[] = []

  if (leadData.name) details.push(`Name: ${leadData.name}`)
  if (leadData.phone) details.push(`Phone: ${leadData.phone}`)
  if (leadData.email) details.push(`Email: ${leadData.email}`)
  
  // Format model name for display
  const modelName = leadData.treatment === "ather-450" ? "Ather 450" : 
                    leadData.treatment === "ather-rizta" ? "Ather Rizta" : 
                    leadData.treatment || "Not specified"
  
  details.push(`Model Interested: ${modelName}`)
  if (leadData.concern) details.push(`Location/Landmark: ${leadData.concern}`)
  if (leadData.preferredDateTime) {
    const date = new Date(leadData.preferredDateTime)
    details.push(`Preferred Test Ride Time: ${date.toLocaleString("en-IN")}`)
  }
  if (leadData.source) details.push(`Source: ${leadData.source}`)

  details.push(`Consent: ${leadData.consent ? "Yes" : "No"}`)
  details.push(`Form: ${leadData.formName || "Test Ride Booking Form"}`)

  return details.join(" | ")
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: TestRideLeadData): Promise<TelecrmResponse> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error("TELECRM_API_URL environment variable is not set")
  }

  if (!process.env.TELECRM_API_KEY) {
    throw new Error("TELECRM_API_KEY environment variable is not set")
  }

  try {
    const formDataString = generateFormDataString(leadData)
    const simpleFormName = leadData.formName || "Test Ride Booking Form"

    // Format model name for display
    const modelDisplay = leadData.treatment === "ather-450" ? "Ather 450" : 
                         leadData.treatment === "ather-rizta" ? "Ather Rizta" : 
                         leadData.treatment || "Not specified"

    const telecrmPayload = {
      fields: {
        Id: "",
        name: leadData.name,
        email: leadData.email || "",
        phone: (leadData.phone || "").replace(/\D/g, ""),
        city_1: "Medavakkam, Chennai",
        preferredtime: leadData.preferredDateTime ? new Date(leadData.preferredDateTime).toLocaleTimeString("en-IN") : "",
        preferreddate: leadData.preferredDateTime ? new Date(leadData.preferredDateTime).toLocaleDateString("en-IN") : "",
        message: `Test ride booking for ${modelDisplay} at ${leadData.concern || "showroom"}`,
        select_the_procedure: "Test Ride",
        Country: "India",
        LeadID: "",
        CreatedOn: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "test_ride",
        PageName: leadData.source || "Website",
        State: "Tamil Nadu",
        Age: "",
        FormName: simpleFormName,
        Pincode: "",
        // Custom fields
        Model_Interested: modelDisplay,
        Location_Landmark: leadData.concern || "",
        Showroom_Name: "Ather Space - Medavakkam",
        Booking_Type: "Test Ride",
      },
      actions: [
        { type: "SYSTEM_NOTE", text: `Form Name: ${simpleFormName}` },
        { type: "SYSTEM_NOTE", text: `Complete Form Data: ${formDataString}` },
        {
          type: "SYSTEM_NOTE",
          text: `Lead Source: ${leadData.source || "Website"}`,
        },
        { 
          type: "SYSTEM_NOTE", 
          text: `Model Interested: ${modelDisplay}` 
        },
        { 
          type: "SYSTEM_NOTE", 
          text: `Location/Landmark: ${leadData.concern || "Not specified"}` 
        },
        {
          type: "SYSTEM_NOTE",
          text: `Preferred Test Ride Time: ${leadData.preferredDateTime ? new Date(leadData.preferredDateTime).toLocaleString("en-IN") : "Not specified"}`,
        },
        { 
          type: "SYSTEM_NOTE", 
          text: `Showroom: Ather Space - Medavakkam, Chennai` 
        },
        { 
          type: "SYSTEM_NOTE", 
          text: `Consent Given: ${leadData.consent ? "Yes" : "No"}` 
        },
      ],
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TELECRM_API_KEY}`,
        "X-Client-ID": "ather-test-ride-integration",
        Accept: "application/json",
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    if (response.status === 204) {
      clearTimeout(timeout)
      return { status: "success", message: "Lead created (204 No Content)" }
    }

    const responseText = await response.text()

    // Check for HTML response
    if (
      responseText.trim().startsWith("<!DOCTYPE") ||
      responseText.trim().startsWith("<html") ||
      responseText.includes("<!DOCTYPE html>")
    ) {
      console.warn(`HTML response from TeleCRM endpoint`, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        bodyPreview: responseText.slice(0, 200),
      })
      throw new Error("TeleCRM returned HTML response instead of JSON")
    }

    try {
      const data = responseText ? JSON.parse(responseText) : {}
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status} from TeleCRM`)
      }
      clearTimeout(timeout)
      return data
    } catch {
      throw new Error(`Invalid JSON from TeleCRM: ${responseText.slice(0, 100)}...`)
    }
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * GET /api/leads - Fetch leads for dashboard
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1", 10)
    const limit = parseInt(searchParams.get("limit") || "100", 10)
    const skip = (page - 1) * limit

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.lead.count(),
    ])

    const pages = Math.ceil(total / limit)

    return NextResponse.json({
      success: true,
      data: leads,
      pagination: {
        page,
        limit,
        total,
        pages,
      },
    })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json(
      {
        success: false,
        data: [],
        error: "Failed to fetch leads",
      },
      { status: 500 },
    )
  }
}

/**
 * POST /api/leads - Handle test ride form submission
 */
export async function POST(request: Request) {
  let leadData: TestRideLeadData

  try {
    leadData = await request.json()

    // Validate required fields
    if (!leadData.name || !leadData.phone) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Missing required fields: name and phone" 
        },
        { status: 400 },
      )
    }

    // Validate phone number (basic Indian mobile number validation)
    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(leadData.phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Please enter a valid 10-digit mobile number" 
        },
        { status: 400 },
      )
    }

    const simpleFormName = leadData.formName || "Test Ride Booking Form"

    // Try TeleCRM sync
    let telecrmSynced = false
    let telecrmError: string | null = null
    let telecrmId: string | null = null
    let telecrmResponse: TelecrmResponse | null = null

    // Only attempt TeleCRM sync if API keys are configured
    if (process.env.TELECRM_API_URL && process.env.TELECRM_API_KEY) {
      try {
        const resp = await sendToTeleCRM(leadData)
        telecrmSynced = true
        telecrmResponse = resp
        telecrmId = (resp as any)?.data?.id ?? (resp as any)?.id ?? `tcrm_${Date.now()}`
      } catch (error) {
        telecrmSynced = false
        telecrmError = error instanceof Error ? error.message : "Unknown TeleCRM error"
        console.error("TeleCRM sync failed:", telecrmError)
        // Don't fail the submission - continue to save to database
      }
    } else {
      console.log("TeleCRM sync skipped - API keys not configured")
    }

    // Store in Prisma database
    const createdLead = await prisma.lead.create({
      data: {
        name: leadData.name,
        phone: leadData.phone.replace(/\D/g, ''), // Store clean phone number
        email: leadData.email ?? null,
        treatment: leadData.treatment || null, // Store model as treatment
        concern: leadData.concern || null, // Store landmark as concern
        preferredDateTime: leadData.preferredDateTime || null,
        source: leadData.source || "Website",
        formName: simpleFormName,
        consent: Boolean(leadData.consent ?? true),
        telecrmSynced,
        telecrmId,
        telecrmError,
        // status defaults to NEW, priority to MEDIUM
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: createdLead,
        telecrm: {
          synced: telecrmSynced,
          error: telecrmError,
          response: telecrmResponse,
        },
        message: telecrmSynced
          ? "Your test ride has been booked successfully! Our team will contact you shortly to confirm your slot."
          : "Test ride booking saved! Our team will contact you within 24 hours to confirm your slot.",
        timestamp: new Date().toISOString(),
        formName: simpleFormName,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Test ride submission error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process your test ride booking",
        details: error instanceof Error ? error.message : "Unknown error",
        referenceId: `BOOK_ERR_${Date.now()}`,
      },
      { status: 500 },
    )
  }
}