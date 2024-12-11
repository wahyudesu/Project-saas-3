import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const rows = [
  {
    id: 1,
    name_assignment: "Assignment 1",
    created_at: "2023-01-01T00:00:00.000Z",
    due_date: "2023-01-10T00:00:00.000Z",
    class_type: "Math",
    description: "This is a math assignment.",
    assignment_type: "Homework",
  },
  {
    id: 2,
    name_assignment: "Assignment 2",
    created_at: "2023-01-05T00:00:00.000Z",
    due_date: "2023-01-15T00:00:00.000Z",
    class_type: "Science",
    description: "This is a science assignment.",
    assignment_type: "Project",
  },
];

const columns = [
  { id: "name_assignment", label: "Assignment Name" },
  { id: "created_at", label: "Created At" },
  { id: "due_date", label: "Due Date" },
  { id: "class_type", label: "Class Type" },
  { id: "description", label: "Description" },
  { id: "assignment_type", label: "Assignment Type" },
];

export default function FolderTable() {
  return (
    <>
      <Table aria-label="Example static collection table"
        defaultSelectedKeys={["2"]}
        selectionMode="single">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.id}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.id === "created_at" || column.id === "due_date"
                    ? new Date(item[column.id as keyof typeof item]).toLocaleDateString()
                    : item[column.id as keyof typeof item]}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}