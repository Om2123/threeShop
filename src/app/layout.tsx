import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./comp/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3Shop",
  keywords: `3Shop, 3shop, 3shop.com, 3shop.com.au, 3shop.com.au, 3shop.com.au, 3shop.com.au,
   3shop.com.au, 3shop.com.au, 3shop.com.au,
   anime, collectibles, manga, anime figures,
  anime clothing,
  anime accessories,
  anime plushies,
  anime store,
anime online store,
anime pop culture store,
anime toy store,
anime manga store,
anime collectibles store,
cartoon toy,
anime toy,
anime figure,
anime plush,
anime statue,
anime model kit,
anime action figure,
anime collectible,
anime doll,
anime keychain,
anime sticker,
anime cosplay store,
  anime home decor,
  anime stationery,
  anime video games,
  anime manga,
  anime DVDs and Blu-rays`,
  category: "anime",
  description: "Have a look at awesome Pop! Vinyls, Anime collectibles, Poster and heaps more! Awesome stuff from Japan.",
};

export default function RootLayout(props:{
  children:React.ReactNode,
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" />

      <body className={inter.className}>
        <Navbar />
        {props.children}
      </body>
    </html>
  );
}
