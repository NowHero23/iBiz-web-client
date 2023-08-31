import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import MyHeader from "../components/layout/myHeader";
import { cn } from "@/lib/utils";
import MyFooter from "@/components/layout/myFooter";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col items-center justify-stretch h-full"
        )}
      >
        <MyHeader />

        <main className="h-full flex flex-col w-full items-center">
          {children}
        </main>

        <MyFooter />
      </body>
    </html>
  );
}
