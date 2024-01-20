import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  hamburgerToggle,
  hamburgerClose,
} from "../../redux/features/hamburgerSlice";

const HambergerMenu = () => {
  //   const data = localStorage.getItem("token");
  const data = true;

  const isOpened = useSelector((state: RootState) => {
    return state.hamburger.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="flex md:hidden  text-md">
      <button
        className="text-3xl text-slate-700 font-bold"
        onClick={() => dispatch(hamburgerToggle())}
      >
        <RxHamburgerMenu />
      </button>

      {isOpened ? (
        <div className="fixed top-16 right-0 w-[100%] z-10 bg-gray-50 border-[#d7d7d7] sm:top-16 h-screen sm:px-8">
          <div className="flex flex-col justify-between h-[80%]">
            <div className="md:hidden">
              {data ? (
                <>
                  <div className="p-2">
                    <Link to={`/companies`}>
                      <button
                        className={`w-full hover:bg-gray-200  p-2 text-left font-medium mr-4  rounded-[4px]`}
                        onClick={() => {
                          dispatch(hamburgerClose());
                        }}
                      >
                        Find My Agent
                      </button>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link to={`/`}>
                      <button
                        className={`w-full hover:bg-gray-200 p-2 text-left font-medium mr-4  rounded-[4px]`}
                        onClick={() => {
                          dispatch(hamburgerClose());
                        }}
                      >
                        For Plans
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HambergerMenu;
