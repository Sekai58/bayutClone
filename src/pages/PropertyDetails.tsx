import { Link } from "react-router-dom";
import property from "../assets/images/rentProperty/property1.jpg";
import propertydetail1 from "../assets/images/rentProperty/propertydetail1.jpg";
import propertydetail2 from "../assets/images/rentProperty/propertydetail2.jpg";
import propertydetail3 from "../assets/images/rentProperty/propertydetail3.jpg";
import { FaCheck } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiWarehouseLight } from "react-icons/pi";
import { IoCameraOutline } from "react-icons/io5";

const PropertyDetails = () => {
  return (
    <section className=" ">
      <hr />
      <header className="flex gap-1 text-sm px-28 py-4">
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

      <div className="w-full flex px-28 gap-3">
        <section className="flex-grow relative ">
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
        </section>

        <section className="w-[24rem] ">
          <div className="h-[78vh] flex flex-col gap-2">
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
        </section>
      </div>
    </section>
  );
};

export default PropertyDetails;
