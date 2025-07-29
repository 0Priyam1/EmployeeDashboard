"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, TrendingUp, MapPin, ChevronUp, ChevronDown, Search } from "lucide-react"

// Employee data
const employeeData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@company.com",
    department: "Engineering",
    position: "Senior Developer",
    salary: 95000,
    hireDate: "2021-03-15",
    age: 32,
    location: "New York",
    performanceRating: 4.2,
    projectsCompleted: 12,
    isActive: true,
    skills: ["JavaScript", "React", "Node.js"],
    manager: "Sarah Johnson",
  },
  {
    id: 2,
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@company.com",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 78000,
    hireDate: "2020-07-22",
    age: 29,
    location: "Los Angeles",
    performanceRating: 4.5,
    projectsCompleted: 8,
    isActive: true,
    skills: ["Digital Marketing", "SEO", "Analytics"],
    manager: "Michael Brown",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@company.com",
    department: "Marketing",
    position: "VP Marketing",
    salary: 125000,
    hireDate: "2019-01-10",
    age: 38,
    location: "Los Angeles",
    performanceRating: 4.7,
    projectsCompleted: 15,
    isActive: true,
    skills: ["Strategy", "Leadership", "Brand Management"],
    manager: null,
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@company.com",
    department: "Engineering",
    position: "Engineering Manager",
    salary: 115000,
    hireDate: "2018-11-05",
    age: 35,
    location: "New York",
    performanceRating: 4.6,
    projectsCompleted: 18,
    isActive: true,
    skills: ["Team Leadership", "Architecture", "Python"],
    manager: "David Wilson",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@company.com",
    department: "Engineering",
    position: "CTO",
    salary: 180000,
    hireDate: "2017-05-12",
    age: 42,
    location: "New York",
    performanceRating: 4.8,
    projectsCompleted: 25,
    isActive: true,
    skills: ["Technical Strategy", "Leadership", "Cloud Architecture"],
    manager: null,
  },
  {
    id: 6,
    firstName: "Lisa",
    lastName: "Garcia",
    email: "lisa.garcia@company.com",
    department: "Sales",
    position: "Sales Representative",
    salary: 65000,
    hireDate: "2022-02-28",
    age: 26,
    location: "Chicago",
    performanceRating: 3.9,
    projectsCompleted: 6,
    isActive: true,
    skills: ["CRM", "Negotiation", "Customer Relations"],
    manager: "Robert Martinez",
  },
  {
    id: 7,
    firstName: "Robert",
    lastName: "Martinez",
    email: "robert.martinez@company.com",
    department: "Sales",
    position: "Sales Manager",
    salary: 92000,
    hireDate: "2020-09-14",
    age: 34,
    location: "Chicago",
    performanceRating: 4.3,
    projectsCompleted: 11,
    isActive: true,
    skills: ["Sales Strategy", "Team Management", "B2B Sales"],
    manager: "Jennifer Lee",
  },
  {
    id: 8,
    firstName: "Jennifer",
    lastName: "Lee",
    email: "jennifer.lee@company.com",
    department: "Sales",
    position: "VP Sales",
    salary: 135000,
    hireDate: "2019-06-18",
    age: 40,
    location: "Chicago",
    performanceRating: 4.6,
    projectsCompleted: 16,
    isActive: true,
    skills: ["Strategic Sales", "Leadership", "Market Analysis"],
    manager: null,
  },
  {
    id: 9,
    firstName: "James",
    lastName: "Anderson",
    email: "james.anderson@company.com",
    department: "HR",
    position: "HR Specialist",
    salary: 58000,
    hireDate: "2021-08-30",
    age: 28,
    location: "Austin",
    performanceRating: 4.0,
    projectsCompleted: 7,
    isActive: true,
    skills: ["Recruitment", "Employee Relations", "HRIS"],
    manager: "Karen White",
  },
  {
    id: 10,
    firstName: "Karen",
    lastName: "White",
    email: "karen.white@company.com",
    department: "HR",
    position: "HR Manager",
    salary: 85000,
    hireDate: "2019-12-02",
    age: 36,
    location: "Austin",
    performanceRating: 4.4,
    projectsCompleted: 13,
    isActive: true,
    skills: ["HR Strategy", "Policy Development", "Leadership"],
    manager: null,
  },
  {
    id: 11,
    firstName: "Alex",
    lastName: "Thompson",
    email: "alex.thompson@company.com",
    department: "Engineering",
    position: "Junior Developer",
    salary: 72000,
    hireDate: "2023-01-16",
    age: 24,
    location: "New York",
    performanceRating: 3.8,
    projectsCompleted: 4,
    isActive: true,
    skills: ["Java", "Spring Boot", "MySQL"],
    manager: "Sarah Johnson",
  },
  {
    id: 12,
    firstName: "Maria",
    lastName: "Rodriguez",
    email: "maria.rodriguez@company.com",
    department: "Finance",
    position: "Financial Analyst",
    salary: 68000,
    hireDate: "2021-11-08",
    age: 30,
    location: "Miami",
    performanceRating: 4.1,
    projectsCompleted: 9,
    isActive: true,
    skills: ["Financial Modeling", "Excel", "SAP"],
    manager: "Thomas Clark",
  },
  {
    id: 13,
    firstName: "Thomas",
    lastName: "Clark",
    email: "thomas.clark@company.com",
    department: "Finance",
    position: "Finance Manager",
    salary: 98000,
    hireDate: "2018-04-25",
    age: 37,
    location: "Miami",
    performanceRating: 4.5,
    projectsCompleted: 14,
    isActive: true,
    skills: ["Financial Planning", "Budget Management", "Leadership"],
    manager: null,
  },
  {
    id: 14,
    firstName: "Amanda",
    lastName: "Taylor",
    email: "amanda.taylor@company.com",
    department: "Marketing",
    position: "Content Specialist",
    salary: 55000,
    hireDate: "2022-06-12",
    age: 25,
    location: "Los Angeles",
    performanceRating: 3.7,
    projectsCompleted: 5,
    isActive: true,
    skills: ["Content Writing", "Social Media", "Adobe Creative"],
    manager: "Michael Brown",
  },
  {
    id: 15,
    firstName: "Ryan",
    lastName: "Miller",
    email: "ryan.miller@company.com",
    department: "Engineering",
    position: "DevOps Engineer",
    salary: 88000,
    hireDate: "2020-10-19",
    age: 31,
    location: "Seattle",
    performanceRating: 4.3,
    projectsCompleted: 10,
    isActive: true,
    skills: ["AWS", "Docker", "Kubernetes"],
    manager: "Sarah Johnson",
  },
  {
    id: 16,
    firstName: "Jessica",
    lastName: "Moore",
    email: "jessica.moore@company.com",
    department: "Sales",
    position: "Account Executive",
    salary: 75000,
    hireDate: "2021-04-03",
    age: 27,
    location: "Denver",
    performanceRating: 4.0,
    projectsCompleted: 8,
    isActive: false,
    skills: ["Account Management", "Salesforce", "Presentation"],
    manager: "Robert Martinez",
  },
  {
    id: 17,
    firstName: "Daniel",
    lastName: "Harris",
    email: "daniel.harris@company.com",
    department: "Finance",
    position: "Senior Accountant",
    salary: 73000,
    hireDate: "2019-08-14",
    age: 33,
    location: "Miami",
    performanceRating: 4.2,
    projectsCompleted: 12,
    isActive: true,
    skills: ["Accounting", "Tax Preparation", "QuickBooks"],
    manager: "Thomas Clark",
  },
  {
    id: 18,
    firstName: "Nicole",
    lastName: "Jackson",
    email: "nicole.jackson@company.com",
    department: "HR",
    position: "Recruiter",
    salary: 62000,
    hireDate: "2022-09-05",
    age: 29,
    location: "Austin",
    performanceRating: 3.9,
    projectsCompleted: 6,
    isActive: true,
    skills: ["Talent Acquisition", "LinkedIn Recruiter", "Interviewing"],
    manager: "Karen White",
  },
  {
    id: 19,
    firstName: "Kevin",
    lastName: "Wright",
    email: "kevin.wright@company.com",
    department: "Engineering",
    position: "QA Engineer",
    salary: 76000,
    hireDate: "2020-12-07",
    age: 30,
    location: "Seattle",
    performanceRating: 4.1,
    projectsCompleted: 11,
    isActive: true,
    skills: ["Test Automation", "Selenium", "API Testing"],
    manager: "Sarah Johnson",
  },
  {
    id: 20,
    firstName: "Stephanie",
    lastName: "Lopez",
    email: "stephanie.lopez@company.com",
    department: "Marketing",
    position: "Digital Marketing Specialist",
    salary: 64000,
    hireDate: "2021-12-20",
    age: 26,
    location: "Phoenix",
    performanceRating: 3.8,
    projectsCompleted: 7,
    isActive: true,
    skills: ["Google Ads", "Facebook Ads", "Email Marketing"],
    manager: "Michael Brown",
  },
]

