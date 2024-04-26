import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {IoHomeOutline} from "react-icons/io5";
import axios from "axios";
import {setApiError, setUser} from "../Components/redux/user/userSlice";
import Input from "../Components/Input/Input";
import Password from "../Components/Password/Password";
import Button from "../Components/Button/Button";
import CustomToastContainer from "./../Components/Toastify/CustomToastContainer";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const [data, setData] = useState({
    username: "",
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

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        data,
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        toast.success("User registered successfully");
        dispatch(setUser(response.data.data.username));
        navigate("/");
      }
    } catch (error) {
      try {
        if (error.response && error.response.status === 409) {
          toast.error("Email already registered");
        } else {
          toast.error("An error occurred");
        }
      } catch (err) {
        console.log("Error displaying toast:", err);
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <CustomToastContainer />
      <div className="w-[60%] h-[80vh] rounded-lg flex">
        <div
          className="w-[50%] h-full rounded-l-lg"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713964502/z1wbck6pthvrw1ixm9ub.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="rounded-r-lg border-2 border-zinc-600 p-12 w-[50%] flex flex-col justify-center relative">
          <Link
            to="/"
            className="absolute top-5 right-5 border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center cursor-pointer group hover:border-secondary"
          >
            <IoHomeOutline className="group-hover:text-secondary" />
          </Link>
          <div className="w-fit">
            <h1 className="text-4xl">Sign Up</h1>
            <hr className="border-secondary border rounded" />
          </div>
          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 mb-6">
              <Input
                label={"Username"}
                type={"text"}
                placeholder={"username"}
                value={data.username}
                handler={handleData}
                name={"username"}
              />
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

export default SignUp;
