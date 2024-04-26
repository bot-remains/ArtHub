import React from "react";
import {v4 as uuidv4} from "uuid";
import {FaArrowDown, FaRegHeart, FaShare, FaPlus} from "react-icons/fa6";
import axios from "axios";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

function ImageCard({imageUrl, id, name}) {
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  const addToSave = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/post/savePost/${id}`,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Post added to saved posts");
      } else if (response.status === 201) {
        toast.dark("Post already saved");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Please Login");
      } else {
        toast.error("Failed to add post to saved posts");
      }
    }
  };

  const downloadPost = async (e, id) => {
    e.stopPropagation();
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

  const handleShare = async (e, imageUrl) => {
    e.stopPropagation();
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
          <div>
            {/* <FaRegHeart className="group-hover:text-secondary" /> */}
            <button
              onClick={(e) => {
                handleShare(e, imageUrl);
              }}
            >
              <div className="border-[2px] border-zinc-400  rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
                <FaShare className="group-hover:text-secondary" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button onClick={(e) => addToSave(e, id)}>
            <div className="border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
              <FaPlus className="group-hover:text-secondary" />
            </div>
          </button>
        </div>
      </div>
      <div className="absolute w-full p-3 bottom-0 z-20 bg-gradient-to-t from-black hidden group-hover/card:flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* <div
            className="rounded-full w-[35px] h-[35px]"
            style={profilePic}
          ></div> */}
          <div className="text">{name || "Unknown User"}</div>
        </div>
        <button onClick={(e) => downloadPost(e, imageUrl)}>
          <div className="border-[2px] text-sm text-zinc-400 border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center group hover:border-secondary">
            <FaArrowDown className="group-hover:text-secondary" />
          </div>
        </button>
      </div>
      <img src={imageUrl} className="w-full" />
    </>
  );
}

export default ImageCard;
