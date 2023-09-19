"use client";
import Banner from "./comp/Collections/Banner";
import Categories from "./comp/Collections/Categories";
import ShopByAnime from "./comp/Collections/ShopByAnime";
import Footer from "./comp/Footer";
import Testimonals from "./comp/Collections/Testimonals";

export default function Home() {
  return (
    <div>

      <div className="pt-10 mt-10">
        <Banner />
      </div>
      {/* <Categories /> */}
      <ShopByAnime />
      <Testimonals/>
      <Footer />
    </div>
  );
}
