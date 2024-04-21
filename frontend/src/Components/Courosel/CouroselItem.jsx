import {FaBullhorn} from "react-icons/fa";

function CouroselItem({header, secondaryHeader, description}) {
  return (
    <div className="text-white w-[45%]">
      <div>
        <h1 className="text-5xl font-semibold">{header}</h1>
        <h4 className="text-2xl mt-4 font-medium">{secondaryHeader}</h4>
        <p className="mt-4 line-clamp-5">{description}</p>
      </div>
      <div className="mt-6 flex items-center h-[48px] group w-fit">
        <span className="bg-white text-secondary text-lg h-[48px] w-[48px] flex justify-center items-center transition-all duration-500 group-hover:bg-secondary group-hover:text-white">
          <FaBullhorn />
        </span>
        <button className="px-5 py-3 bg-secondary transition-all duration-500 group-hover:bg-white group-hover:text-secondary">
          Go to overview
        </button>
      </div>
    </div>
  );
}

export default CouroselItem;
