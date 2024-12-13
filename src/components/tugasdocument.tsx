"use client";

import { useSearchParams } from "next/navigation";

const AssignmentDetail = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div>
      <h1>Detail Tugas</h1>
      <p>Nama Tugas: {name}</p>
    </div>
  );
};

export default AssignmentDetail;