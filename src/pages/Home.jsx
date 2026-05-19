import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import TrendingGames from "../components/TrendingGames";
import FlashSale from "../components/FlashSale";
import Streamers from "../components/Streamers";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Categories />
      <TrendingGames />
      <FlashSale />
      <Streamers />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;