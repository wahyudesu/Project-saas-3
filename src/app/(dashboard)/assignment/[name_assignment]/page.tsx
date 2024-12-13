"use client";

import { useSearchParams } from "next/navigation";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import { getdocument } from "@/lib/getdocument";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Trash, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AssignmentDetail = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name")?.split("/").pop();  const [documents, setDocuments] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("nameStudent");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchDocuments = async () => {
      if (name) {
        try {
          const fetchedDocuments = await getdocument(name);
          setDocuments(fetchedDocuments);
        } catch (error) {
          console.error("Error fetching documents:", error);
        }
      }
    };

    fetchDocuments();
  }, [name]);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      doc.nameStudent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.documentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.folder.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [documents, searchTerm]);

  const sortedDocuments = useMemo(() => {
    return filteredDocuments.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredDocuments, sortColumn, sortDirection]);

  const handleSort = (column: SetStateAction<string>) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleDelete = (id: any) => {
    setDocuments((prevDocuments) => prevDocuments.filter((doc) => doc.id !== id));
  };

  return (
    <div className='mx-auto my-6 w-full max-w-6xl rounded border'>
      <div className='p-4 border-b'>
        <h1 className='text-xl font-bold'>Nama Tugas: {name}</h1>
        <Link href={`/assignment/${name}/uploadassignment`}>
          <Button className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
            Pergi ke URL Tertentu
          </Button>
        </Link>
        <Input
          placeholder='Cari dokumen...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='mt-4 w-full'
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead className='cursor-pointer' onClick={() => handleSort("nameStudent")}>
              Nama Siswa {sortColumn === "nameStudent" && (sortDirection === "asc" ? "\u2191" : "\u2193")}
            </TableHead>
            <TableHead className='cursor-pointer' onClick={() => handleSort("documentName")}>
              Nama Dokumen {sortColumn === "documentName" && (sortDirection === "asc" ? "\u2191" : "\u2193")}
            </TableHead>
            {/* <TableHead className='cursor-pointer' onClick={() => handleSort("folder")}>
              Folder {sortColumn === "folder" && (sortDirection === "asc" ? "\u2191" : "\u2193")}
            </TableHead> */}
            <TableHead className='cursor-pointer' onClick={() => handleSort("uploadedDate")}>
              Tanggal Upload {sortColumn === "uploadedDate" && (sortDirection === "asc" ? "\u2191" : "\u2193")}
            </TableHead>
            <TableHead>URL Dokumen</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedDocuments.length > 0 ? (
            sortedDocuments.map((doc, index) => (
              <TableRow key={doc.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{doc.nameStudent}</TableCell>
                <TableCell>{doc.documentName}</TableCell>
                {/* <TableCell>{doc.folder}</TableCell> */}
                <TableCell>{new Date(doc.uploadedDate).toLocaleString()}</TableCell>
                <TableCell>
                  <a
                    href={doc.documentUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline flex items-center gap-1'
                  >
                    <ExternalLink size={16} /> Buka
                  </a>
                </TableCell>
                <TableCell className='flex gap-2'>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className='text-red-500 hover:underline flex items-center gap-1'
                  >
                    <Trash size={16} /> Hapus
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className='text-center'>
                Tidak ada dokumen ditemukan untuk tugas ini.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignmentDetail;
