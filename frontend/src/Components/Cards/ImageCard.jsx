import React from "react";

function ImageCard({imageUrl}) {
  return (
    <div className="w-fit h-fit border-[10px] cursor-pointer">
      <img src={imageUrl} className="w-[400px]" />
    </div>
  );
}

export default ImageCard;
