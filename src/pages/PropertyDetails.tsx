import { Link } from "react-router-dom";
import property from "../assets/images/rentProperty/property1.jpg";
import propertydetail1 from "../assets/images/rentProperty/propertydetail1.jpg";
import propertydetail2 from "../assets/images/rentProperty/propertydetail2.jpg";
import propertydetail3 from "../assets/images/rentProperty/propertydetail3.jpg";
import { FaCheck } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiWarehouseLight } from "react-icons/pi";
import { IoCameraOutline } from "react-icons/io5";
import Profile from "../components/Cards/Profile";
import SimilarProperty from "../components/Cards/SimilarProperty";
import RecommendLinks from "../components/Cards/RecommendLinks";
import { usefulLink, rentProperties } from "../assets/data/property";
import LineChart from "../components/Charts/Line";
import BarChart from "../components/Charts/Bar";
import RegulatoryInfo from "../components/PropertyDetails/RegulatoryInfo";
import PopularLocation from "../components/Cards/PopularLocation";
import PropertyInfo from "../components/Cards/PropertyInfo";
import PropertyDetail from "../components/Cards/PropertyDetail";

const PropertyDetails = () => {
  return (
    <section className=" pb-10">
      <hr className="hidden md:block" />
      <header className="hidden md:flex gap-1 text-sm px-28 py-4 flex-wrap">
        <Link to="/property">
          <button className="text-[#287064] mr-5">
            &#11164; Back to search
          </button>
        </Link>
        For rent:{" "}
        <Link to="#" className="text-[#2399d8] mr-2">
          Dubai Apartments <span className="text-[#616161]">&#11166;</span>
        </Link>
        <Link to="#" className="text-[#2399d8] mr-2">
          Downtown Dubai <span className="text-[#616161]">&#11166;</span>
        </Link>
        <Link to="#" className="text-[#2399d8] mr-2">
          Claren Towers <span className="text-[#616161]">&#11166;</span>
        </Link>
        <Link to="#" className="text-[#2399d8] mr-2">
          Claren Tower 1 <span className="text-[#616161]">&#11166;</span>
        </Link>
        Bayut - SUP153304
      </header>

      <div className="flex flex-col md:flex-row px-4 sm:px-10 xl:px-28 gap-3 ">
        {/* LEFT SIDE */}
        <section className=" leftSide overflow-x-hidden">
          {/* IMAGE */}
          <div className="relative ">
            <img
              src={property}
              className="w-full h-[78vh] object-cover rounded-md"
            />
            <div className="absolute top-4 left-4 flex gap-3">
              <button className="py-2 text-xs font-medium p-2 bg-white rounded-3xl flex items-center">
                <FaHistory /> &nbsp; History
              </button>
              <button className="py-2 text-xs font-medium p-2  bg-white rounded-3xl flex items-center">
                <FaCheck /> &nbsp;TruCheck™
              </button>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-3">
              <button className="py-2 text-sm font-medium px-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-3xl flex items-center">
                <PiWarehouseLight /> &nbsp; Flooe Plans
              </button>
              <button className="py-2 text-sm font-medium px-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-3xl flex items-center">
                <IoLocation /> &nbsp;Map
              </button>
            </div>
          </div>

          <PropertyDetail
            price={rentProperties[0].price}
            type={rentProperties[0].type}
            bed={rentProperties[0].bed}
            bath={rentProperties[0].bath}
            area={rentProperties[0].area}
            description={rentProperties[0].description}
            location={rentProperties[0].location}
          />

          <PropertyInfo />
          <h2 className="text-2xl font-semibold pt-8">Trends</h2>
          {/* LINE CHART */}
          <LineChart />
          <section className="flex flex-col xl:flex-row py-5 mt-10 gap-8 justify-between">
            <div className="w-[20rem]">
              <BarChart />
            </div>
            <div className="">
              <PopularLocation />
            </div>
          </section>
          <p className="text-sm text-[#5f5f5f] mt-4">
            *These trends are calculated using a proprietary algorithm based on
            prices advertised on Bayut.
          </p>
          <p className="text-sm text-[#5f5f5f] mb-7">
            **Popularity is based on searches conducted by users on Bayut over
            the last quarter.
          </p>
          <hr />
          {/* REGULATORY INFO */}
          <RegulatoryInfo />
          <hr />
        </section>

        {/* RIGHT SIDE */}
        <section className=" rightSide w-full md:w-[400px]">
          <div className="h-[78vh] hidden md:flex flex-col gap-2">
            <div className="h-[39vh] ">
              <img
                src={propertydetail1}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div className="h-[18.5vh]">
                <img
                  src={propertydetail2}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="h-[18.5vh] relative">
                <img
                  src={propertydetail3}
                  className="w-full h-full object-cover rounded-md"
                />
                <button className="py-[4px] absolute bottom-5 right-5 flex gap-3 items-center px-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-3xl">
                  <IoCameraOutline />
                  11
                </button>
              </div>
            </div>
          </div>

          {/* SELLER INFO */}
          <Profile />

          {/* RECOMENDATION */}
          <SimilarProperty />

          <RecommendLinks
            title={usefulLink.title}
            list={usefulLink.searchList}
          />

          <button className="w-full p-2 flex items-center justify-center gap-3 border border-[#006169] rounded-sm text-[#006169] mt-5">
            <FaFlag />
            Report this property
          </button>
        </section>
      </div>
    </section>
  );
};

export default PropertyDetails;
