import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import {IoHomeOutline} from "react-icons/io5";
import ReactLoading from "react-loading";
import CustomToastContainer from "./../Components/Toastify/CustomToastContainer";
import {toast} from "react-toastify";

function UploadArt() {
  const [data, setData] = useState({
    postName: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setData({
      ...data,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("postName", data.postName);
    formData.append("description", data.description);
    formData.append("image", data.image);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/post/createPost",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(response);
      toast.success("Post created successfully");
      setData({
        postName: "",
        description: "",
        image: null,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create post");
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  const handleData = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black text-white">
      <CustomToastContainer />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <ReactLoading type={"spin"} color={"#fff"} height={50} width={50} />
        </div>
      )}
      <div className="relative rounded-lg border-2 border-gray-600 p-10 max-w-lg w-full">
        <Link
          to="/"
          className="absolute top-5 right-5 border-2 border-gray-400 rounded-full w-fit p-2 flex items-center justify-center cursor-pointer group hover:border-secondary"
        >
          <IoHomeOutline className="group-hover:text-secondary" />
        </Link>
        <div className="w-full text-center mb-6">
          <h1 className="text-4xl font-bold">Upload Art</h1>
          <hr className="border-secondary mt-4 mx-auto" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              label="Heading"
              type="text"
              placeholder="Enter the Heading for your art"
              value={data.postName}
              handler={handleData}
              name="postName"
            />
            <div>
              <label htmlFor="About" className="block text-lg">
                About
              </label>
              <textarea
                id="About"
                value={data.description}
                onChange={handleData}
                className="mt-1 block w-full p-3 bg-zinc-900 border border-gray-600 rounded-md resize-none focus:outline-none text-white"
                placeholder="About your art"
                rows="3"
                name="description"
              ></textarea>
            </div>
            <div>
              <label htmlFor="Image" className="block text-lg">
                Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                accept="image/*"
                className="mt-2 mb-4 block w-full p-3 bg-zinc-900 border border-gray-600 rounded-md focus:outline-none text-white"
                name="image"
              />
            </div>
          </div>
          <Button text="Submit" type="submit" disabled={loading} />
        </form>
      </div>
    </div>
  );
}

export default UploadArt;
