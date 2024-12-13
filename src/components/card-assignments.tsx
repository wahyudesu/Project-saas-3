"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getfolders } from "@/lib/getassignments"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Clock2, CircleCheckBig } from 'lucide-react'
import Link from "next/link"

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {assignments.map((assignment) => (
        <Card key={assignment.id} className="hover:shadow-lg transition-shadow w-full">
          <CardHeader >
            <div className="flex justify-between items-center">
              <CardDescription>{assignment.class_type || 'No Class'}</CardDescription>
              <Badge className={`gap-1 ${assignment.due_date && new Date() > assignment.due_date ? 'bg-violet-900' : 'bg-primary'}`}>
                {(() => {
                  if (assignment.due_date) {
                    const dueDate = new Date(assignment.due_date);
                    const now = new Date();
                    const diffInMs = dueDate.getTime() - now.getTime();
                    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
                    const diffInDays = Math.floor(diffInHours / 24);

                    if (diffInMs < 0) {
                      return (
                        <>
                          <CircleCheckBig size={12} />
                          done
                        </>
                      ); // Terlambat
                    } else if (diffInDays > 0) {
                      return (
                        <>
                          <Clock2 size={12} />
                          {`${diffInDays} hari lagi`}
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Clock2 size={12} />
                          {`${diffInHours} jam lagi`}
                        </>
                      );
                    }
                  }
                  return (
                    <>
                      <Clock2 size={12} />
                      tenggat waktu
                    </>
                  );
                })()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            <Image className="mb-4" src="/open-folder.png" alt="Assignment" width={60} height={60} />
            <CardTitle className="text-xl hover:underline">
            <Link href={`/assignment/${assignment.name_assignment}?name=${assignment.name_assignment}`}>{assignment.name_assignment}</Link>
            </CardTitle>
            <div className="flex gap-2 items-center text-sm space-y-1">
              <p className="text-base">{assignment.due_date ? new Date(assignment.due_date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }) : 'N/A'}</p>
              {/* <Badge variant="default" children={assignment.assignment_type || "Bebas"}>
              </Badge> */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default AssignmentFolders

