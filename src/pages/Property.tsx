import { FaBell } from "react-icons/fa";
import PropertyCard from "../components/Cards/Property";
import driveTimeImg from "../assets/images/property/driveTime.png";
import RecommendProperty from "../components/Cards/RecommendLinks";
import {
  recommendSearch,
  rentProperties,
  shortTermRental,
  usefulLink,
} from "../assets/data/property";
import { Link } from "react-router-dom";
import { MdFilterListOff, MdLocationPin } from "react-icons/md";
import { useState } from "react";
import { FaTableList } from "react-icons/fa6";
import { PiMapPinLineBold } from "react-icons/pi";
import Select from "react-select";

const Property = () => {
  const [list, setList] = useState(true);
  return (
    <>
      <header className="flex flex-col gap-3">
        {/* TOP SECTION OF HEADER */}
        <form className="px-4 sm:px-10 xl:px-28 flex py-4 gap-2">
          <Select
            className="w-full hidden md:block"
            placeholder="Rent"
            isDisabled
          ></Select>
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
          <Select
            className="w-full hidden md:block"
            placeholder="Residental"
            isDisabled
          ></Select>
          <Select
            className="w-full hidden md:block"
            placeholder="Beds&Baths"
            isDisabled
          ></Select>
          <Select
            className="w-full hidden md:block"
            placeholder="Price(AED)"
            isDisabled
          ></Select>

          <button className="hidden whitespace-nowrap md:flex items-center gap-2 py-1 px-5 bg-[#00606913] text-[#006169]  rounded-md">
            More Filters
            <MdFilterListOff />
          </button>
          <button className="whitespace-nowrap py-1 px-3 bg-[#0060691c] text-[#006169] rounded-md ">
            Save Search
          </button>
        </form>

        {/* BOTTOM SECTION OF HEADER */}
        <div className="hidden md:flex justify-between items-center px-4 sm:px-10 xl:px-28">
          <p className="flex gap-2 h-fit">
            <button className="px-2 py-[3px] rounded-3xl flex gap-1 border text-sm">
              TruCheck™ listings first
            </button>
            <button className="px-2 py-[3px] rounded-3xl flex gap-1 border text-sm">
              Properties with floor plans
            </button>
          </p>

          <p className="hidden  border p-1 sm:flex items-center  gap-2 rounded-md text-sm">
            <span
              className={` w-[5rem] flex items-center gap-1 justify-center ${
                list ? "bg-[#e9f7f0] text-[#28b16d] font-medium" : ""
              } rounded-md cursor-pointer p-1`}
              onClick={() => setList(true)}
            >
              <FaTableList />
              List
            </span>
            <span
              className={`w-[5rem] flex items-center gap-1 justify-center ${
                !list ? "bg-[#e9f7f0] text-[#28b16d]" : ""
              } rounded-md cursor-pointer p-1`}
              onClick={() => setList(false)}
            >
              <PiMapPinLineBold />
              Map
            </span>
          </p>
        </div>
        <hr />
      </header>

      <section className="px-4 xl:px-28 flex flex-col lg:flex-row pb-10">
        <div className=" flex-grow">
          <h3 className="text-2xl py-6">Properties for rent in UAE</h3>
          {rentProperties.map((property, idx) => {
            return (
              <Link to={`/property-details/${idx + 1}`} key={idx}>
                <PropertyCard
                  image={property.image}
                  price={property.price}
                  type={property.type}
                  bed={property.bed}
                  bath={property.bath}
                  area={property.area}
                  description={property.description}
                  location={property.location}
                  logo={property.logo}
                />
              </Link>
            );
          })}
        </div>

        <div className="pt-20 sm:pl-4 xl:pl-10 box-border">
          <div className="rounded-xl">
            <img src={driveTimeImg} className="w-fit rounded-md" />
          </div>
          <div className="text-sm py-4 text-center">
            Be the first to hear about new properties
          </div>
          <div className="full">
            <button className="w-full uppercase p-2 flex items-center justify-center gap-3 border rounded-sm">
              <FaBell />
              Alert me for new properties
            </button>
          </div>
          <RecommendProperty
            title={recommendSearch.title}
            list={recommendSearch.searchList}
          />
          <RecommendProperty
            title={usefulLink.title}
            list={usefulLink.searchList}
          />
          <RecommendProperty
            title={shortTermRental.title}
            list={shortTermRental.searchList}
          />
        </div>
      </section>
    </>
  );
};

export default Property;
