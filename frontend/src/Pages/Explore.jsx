import React from "react";
import {useState} from "react";
import {FaAngleRight} from "react-icons/fa";
import {FaArrowUp} from "react-icons/fa6";
import SearchBar from "../Components/SearchBar/SearchBar";
import SortBy from "../Components/SortBy/SortBy";
import MasonryGrid from "../Components/Category/MasonryGrid";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop.js";

function Explore() {
  const filterOptions = [
    {id: 1, name: "Option 1asdfasdf"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 2, name: "Option 2"},
    {id: 3, name: "Option 3"},
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  return (
    <div className="w-full px-10 py-5 text-white flex justify-center gap-6 relative">
      <div className="fixed bottom-6 right-8 text-lg rounded-full w-fit p-[16px] flex items-center justify-center text-zinc-200 bg-zinc-600 z-50 cursor-pointer group hover:bg-zinc-500">
        <FaArrowUp className="group-hover:text-white" />
      </div>
      <div className="rounded-md w-[15%] h-fit bg-zinc-900 p-4 ">
        <h1 className="text-2xl">Filter</h1>
        <hr className="border-secondary border rounded mb-3 mt-2" />
        <h2 className="flex items-start">
          <div className="text-base mt-1">
            <FaAngleRight />
          </div>
          <div className="ml-1">
            <p className="text-base">By Resolution</p>
            <div className="text-sm flex flex-col gap-1 mt-1">
              {filterOptions.map((option) => (
                <label key={option.id} className="flex items-center ">
                  <input
                    type="checkbox"
                    value={option.id}
                    checked={selectedFilters.includes(option.id)}
                    onChange={() => toggleFilter(option.id)}
                    className="mr-2"
                  />
                  {option.name}
                </label>
              ))}
            </div>
          </div>
        </h2>
        <h2 className="flex items-start mt-3">
          <div className="text-base mt-1">
            <FaAngleRight />
          </div>
          <div className="ml-1">
            <p className="text-base">By Categories</p>
            <div className="text-sm flex flex-col gap-1 mt-1">
              {filterOptions.map((option) => (
                <label key={option.id} className="flex items-center ">
                  <input
                    type="checkbox"
                    value={option.id}
                    checked={selectedFilters.includes(option.id)}
                    onChange={() => toggleFilter(option.id)}
                    className="mr-2"
                  />
                  {option.name}
                </label>
              ))}
            </div>
          </div>
        </h2>
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="rounded-md bg-zinc-900 p-4 flex justify-between items-center">
          <SearchBar />
          <SortBy />
        </div>
        <div className="pt-5 w-full">
          <MasonryGrid />
        </div>
      </div>
    </div>
  );
}

export default Explore;
