import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { dropChange } from "../../redux/features/topDropDownSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const drop = useSelector((state: RootState) => {
    return state.topDrop.value;
  });
  return (
    <div
      className={` z-10 ${
        drop === true ? "solid" : "hidden"
      } w-[310px] h-[250px] rounded-md border-[1px]  p-3 absolute top-12 -left-52 sm:-left-72 shadow-xl `}
      onClick={() => dispatch(dropChange(true))}
    >
      <div
        className={`w-full h-[6.5rem] py-1 px-2 rounded-md flex items-center shadow-md `}
      >
        <div className="flex gap-3 items-center">
          <div className={``}>
            <p>ghfgh</p>
            <p className={`text-sm mb-2`}>ghgfh</p>
          </div>
        </div>
      </div>
      <div className={`mt-3 rounded-md px-2 py-1`}></div>
    </div>
  );
};

export default Dropdown;
