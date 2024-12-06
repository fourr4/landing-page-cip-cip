import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav/nav-menu";
import { MobileNav } from "@/components/nav/mobile-nav";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cip-Cip",
  description: "Cip-Cip is a platform for students to learn and develop their skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <link rel="icon" href="/logo" />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Set default theme to dark
          enableSystem={false} // Disable system theme detection
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">Craft UI</h2>
          <Image
            src="/logo.png" // Path ke file logo Anda
            alt="Logo"
            width={60} // Lebar logo diperbesar
            height={60} // Tinggi logo diperbesar
          />
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />
          {/* Removed ThemeToggle */}
          <Button asChild className="hidden sm:flex">
            <Link href="http://10.15.42.102:3442/">Login</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};