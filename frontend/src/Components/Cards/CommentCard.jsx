import React from "react";

function CommentCard(comment) {
  return (
    <div className="w-[400px] rounded">
      <div className="flex items-center gap-3">
        <div
          className="rounded-full w-[45px] h-[45px]"
          style={profilePic}
        ></div>
        <div className="text-lg">name</div>
      </div>
    </div>
  );
}

export default CommentCard;
