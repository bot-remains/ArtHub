import React, {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setApiError, setComment} from "../redux/comment/comment";

function CommentCard() {
  const dispatch = useDispatch();
  const {comment} = useSelector((state) => state.comment);
  const {id} = useParams();
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  useEffect(() => {
    fetchCommentData(id);
  }, [id]);

  const fetchCommentData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/post/showComment/${id}`,
      );
      dispatch(setComment(response.data.data));
    } catch (error) {
      console.error("Error fetching comments:", error);
      dispatch(setApiError(error.message));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {comment && comment.comments ? (
        comment.comments.map((commentItem, index) => (
          <div key={index}>
            <div className="w-[400px] rounded bg-zinc-900 p-4">
              <div className="flex items-start gap-3">
                <p className="bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full text-white">
                  {commentItem.userId.username[0]}
                </p>
                <div className="flex flex-col">
                  <h1 className="text-lg">{commentItem.userId.username}</h1>
                  <h2 className="text-xs text-white">
                    {new Date(commentItem.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </h2>
                </div>
              </div>
              <hr className="w-full border-zinc-600 border rounded mt-3 mb-2 text-zinc-400" />
              <p className="w-full break-words">{commentItem.review}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No comments found</p>
      )}
    </div>
  );
}

export default CommentCard;
