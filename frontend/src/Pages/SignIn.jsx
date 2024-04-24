import React from "react";
import {useState} from "react";

import Input from "../Components/Input/Input";
import Password from "../Components/Password/Password";
import Button from "../Components/Button/Button";

function SignIn() {
  let [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const handleData = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  };
  const backgroundImage = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713964502/dbihga0bjcm8k9em7mlc.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="w-full flex justify-center items-center text-white">
      <div className="w-[60%] h-[80vh] rounded-lg flex">
        <div
          className="w-[50%] h-full rounded-l-lg"
          style={backgroundImage}
        ></div>
        <div className="rounded-r-lg border-2 border-zinc-600 p-10 pl-16 w-[50%] flex flex-col justify-center">
          <div className="w-fit">
            <h1 className="text-4xl">Sign In</h1>
            <hr className="border-secondary border rounded" />
          </div>
          <form className="mt-10">
            <div className="flex flex-col gap-3 mb-6">
              <Input
                label={"Email"}
                type={"email"}
                placeholder={"abc@xyz.com"}
                value={data.Email}
                handler={handleData}
              />
              <Password
                label={"Password"}
                placeholder={"Password"}
                value={data.Password}
                handler={handleData}
              />
            </div>
            <Button text={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
