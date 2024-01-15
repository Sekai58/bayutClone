import { FaBell } from "react-icons/fa";
import PropertyCard from "../components/Cards/Property";
import driveTimeImg from "../assets/images/property/driveTime.png";
import RecommendProperty from "../components/Cards/RecommendProperty";
import { recommendSearch } from "../assets/data/property";

const Property = () => {
  return (
    <section className="xl:px-28 flex flex-col lg:flex-row py-10">
      <div className=" flex-grow">
        <h3 className="text-2xl py-6">Properties for rent in UAE</h3>
        <PropertyCard />
      </div>

      <div className="pt-20 pl-10 box-border">
        <div className="rounded-xl">
          <img src={driveTimeImg} className="w-fit rounded-md" />
        </div>
        <div className="text-sm py-4 text-center">
          Be the first to hear about new properties
        </div>
        <div className="full">
          <button className="w-full uppercase p-2 flex items-center justify-center gap-3 border rounded-sm">
            <FaBell />
            Alert me for new properties
          </button>
        </div>
        <RecommendProperty
          title={recommendSearch.title}
          list={recommendSearch.searchList}
        />
      </div>
    </section>
  );
};

export default Property;
