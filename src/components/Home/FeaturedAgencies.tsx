import { useState } from "react";
import Slider from "react-slick";
import { featAgencies } from "../../assets/data/featuredAgencies";

const FeaturedAgencies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: (current: any, next: any) => {
      console.log(current);
      setCurrentSlide(next);
    },
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <img
            src="https://icons.veryicon.com/png/256/miscellaneous/common-icons-6/left-43.png"
            className="rotate-180 h-20 w-auto"
          />
          &#11166;
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow \">
          <img
            src="https://icons.veryicon.com/png/256/miscellaneous/common-icons-6/left-43.png"
            className=" h-20 w-auto scale-125"
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
        },
      },
    ],
  };

  return (
    <section className="px-28 py-10">
      <header>
        <h2 className="w-full text-center font-semibold text-3xl py-5">
          Featured Agencies
        </h2>
      </header>
      <Slider {...settings} className="px-20">
        {featAgencies.map((agency, idx) => {
          return (
            <div key={idx} className="flex justify-center">
              <div className="rounded-md p-4 w-[100%] flex justify-center items-center">
                <img className="w-32 h-32rounded-md" src={agency.image} />
                {/* <p className="text-center">{agency.content}</p> */}
              </div>
            </div>
          );
        })}
      </Slider>

      <section className="flex justify-center py-6 text-xl text-medium">
        {currentSlide != 4
          ? featAgencies[currentSlide + 1].content
          : featAgencies[0].content}
      </section>
    </section>
  );
};

export default FeaturedAgencies;
