"use client"
import {useState, useEffect} from "react";
import { Navbar } from "./navbar";
import { MobileNav } from "./mobile-nav";

export function ResponsiveNav() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [])
    return isMobile ? <MobileNav /> : <Navbar />;
}