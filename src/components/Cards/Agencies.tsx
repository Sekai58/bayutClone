interface IFeaturedAgency {
  image: string;
  title: string;
}
const Agencies: React.FC<IFeaturedAgency> = ({ image, title }) => {
  return (
    <div className="w-full  px-6">
      <div className="h-[15rem] overflow-hidden rounded-lg  w-full border flex flex-col">
        <div className="flex-1 border-b flex justify-center items-center py-4">
          <img className="h-[5rem] w-auto" src={image} />
        </div>

        <div className="flex-1 flex justify-center mt-2">
          <h3 className="font-medium text-md px-2">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
