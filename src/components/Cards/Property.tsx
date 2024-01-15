import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import driveTimeImg from "../../assets/images/property/driveTime.png";

const PropertyCard = () => {
  return (
    <div className="flex flex-col rounded-lg sm:flex-row border w-full">
      <img
        className="w-[20rem] h-[16rem] object-cover rounded-l-lg"
        src={driveTimeImg}
      />

      <div className="p-4 flex flex-col gap-4 w-full">
        <h5 className=" text-xl font-medium block ">Card title</h5>
        <div>
          <p className="text-md pb-4 flex items-center gap-3 font-medium flex-wrap">
            TownHouse | <IoBedOutline />3 | <GiBathtub /> 4 | Area:
            <span className="font-normal">2250</span>
          </p>
          <p className="text-md pb-4 text-[#006169]">
            Furnished | Upgraded | 2 Bedroom and Maids
          </p>
          <p className="text-md pb-4 flex items-center gap-1">
            <IoLocationOutline />
            Madina Tower, JLT Cluster O, Jumeirah Lake Towers (JLT), Dubai
          </p>
          <p className="text-[#2d3e9b] py-[1px] bg-[#ebeefc] rounded-md text-sm px-1 w-fit">
            <span className="font-bold mr-2">+</span>Agent last visited on ...
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <button className="flex w-[4.5rem] py-1 items-center justify-center bg-[#e5eff0] text-[#006169] rounded-md font-semibold h-fit">
              <span className="mr-1">
                <FaPhoneAlt />
              </span>
              Call
            </button>
            <button className="flex w-[4.5rem] py-1 items-center justify-center bg-[#e5eff0] text-[#006169] rounded-md font-semibold h-fit">
              <span className="mr-1">
                <MdEmail />
              </span>
              Email
            </button>
            <button className="w-[4.5rem] py-2 text-md flex items-center justify-center bg-[#e9f7f0] text-[#249f62] rounded-md font-semibold h-fit">
              <FaWhatsapp />
            </button>
          </div>
          <img src="/bayut.jpg" className="w-[4.5rem] h-2" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
