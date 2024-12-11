"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Textarea } from "./ui/textarea"

export function CreateAssignment() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Create Assignment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Assignment</DialogTitle>
          <DialogDescription>
            Create a new assignment here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AssignmentForm />
      </DialogContent>
    </Dialog>
  )
}

function AssignmentForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name_assignment">Nama tugas</Label>
        <Input type="text" placeholder="Contoh Tugas akhir pemrograman" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Kelas</Label>
        <Input placeholder="Contoh: 2 IT B" required/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea className="resize-none" rows={6} placeholder="Berikan deskripsi yang singkat mudah dan sederhana" required/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Tenggat waktu</Label>
        <Input name="due_date" type="datetime-local"/>
      </div>
      <Button type="submit">Save Assignment</Button>
    </form>
  )
}

