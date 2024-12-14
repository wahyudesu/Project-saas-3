"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Avatar, Divider, Link } from "@nextui-org/react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clipboard, Paperclip, Pencil, User, User2 } from "lucide-react"


export default function TugasPage() {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-16 mx-16">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-8">
            <div>
            <Card className="border rounded-lg p-4 gap-2">
              <CardHeader className="font-medium">
                Total tugas
              </CardHeader>
              <CardBody className="text-2xl">
                5
              </CardBody>
            </Card>
            </div>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <Card className="border rounded-2xl p-4 gap-2">
            <CardHeader className="justify-between ">
              <div className="font-medium gap-2 flex">
                <Badge className="rounded-lg py-1 bg-violet-700/30">2 SDT B</Badge>
                <Badge className="rounded-lg py-1">2 IT B</Badge>
              </div>
              <Pencil className="border rounded-lg p-1"></Pencil>
            </CardHeader>
            <CardBody className="mb-2">
              <div className="text-xl mb-2">
                Tugas akhir pemrograman
              </div>
              <div className="text-black/70 text-sm tracking-tight">
                Buatlah kode tentang pemrogaman yang bertahap serta dapat dimanipulasi...
              </div>
            </CardBody>
            <CardFooter>
            </CardFooter>
            <CardFooter className="justify-between gap-2">
              <Badge className="text-xs rounded-md bg-white border-black/40 text-black tracking-tight font-light hover:text-white shadow-sm">
                Deadline: Kamis, 21 Des
              </Badge>
              <div>
                <Badge className="gap-1 rounded-lg bg-white border-gray-200 text-black/80 border px-1">
                  <Paperclip size={12} />
                  2
                </Badge>
                <Badge className="gap-1 rounded-lg bg-white border-gray-200 text-black/80 border px-1">
                  <User2 size={12} />
                  2
                </Badge>
              </div>
            </CardFooter>
          </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
