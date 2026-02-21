"use client"

import { useState, useEffect, Fragment } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  Calendar,
  RefreshCw,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  Bike,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Lead {
  id: string
  name: string
  phone: string
  email?: string
  treatment?: string      // Maps to model interested
  concern?: string        // Maps to landmark/location
  preferredDateTime?: string
  message?: string
  source?: string
  formName?: string
  consent: boolean
  status: "NEW" | "CONTACTED" | "SCHEDULED" | "CONVERTED" | "LOST" | "INVALID"
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT"
  telecrmSynced: boolean
  telecrmId?: string
  telecrmError?: string
  createdAt: string
  updatedAt: string
  syncedAt?: string
}

interface LeadsResponse {
  success: boolean
  data: Lead[]
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
  error?: string
}

interface LeadsTableProps {
  initialLeads?: Lead[]
  autoRefresh?: boolean
  refreshInterval?: number
}

export default function LeadsTable({
  initialLeads = [],
  autoRefresh = false,
  refreshInterval = 30000,
}: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [modelFilter, setModelFilter] = useState<string>("all")
  const [dateFilter, setDateFilter] = useState<string>("all")
  const [formFilter, setFormFilter] = useState<string>("all")
  const [expandedLead, setExpandedLead] = useState<string | null>(null)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Fetch leads from API
  const fetchLeads = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/leads")
      const data: LeadsResponse = await response.json()

      if (data.success && data.data) {
        setLeads(data.data)
      } else {
        console.error("Failed to fetch leads:", data.error)
        setLeads([])
      }
    } catch (error) {
      console.error("Error fetching leads:", error)
      setLeads([])
    } finally {
      setLoading(false)
    }
  }

  // Update lead status
  const updateLeadStatus = async (leadId: string, newStatus: Lead["status"]) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setLeads((prev) =>
          prev.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus } : lead)),
        )
      } else {
        console.error("Failed to update lead status")
      }
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
  }

  // Load leads on component mount
  useEffect(() => {
    fetchLeads()
  }, [])

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(fetchLeads, refreshInterval)
    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval])

  // Sort leads
  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortConfig) return 0

    const { key, direction } = sortConfig
    let aValue = a[key as keyof Lead]
    let bValue = b[key as keyof Lead]

    if (key === "createdAt" || key === "updatedAt" || key === "syncedAt") {
      aValue = new Date(aValue as string).getTime()
      bValue = new Date(bValue as string).getTime()
    } else if (typeof aValue === "string") {
      aValue = aValue.toLowerCase()
      bValue = (bValue as string).toLowerCase()
    }

    if (aValue < bValue) return direction === "asc" ? -1 : 1
    if (aValue > bValue) return direction === "asc" ? 1 : -1
    return 0
  })

  // Safe string conversion for filtering
  const safeString = (value: any): string => {
    if (value === null || value === undefined) return ""
    return String(value).toLowerCase()
  }

  // Date range filter
  function isWithinDateRange(date: string, range: string): boolean {
    if (!date) return false

    const leadDate = new Date(date)
    const now = new Date()

    switch (range) {
      case "today":
        return leadDate.toDateString() === now.toDateString()
      case "week": {
        const weekAgo = new Date(now)
        weekAgo.setDate(weekAgo.getDate() - 7)
        return leadDate >= weekAgo
      }
      case "month": {
        const monthAgo = new Date(now)
        monthAgo.setMonth(monthAgo.getMonth() - 1)
        return leadDate >= monthAgo
      }
      default:
        return true
    }
  }

  // Filter leads based on search and filters
  const filteredLeads = sortedLeads.filter((lead) => {
    const matchesSearch =
      safeString(lead.name).includes(safeString(searchTerm)) ||
      safeString(lead.phone).includes(safeString(searchTerm)) ||
      safeString(lead.email).includes(safeString(searchTerm)) ||
      safeString(lead.treatment).includes(safeString(searchTerm)) ||
      safeString(lead.concern).includes(safeString(searchTerm)) ||
      safeString(lead.formName).includes(safeString(searchTerm))

    const matchesStatus =
      statusFilter === "all" ||
      lead.status === (statusFilter.toUpperCase() as Lead["status"])

    const matchesModel = modelFilter === "all" || lead.treatment === modelFilter
    const matchesDate = dateFilter === "all" || isWithinDateRange(lead.createdAt, dateFilter)
    const matchesForm = formFilter === "all" || lead.formName === formFilter

    return matchesSearch && matchesStatus && matchesModel && matchesDate && matchesForm
  })

  // Get unique models for filter
  const uniqueModels = Array.from(
    new Set(leads.map((lead) => lead.treatment).filter(Boolean)),
  ) as string[]

  // Get unique form names for filter
  const uniqueFormNames = Array.from(
    new Set(leads.map((lead) => lead.formName).filter(Boolean)),
  ) as string[]

  // Form statistics
  const getFormStats = () => {
    const stats: {
      [key: string]: { total: number; new: number; converted: number; synced: number }
    } = {}

    leads.forEach((lead) => {
      const formName = lead.formName || "Test Ride Booking Form"
      if (!stats[formName]) {
        stats[formName] = { total: 0, new: 0, converted: 0, synced: 0 }
      }

      stats[formName].total++
      if (lead.status === "NEW") stats[formName].new++
      if (lead.status === "CONVERTED") stats[formName].converted++
      if (lead.telecrmSynced) stats[formName].synced++
    })

    return stats
  }

  const formStats = getFormStats()

  // Export to CSV
  const exportToCSV = () => {
    const headers = [
      "Name",
      "Phone",
      "Email",
      "Model Interested",
      "Location/Landmark",
      "Preferred Time",
      "Status",
      "Priority",
      "Form Name",
      "Source",
      "TeleCRM Synced",
      "TeleCRM ID",
      "TeleCRM Error",
      "Created At",
      "Updated At",
    ]
    
    const csvData = filteredLeads.map((lead) => [
      lead.name || "",
      lead.phone || "",
      lead.email || "",
      lead.treatment || "",
      lead.concern || "",
      lead.preferredDateTime || "",
      lead.status || "",
      lead.priority || "",
      lead.formName || "",
      lead.source || "",
      lead.telecrmSynced ? "Yes" : "No",
      lead.telecrmId || "",
      lead.telecrmError || "",
      isClient
        ? new Date(lead.createdAt).toLocaleString("en-IN")
        : lead.createdAt,
      isClient
        ? new Date(lead.updatedAt).toLocaleString("en-IN")
        : lead.updatedAt,
    ])

    const csvContent = [headers, ...csvData].map((row) => row.join(",")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `test-ride-leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  // Helper functions for UI components with updated colors
  const getStatusBadge = (status: Lead["status"]) => {
    const statusConfig: Record<Lead["status"], { label: string; color: string }> = {
      NEW: { label: "New", color: "bg-[#ee5335] text-white border-[#ee5335]" },
      CONTACTED: { label: "Contacted", color: "bg-black text-white border-black" },
      SCHEDULED: { label: "Scheduled", color: "bg-[#ee5335] text-white border-[#ee5335] opacity-80" },
      CONVERTED: { label: "Converted", color: "bg-black text-white border-black opacity-80" },
      LOST: { label: "Lost", color: "bg-gray-200 text-gray-700 border-gray-300" },
      INVALID: { label: "Invalid", color: "bg-gray-100 text-gray-500 border-gray-200" },
    }

    const config = statusConfig[status]
    return (
      <Badge variant="outline" className={`${config.color} border font-medium`}>
        {config.label}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: Lead["priority"]) => {
    const priorityConfig: Record<Lead["priority"], { label: string; color: string }> = {
      LOW: { label: "Low", color: "bg-gray-100 text-gray-500 border-gray-200" },
      MEDIUM: { label: "Medium", color: "bg-[#ee5335] text-white border-[#ee5335]" },
      HIGH: { label: "High", color: "bg-black text-white border-black" },
      URGENT: { label: "Urgent", color: "bg-black text-white border-black font-bold" },
    }

    const config = priorityConfig[priority]
    return (
      <Badge variant="outline" className={`${config.color} border text-xs`}>
        {config.label}
      </Badge>
    )
  }

  const getFormBadge = (formName?: string) => {
    if (!formName || formName === "Test Ride Booking Form") {
      return (
        <Badge variant="outline" className="bg-[#ee5335] text-white border-[#ee5335] text-xs">
          Test Ride
        </Badge>
      )
    }

    return (
      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
        {formName}
      </Badge>
    )
  }

  const getTelecrmBadge = (synced: boolean, error?: string) => {
    if (error) {
      return (
        <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">
          Failed
        </Badge>
      )
    }
    return synced ? (
      <Badge className="bg-[#ee5335] text-white border-[#ee5335]">
        Synced
      </Badge>
    ) : (
      <Badge variant="outline" className="bg-gray-100 text-gray-500 border-gray-200">
        Pending
      </Badge>
    )
  }

  // Action handlers
  const handleCall = (phone: string) => {
    if (phone) {
      window.open(`tel:${phone}`, "_self")
    }
  }

  const handleEmail = (email?: string) => {
    if (email) {
      window.open(`mailto:${email}`, "_self")
    }
  }

  const handleSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction: current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }))
  }

  const toggleLeadExpansion = (leadId: string) => {
    setExpandedLead((current) => (current === leadId ? null : leadId))
  }

  // Format date safely for client-side rendering
  const formatDate = (dateString: string) => {
    if (!isClient || !dateString) return { date: "", time: "" }

    try {
      const date = new Date(dateString)
      return {
        date: date.toLocaleDateString("en-IN"),
        time: date.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
    } catch {
      return { date: "Invalid Date", time: "" }
    }
  }

  // Format model name for display
  const formatModelName = (model?: string) => {
    if (!model) return "Not specified"
    const models: { [key: string]: string } = {
      "ather-450": "Ather 450",
      "ather-rizta": "Ather Rizta",
    }
    return models[model] || model
  }

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <Card className="w-full bg-white border-gray-200 shadow-sm">
        <CardHeader className="border-b border-gray-200 bg-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-black">
                Test Ride Leads Management
              </CardTitle>
              <CardDescription className="text-gray-600">
                Manage and track all test ride booking leads
                {autoRefresh && (
                  <span className="ml-2 text-xs text-[#ee5335] font-medium">
                    • Auto-refresh enabled
                  </span>
                )}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={fetchLeads}
                disabled={loading}
                className="flex items-center gap-2 border-gray-300 text-black hover:bg-[#ee5335] hover:text-white hover:border-[#ee5335] transition-colors"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                {loading ? "Refreshing..." : "Refresh"}
              </Button>
              <Button
                onClick={exportToCSV}
                className="flex items-center gap-2 bg-[#ee5335] hover:bg-black text-white hover:text-white border border-transparent hover:border-[#ee5335] transition-colors"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 bg-white">
          {/* Form Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(formStats).map(([formName, stats]) => (
              <Card key={formName} className="p-4 bg-white border-gray-200 shadow-sm hover:border-[#ee5335] transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Bike className="h-4 w-4 text-[#ee5335]" />
                      <span className="font-medium text-sm text-black capitalize">
                        {formName === "Test Ride Booking Form" ? "Test Rides" : formName}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-black">
                      {stats.total}
                    </div>
                  </div>
                  <div className="text-right text-xs space-y-1">
                    <div className="flex items-center gap-1 justify-end">
                      <div className="w-2 h-2 bg-[#ee5335] rounded-full" />
                      <span className="text-gray-600">New: {stats.new}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span className="text-gray-600">Converted: {stats.converted}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <span className="text-gray-600">Synced: {stats.synced}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search by name, phone, email, model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#ee5335] focus:ring-[#ee5335]"
                />
              </div>
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-white border-gray-300 text-black focus:ring-[#ee5335] focus:border-[#ee5335]">
                <Filter className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-black">
                <SelectItem value="all" className="focus:bg-[#ee5335] focus:text-white">All Status</SelectItem>
                <SelectItem value="new" className="focus:bg-[#ee5335] focus:text-white">New</SelectItem>
                <SelectItem value="contacted" className="focus:bg-[#ee5335] focus:text-white">Contacted</SelectItem>
                <SelectItem value="scheduled" className="focus:bg-[#ee5335] focus:text-white">Scheduled</SelectItem>
                <SelectItem value="converted" className="focus:bg-[#ee5335] focus:text-white">Converted</SelectItem>
                <SelectItem value="lost" className="focus:bg-[#ee5335] focus:text-white">Lost</SelectItem>
                <SelectItem value="invalid" className="focus:bg-[#ee5335] focus:text-white">Invalid</SelectItem>
              </SelectContent>
            </Select>

            <Select value={modelFilter} onValueChange={setModelFilter}>
              <SelectTrigger className="bg-white border-gray-300 text-black focus:ring-[#ee5335] focus:border-[#ee5335]">
                <SelectValue placeholder="Model" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-black">
                <SelectItem value="all" className="focus:bg-[#ee5335] focus:text-white">All Models</SelectItem>
                {uniqueModels.map((model) => (
                  <SelectItem key={model} value={model} className="focus:bg-[#ee5335] focus:text-white">
                    {formatModelName(model)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={formFilter} onValueChange={setFormFilter}>
              <SelectTrigger className="bg-white border-gray-300 text-black focus:ring-[#ee5335] focus:border-[#ee5335]">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Form" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-black">
                <SelectItem value="all" className="focus:bg-[#ee5335] focus:text-white">All Forms</SelectItem>
                {uniqueFormNames.map((formName) => (
                  <SelectItem key={formName} value={formName} className="focus:bg-[#ee5335] focus:text-white">
                    {formName === "Test Ride Booking Form" ? "Test Ride" : formName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="bg-white border-gray-300 text-black focus:ring-[#ee5335] focus:border-[#ee5335]">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-black">
                <SelectItem value="all" className="focus:bg-[#ee5335] focus:text-white">All Time</SelectItem>
                <SelectItem value="today" className="focus:bg-[#ee5335] focus:text-white">Today</SelectItem>
                <SelectItem value="week" className="focus:bg-[#ee5335] focus:text-white">This Week</SelectItem>
                <SelectItem value="month" className="focus:bg-[#ee5335] focus:text-white">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black cursor-pointer hover:bg-[#ee5335] hover:text-white transition-colors" onClick={() => handleSort("name")}>
                      <div className="flex items-center gap-1">
                        Name
                        {sortConfig?.key === "name" && (sortConfig.direction === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black">Contact</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black">Model & Location</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black">Form</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black">Sync</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black cursor-pointer hover:bg-[#ee5335] hover:text-white transition-colors" onClick={() => handleSort("createdAt")}>
                      <div className="flex items-center gap-1">
                        Date
                        {sortConfig?.key === "createdAt" && (sortConfig.direction === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                      </div>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-gray-500">
                        <div className="flex items-center justify-center gap-2">
                          <RefreshCw className="h-4 w-4 animate-spin text-[#ee5335]" />
                          Loading leads...
                        </div>
                      </td>
                    </tr>
                  ) : filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-gray-500">
                        No leads found matching your criteria
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => {
                      const formattedDate = formatDate(lead.createdAt)
                      return (
                        <Fragment key={lead.id}>
                          <tr className="border-b border-gray-200 hover:bg-[#ee5335] hover:bg-opacity-10 transition-colors cursor-pointer" onClick={() => toggleLeadExpansion(lead.id)}>
                            <td className="p-4 align-middle font-medium text-black">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  lead.status === "NEW" ? "bg-[#ee5335]" : 
                                  lead.status === "CONTACTED" ? "bg-black" : 
                                  lead.status === "SCHEDULED" ? "bg-[#ee5335]" : 
                                  lead.status === "CONVERTED" ? "bg-black" : 
                                  lead.status === "INVALID" ? "bg-gray-400" : 
                                  "bg-gray-300"
                                }`} />
                                {lead.name || "Unknown"}
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <Phone className="h-3 w-3 text-[#ee5335]" />
                                  <span className="text-sm text-gray-700">{lead.phone || "No phone"}</span>
                                </div>
                                {lead.email && (
                                  <div className="flex items-center gap-2">
                                    <Mail className="h-3 w-3 text-[#ee5335]" />
                                    <span className="text-sm text-gray-700 truncate max-w-[120px]">{lead.email}</span>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-medium text-black">
                                  {formatModelName(lead.treatment)}
                                </span>
                                {lead.concern && (
                                  <span className="text-xs text-gray-600">
                                    Location: {lead.concern}
                                  </span>
                                )}
                                <div className="mt-1">
                                  {getPriorityBadge(lead.priority)}
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              {getFormBadge(lead.formName)}
                            </td>
                            <td className="p-4 align-middle">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <div className="cursor-pointer">
                                    {getStatusBadge(lead.status)}
                                  </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border-gray-200 text-black">
                                  <DropdownMenuItem className="focus:bg-[#ee5335] focus:text-white" onClick={(e) => { e.stopPropagation(); updateLeadStatus(lead.id, "NEW") }}>New</DropdownMenuItem>
                                  <DropdownMenuItem className="focus:bg-[#ee5335] focus:text-white" onClick={(e) => { e.stopPropagation(); updateLeadStatus(lead.id, "CONTACTED") }}>Contacted</DropdownMenuItem>
                                  <DropdownMenuItem className="focus:bg-[#ee5335] focus:text-white" onClick={(e) => { e.stopPropagation(); updateLeadStatus(lead.id, "SCHEDULED") }}>Scheduled</DropdownMenuItem>
                                  <DropdownMenuItem className="focus:bg-[#ee5335] focus:text-white" onClick={(e) => { e.stopPropagation(); updateLeadStatus(lead.id, "CONVERTED") }}>Converted</DropdownMenuItem>
                                  <DropdownMenuItem className="focus:bg-[#ee5335] focus:text-white" onClick={(e) => { e.stopPropagation(); updateLeadStatus(lead.id, "LOST") }}>Lost</DropdownMenuItem>
                                  <DropdownMenuItem className="focus:bg-[#ee5335] focus:text-white" onClick={(e) => { e.stopPropagation(); updateLeadStatus(lead.id, "INVALID") }}>Invalid</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                            <td className="p-4 align-middle">
                              {getTelecrmBadge(lead.telecrmSynced, lead.telecrmError)}
                              {lead.telecrmId && lead.telecrmId !== "unknown" && (
                                <div className="text-xs text-gray-500 mt-1 truncate max-w-[80px]">
                                  ID: {lead.telecrmId}
                                </div>
                              )}
                            </td>
                            <td className="p-4 align-middle text-sm text-gray-600">
                              {formattedDate.date}
                              <br />
                              <span className="text-xs">{formattedDate.time}</span>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="h-8 bg-white border-[#ee5335] text-black hover:bg-[#ee5335] hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); handleCall(lead.phone) }} disabled={!lead.phone}>
                                  <Phone className="h-3 w-3" />
                                </Button>
                                {lead.email && (
                                  <Button variant="outline" size="sm" className="h-8 bg-white border-black text-black hover:bg-black hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); handleEmail(lead.email) }}>
                                    <Mail className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                          {expandedLead === lead.id && (
                            <tr className="bg-gray-50 border-b border-gray-200">
                              <td colSpan={8} className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <h4 className="font-medium text-black mb-2">Lead Details</h4>
                                    <div className="space-y-2 text-gray-700">
                                      <div><span className="font-medium text-black">Source:</span> {lead.source || "Website"}</div>
                                      <div><span className="font-medium text-black">Consent:</span> {lead.consent ? "Yes" : "No"}</div>
                                      <div><span className="font-medium text-black">Model:</span> {formatModelName(lead.treatment)}</div>
                                      <div><span className="font-medium text-black">Location/Landmark:</span> {lead.concern || "Not specified"}</div>
                                      <div><span className="font-medium text-black">Preferred Time:</span> {lead.preferredDateTime ? new Date(lead.preferredDateTime).toLocaleString("en-IN") : "Not specified"}</div>
                                      <div><span className="font-medium text-black">Priority:</span> {getPriorityBadge(lead.priority)}</div>
                                      <div><span className="font-medium text-black">TeleCRM Sync:</span> {lead.telecrmSynced ? "Yes" : "No"}</div>
                                      {lead.telecrmId && lead.telecrmId !== "unknown" && <div><span className="font-medium text-black">TeleCRM ID:</span> {lead.telecrmId}</div>}
                                      {lead.telecrmError && <div><span className="font-medium text-red-600">Sync Error:</span> {lead.telecrmError}</div>}
                                      <div><span className="font-medium text-black">Created:</span> {formatDate(lead.createdAt).date} {formatDate(lead.createdAt).time}</div>
                                      <div><span className="font-medium text-black">Updated:</span> {formatDate(lead.updatedAt).date} {formatDate(lead.updatedAt).time}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-black mb-2">Additional Details</h4>
                                    <p className="text-gray-700 bg-white p-3 rounded border border-gray-200">
                                      {lead.message || "No additional details provided"}
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-sm text-gray-600 gap-2">
            <div>
              Showing {filteredLeads.length} of {leads.length} leads
              {searchTerm && ` • Filtered by: "${searchTerm}"`}
              {formFilter !== "all" && ` • Form: ${formFilter === "Test Ride Booking Form" ? "Test Ride" : formFilter}`}
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#ee5335] rounded-full" />
                <span>New: {leads.filter((l) => l.status === "NEW").length}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span>Converted: {leads.filter((l) => l.status === "CONVERTED").length}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <span>Synced: {leads.filter((l) => l.telecrmSynced).length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}