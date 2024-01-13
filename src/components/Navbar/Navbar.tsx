import { Link } from "react-router-dom";
import TopSection from "./TopSection";
import Dropdown from "./Dropdown";
import { eventList, guideList, marketList } from "../../assets/data/navbar";
import { useDispatch, useSelector } from "react-redux";
import { dropToggle } from "../../redux/features/topDropDownSlice";
import { RootState } from "../../redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const drop = useSelector((state: RootState) => {
    return state.topDrop.value;
  });
  return (
    <>
      <header>
        {/* TOP SECTION */}
        <TopSection />

        {/* BOTTOM SECTION */}
        <section className="flex justify-between items-center py-5 px-28">
          <Link to="/">
            <img src="/logo.png" className="w-[7rem]" />
          </Link>

          <div className="flex gap-4 items-center">
            <Link to="/" className="w-[5rem]">
              <img src="/my_bayut.png" />
            </Link>

            <Link to="/companies">Find my Agent</Link>

            <Link to="/">Flor Plans</Link>

            <Link to="/" className="relative">
              <span onClick={() => dispatch(dropToggle("guides"))}>
                Guides{drop == "guides" ? <>&#11205;</> : <>&#11206;</>}
              </span>
              <div className="absolute top-[140%] right-0 w-[9rem]">
                <Dropdown list={guideList} dropTitle="guides" />
              </div>
            </Link>

            <Link to="/" className="relative">
              <span onClick={() => dispatch(dropToggle("market"))}>
                Marketing Intelligence{" "}
                {drop == "market" ? <>&#11205;</> : <>&#11206;</>}
              </span>
              <div className="absolute top-[140%] right-0 w-[9rem]">
                <Dropdown list={marketList} dropTitle="market" />
              </div>
            </Link>

            <Link to="/">Agent Portal</Link>

            <Link to="/" className="relative">
              <span onClick={() => dispatch(dropToggle("events"))}>
                Events {drop == "events" ? <>&#11205;</> : <>&#11206;</>}
              </span>
              <div className="absolute top-[140%] right-0 w-[11rem]">
                <Dropdown list={eventList} dropTitle="events" />
              </div>
            </Link>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
