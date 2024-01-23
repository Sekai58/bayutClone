import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type IAccordion = {
  title: string;
  list: string[];
};

const Accordion: React.FC<IAccordion> = (props: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className="flex justify-between px-4 p-2 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{props.title}</p>
        <IoIosArrowDown />
      </header>

      <section className={`content ${isOpen ? "" : "hidden"}`}>
        <ul className="px-4">
          {props.list.map((item, idx) => {
            return (
              <li key={idx} className="py-1">
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Accordion;
