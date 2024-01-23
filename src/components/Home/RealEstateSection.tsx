import Slider from "react-slick";
import StateCard from "./StateCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { realEstate } from "../../assets/data/realestate";

const RealEstateSection = () => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <img
            src="https://yuri-ai.com/assets/icon-right-arrow-0b98223b.png"
            className="rotate-180 scale-125"
          />
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow \">
          <img
            src="https://yuri-ai.com/assets/icon-right-arrow-0b98223b.png"
            className=" scale-125"
          />
        </div>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="px-4 sm:px-10 xl:px-24">
      <header className="px-4">
        <h2 className="w-full text-center font-semibold text-xl md:text-3xl py-5">
          Discover more about the UAE real estate market
        </h2>
      </header>
      <Slider {...settings} className="sm:px-4">
        {realEstate.map((estate, idx) => {
          return (
            <div key={idx}>
              <StateCard image={estate.image} content={estate.content} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default RealEstateSection;
