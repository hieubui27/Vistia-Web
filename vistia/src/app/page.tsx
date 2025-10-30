import HomeCarousel from "../components/Carousel/HomeCarousel";
import MarketList from "../components/MarketList/MarketList";

export default function Home() {
  return (
    <div className="Home">
      <HomeCarousel/>
      <MarketList />
    </div>
  );
}
