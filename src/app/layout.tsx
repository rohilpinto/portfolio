import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const preahvihear = Poppins({ weight: ["100", "200", "400", "500", "800"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={preahvihear.className}>{children}</body>
    </html>
  );
}
