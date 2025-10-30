import Image from "next/image";
import { menuItems } from "@/lib/constants";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { SocialIcons } from "./social-icons";

export function MobileNav() {
    return (
        <div className="flex flex-row justify-between items-center p-4">
            <Image src="/sams-logo-temp.webp" alt="Sam L-T Illustration Logo" width={70} height={40} />
            <Sheet>
                <SheetTrigger asChild>
                    <button className="p-2 cursor-pointer">
                        <MenuIcon className="size-6 text-brand"/>
                    </button>
                </SheetTrigger>
                <SheetContent side="left" hideClose className="w-60 sm:w-70 md:w-80">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="flex h-full flex-col gap-6 py-16 px-6">

                        <nav className="flex flex-col space-y-6">
                            {menuItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                className="tracking-widest font-medium text-[11px] sm:text-xs md:text-[13px] text-brand hover:text-brand-hover hover:bg-transparent"
                            >
                                {item.title.toUpperCase()}
                            </Link>
                            ))}
                        </nav>
                        <div className="mt-auto pt-6">
                            <SocialIcons gap="gap-2" />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>  
    )
}