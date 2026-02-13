import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/lib/links";
import { SocialIcons } from "./social-icons";
import { BasketCount } from "./basket-count";

export function Navbar() {

    const leftNavItems = menuItems.slice(0, 3);
    const rightNavItems = menuItems.slice(3);

    return (
            <div className="flex flex-col justify-center items-center space-y-8 py-6 max-w-7xl mx-auto">    
                <Link href="/">
                    {/* <Image 
                        src="/logos/sams-logo-temp.webp"
                        alt="Sam L-T Illustration Logo"
                        width={100}
                        height={50}
                        loading="eager"
                    />  */}
                    <Image 
                        src="/logos/new-logo.webp"
                        alt="Sam L-T Illustration Logo"
                        width={115}
                        height={165}
                        loading="eager"
                    />
                </Link>
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex flex-row justify-end gap-6 md:gap-10 lg:gap-14 flex-1">
                        {leftNavItems.map((navLink) => (
                            <Link key={navLink.title} href={navLink.url} 
                                className="tracking-widest font-medium text-[11px] sm:text-xs md:text-[13px] text-brand hover:text-brand-hover hover:bg-transparent">
                                {navLink.title.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                    <div className="w-24 md:w-16 xl:w-32 shrink-0"/>
                    <div className="flex flex-row justify-start gap-6 md:gap-10 lg:gap-14 flex-1">
                        {rightNavItems.map((navLink) => (
                            <div key={navLink.title} className="relative flex items-center">
                                <Link href={navLink.url}    
                                    className="tracking-widest font-medium text-[11px] sm:text-xs md:text-[13px] text-brand hover:text-brand-hover hover:bg-transparent">
                                    {navLink.title.toUpperCase()}
                                </Link>
                                {navLink.title === "Basket" && (
                                    <span className="absolute -top-2 -right-6">
                                        <BasketCount/>
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <SocialIcons gap="gap-5" />
            </div>
    )
}