type SortField = keyof (typeof employeeData)[0]
type SortDirection = "asc" | "desc"

export default function EmployeeDashboard() {
  const [searchText, setSearchText] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [sortField, setSortField] = useState<SortField>("id")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Calculate summary statistics
  const stats = useMemo(() => {
    const activeEmployees = employeeData.filter((emp) => emp.isActive)
    const totalSalary = activeEmployees.reduce((sum, emp) => sum + emp.salary, 0)
    const avgPerformance = activeEmployees.reduce((sum, emp) => sum + emp.performanceRating, 0) / activeEmployees.length
    const departments = [...new Set(employeeData.map((emp) => emp.department))].length

    return {
      totalEmployees: activeEmployees.length,
      avgSalary: Math.round(totalSalary / activeEmployees.length),
      avgPerformance: avgPerformance.toFixed(1),
      departments,
    }
  }, [])

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = employeeData

    // Apply department filter
    if (departmentFilter !== "all") {
      filtered = filtered.filter((emp) => emp.department === departmentFilter)
    }

    // Apply search filter
    if (searchText) {
      const searchLower = searchText.toLowerCase()
      filtered = filtered.filter(
        (emp) =>
          emp.firstName.toLowerCase().includes(searchLower) ||
          emp.lastName.toLowerCase().includes(searchLower) ||
          emp.email.toLowerCase().includes(searchLower) ||
          emp.department.toLowerCase().includes(searchLower) ||
          emp.position.toLowerCase().includes(searchLower) ||
          emp.location.toLowerCase().includes(searchLower) ||
          emp.skills.some((skill) => skill.toLowerCase().includes(searchLower)) ||
          (emp.manager && emp.manager.toLowerCase().includes(searchLower)),
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue
      }

      return 0
    })

    return filtered
  }, [searchText, departmentFilter, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const paginatedData = filteredAndSortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
    setCurrentPage(1)
  }

  const departments = [...new Set(employeeData.map((emp) => emp.department))]

  const getPerformanceBadge = (rating: number) => {
    if (rating >= 4.5) return <Badge className="bg-green-500">Excellent</Badge>
    if (rating >= 4.0) return <Badge className="bg-blue-500">Good</Badge>
    if (rating >= 3.5) return <Badge className="bg-yellow-500">Average</Badge>
    return <Badge variant="destructive">Below Average</Badge>
  }

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <Button variant="ghost" className="h-auto p-2 font-semibold justify-start" onClick={() => handleSort(field)}>
      {children}
      {sortField === field &&
        (sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />)}
    </Button>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          <p className="text-gray-600">Comprehensive view of company workforce data</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalEmployees}</div>
              <p className="text-xs text-muted-foreground">Active employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Salary</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.avgSalary.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all positions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgPerformance}</div>
              <p className="text-xs text-muted-foreground">Out of 5.0</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.departments}</div>
              <p className="text-xs text-muted-foreground">Active departments</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Data</CardTitle>
            <CardDescription>Filter and search through employee information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees..."
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="pl-10"
                />
              </div>
              <Select
                value={departmentFilter}
                onValueChange={(value) => {
                  setDepartmentFilter(value)
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Custom Data Table */}
            <div className="border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-2 border-b">
                        <SortButton field="id">ID</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="firstName">Name</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="email">Email</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="department">Department</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="position">Position</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="salary">Salary</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="performanceRating">Performance</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="location">Location</SortButton>
                      </th>
                      <th className="text-left p-2 border-b">
                        <SortButton field="isActive">Status</SortButton>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((employee) => (
                      <tr key={employee.id} className="hover:bg-gray-50">
                        <td className="p-3 border-b">{employee.id}</td>
                        <td className="p-3 border-b font-medium">
                          {employee.firstName} {employee.lastName}
                        </td>
                        <td className="p-3 border-b text-sm text-gray-600">{employee.email}</td>
                        <td className="p-3 border-b">
                          <Badge variant="outline">{employee.department}</Badge>
                        </td>
                        <td className="p-3 border-b text-sm">{employee.position}</td>
                        <td className="p-3 border-b font-medium">${employee.salary.toLocaleString()}</td>
                        <td className="p-3 border-b">
                          {getPerformanceBadge(employee.performanceRating)}
                          <div className="text-xs text-gray-500 mt-1">{employee.performanceRating}/5.0</div>
                        </td>
                        <td className="p-3 border-b">{employee.location}</td>
                        <td className="p-3 border-b">
                          <Badge variant={employee.isActive ? "default" : "destructive"}>
                            {employee.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length}{" "}
                results
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  })}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
