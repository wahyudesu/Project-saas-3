// "use client";

// import { memo } from "react";

// import { Button } from "./ui/button";
// import { EllipsisVertical } from "lucide-react";
// import Link from "next/link";
// import { format } from "date-fns";
// import Image from "next/image";

// const formatDueDate = (isoDate: string | null) => {
//   if (!isoDate) return null;
//   const date = new Date(isoDate);
//   return format(date, "d MMMM HH:mm");
// };

// const FolderCard = memo(({ folder }: { folder: any }) => {
//   const { id, name_assignment, slug, due_date, class_type } = folder;
//   const formattedDueDate = formatDueDate(due_date);

//   return (
//     <div className="relative p-4 border rounded-lg hover:shadow-md transition">
//       {/* Bagian Gambar Folder */}
//       <div className="flex justify-start mb-2">
//         <Image
//           src="/open-folder.png"
//           alt="Folder"
//           width={256}
//           height={256}
//           className="w-16 h-16"
//         />
//       </div>

//       {/* Nama Folder */}
//       <div className="text-left mb-2">
//         <Link href={`/folder/${slug}`}>
//           <h3 className="text-lg font-semibold hover:underline">{name_assignment}</h3>
//         </Link>
//       </div>

//       {/* Tanggal Due Date */}
//       <div className="text-left text-sm text-gray-600 mb-4">
//         {formattedDueDate ? `Due: ${formattedDueDate}` : "No due date"}
//       </div>

//       {/* Badge untuk Class Type dan Late Status */}
//       <div className="flex justify-start flex-wrap gap-2">
//         {class_type && (
//           <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
//             {class_type}
//           </span>
//         )}
//       </div>
//       </div>
//     </div>
//   );
// });

// FolderCard.displayName = "FolderCard";
// export default FolderCard;
