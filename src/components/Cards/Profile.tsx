import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  return (
    <section className="w-full border rounded-md p-4 my-5">
      <div className="flex gap-4 items-center mb-3">
        <img
          src="/bio.jpg"
          className="border h-24 w-24 rounded-full object-cover"
        />
        <div className="flex flex-col text-xs gap-2">
          <p className="text-xl font-medium text-[#287064]">Sarah Hussain</p>
          <p>
            No reviews{" "}
            <button className="p-1 border-[1px] text-[#006169]s">
              Write a review
            </button>
          </p>
        </div>
      </div>
      <div className="flex gap-2 mb-3 justify-evenly">
        <button className="flex-1 flex  py-1 items-center justify-center bg-[#e5eff0] text-[#006169] rounded-md font-semibold h-fit">
          <span className="mr-1">
            <FaPhoneAlt />
          </span>
          Call
        </button>
        <button className="flex flex-1 py-1 items-center justify-center bg-[#e5eff0] text-[#006169] rounded-md font-semibold h-fit">
          <span className="mr-1">
            <MdEmail />
          </span>
          Email
        </button>
        <button className="flex-1 py-2 text-md flex items-center justify-center bg-[#e9f7f0] text-[#249f62] rounded-md font-semibold h-fit">
          <FaWhatsapp />
        </button>
      </div>
      <hr />
      <div className="flex justify-between gap-10 text-xs my-3">
        <p>Allsopp & Allsopp- Business Bay Lettings</p>
        <p className="text-[#006169]">View all properties</p>
      </div>
    </section>
  );
};

export default Profile;
