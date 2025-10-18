import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from "next/image";
   
  export function AppSidebar() {
    
    const items = [
        {
            title: "Artwork",
            url: "/artwork",
        },
        {
            title: "Photography",
            url: "/photography",
        },
        {
            title: "About",
            url: "/about",
        },
        {
            title: "Shop",
            url: "/shop",
        },
        {
            title: "Contact",
            url: "/contact",
        }
    ];
    
    return (
      <Sidebar>
        <SidebarHeader>
            <div className="flex items-center justify-center">
                <Image 
                    src="/sams-logo.webp"
                    alt="Sam L-T Illustration Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                    loading="eager"
                />
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup >
          <SidebarGroupContent >
            <div className="flex justify-center">
                <SidebarMenu className="w-auto">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                            <a href={item.url}>
                                {item.title.toUpperCase()}
                            </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }