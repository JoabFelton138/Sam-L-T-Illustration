import Image from "next/image";
import { menuItems } from "@/lib/constants";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export function MobileNav() {
    return (
        <div className="flex flex-row justify-between items-center p-4">
            <Image src="/sams-logo-temp.webp" alt="Sam L-T Illustration Logo" width={80} height={50} />
            <MenuIcon className="size-6 text-brand cursor-pointer"/>
        </div>
    )
}