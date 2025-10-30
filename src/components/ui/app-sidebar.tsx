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
    const socialIconClasses = `${textHover} size-[14px] h-[14px] sm:size-4 text-brand`;
    
    return (
      <Sidebar className="sm:w-[15rem] py-14 px-8">
        <SidebarHeader>
            <Image 
                src="/logos/sams-logo-temp.webp"
                alt="Sam L-T Illustration Logo"
                width={120}
                height={60}
                loading="eager"
            />
        </SidebarHeader>
        <SidebarContent className="pt-4">
          <SidebarGroup>
            <SidebarGroupContent >
                <SidebarMenu className="w-auto">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild className={textHover}>
                                    <a
                                    href={item.url}
                                    className="tracking-widest font-medium text-[11px] sm:text-xs md:text-[13px] text-brand"
                                    >
                                    {item.title.toUpperCase()}
                                    </a>
                                </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="flex flex-row gap-2">
            <Link href="https://www.instagram.com/samlt_illustration/">
            <InstagramIcon className={socialIconClasses} />
            </Link>
            <Link href="https://www.tiktok.com/@samlt_illustration">
              <svg 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className={socialIconClasses}
              >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </Link>
        </SidebarFooter>
      </Sidebar>
    )
  }