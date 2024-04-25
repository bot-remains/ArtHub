import React from "react";

function CommentCard(comment) {
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };
  return (
    <div className="w-[400px] rounded bg-zinc-900 p-4">
      <div className="flex items-start gap-3">
        <div
          className="rounded-full w-[44px] h-[44px]"
          style={profilePic}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-lg">Name</h1>
          <h2 className="text-xs text-zinc-400">On 12 June, 1905</h2>
        </div>
      </div>
      <hr className="w-full border-zinc-600 border rounded mt-3 mb-2 text-zinc-400" />
      <p className="w-full break-words">Comment</p>
    </div>
  );
}

export default CommentCard;
