import SimpleForm from "@/components/form-upload"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4">
        {/* <h1 className="text-2xl font-bold mb-4 text-center">Upload tugas</h1> */}
        <SimpleForm />
      </div>
    </main>
  )
}

