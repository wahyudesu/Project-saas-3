'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { uploadassignment } from "@/lib/action";

export default function SimpleForm() {
  const [file, setFile] = useState<File | null>(null);
  const [nameStudent, setNameStudent] = useState<string>('');
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      setError("Please select a file");
      return;
    }
    if (!selectedFile.name.endsWith(".pdf")) {
      setError("Only PDF files are allowed");
      return;
    }
    if (selectedFile.size > 10 * 1024 * 1024) { // 10 MB
      setError("File size exceeds 10 MB");
      return;
    }

    setFile(selectedFile);
    setError(null); // Reset error
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setError(null);

    if (!nameStudent.trim()) {
      setError("Name is required");
      return;
    }

    if (!file) {
      setError("File is required");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("nameStudent", nameStudent);

    try {
      setIsSubmitting(true);
      setStatus("Uploading...");
      const response = await uploadassignment(formData);

      console.log("File Metadata:", response.document);
      console.log("File URL:", response.fileUrl);

      setStatus("File uploaded successfully");
      setNameStudent("");
      setFile(null); // Reset form
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload file or save metadata");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Form Upload File</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              name="name"
              placeholder="Masukkan nama Anda"
              value={nameStudent}
              onChange={(e) => setNameStudent(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">Upload File (PDF)</Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {status && <p className="text-green-500 text-sm">{status}</p>}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Uploading..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
