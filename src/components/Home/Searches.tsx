import { useState } from "react";
import {
  dhabi,
  dubai,
  emirates,
  dhabiV,
  dubaiV,
  emiratesV,
} from "../../assets/data/aparts";

const Searches = () => {
  const [sale, setSale] = useState(true);
  const [apart, setApart] = useState(true);
  const [villa, setVilla] = useState(true);
  const limitedDubaiApart = apart ? dubai.slice(0, 5) : dubai;
  const limitedDhabiApart = apart ? dhabi.slice(0, 5) : dhabi;
  const limitedDubaiVilla = villa ? dubaiV.slice(0, 5) : dubaiV;
  const limitedDhabiVilla = villa ? dhabiV.slice(0, 5) : dhabiV;

  return (
    <section className="w-full flex-col justify-center items-center px-28 py-10">
      <header>
        <h2 className="w-full text-center font-semibold text-3xl py-5">
          Popular Searches in the UAE
        </h2>
        <div className="flex justify-center gap-5">
          <button
            className={`cursor-pointer ${
              sale
                ? "border-b-2 border-b-[#448d5d] text-black font-semibold"
                : "text-[#858585]"
            }`}
            onClick={() => {
              setSale(true);
            }}
          >
            For Sale
          </button>
          <button
            className={`cursor-pointer ${
              !sale
                ? "border-b-2 border-b-[#448d5d] text-black font-semibold"
                : "text-[#858585]"
            }`}
            onClick={() => {
              setSale(false);
            }}
          >
            To Rent
          </button>
        </div>
      </header>

      {/* APARTMENT SECTION */}
      <section className="flex justify-between flex-wrap py-3 lg:w-[90%]">
        <div className="min-w-[16rem]">
          <h3 className="text-xl font-medium py-3 underline">
            Dubai Apartments
          </h3>
          {limitedDubaiApart.map((apart: String, idx: any) => {
            return (
              <div
                key={idx}
                className="hover:underline  text-[#287064] font-medium"
              >
                {apart}
              </div>
            );
          })}
        </div>

        <div className="min-w-[16rem]">
          <h3 className="text-xl font-medium py-3 underline">
            Abu Dhabi Apartments
          </h3>
          {limitedDhabiApart.map((apart: String, idx: any) => {
            return (
              <div
                key={idx}
                className="hover:underline  text-[#287064] font-medium"
              >
                {apart}
              </div>
            );
          })}
        </div>

        <div className="min-w-[16rem]">
          <h3 className="text-xl font-medium py-3 underline ">
            Apartments in other Emirates
          </h3>
          {emirates.map((apart: String, idx: any) => {
            return (
              <div
                key={idx}
                className="hover:underline  text-[#287064] font-medium"
              >
                {apart}
              </div>
            );
          })}
        </div>
      </section>

      {/* HORIZONTAL ROW */}
      <div className={`flex items-center mb-8`}>
        <div className={`h-[1px] bg-[#b8b8b8] flex-grow`}></div>
        <span
          className={`mx-2 font-semibold text-sm text-gray-800 overflow-visible cursor-pointer`}
          onClick={() => setApart(!apart)}
        >
          {apart ? <>View all &#11206;</> : <>View less &#11205;</>}
        </span>
      </div>

      {/* VILLAS SECTION */}
      <section className="flex justify-between flex-wrap py-3 lg:w-[90%]">
        <div className="min-w-[20rem]">
          <h3 className="text-xl font-medium py-3 underline">Dubai Villas</h3>
          {limitedDubaiVilla.map((apart: String, idx: any) => {
            return (
              <div
                key={idx}
                className="hover:underline  text-[#287064] font-medium"
              >
                {apart}
              </div>
            );
          })}
        </div>

        <div className="min-w-[20rem]">
          <h3 className="text-xl font-medium py-3 underline">
            Abu Dhabi Villas
          </h3>
          {limitedDhabiVilla.map((apart: String, idx: any) => {
            return (
              <div
                key={idx}
                className="hover:underline  text-[#287064] font-medium"
              >
                {apart}
              </div>
            );
          })}
        </div>

        <div className="min-w-[16rem]">
          <h3 className="text-xl font-medium py-3 underline ">
            Villas in other Emirates
          </h3>
          {emiratesV.map((apart: String, idx: any) => {
            return (
              <div
                key={idx}
                className="hover:underline  text-[#287064] font-medium"
              >
                {apart}
              </div>
            );
          })}
        </div>
      </section>

      {/* HORIZONTAL ROW */}
      <div className={`flex items-center mb-8`}>
        <div className={`h-[1px] bg-[#b8b8b8] flex-grow`}></div>
        <span
          className={`mx-2 font-semibold text-sm text-gray-800 overflow-visible cursor-pointer`}
          onClick={() => setVilla(!villa)}
        >
          {villa ? <>View all &#11206;</> : <>View less &#11205;</>}
        </span>
      </div>

      {/* POPULAR PROPERTY SECTION */}
      <section className="py-3">
        <h3 className="text-xl font-medium py-3">
          Popular Property for Sale searches in the UAE
        </h3>
        <ul className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[#287064] font-medium ">
          <li className="hover:underline">Dubai properties for sale</li>
          <li className="hover:underline">Abu Dhabi properties for sale</li>
          <li className="hover:underline">Sharjah properties for sale</li>
          <li className="hover:underline">Dubai shops for sale</li>
          <li className="hover:underline">Abu Dhabi shops for sale</li>
          <li className="hover:underline">Ajman properties for sale</li>
          <li className="hover:underline">Dubai offices for sale</li>
          <li className="hover:underline">Abu Dhabi offices for sale</li>
          <li className="hover:underline">
            Ras Al Khaimah properties for sale
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Searches;
