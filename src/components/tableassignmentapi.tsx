"use client"

import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Folder {
    id: number;
    name_assignment: string;
    created_at: Date | null;
    due_date: Date | null;
    class_type: string | null;
    description: string | null;
    assignment_type: string | null;
}

const TableAssignmentApi = () => {
    const [folders, setFolders] = useState<Folder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFolders = async () => {
            try {
                const response = await fetch("/api/folders"); // Adjust the API path as necessary
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setFolders(data.folders);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFolders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Table>
            <TableCaption>A list of your recent folders.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">File name</TableHead>
                    <TableHead>Folder</TableHead>
                    <TableHead>Uploaded At</TableHead>
                    <TableHead>Due date</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {folders.map((folder) => (
                    <TableRow key={folder.id}>
                        <TableCell className="font-medium">{folder.name_assignment}</TableCell>
                        <TableCell>{folder.class_type || 'N/A'}</TableCell>
                        <TableCell>{folder.assignment_type || 'N/A'}</TableCell>
                        <TableCell>{folder.due_date ? new Date(folder.due_date).toLocaleDateString() : 'N/A'}</TableCell>
                        <TableCell>{folder.description || 'N/A'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableAssignmentApi;