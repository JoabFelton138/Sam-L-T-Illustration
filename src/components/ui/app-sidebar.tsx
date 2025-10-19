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
import { InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
   
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

    const textHover = "hover:text-brand-hover hover:bg-transparent";
    const socialIconClasses = `${textHover} size-5 text-brand`;
    
    return (
      <Sidebar 
        className="w-[17rem] sm:w-[15rem] p-12 flex flex-col items-center gap-2"
        >
        <SidebarHeader>
            <Image 
                src="/sams-logo.webp"
                alt="Sam L-T Illustration Logo"
                width={150}
                height={90}
                loading="eager"
            />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
          <SidebarGroupContent >
                <SidebarMenu className="w-auto">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild className={`${textHover}`}>
                                <a href={item.url} className="tracking-widest font-medium text-[13px] text-brand">
                                    {item.title.toUpperCase()}
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <div className="flex flex-row gap-3">
                <Link href="">
                    <InstagramIcon className={socialIconClasses}/>
                </Link>
                <Link href="">
                    <TwitterIcon className={socialIconClasses}/>
                </Link>
            </div>
        </SidebarFooter>
      </Sidebar>
    )
  }