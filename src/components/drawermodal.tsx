'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Textarea } from "./ui/textarea"
import { savefolders } from "@/lib/action"

export function CreateAssignment() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Assignment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Assignment</DialogTitle>
          <DialogDescription>
            Create a new assignment here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AssignmentForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

function AssignmentForm({ className, onSuccess }: React.ComponentProps<"form"> & { onSuccess: () => void }) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      await savefolders(formData)
      onSuccess()
    } catch (error) {
      console.error('Error saving assignment:', error)
    }
  }

  return (
    <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name_assignment">Nama tugas</Label>
        <Input name="name_assignment"
        type="text" placeholder="Contoh Tugas akhir pemrograman" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="class">Kelas</Label>
        <Input name="class_type"
        placeholder="Contoh: 2 IT B" required/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="assignment">Jenis dokumen</Label>
        <Input name="assignment_type"
        placeholder="Contoh: 2 IT B" required/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea name="description"
        className="resize-none" rows={6} placeholder="Berikan deskripsi yang singkat mudah dan sederhana" required/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Tenggat waktu</Label>
        <Input name="due_date" type="datetime-local"/>
        <input
        type="hidden"
        name="created_at"
        value={new Date().toISOString()}
        />
      </div>
      <Button type="submit">Save Assignment</Button>
    </form>
  )
}

