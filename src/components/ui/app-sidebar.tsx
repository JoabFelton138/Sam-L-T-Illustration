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

    const CenteredWrapper = ({children, className = ""}: {children:React.ReactNode, className?: string}) => (
        <div className={`flex items-center justify-center ${className}`}>
            {children}
        </div>
    );

    const textHover = "hover:text-brand-hover hover:bg-transparent";
    const socialIconClasses = `${textHover} size-5 text-brand`;
    
    return (
      <Sidebar className="w-[17rem] sm:w-[15rem] !py-12">
        <SidebarHeader>
            <CenteredWrapper>
                <Image 
                    src="/sams-logo.webp"
                    alt="Sam L-T Illustration Logo"
                    width={140}
                    height={80}
                    loading="eager"
                />
            </CenteredWrapper>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
          <SidebarGroupContent >
                <SidebarMenu className="w-auto">
                    <CenteredWrapper className="flex-col">
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild className={`${textHover}`}>
                                    <a href={item.url} className="tracking-widest font-medium text-[13px] text-brand">
                                        {item.title.toUpperCase()}
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </CenteredWrapper>
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <CenteredWrapper className="flex-row gap-3">
                    <Link href="">
                        <InstagramIcon className={socialIconClasses}/>
                    </Link>
                    <Link href="">
                        <TwitterIcon className={socialIconClasses}/>
                    </Link>
            </CenteredWrapper>
        </SidebarFooter>
      </Sidebar>
    )
  }