import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featAgencies } from "../assets/data/featuredAgencies";
import Agencies from "../components/Cards/Agencies";
import { Link } from "react-router-dom";
import City from "../components/Cards/City";
import { cities } from "../assets/data/city";

const Companies = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
        },
      },
    ],
  };

  return (
    <section className="px-4 sm:px-10 xl:px-28 flex py-10">
      <div className="w-full md:w-[70%]">
        <div className="h-20">
          <h3 className="font-semibold text-lg">Featured Agencies (UAE) </h3>
          <p>
            Make informed property decisions with help from industry experts
          </p>
        </div>

        <Slider {...settings}>
          {featAgencies.map((estate, idx) => {
            return (
              <div key={idx}>
                <Agencies image={estate.image} title={estate.content} />
              </div>
            );
          })}
        </Slider>

        <section className="py-5">
          <header>
            <h3 className="font-semibold text-lg">Browse agencies by city </h3>
            <p>See only agencies that work in a specific city or area</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            {cities.map((city, idx) => {
              return (
                <div key={idx}>
                  <City title={city.title} image={city.image} />
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* RIGHT SECTION */}
      <div className="min-w-[16rem] w-full  pt-20 pl-10 box-border hidden md:block">
        <div className="border p-2 px-6 rounded-xl">
          <p className="font-semibold text-xl mb-2">
            How to select an Agent or Agency
          </p>
          <hr />
          <ul className="list-outside list-disc px-3 mt-2">
            <li>
              Find highly reviewed agents or brokers with TruChecked™ listings
            </li>
            <li>
              Use the filters to sort between agents and agencies to connect
              with experts in your area of choice
            </li>
            <li>
              Select your other preferences to connect with the right agents or
              agencies
            </li>
            <li>Start the discussion to see if they match your requirements</li>
          </ul>
        </div>

        <div className={`w-full h-[17rem] relative mt-5`}>
          <Link to="#">
            <img
              src="/truValue.png"
              className="h-full w-full object-cover rounded-xl"
            />
            <div className=" absolute top-5 left-5">
              <h4 className="text-lg py-5">How much is your property worth?</h4>
              <span className="text-xl font-medium">
                Get Instant Valuations with TruValue™ &#11166;{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Companies;
