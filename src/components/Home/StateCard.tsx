interface IState {
  image: string;
  content: string;
}

const StateCard: React.FC<IState> = ({ image, content }) => {
  return (
    <div className="flex justify-center">
      <div className="border border-[#d6d5d5] rounded-md p-4 w-[90%]">
        <img className="w-[full] h-auto rounded-md" src={image} />
        <p className="line-clamp-2 overflow-hidden">{content}</p>
      </div>
    </div>
  );
};

export default StateCard;
