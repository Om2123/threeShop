 import Banner from "./comp/Banner";
import ShopByAnime from "./comp/Collections/ShopByAnime";
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";
 
export default function Home() {
  return (
   <div>
       <link rel="icon" href="/logo.jpg" />

    <Navbar/>
    <div className="pt-10 mt-10">
      <Banner/>
    </div>
      <ShopByAnime/>
    <Footer/>
   </div>
  )
}
