import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import {navbar} from "@/app/component/navbar";
// import { footer } from "@/app/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Labi's Portfolio",
  description: "Eden Joy's Front-end dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
