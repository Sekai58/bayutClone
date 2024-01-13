import { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  const [countryDrop, setCounterDrop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };
  return (
    <>
      <section className="w-full px-28 flex flex-col gap-4 bg-footer-section bg-contain py-8 justify-center">
        <div className="flex justify-between">
          <div className="uppercase text-white text-sm font-medium">
            <ul className="flex gap-2 flex-wrap">
              <li className="hover:underline block">
                <Link to="#">
                  About us <span className="ml-2">|</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="#">
                  Careers <span className="ml-2">|</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="#">
                  Contact US <span className="ml-2">|</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="#">Terms & privacy policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-[#4b4b4b] bg-[#8b8b8b] hover:text-white hover:bg-blue-500 text-xl rounded-full p-[6px]">
              <FaFacebookF />
            </p>
            <p className="text-[#4b4b4b] bg-[#8b8b8b] hover:text-white hover:bg-black text-xl rounded-full p-[6px]">
              <FaXTwitter />
            </p>
            <p className="text-[#4b4b4b] bg-[#8b8b8b] hover:text-white hover:bg-blue-500 text-xl rounded-full p-[6px]">
              <BiLogoLinkedin />
            </p>
            <p className="text-[#4b4b4b] bg-[#8b8b8b] hover:text-white hover:bg-red-500 text-xl rounded-full p-[6px]">
              <AiFillInstagram />
            </p>
            <p className="text-[#4b4b4b] bg-[#8b8b8b] hover:text-white hover:bg-red-500 text-xl rounded-full p-[6px]">
              <GrYoutube />
            </p>
            <img src="/appStore.png" className="h-8 rounded-md" />
            <img src="/googlePlay.png" className="h-8 rounded-md" />
            <img src="/appGallery.png" className="h-8 rounded-md" />
          </div>
        </div>

        <div className="relative text-white w-fit font-medium">
          COUNTRY:{" "}
          <button onClick={() => setCounterDrop(!countryDrop)}>
            United Arab Emirates {countryDrop ? <>&#11205;</> : <>&#11206;</>}
          </button>
          {countryDrop ? (
            <div className="absolute bottom-[100%] right-0 z-10 p-3 border rounded-md bg-white text-[#4e4e4e]">
              <ul>
                <li>Pakistan</li>
                <li>Saudi Arbia</li>
                <li>Jordan</li>
                <li>Indonesia</li>
                <li>Egypt</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-between text-white">
          <p className="text-sm">&copy; 2008 - 2024 Bayut.com</p>
          <p
            className="uppercase flex items-center text-sm cursor-pointer"
            onClick={() => {
              scrollToTop();
            }}
          >
            TOP
            <span className="text-3xl text-[#5f5f5f]">
              <IoIosArrowDropupCircle />
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
