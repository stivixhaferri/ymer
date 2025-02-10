"use client"

import * as React from "react"
import {
  MessagesSquare ,
  ShoppingCart ,
  Plus 
} from "lucide-react"
import { NavProjects } from "@/components/nav-projects"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Ymer",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ymer's Grill",
      plan: "Fast Food",
    },
   
  ],

  projects: [
    {
      name: "Shto Produkt",
      url: "/dashboard/add",
      icon: Plus ,
    },
    {
      name: "Te gjitha",
      url: "/dashboard/products",
      icon: ShoppingCart ,
    },
    {
      name: "Mesazhet",
      url: "/dashboard/messages",
      icon: MessagesSquare ,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
