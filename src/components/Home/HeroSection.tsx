import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import { useState } from "react";
import Select from "react-select";

const HeroSection = () => {
  const [options, setOptions] = useState("property");
  return (
    <section className="h-[80vh] bg-cover mx-5 bg-hero-pattern rounded-lg flex flex-col justify-center items-center gap-7">
      <header className="text-white">
        <h2 className="text-[2.5rem] font-semibold ">Real homes live here</h2>
        <h3 className="text-xl font-semibold">
          Real Prices. Real Photos. Real Properties
        </h3>
      </header>

      <div className="p-2 bg-[#232323] bg-opacity-90 text-white rounded-md flex gap-1 items-center">
        <button
          className={`px-6 py-[6px] ${
            options === "property" ? "bg-white text-[#232323] rounded-md" : ""
          }`}
          onClick={() => setOptions("property")}
        >
          Property Search
        </button>
        <button
          className={`px-6 py-[6px] ${
            options === "transaction"
              ? "bg-white text-[#232323] rounded-md"
              : ""
          }`}
          onClick={() => setOptions("transaction")}
        >
          Dubai Transactions
        </button>
        {options === "transaction" ? <></> : <>|</>}
        <button
          className={`px-6 py-[6px] relative ${
            options === "gpt" ? "bg-white text-[#232323] rounded-md" : ""
          }`}
          onClick={() => setOptions("gpt")}
        >
          BayutGPT
          <span className="absolute top-0 left-[75%] py-[1px] px-[4px] text-[8px] bg-red-500 rounded-xl text-white">
            BETA
          </span>
        </button>
      </div>

      <form className="p-3 bg-[#232323] bg-opacity-90 rounded-md flex flex-col gap-1 w-[40rem]">
        <div className="flex justify-around gap-2 my-1">
          <Select className="flex-[0.6]" placeholder="Rent" isDisabled></Select>
          <input
            type="text"
            className="flex-1 rounded-md p-1"
            placeholder="Enter location"
          />
          <Select
            className="flex-[0.6]"
            placeholder="Residental"
            isDisabled
          ></Select>
        </div>
        <div className="flex gap-2 my-1">
          <Select
            className="flex-[0.6]"
            placeholder="Beds & Baths"
            isDisabled
          ></Select>
          <div className="flex-1 flex gap-2">
            <Select
              className="flex-1"
              placeholder="Area(sqft)"
              isDisabled
            ></Select>
            <Select
              className="flex-1"
              placeholder="Price(AED)"
              isDisabled
            ></Select>
          </div>
          <button className="flex-[0.6] py-2 bg-green-400 rounded-md text-white">
            Find
          </button>
        </div>
        <div className="w-full">
          <Link to="#">
            <button className="bg-[url('/heroBtnBg.png')] bg-cover w-full p-2 rounded-md text-left">
              <span className="font-semibold">Search 2.0</span> Find homes by
              drive time &#11166;
            </button>
          </Link>
        </div>
      </form>

      <Link to="#">
        <button className="py-2 pl-10 pr-4 relative border border-white text-white rounded-md">
          <span className="absolute top-2 left-3 text-2xl font-semibold">
            <FaRegPlayCircle />
          </span>
          Experience the Journey
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
