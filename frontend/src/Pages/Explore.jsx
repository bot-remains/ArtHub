import React from "react";
import {useState} from "react";
import {FaAngleRight} from "react-icons/fa";
import {FaArrowUp} from "react-icons/fa6";
import SearchBar from "../Components/SearchBar/SearchBar";
import SortBy from "../Components/SortBy/SortBy";
import MasonryGrid from "../Components/MasonryGrid/MasonryGrid.jsx";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.js";
import CustomToastContainer from "./../Components/Toastify/CustomToastContainer";

function Explore() {
  return (
    <div className="w-full  py-5 text-white flex justify-center gap-6 relative">
      <div className="flex flex-col w-[80%]">
        <div className="pt-5 w-full">
          <MasonryGrid />
          <CustomToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Explore;
