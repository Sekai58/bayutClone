import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

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
    <div className="p-4 flex flex-col gap-2 w-full">
      <h5 className=" text-xl font-medium block ">
        AED <span className="text-2xl">{props.price}</span> Yearly
      </h5>
      <div>
        <p className="text-md pb-4 flex items-center gap-3 font-medium flex-wrap">
          {props.type} | <IoBedOutline />
          {props.bed} | <GiBathtub /> {props.bath}| Area:
          <span className="font-normal">{props.area}</span>
        </p>
        <p className="text-md pb-4 text-[#006169]">{props.description}</p>
        <p className="text-md pb-4 flex items-center gap-1">
          <IoLocationOutline />
          {props.location}
        </p>
        <p className="text-[#2d3e9b] py-[1px] bg-[#ebeefc] rounded-md text-sm px-1 w-fit">
          <span className="font-bold mr-2">+</span>Agent last visited on 16 of
          January
        </p>
      </div>

      <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default PropertyDetail;
