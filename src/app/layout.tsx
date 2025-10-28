import type { Metadata } from "next";
import { Nunito, Nunito_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Image from "next/image";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam L-T Illustration",
  description: "Showcasing artwork and providing contact information.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${nunito.variable} ${nunitoSans.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
            <main className="w-full">
              <div className="md:hidden p-4 flex flex-row justify-between w-full">                <Image 
                  src="/sams-logo.webp" 
                  alt="Sam Latham-Talbot" 
                  width={80} 
                  height={80} 
                />
                <SidebarTrigger 
                  className="text-brand hover:text-brand-hover hover:bg-transparent cursor-pointer size-7"
                />
              </div>

              {children}
            </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
