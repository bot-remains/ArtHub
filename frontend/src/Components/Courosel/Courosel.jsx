import React, {useState, useEffect} from "react";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import CouroselItem from "./CouroselItem";

function Courosel({images}) {
  const [idx, setIdx] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    }, 5000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [images.length, idx]);

  const scrollLeft = () => {
    clearInterval(intervalId);
    idx === 0 ? setIdx(images.length - 1) : setIdx(idx - 1);
  };

  const scrollRight = () => {
    clearInterval(intervalId);
    idx === images.length - 1 ? setIdx(0) : setIdx(idx + 1);
  };

  const styles = {
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 25%,
        rgba(0, 0, 0, 0.875) 80%
      ),
      url(${images[idx].url})
    `,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full h-[85vh] relative overflow-hidden">
      <div
        onClick={scrollLeft}
        className="text-6xl text-zinc-500 hover:text-white transition-all duration-300 px-2 py-5 select-none h-[80px] z-20 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer flex justify-start items-center rounded-r-xl "
      >
        <RiArrowLeftSLine />
      </div>
      <div
        onClick={scrollRight}
        className="text-6xl text-zinc-500 hover:text-white transition-all duration-300 px-2 py-5 select-none h-[80px] z-20 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer flex justify-start items-center rounded-l-xl "
      >
        <RiArrowRightSLine />
      </div>
      <div style={styles} className="w-full h-full"></div>

      <div className="absolute top-[20%] left-[10%] ">
        <CouroselItem
          key={idx}
          header={images[idx].header}
          secondaryHeader={images[idx].secondaryHeader}
          description={images[idx].description}
        />
      </div>

      <div className="px-16 py-6 absolute bottom-0 w-full flex flex-wrap justify-center items-center gap-6 gap-x-10">
        <div className="flex items-center justify-center absolute top-[-15%] left-1/2 transform -translate-x-1/2 gap-2 text-xs">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIdx(i)}
              className={`cursor-pointer w-7 h-1 bg-secondary ${
                idx === i ? "opacity-100" : "opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courosel;
