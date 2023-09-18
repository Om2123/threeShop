import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./comp/Navbar";
import Head from "next/head";
import { MyProvider } from "@/redux/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3Shop",
  description: "Anime merchandise store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" />

      <body className={inter.className}>
        <Navbar />
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
