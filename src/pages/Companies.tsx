import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featAgencies } from "../assets/data/featuredAgencies";
import Agencies from "../components/Cards/Agencies";
import { Link } from "react-router-dom";
import City from "../components/Cards/City";
import { cities } from "../assets/data/city";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";

const Companies = () => {
  const [agent, setAgent] = useState("agent");
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <header className="w-full">
        <hr />
        <form className="px-4 sm:px-10 xl:px-28 flex py-4 gap-2">
          <p className="hidden  border p-1 sm:flex items-center gap-2 rounded-md">
            <span
              className={` ${
                agent === "agent" ? "bg-[#e9f7f0] text-[#28b16d]" : ""
              } rounded-md cursor-pointer p-1`}
              onClick={() => setAgent("agent")}
            >
              Agents
            </span>
            <span
              className={`${
                agent === "agencies" ? "bg-[#e9f7f0] text-[#28b16d]" : ""
              } rounded-md cursor-pointer p-1`}
              onClick={() => setAgent("agencies")}
            >
              Agencies
            </span>
          </p>
          <label className=" w-full relative">
            <input
              type="text"
              className="w-full rounded-md p-2 border pr-7"
              placeholder="Enter location"
            />
            <span className="absolute text-2xl right-0 top-2 text-[#707070]">
              <MdLocationPin />
            </span>
          </label>

          <input
            type="text"
            className="hidden sm:block w-full rounded-md p-2 border"
            placeholder={`${agent === "agent" ? "Agent Name" : "Agency Name"}`}
          />
          <input
            type="text"
            className="hidden sm:block w-full rounded-md p-2 border"
            placeholder="Enter languages"
          />
          <button className="hidden sm:block py-1 px-3 bg-[#006169] text-white rounded-md lg:w-[14rem]">
            Find
          </button>
          <button className="flex items-center gap-2 sm:hidden uppercase py-1 px-5 bg-[#00606913] text-[#006169]  rounded-md lg:w-[14rem]">
            <MdFilterListOff />
            FILTER
          </button>
        </form>
        <hr />
      </header>
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
              <h3 className="font-semibold text-lg">
                Browse agencies by city{" "}
              </h3>
              <p>See only agencies that work in a specific city or area</p>
            </header>
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5 ">
              {cities.map((city, idx) => {
                return (
                  <div key={idx}>
                    <City title={city.title} image={city.image} />
                  </div>
                );
              })}
            </div>
            <div className="sm:hidden">
              <Slider {...settings}>
                {cities.map((city, idx) => {
                  return (
                    <div key={idx} className="p-3">
                      <City title={city.title} image={city.image} />
                    </div>
                  );
                })}
              </Slider>
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
                Select your other preferences to connect with the right agents
                or agencies
              </li>
              <li>
                Start the discussion to see if they match your requirements
              </li>
            </ul>
          </div>

          <div className={`w-full h-[17rem] relative mt-5`}>
            <Link to="#">
              <img
                src="/truValue.png"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className=" absolute top-5 left-5">
                <h4 className="text-lg py-5">
                  How much is your property worth?
                </h4>
                <span className="text-xl font-medium">
                  Get Instant Valuations with TruValue™ &#11166;{" "}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
