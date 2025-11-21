"use client"

import { Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { useUserProfile } from "@/hooks/use-user-profile";
import { Skeleton } from "../ui/skeleton";

const items = [
  {
    title: "Home",
    url: "/me",
    icon: Home,
  },
]


export function AppSidebar() {
  
  const { data, error, status } = useUserProfile();

  if (status === "pending") {
    return (
      <Skeleton className="flex h-full w-[18rem] bg-red-500"/>
    )
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-32">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="mt-auto">
          <NavUser user={data!.user} />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}