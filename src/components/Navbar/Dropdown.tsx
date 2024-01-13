import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { dropChange } from "../../redux/features/topDropDownSlice";

interface IDropdown {
  dropTitle: String;
  list: String[];
}

const Dropdown: React.FC<IDropdown> = ({ list, dropTitle }) => {
  const dispatch = useDispatch();
  const drop = useSelector((state: RootState) => {
    return state.topDrop.value;
  });
  return (
    <div
      className={` z-10 ${
        drop === dropTitle ? "solid" : "hidden"
      } w-full border border-[#c2c2c2] rounded-md flex flex-col gap-2 p-2 text-sm shadow-xl shadow-[#dddddd] bg-white`}
      onClick={() => dispatch(dropChange(true))}
    >
      {list.map((listItem: String, idx) => {
        return (
          <p key={idx} className="cursor-pointer hover:underline">
            {listItem}
          </p>
        );
      })}
    </div>
  );
};

export default Dropdown;
