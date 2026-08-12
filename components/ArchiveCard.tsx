import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  // Client work is not always public, so a card can stand on its own without a link.
  link?: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  const card = (
    <div className="w-full h-full rounded-lg bg-[#112240] p-7 flex flex-col justify-start gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center">
        <FaRegFolder className="text-4xl text-textGreen" />
        {link && <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />}
      </div>
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
          {title}
        </h2>
        <p className="text-sm mt-3">{des}</p>
      </div>
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-x-4 gap-y-1 flex-wrap mt-auto">
        {listItem.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );

  if (!link) return card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="h-full">
      {card}
    </a>
  );
};

export default ArchiveCard;
