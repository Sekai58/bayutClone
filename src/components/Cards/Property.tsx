import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

interface IProperty {
  image: any;
  price: number;
  type: string;
  bed: number;
  bath: number;
  area: number;
  description: string;
  location: string;
  logo: any;
}

const PropertyCard: React.FC<IProperty> = (props: IProperty) => {
  return (
    <div className="flex flex-col rounded-lg sm:flex-row border w-full mb-5">
      <img
        className="w-full sm:w-[20rem]  object-cover rounded-tr-lg sm:rounded-tr-none rounded-l-lg"
        src={props.image}
      />

      <div className="p-4 flex flex-col gap-2 w-full">
        <h5 className=" text-md font-medium block ">
          AED <span className="text-xl">{props.price}</span> Yearly
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
          <img src={props.logo} className=" h-[4.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
