import React from "react";
import {FaArrowDown, FaRegHeart, FaShare, FaPlus} from "react-icons/fa6";

function ImageCard({imageUrl}) {
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  return (
    <div className="w-fit h-fit border-[10px] cursor-pointer relative group/card">
      <div className="w-full h-full absolute top-0 z-10 bg-black opacity-50 hidden group-hover/card:block"></div>
      <div className="absolute w-full text-sm text-zinc-400 p-3 top-0 z-20 bg-gradient-to-b from-black hidden group-hover/card:flex justify-between ">
        <div className="flex items-center justify-start ">
          <div className="border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <FaRegHeart className="group-hover:text-secondary" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="border-[2px] border-zinc-400  rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <FaShare className="group-hover:text-secondary" />
          </div>
          <div className="border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <FaPlus className="group-hover:text-secondary" />
          </div>
        </div>
      </div>
      <div className="absolute w-full p-3 bottom-0 z-20 bg-gradient-to-t from-black hidden group-hover/card:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="rounded-full w-[35px] h-[35px]"
            style={profilePic}
          ></div>
          <div className="text">name</div>
        </div>
        <div className="border-[2px] text-sm text-zinc-400 border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
          <FaArrowDown className="group-hover:text-secondary" />
        </div>
      </div>
      <img src={imageUrl} className="w-[400px]" />
    </div>
  );
}

export default ImageCard;
