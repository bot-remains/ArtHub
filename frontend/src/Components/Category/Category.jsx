import React from "react";
import {FaRegSquare} from "react-icons/fa";
import bgImage from "../../Public/bg.jpg";
import MasonryGrid from "../MasonryGrid/MasonryGrid";

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
      <h1 className="flex justify-center text-5xl">Latest Post</h1>
      <div className="flex justify-center items-center my-4 text-white">
        <hr className="w-[10%] border-zinc-600 border-2 rounded" />
        <FaRegSquare className="text-secondary mx-2" />
        <hr className="w-[10%] border-zinc-600 border-2 rounded" />
      </div>

      <div className="mt-10 p-12">
        <MasonryGrid />
      </div>
    </div>
  );
}

export default Category;
