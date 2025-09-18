import type HomeCardProps from "@/interfaces/Homecard";
import { RxExternalLink } from "react-icons/rx";

const HomeCard: React.FC<HomeCardProps> = ({ title, description }) => {
  return (
    <div className="relative bg-white  border border-gray-200 rounded-lg shadow-sm p-3 px-4 hover:shadow-md transition-shadow duration-300 h-24">
      <div className="absolute top-3 right-4 text-gray-400 cursor-pointer">
        <RxExternalLink />
      </div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500 mb-4  text-[11px]">{description}</p>
     
    </div>
  );
};

export default HomeCard;
