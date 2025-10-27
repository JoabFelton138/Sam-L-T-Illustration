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
                src="/sams-logo.webp"
                alt="Sam L-T Illustration Logo"
                width={120}
                height={60}
                loading="eager"
                className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16"
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
            <Link href="">
            <InstagramIcon className={socialIconClasses} />
            </Link>
            <Link href="">
            <TwitterIcon className={socialIconClasses} />
            </Link>
        </SidebarFooter>
      </Sidebar>
    )
  }