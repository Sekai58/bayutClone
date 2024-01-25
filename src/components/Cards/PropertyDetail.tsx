import { FaRegHeart } from "react-icons/fa";
import { IoBedOutline, IoShareOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { PiGridFourLight } from "react-icons/pi";

interface IProperty {
  price: number;
  type: string;
  bed: number;
  bath: number;
  area: number;
  description: string;
  location: string;
}

const PropertyDetail: React.FC<IProperty> = (props: IProperty) => {
  return (
    <div className="flex flex-col gap-2 w-full py-2">
      <div className="flex w-full justify-between">
        <h5 className=" text-2xl font-medium block ">
          AED <span className="text-3xl font-semibold">{props.price}</span>{" "}
          Yearly
        </h5>
        <div className="flex gap-2 items-center">
          <button className="flex w-[4.5rem] p-1 items-center justify-center bg-[#e5eff0] text-[#006169] rounded-md font-semibold h-fit">
            <span className="mr-1">
              <FaRegHeart />
            </span>
            Save
          </button>
          <button className="flex w-[4.5rem] p-1 items-center justify-center bg-[#e5eff0] text-[#006169] rounded-md font-semibold h-fit">
            <span className="mr-1">
              <IoShareOutline />
            </span>
            Share
          </button>
        </div>
      </div>

      <p className="text-lg font-medium pb-2">{props.location}</p>
      <div>
        <p className="text-lg pb-4 flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <IoBedOutline />
            {props.bed} Beds
          </span>
          <span className="flex items-center gap-1">
            <GiBathtub /> {props.bath}Baths
          </span>
          <span className="flex items-center gap-1">
            <PiGridFourLight />
            {props.area} sqft
          </span>
        </p>
        <p className="text-xl font-medium pb-4">{props.description}</p>

        <p className="">
          AX CAPITAL Real Estate is offering this beautiful Beautiful located in
          Dubai Land in Cherrywood Community.
        </p>
      </div>
    </div>
  );
};

export default PropertyDetail;
