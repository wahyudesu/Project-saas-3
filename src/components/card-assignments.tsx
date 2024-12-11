"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getfolders } from "@/lib/getassignments"
import { Folder } from 'lucide-react'
import Image from "next/image"

interface Assignment {
  id: number
  name_assignment: string
  created_at: Date | null
  due_date: Date | null
  class_type: string | null
  description: string | null
  assignment_type: string | null
}

const AssignmentFolders = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([])

  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await getfolders()
      setAssignments(data)
    }
    fetchAssignments()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assignments.map((assignment) => (
        <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center space-x-4">
            <Image src="/open-folder.png" alt="Assignment" width={50} height={50} />
            <div>
              <CardTitle className="text-lg">
                <a href={`/assignment/${assignment.name_assignment}`}>{assignment.name_assignment}</a>
              </CardTitle>
              <CardDescription>{assignment.class_type || 'No Class'}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-2">
              <p><strong>Type:</strong> {assignment.assignment_type || 'N/A'}</p>
              <p><strong>Due Date:</strong> {assignment.due_date ? new Date(assignment.due_date).toLocaleDateString() : 'N/A'}</p>
              <p><strong>Description:</strong> {assignment.description || 'No description'}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default AssignmentFolders

