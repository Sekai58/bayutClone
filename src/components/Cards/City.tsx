interface ICity {
  title: string;
  image: any;
}
const City: React.FC<ICity> = (props: ICity) => {
  return (
    <div className="group cursor-pointer relative overflow-hidden border rounded-lg">
      <img
        src={props.image}
        alt="Image"
        className="w-full h-32 object-cover scr rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <h5 className="font-medium p-3">{props.title} &#11166;</h5>
    </div>
  );
};

export default City;
