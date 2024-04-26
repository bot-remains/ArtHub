import React from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import Input from "../Components/Input/Input";
import Password from "../Components/Password/Password";
import Button from "../Components/Button/Button";

import {IoHomeOutline} from "react-icons/io5";
import {setApiError, setUser} from "../Components/redux/user/userSlice";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, apiError} = useSelector((state) => state.user);
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/auth/login", data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        dispatch(setUser(response.data.data.user.username));
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          dispatch(setApiError(error.response.data));
        } else {
          dispatch(setApiError(error.response));
        }
      });
  };

  const backgroundImage = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713964502/dbihga0bjcm8k9em7mlc.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <div className="w-[60%] h-[80vh] rounded-lg flex">
        <div
          className="w-[50%] h-full rounded-l-lg"
          style={backgroundImage}
        ></div>
        <div className="rounded-r-lg border-2 border-zinc-600 p-10 w-[50%] flex flex-col justify-center relative">
          <Link
            to="/"
            className="absolute top-5 right-5 border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center cursor-pointer group hover:border-secondary"
          >
            <IoHomeOutline className="group-hover:text-secondary" />
          </Link>
          <div className="w-fit">
            <h1 className="text-4xl">Sign In</h1>
            <hr className="border-secondary border rounded" />
          </div>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-3 mb-6">
              <Input
                label={"Email"}
                type={"email"}
                placeholder={"abc@xyz.com"}
                value={data.email}
                handler={handleData}
                name={"email"}
              />
              <Password
                label={"Password"}
                placeholder={"Password"}
                value={data.password}
                handler={handleData}
                name={"password"}
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
