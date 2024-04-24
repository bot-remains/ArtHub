import React from "react";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import {FaPencilAlt, FaRegSquare} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState} from "react";

function Footer() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("");
  };

  return (
    <footer className="w-full p-10 text-white flex flex-col items-center gap-5">
      <div className="w-full flex gap-32 justify-center">
        <div className="flex flex-col max-w-[33%]">
          <Link to="/">
            <div className="text-5xl font-bold flex justify-center">
              <FaPencilAlt className="text-secondary" />
              <p className="text-white">&nbsp; ART</p>
              <p className="text-secondary">HUB</p>
            </div>
          </Link>
          <div className="flex justify-center items-center my-4 text-white">
            <hr className="w-[45%] border-zinc-600 border-2 rounded" />
            <FaRegSquare className="text-secondary mx-2" />
            <hr className="w-[45%] border-zinc-600 border-2 rounded" />
          </div>
          <div className="flex justify-center items-center text-3xl gap-4">
            <FaSquareInstagram className="cursor-pointer" />
            <FaSquareFacebook className="cursor-pointer" />
            <FaSquareXTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
        <div className="max-w-[33%]">
          <hr className="w-[55px] border-secondary border-2 rounded" />
          <ul className="mt-2">
            <li className="text-zinc-400 text-xl">ArtHub</li>
            <li className="mt-2">About Us</li>
            <li className="mt-1">Contact Us</li>
            <li className="mt-1">Terms & Conditions</li>
            <li className="mt-1">Privacy Policy</li>
            <li className="mt-1">Cookies Policy</li>
          </ul>
        </div>
        <div className="w-[425px]">
          <hr className="w-[55px] border-secondary border-2 rounded" />
          <form onSubmit={handleSubmit} className="mt-2">
            <label htmlFor="feedback" className="block text-white text-xl">
              How was your experience?
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="mt-2 block w-full p-2 bg-zinc-900 border border-zinc-600 rounded-md resize-none focus:outline-none"
              placeholder="We'd love to get your feedback..."
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-secondary text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-[80%] border-zinc-600 border rounded mb-3" />
        ArtHub 2024 &#169; All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
