import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import axios from "axios";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";

import {FaAngleDown} from "react-icons/fa";
import {IoIosClose} from "react-icons/io";
import {IoHomeOutline} from "react-icons/io5";

function UploadArt() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [data, setData] = useState({
    Heading: "",
    Tags: [],
    About: "",
    Image: "",
  });

  const handleData = (e) => {
    const {id} = e.target;
    if (id === "Tags") {
      const selectedTag = e.target.textContent;
      console.log();
      if (!data.Tags.includes(selectedTag)) {
        setData({...data, Tags: [...data.Tags, selectedTag]});
      }
    } else {
      setData({...data, [id]: e.target.value});
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = data.Tags.filter((tag) => tag !== tagToRemove);
    setData({...data, Tags: updatedTags});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <div className="relative text-white rounded-lg border-2 border-zinc-600 p-10 w-[707.2px]">
        <Link
          to="/"
          className="absolute top-5 right-5 border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center cursor-pointer group hover:border-secondary"
        >
          <IoHomeOutline className="group-hover:text-secondary" />
        </Link>
        <div className="w-fit">
          <h1 className="text-4xl">Upload Art</h1>
          <hr className="border-secondary border rounded" />
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <section className="flex gap-6">
              <div className="flex flex-col gap-3 w-[300px]">
                <Input
                  label={"Heading"}
                  type={"text"}
                  placeholder={"Enter the Heading for your art"}
                  value={data.Heading}
                  handler={handleData}
                />
                <div>
                  <label htmlFor="About" className="block text-white text-lg">
                    About
                  </label>
                  <textarea
                    id="About"
                    value={data.About}
                    onChange={handleData}
                    className="mt-1 block w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md resize-none focus:outline-none"
                    placeholder="About your art"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-[300px]">
                <div>
                  <label htmlFor="Image" className="block text-white text-lg">
                    Image
                  </label>
                  <input
                    type="file"
                    id="Image"
                    onChange={handleData}
                    accept="image/*"
                    className="mt-1 block w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md focus:outline-none"
                  />
                </div>

                <div>
                  <p htmlFor="Tags" className="block text-white text-lg">
                    Tags
                  </p>
                  <div
                    onClick={() => setShowDropDown(!showDropDown)}
                    className="relative flex items-center justify-between mt-1 w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md focus:outline-none cursor-pointer"
                  >
                    Select tags
                    <FaAngleDown />
                    <ul
                      className={`h-[100px] overflow-x-hidden overflow-y-auto absolute top-[55px] left-0 z-50 bg-zinc-900 p-3 border border-zinc-600 rounded-md w-full ${showDropDown ? "" : "hidden"}`}
                      style={{scrollbarWidth: "none"}}
                    >
                      <li
                        id="Tags"
                        onClick={handleData}
                        className="hover:bg-blue-600 h-[25px] flex items-center"
                      >
                        Landscape
                      </li>
                      <li
                        id="Tags"
                        onClick={handleData}
                        className="hover:bg-blue-600 h-[25px] flex items-center"
                      >
                        Portrait
                      </li>
                      <li
                        id="Tags"
                        onClick={handleData}
                        className="hover:bg-blue-600 h-[25px] flex items-center"
                      >
                        Abstract
                      </li>
                      <li
                        id="Tags"
                        onClick={handleData}
                        className="hover:bg-blue-600 h-[25px] flex items-center"
                      >
                        Nature
                      </li>
                      <li
                        id="Tags"
                        onClick={handleData}
                        className="hover:bg-blue-600 h-[25px] flex items-center"
                      >
                        Architecture
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex flex-wrap justify-center items-center gap-2 w-full my-4 min-h-[40px]">
              {data.Tags.map((tag, i) => (
                <div
                  key={i}
                  className="p-2 pr-3 rounded-full w-fit bg-zinc-900 flex items-center text-sm"
                >
                  <IoIosClose
                    onClick={() => removeTag(tag)}
                    className="text-2xl mr-1 cursor-pointer"
                  />
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <Button text={"Submit"} />
        </form>
      </div>
    </div>
  );
}

export default UploadArt;
