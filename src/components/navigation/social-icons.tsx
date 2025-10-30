import { InstagramIcon } from "lucide-react";
import Link from "next/link";

interface SocialIconsProps {
    gap?: string;
}

export function SocialIcons({ gap = "gap-2" }: SocialIconsProps) {
    
    const textHover = "hover:text-brand-hover hover:bg-transparent";
    const socialIconClasses = `${textHover} size-[14px] h-[14px] sm:size-4 text-brand`;
    
    return (
        <div className={`flex flex-row ${gap}`}>
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
        </div>
    );
}