import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import {IoHomeOutline} from "react-icons/io5";

function UploadArt() {
  const [data, setData] = useState({
    postName: "",
    description: "",
    image: null,
  });

  const handleFileChange = (e) => {
    setData({
      ...data,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postName", data.postName);
    formData.append("description", data.description);
    formData.append("image", data.image);
    axios
      .post("http://localhost:3000/api/v1/post/createPost", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleData = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <div className="relative text-white rounded-lg border-2 border-zinc-600 p-10 w-[707.2px]">
        <Link
          to="/"
          className="absolute top-5 right-5 border-[2px] border-zinc-400 rounded-full w-fit p-[8px] flex items-center justify-center cursor-pointer group hover:border-secondary"
        >
          <IoHomeOutline className="group-hover:text-secondary" />
        </Link>
        <div className="w-fit">
          <h1 className="text-4xl">Upload Art</h1>
          <hr className="border-secondary border rounded" />
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
          <div>
            <section className="flex gap-6">
              <div className="flex flex-col gap-3 w-[300px]">
                <Input
                  label={"Heading"}
                  type={"text"}
                  placeholder={"Enter the Heading for your art"}
                  value={data.postName}
                  handler={handleData}
                  name={"postName"}
                />
                <div>
                  <label htmlFor="About" className="block text-white text-lg">
                    About
                  </label>
                  <textarea
                    id="About"
                    value={data.description}
                    onChange={handleData}
                    className="mt-1 block w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md resize-none focus:outline-none"
                    placeholder="About your art"
                    rows="3"
                    name="description"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-[300px]">
                <div>
                  <label htmlFor="Image" className="block text-white text-lg">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="mt-1 block w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md focus:outline-none"
                    name="image"
                  />
                </div>
              </div>
            </section>
          </div>
          <Button text={"Submit"} />
        </form>
      </div>
    </div>
  );
}

export default UploadArt;
