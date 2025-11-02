import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/lib/links";
import { SocialIcons } from "./social-icons";

export function Navbar() {
    return (
            <div className="flex flex-col justify-center items-center space-y-8 py-6">    
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
                        width={120}
                        height={170}
                        loading="eager"
                    />
                </Link>
                <div className="flex flex-row gap-15">
                    {menuItems.map((item) => 
                        <Link 
                            key={item.title} 
                            href={item.url} 
                            className="tracking-widest font-medium text-[11px] sm:text-xs md:text-[13px] text-brand hover:text-brand-hover hover:bg-transparent">
                                {item.title.toUpperCase()}
                        </Link>
                    )}
                </div>
                <SocialIcons gap="gap-5" />
            </div>
    )
}