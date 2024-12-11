import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getfolders } from "@/lib/getassignments"; // Import the new function

interface Folder {
    id: number;
    name_assignment: string;
    created_at: Date | null;
    due_date: Date | null;
    class_type: string | null;
    description: string | null;
    assignment_type: string | null;
}

const TableAssignment = () => {
    const [files, setFiles] = useState<Folder[]>([]);
    useEffect(() => {
        const fetchFiles = async () => {
            const data = await getfolders();
            setFiles(data);
        };
        fetchFiles();
    }, []);

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">File name</TableHead>
                    <TableHead>Folder</TableHead>
                    <TableHead>Uploaded At</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {files.map((file) => (
                    <TableRow key={file.id}>
                        <TableCell className="font-medium">{file.name_assignment}</TableCell>
                        <TableCell>{file.class_type}</TableCell>
                        <TableCell>{file.assignment_type}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
export default TableAssignment;
