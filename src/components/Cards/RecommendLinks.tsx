interface IList {
  title: string;
  list: string[];
}
const RecommendLinks: React.FC<IList> = ({ title, list }) => {
  return (
    <div className="w-full pt-6">
      <p className="w-full font-medium py-1 px-3 bg-[#f5f5f5] rounded-md">
        {title}
      </p>

      <ul className="px-3">
        {list.map((item, idx) => {
          return (
            <li
              key={idx}
              className="text-sm text-[#929292] hover:underline cursor-pointer py-1"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommendLinks;
