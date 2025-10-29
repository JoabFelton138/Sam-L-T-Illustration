import type { Metadata } from "next";
import { Nunito, Nunito_Sans, Quicksand, Rock_Salt } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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

const rockSalt = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: "400",
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
        className={`${quicksand.variable} ${nunito.variable} ${nunitoSans.variable} ${rockSalt.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
