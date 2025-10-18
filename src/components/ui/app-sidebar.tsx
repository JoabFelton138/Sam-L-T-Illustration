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
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
          <SidebarGroupContent>
                <SidebarMenu>
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
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }