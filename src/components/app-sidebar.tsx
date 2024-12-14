"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react"
import { SearchForm } from "@/components/search-form"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "./Logo"
import { SidebarOptInForm } from "./sidebar-opt-in-form"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "document-ai",
      url: "/document-ai",
      icon: SquareTerminal,
    },
    {
      title: "Models",
      url: "/models",
      icon: Bot,
    },
    {
      title: "Documentation",
      url: "/documentation",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu className="py-2 ml-2">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Logo/>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SearchForm className="py-2"/>
        <NavMain
          items={data.navMain.map((item) => ({
            ...item,
          }))}
        />
      </SidebarContent>
      <SidebarFooter>
        <SidebarOptInForm />
      </SidebarFooter>
    </Sidebar>
  )
}