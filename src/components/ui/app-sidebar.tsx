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
      <Sidebar className="w-[17rem] sm:w-[15rem] pt-12">
        <SidebarHeader>
            <div className="flex items-center justify-center">
                <Image 
                    src="/sams-logo.webp"
                    alt="Sam L-T Illustration Logo"
                    width={150}
                    height={90}
                    className="object-contain"
                    loading="eager"
                />
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
          <SidebarGroupContent >
            <div className="flex justify-center">
                <SidebarMenu className="w-auto">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                            <a href={item.url} className="tracking-widest font-medium text-[13px] text-[#3AB7B0]">
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