import React from "react";
import {useState} from "react";

import Input from "../Components/Input/Input";
import Password from "../Components/Password/Password";
import Button from "../Components/Button/Button";

function SignUp() {
  let [data, setData] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const handleData = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  };
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/api/v1/user/signup", data, {
  //       withCredentials: true,
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         dispatch(setApiError(error.response.data));
  //       } else {
  //         dispatch(setApiError(error.response));
  //       }
  //     });
  // };
  const backgroundImage = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713964502/z1wbck6pthvrw1ixm9ub.jpg")`,
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
        <div className="rounded-r-lg border-2 border-zinc-600 p-12 w-[50%] flex flex-col justify-center">
          <div className="w-fit">
            <h1 className="text-4xl">Sign Up</h1>
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
              <Password
                label={"ConfirmPassword"}
                placeholder={"Confirm Password"}
                value={data.ConfirmPassword}
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

export default SignUp;
