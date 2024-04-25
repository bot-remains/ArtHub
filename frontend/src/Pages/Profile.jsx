import React from "react";
import MasonryGrid from "../Components/Category/MasonryGrid";

import Button from "../Components/Button/Button";

function Profile() {
  const profilePic = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg")`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full px-10 py-5 text-white flex justify-center gap-6">
      <div className="rounded-md w-[25%] h-fit bg-zinc-900 p-4 sticky">
        <h1 className="text-2xl line-clamp-1">Profile Name</h1>
        <hr className="border-secondary border rounded mb-3 mt-2" />
        <h2 className="flex items-start justify-center mt-8">
          <div
            className="rounded-full w-[175px] h-[175px]"
            style={profilePic}
          ></div>
        </h2>
        <p className="px-2 mt-4">Email</p>
        <div className="w-full flex justify-around mt-4">
          <div className="w-[45%]">
            <Button text={"Update"} />
          </div>
          <div className="w-[45%]">
            <Button text={"Delete"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[70%]">
        <div className="rounded-md bg-zinc-900 p-4 flex justify-between items-center text-2xl">
          My Collection
        </div>
        <div className="pt-5">
          <MasonryGrid />
        </div>
      </div>
    </div>
  );
}

export default Profile;
