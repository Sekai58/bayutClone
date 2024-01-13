import FeaturedAgencies from "../components/Home/FeaturedAgencies";
import HeroSection from "../components/Home/HeroSection";
import ImageSection from "../components/Home/ImageSection";
import RealEstateSection from "../components/Home/RealEstateSection";
import Searches from "../components/Home/Searches";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImageSection />
      <RealEstateSection />
      <Searches />
      <FeaturedAgencies />
    </div>
  );
};

export default Home;
