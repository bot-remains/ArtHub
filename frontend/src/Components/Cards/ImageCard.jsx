import React from "react";
import {v4 as uuidv4} from "uuid";
import {FaArrowDown, FaRegHeart, FaShare, FaPlus} from "react-icons/fa6";
import axios from "axios";
import {useParams} from "react-router-dom";

function ImageCard({imageUrl, id, name}) {
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };
  const addToSave = async (id) => {
    await axios.get(`http://localhost:3000/api/v1/post/savePost/${id}`, {
      withCredentials: true,
    });
    console.log(id);
  };

  const downloadPost = async (id) => {
    try {
      const response = await axios.get(id, {
        responseType: "blob",
      });
      const blob = new Blob([response.data]);
      const uuid = uuidv4(); // Generate UUID for filename
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${uuid}.jpg`); // Set filename with UUID
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleShare = async (imageUrl) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: imageUrl,
          text: "Check out this image!",
          url: imageUrl,
        });
      } else {
        console.log("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      <div className="w-full h-full absolute top-0 z-10 bg-black opacity-50 hidden group-hover/card:block"></div>
      <div className="absolute w-full text-sm text-zinc-400 p-3 top-0 z-20 bg-gradient-to-b from-black hidden group-hover/card:flex justify-between ">
        <div className="flex items-center justify-start ">
          <div className="border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <FaRegHeart className="group-hover:text-secondary" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="border-[2px] border-zinc-400  rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <button
              onClick={() => {
                handleShare(imageUrl);
              }}
            >
              <FaShare className="group-hover:text-secondary" />
            </button>
          </div>
          <div className="border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <button onClick={() => addToSave(id)}>
              <FaPlus className="group-hover:text-secondary" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute w-full p-3 bottom-0 z-20 bg-gradient-to-t from-black hidden group-hover/card:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className="rounded-full w-[35px] h-[35px]"
            style={profilePic}
          ></div>
          <div className="text">{name}</div>
        </div>
        <div className="border-[2px] text-sm text-zinc-400 border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
          <button onClick={() => downloadPost(imageUrl)}>
            <FaArrowDown className="group-hover:text-secondary" />
          </button>
        </div>
      </div>
      <img src={imageUrl} className="w-full" />
    </>
  );
}

export default ImageCard;
