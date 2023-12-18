import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio | wip",
  description: "wip",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full `}>
        <nav className="absolute w-full z-10 flex justify-between p-5">
          <div className="">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className="ml-5 mt-5">
            <Button variant="outline" size="icon">
              <HamburgerMenuIcon />
            </Button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
