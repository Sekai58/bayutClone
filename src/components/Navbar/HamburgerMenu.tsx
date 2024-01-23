import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { motion } from "framer-motion";
import { IoMdSettings } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import {
  hamburgerToggle,
  hamburgerClose,
} from "../../redux/features/hamburgerSlice";
import Accordion from "./Accordion";
import { langOpen } from "../../redux/features/languageModelSlice";
import { GrLanguage } from "react-icons/gr";

const HambergerMenu = () => {
  const isOpened = useSelector((state: RootState) => {
    return state.hamburger.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="flex md:hidden">
      <header className="z-[999] flex justify-between w-full">
        <button
          className="text-2xl text-white font-bold"
          onClick={() => dispatch(hamburgerToggle())}
        >
          <RxHamburgerMenu />
        </button>
        <img src="/logo.png" className="w-[6rem]" />
        <button
          className="relative py-1 px-6 text-white"
          onClick={() => {
            dispatch(langOpen());
          }}
        >
          <span className="absolute top-2 left-0 ">
            <GrLanguage />
          </span>
          EN
        </button>
      </header>

      {isOpened ? (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 w-[100%] z-10 bg-gray-50 border-[#d7d7d7] md:top-16 h-screen sm:px-8 overflow-y-scroll no-scrollbar"
        >
          <header className="p-2">
            <div className="flex justify-between pt-2 pb-5 text-2xl">
              <IoMdSettings className="text-[#287064]" />
              <IoMdClose
                onClick={() => {
                  dispatch(hamburgerClose());
                }}
              />
            </div>
            <button className="w-full py-1 text-center rounded-md bg-[#287064] text-white">
              Sign up or Log in
            </button>
            <div className="my-4">
              <p className="font-medium my-2">Change site lanuage</p>
              <section className="flex gap-3 overflow-x-scroll no-scrollbar">
                <button className="py-2 px-4 rounded-3xl border-[2px] border-[#bee7d3] bg-[#e9f7f0] text-[#28b16d] font-semibold whitespace-nowrap">
                  English
                </button>
                <button
                  className="py-2 px-4 rounded-3xl border-[2px] border-[#bfc0c0] hover:bg-[#f1f1f1] whitespace-nowrap"
                  lang="zh-CN"
                >
                  中文
                </button>
                <button
                  className="py-2 px-4 rounded-3xl border-[2px] border-[#bfc0c0] hover:bg-[#f1f1f1] whitespace-nowrap"
                  lang="ar"
                >
                  عربي
                </button>
                <button
                  className="py-2 px-4 rounded-3xl border-[2px] border-[#bfc0c0] hover:bg-[#f1f1f1] whitespace-nowrap"
                  lang="ru"
                >
                  Русский
                </button>
              </section>
            </div>
            <hr />
          </header>

          <div className="flex flex-col justify-between  py-2">
            <div className="md:hidden">
              <>
                <div className="h-5 px-4">
                  <Link to="#" className="">
                    <img src="/my_bayut.png" className="h-5" />
                  </Link>
                </div>

                <Link to={`/companies`} className="px-2">
                  <button
                    className={`w-full hover:bg-gray-200  p-2 text-left font-medium  rounded-[4px]`}
                    onClick={() => {
                      dispatch(hamburgerClose());
                    }}
                  >
                    Find My Agent
                  </button>
                </Link>

                <Link to={`/`} className="px-2">
                  <button
                    className={`w-full hover:bg-gray-200 p-2 text-left font-medium  rounded-[4px]`}
                    onClick={() => {
                      dispatch(hamburgerClose());
                    }}
                  >
                    For Plans
                  </button>
                </Link>

                <Accordion
                  title="Guides"
                  list={["Area Guides", "Building Guides", "School Guides"]}
                />

                <Accordion
                  title="Market Intelligence"
                  list={[
                    "TruValue™",
                    "Property Prices",
                    "Dubai Transactions",
                    "Trends",
                    "New Projects",
                  ]}
                />

                <Link to={`/`} className="px-2">
                  <button
                    className={`w-full hover:bg-gray-200 p-2 text-left font-medium mr-4  rounded-[4px]`}
                    onClick={() => {
                      dispatch(hamburgerClose());
                    }}
                  >
                    Agent Portal
                  </button>
                </Link>

                <Accordion
                  title="Events"
                  list={["B3DXB 20222", "Your Home Your Choice"]}
                />

                <Link to={`/`} className="px-2">
                  <button
                    className={`w-full hover:bg-gray-200 p-2 text-left font-medium mr-4  rounded-[4px]`}
                    onClick={() => {
                      dispatch(hamburgerClose());
                    }}
                  >
                    Careers
                  </button>
                </Link>

                <Accordion
                  title="Company"
                  list={[
                    "About Us",
                    "Contact Us",
                    "Terms of Use",
                    "Privacy Policy",
                  ]}
                />
              </>
            </div>
            <hr />
            <div className="p-4">
              <p className="text-lg font-medium mb-2">
                Download the Bayut app:
              </p>
              <img src="/googlePlay.png" className="h-8 rounded-md w-fit" />
            </div>

            <hr />
            <Accordion
              title="Change Country"
              list={[
                "Pakistan",
                "Saudi Arabia",
                "Jordan",
                "Philippines",
                "Indonesia",
                "Egypt",
              ]}
            />
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HambergerMenu;
