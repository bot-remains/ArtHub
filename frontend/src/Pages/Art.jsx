import React, {useState} from "react";
import {useRef} from "react";
import {FaArrowDown, FaRegHeart, FaShare, FaPlus} from "react-icons/fa6";

import CommentCard from "../Components/Cards/CommentCard";
import Button from "../Components/Button/Button";

function Art() {
  const [showButton, setShowButton] = useState(false);
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };
  return (
    <div className="text-white py-10 flex flex-col justify-center items-center">
      <div className="w-[95%] flex">
        <div className="w-[60%] flex justify-center items-center">
          <img
            className="max-h-[600px] object-cover"
            src="https://res.cloudinary.com/djdegiywz/image/upload/v1713708336/f4cub5ksyr7uevbxvgqn.jpg"
          />
        </div>
        <div className="w-[40%] max-h-[600px] pl-8 overflow-hidden flex flex-col">
          <h1 className="text-2xl w-1/2">Heading</h1>
          <hr className="border-zinc-600 border rounded my-2 text-zinc-400" />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div
                className="rounded-full w-[45px] h-[45px]"
                style={profilePic}
              ></div>
              <div className="text-lg">name</div>
            </div>
            <div className="w-1/2 flex items-center justify-end gap-2 text-base text-zinc-400">
              <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                <FaRegHeart className="group-hover:text-secondary" />
              </div>
              <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                <FaPlus className="group-hover:text-secondary" />
              </div>
              <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                <FaShare className="group-hover:text-secondary" />
              </div>
              <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                <FaArrowDown className="group-hover:text-secondary" />
              </div>
            </div>
          </div>
          <div className="mt-4 bg-zinc-900 p-3 rounded-md flex-grow">
            <div className="text-sm text-zinc-400">
              Uploaded on June 12, 2034.
            </div>
            <div className="text-base mt-2">About</div>
          </div>
        </div>
      </div>
      <div className="self-start mt-10 px-10 w-full">
        <div className="flex items-start">
          <div className="text-3xl">
            343 Comments
            <hr className="border-zinc-600 border rounded my-2 text-zinc-400" />
          </div>
          <div className="flex flex-grow items-start gap-3 ml-10">
            <div
              className="rounded-full w-[45px] h-[45px]"
              style={profilePic}
            ></div>
            <form className="w-full flex flex-col">
              <textarea
                placeholder="Add a comment..."
                className="w-full overflow-hidden px-4 py-2 bg-black border-b border-zinc-600 text-white focus:border-white focus:outline-none resize-none h-auto"
                style={{resize: "none"}}
                rows={1}
                onFocus={() => setShowButton(true)}
                onBlur={() => setShowButton(false)}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              ></textarea>
              <div className={`self-end mt-2 ${showButton ? "" : "hidden"}`}>
                <button className="ml-2 bg-secondary px-4 py-2 rounded text-white">
                  Submit
                </button>
                <button className="ml-2 bg-black px-4 py-2 rounded border border-zinc-400">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 px-4">
          <CommentCard />
        </div>
      </div>
    </div>
  );
}

export default Art;
