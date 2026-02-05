import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/lib/links";
import { SocialIcons } from "./social-icons";
import { BasketCount } from "./basket-count";

export function Navbar() {
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
                <div className="flex flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-26">
                    {menuItems.map((item) => 
                        <div key={item.title} 
                             className={item.title === "Basket" ? "flex items-center relative gap-1" : ""}>
                            <Link 
                                key={item.title} 
                                href={item.url} 
                                className="tracking-widest font-medium text-[11px] sm:text-xs md:text-[13px] text-brand hover:text-brand-hover hover:bg-transparent">
                                    {item.title.toUpperCase()}
                            </Link>
                            {item.title === "Basket" && (
                                <span className="absolute -top-4 -right-4">
                                    <BasketCount/>
                                </span>
                            )}
                        </div>
                    )}
                </div>
                <SocialIcons gap="gap-5" />
            </div>
    )
}