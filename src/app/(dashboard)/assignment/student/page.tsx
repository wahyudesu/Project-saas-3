"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import { Pencil, Trash } from 'lucide-react';

type Bookmark = {
  id: number;
  title: string;
  url: string;
  tags: string[];
  description: string;
  createdAt: string;
};

type SortColumn = keyof Bookmark;

export default function Component() {
  const [bookmarks] = useState<Bookmark[]>([
    {
      id: 1,
      title: "Vercel",
      url: "https://vercel.com",
      tags: ["web", "deployment"],
      description:
        "Vercel is a cloud platform for static sites and serverless functions.",
      createdAt: "2023-05-01",
    },
    {
      id: 2,
      title: "Tailwind CSS",
      url: "https://tailwindcss.com",
      tags: ["css", "framework"],
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
      createdAt: "2023-04-15",
    },
    {
      id: 3,
      title: "React",
      url: "https://reactjs.org",
      tags: ["javascript", "library"],
      description:
        "React is a JavaScript library for building user interfaces.",
      createdAt: "2023-03-20",
    },
    {
      id: 4,
      title: "Next.js",
      url: "https://nextjs.org",
      tags: ["react", "framework"],
      description:
        "Next.js is a React framework that enables server-side rendering and more.",
      createdAt: "2023-02-10",
    },
    {
      id: 5,
      title: "Prisma",
      url: "https://www.prisma.io",
      tags: ["database", "orm"],
      description:
        "Prisma is an open-source database toolkit that includes an ORM.",
      createdAt: "2023-01-01",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<SortColumn>("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter((bookmark) =>
      bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [bookmarks, searchTerm]);

  const sortedBookmarks = useMemo(() => {
    return filteredBookmarks.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredBookmarks, sortColumn, sortDirection]);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  return (
    <div className="mx-auto my-6 w-full max-w-6xl rounded border">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b p-4 md:py-2">
        <h1 className="text-xl font-bold">Daftar Mahasiswa</h1>
        <Input
          placeholder="Search bookmarks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-96"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("title")}
            >
              Title
              {sortColumn === "title" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("url")}
            >
              URL
              {sortColumn === "url" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("tags")}
            >
              Tags
              {sortColumn === "tags" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("description")}
            >
              Description
              {sortColumn === "description" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("createdAt")}
            >
              Created
              {sortColumn === "createdAt" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedBookmarks.map((bookmark) => (
            <TableRow key={bookmark.id}>
              <TableCell className="font-medium">{bookmark.title}</TableCell>
              <TableCell>
                <a
                  href="#"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {bookmark.url}
                </a>
              </TableCell>
              <TableCell className="flex flex-wrap gap-1">
                {bookmark.tags.map((tag, index) => (
                  <Badge variant="outline" key={index}>
                    {tag}
                  </Badge>
                ))}
              </TableCell>
              <TableCell>{bookmark.description}</TableCell>
              <TableCell>{bookmark.createdAt}</TableCell>
              <TableCell className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Pencil className="size-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}