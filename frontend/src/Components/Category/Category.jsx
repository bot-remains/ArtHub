import React from "react";
import {FaRegSquare} from "react-icons/fa";
import bgImage from "../../Public/bg.jpg";
import MasonryGrid from "./MasonryGrid.jsx";

function Category() {
  const styles = {
    backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.55) 50%,
            rgba(0, 0, 0, 0.55) 50%
          ),
          url(${bgImage})
        `,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="p-8 w-full min-h-screen h-auto text-white" style={styles}>
      <h1 className="flex justify-center text-5xl">Categories</h1>
      <div className="flex justify-center items-center my-4 text-white">
        <hr className="w-[10%] border-zinc-600 border-2 rounded" />
        <FaRegSquare className="text-secondary mx-2" />
        <hr className="w-[10%] border-zinc-600 border-2 rounded" />
      </div>

      <div className="mt-8 flex justify-center items-center gap-6">
        <button className="bg-primary border border-zinc-600 rounded py-2 px-3 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
          Wallpapers
        </button>
        <button className="bg-primary border border-zinc-600 rounded py-2 px-3 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
          Sketches
        </button>
        <button className="bg-primary border border-zinc-600 rounded py-2 px-3 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
          Paintings
        </button>
      </div>
      <MasonryGrid />
    </div>
  );
}

export default Category;
