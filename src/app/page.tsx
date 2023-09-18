"use client";
import Banner from "./comp/Banner";
import ShopByAnime from "./comp/Collections/ShopByAnime";
import Footer from "./comp/Footer";

export default function Home() {
  return (
    <div>

      <div className="pt-10 mt-10">
        <Banner />
      </div>
      <ShopByAnime />
      <Footer />
    </div>
  );
}
