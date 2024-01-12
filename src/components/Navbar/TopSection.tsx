import { FaHeart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoSettingsSharp, IoStar } from "react-icons/io5";
import LanguageModel from "../Model/Language";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { langOpen } from "../../redux/features/languageModelSlice";
import { loginOpen } from "../../redux/features/loginModelSlice";
import LoginModel from "../Model/Login";
import Dropdown from "./Dropdown";
import { dropToggle } from "../../redux/features/topDropDownSlice";

const TopSection = () => {
  const dispatch = useDispatch();
  const langModelState = useSelector((state: RootState) => {
    return state.langModel.value;
  });
  const loginModelState = useSelector((state: RootState) => {
    return state.loginModel.value;
  });

  return (
    <>
      {langModelState ? <LanguageModel /> : <></>}
      {loginModelState ? <LoginModel /> : <></>}

      {/* LEFT SIDE OF TOPBAR */}
      <section className="flex justify-between py-1 bg-[#f5f5f5] px-28">
        <div className="flex gap-3 text-[#222]">
          <button
            className="relative py-1 px-6"
            onClick={() => {
              dispatch(langOpen());
            }}
          >
            <span className="absolute top-2 left-0 ">
              <GrLanguage />
            </span>
            EN
          </button>
          <div className="relative" onClick={() => dispatch(dropToggle())}>
            <button className="relative py-1 px-6">
              <span className="absolute top-2 left-0 ">
                <IoSettingsSharp />
              </span>
              Site settings
            </button>
            <div className="absolute top-[100%] left-0">
              <Dropdown />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE OF TOPBAR */}
        <div className="flex gap-3">
          <button
            className="relative py-1 px-6"
            onClick={() => dispatch(loginOpen())}
          >
            <span className="absolute left-0 top-2">
              <FaHeart />
            </span>
            <span className="hidden lg:block">Favourite properties</span>
          </button>
          <button
            className="relative py-1 px-6"
            onClick={() => dispatch(loginOpen())}
          >
            <span className="absolute left-0 top-2">
              <IoStar />
            </span>
            <span className="hidden lg:block">Saved searches</span>
          </button>
          <button
            className="relative py-1 px-6 group text-[#006169]"
            onClick={() => dispatch(loginOpen())}
          >
            <span className="absolute left-0 top-2">
              <FaCircleUser />
            </span>
            Login
          </button>
        </div>
      </section>
    </>
  );
};

export default TopSection;
