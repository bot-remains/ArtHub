import React, {useEffect, useState} from "react";
import {useRef} from "react";
import {FaArrowDown, FaRegHeart, FaShare, FaPlus} from "react-icons/fa6";
import {v4 as uuidv4} from "uuid";

import CommentCard from "../Components/Cards/CommentCard";
import Button from "../Components/Button/Button";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setPost} from "../Components/redux/post/post";
import CustomToastContainer from "./../Components/Toastify/CustomToastContainer";
import {setComment} from "../Components/redux/comment/comment";
function Art() {
  const dispatch = useDispatch();
  const {post} = useSelector((state) => state.post);
  const {comment} = useSelector((state) => state.comment);
  const [review, setReview] = useState("");
  const [count, setCount] = useState();
  const id = useParams();
  const [showButton, setShowButton] = useState(true);
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  const handleReviewSubmit = async (e, id) => {
    e.preventDefault();
    try {
      console.log(review);
      const res = await axios.post(
        `http://localhost:3000/api/v1/post/addComment/${id}`,
        {review},
        {
          withCredentials: true,
        },
      );
      fetchCommentData(id);
      // dispatch(setComment(res.data.data));
      console.log(res.data.data);
      console.log("Comment submitted successfully");
      setReview("");
    } catch (error) {
      console.log("Error submitting comment:", error);
      // Handle error if needed
    }
  };
  const addToSave = async (e, id) => {
    e.stopPropagation();
    await axios.get(`http://localhost:3000/api/v1/post/savePost/${id}`, {
      withCredentials: true,
    });
    console.log(id);
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

  const fetchCommentData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/post/showComment/${id}`,
      );
      dispatch(setComment(response.data.data));
      setCount(response.data.data.count);
      console.log(response.data.data.count);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    console.log(id.id);
    fetchCommentData(id.id);
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(`http://localhost:3000/api/v1/post/showPost/${id.id}`)
      .then((response) => {
        // console.log(response);
        dispatch(setPost(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-white py-10 flex flex-col justify-center items-center">
      <CustomToastContainer />
      <div className="w-[95%] flex">
        <div className="w-[60%] flex justify-center items-center">
          <img className="max-h-[600px] object-cover" src={post?.image} />
        </div>
        <div className="w-[40%] max-h-[600px] pl-8 overflow-hidden flex flex-col">
          <h1 className="text-2xl w-1/2">{post?.postName}</h1>
          <hr className="border-zinc-600 border rounded my-2 text-zinc-400" />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              {/* <div
                className="rounded-full w-[45px] h-[45px]"
                style={profilePic}
              ></div> */}
              <p className="bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full text-white">
                {post?.userId?.username[0]}
              </p>
              <div className="text-lg">
                {post?.userId?.username || "Not Found"}
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-end gap-2 text-base text-zinc-400">
              {/* <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                <FaRegHeart className="group-hover:text-secondary" />
              </div> */}
              <button
                onClick={(e) => {
                  addToSave(e, post._id);
                }}
              >
                <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                  <FaPlus className="group-hover:text-secondary" />
                </div>
              </button>
              <button
                onClick={(e) => {
                  handleShare(e, post._id);
                }}
              >
                <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                  <FaShare className="group-hover:text-secondary" />
                </div>
              </button>
              <button
                onClick={(e) => {
                  downloadPost(e, post.image);
                }}
              >
                <div className="cursor-pointer border-2 border-zinc-400 rounded-full w-fit p-[6px] flex items-center justify-center group hover:border-secondary">
                  <FaArrowDown className="group-hover:text-secondary" />
                </div>
              </button>
            </div>
          </div>
          <div className="mt-4 bg-zinc-900 p-3 rounded-md flex-grow">
            <div className="text-sm text-zinc-400">
              {
                new Date(post?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                // .replace(/(\d{4})/)
              }
            </div>
            <div className="text-base mt-2">{post?.description}</div>
          </div>
        </div>
      </div>
      <div className="self-start mt-10 px-10 w-full">
        <div className="flex items-start">
          {/* <div className="text-3xl">
            {count}
            <hr className="border-zinc-600 border rounded my-2 text-zinc-400" />
          </div> */}
          <div className="flex flex-grow items-start gap-3 ml-10">
            {/* <div
              className="rounded-full w-[45px] h-[45px]"
              style={profilePic}
            ></div> */}
            <form
              className="w-full flex flex-col"
              onSubmit={(e) => {
                handleReviewSubmit(e, id.id);
              }}
            >
              <textarea
                placeholder="Add a comment..."
                className="w-full overflow-hidden px-4 py-2 bg-black border-b border-zinc-600 text-white focus:border-white focus:outline-none resize-none h-auto"
                style={{resize: "none"}}
                rows={1}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
                name="review"
                onFocus={() => setShowButton(true)}
                onBlur={() => setShowButton(true)} // Changed from true to false
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              ></textarea>

              <div className={`self-end mt-2 ${showButton ? "" : "hidden"}`}>
                <button
                  type="submit"
                  className="ml-2 bg-secondary px-4 py-2 rounded text-white"
                >
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
