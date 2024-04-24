import React from "react";
import {FaRegSquare} from "react-icons/fa";
import {
  PiNumberSquareOneBold,
  PiNumberSquareTwoBold,
  PiNumberSquareThreeBold,
} from "react-icons/pi";

function About() {
  const backgroundImage = {
    backgroundImage: `url("https://res.cloudinary.com/djdegiywz/image/upload/v1713954489/wvcskast73pa2q9w0e34.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full text-white flex flex-col justify-between gap-16">
      <div className="w-[90%] flex aling-start">
        <img
          className="w-[50%]"
          src="https://res.cloudinary.com/djdegiywz/image/upload/v1713960035/bqpeaha2js6yygklgnq6.jpg"
        />
        <div className="p-4 pl-10 rounded-md">
          <div className="w-fit">
            <h1 className="text-4xl">About Us</h1>
            <hr className="border-secondary border rounded mb-3" />
          </div>
          <p>
            &emsp;&emsp;&emsp;ArtHub is your go-to online destination for
            exploring a world of artistic wonders! Dive into a virtual gallery
            brimming with captivating artworks from talented creators around the
            globe. Whether you're browsing for inspiration or looking to add a
            masterpiece to your collection, ArtHub makes discovering and
            connecting with art easy and enjoyable.
          </p>
        </div>
      </div>
      <div className="w-[90%] flex self-end">
        <div className="p-4 pr-10 rounded-md">
          <div className="w-fit">
            <h1 className="text-4xl">Our art</h1>
            <hr className="border-secondary border rounded mb-3" />
          </div>
          <p>
            &emsp;&emsp;&emsp; Welcome to ArtHub's Art Section, where you'll
            discover a world of creativity without limits! Dive into vibrant
            paintings, intriguing sculptures, and more. Meet the talented
            artists behind the magic through exclusive interviews and
            spotlights. Join our friendly community to share your thoughts and
            art. Stay updated with the latest news and trends in the art world.
            Let ArtHub be your gateway to endless inspiration and exploration!
          </p>
        </div>
        <img
          className="w-[50%]"
          src="https://res.cloudinary.com/djdegiywz/image/upload/v1713960037/iofnep00oao75htxwtlr.jpg"
        />
      </div>

      <div className="bg-zinc-900 p-8 ">
        <div className="w-full text-white">
          <h1 className="flex justify-center text-5xl">Top Features</h1>
          <div className="flex justify-center items-center my-4 text-white">
            <hr className="w-[10%] border-zinc-600 border-2 rounded" />
            <FaRegSquare className="text-secondary mx-2" />
            <hr className="w-[10%] border-zinc-600 border-2 rounded" />
          </div>
        </div>
        <div className="px-44">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-secondary">
              <PiNumberSquareOneBold />
            </div>
            <div>
              <div className="w-fit">
                <p className="text-3xl">Exploration</p>
                <hr className="border-secondary border rounded mb-3" />
              </div>
              <p className="text-md mt-1">
                At ArtHub, you can explore lots of different types of art! From
                colorful paintings to cool sculptures, there's something for
                everyone. Use our easy menu to find what you like best. You
                might discover new artists you've never heard of before or learn
                about different styles of art. It's like going on an adventure,
                but with art! So come on, let's start exploring together!
              </p>
            </div>
          </div>
        </div>
        <div className="px-44 mt-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-secondary">
              <PiNumberSquareTwoBold />
            </div>
            <div>
              <div className="w-fit">
                <p className="text-3xl ">Community</p>
                <hr className="border-secondary border rounded mb-3" />
              </div>
              <p className="text-md mt-1">
                Join our friendly and inclusive community of art lovers from
                around the world. Share your thoughts, ideas, and artwork with
                others who share your passion. Engage in lively discussions,
                participate in events, and connect with fellow enthusiasts.
                Whether you're a seasoned artist or just starting out, you'll
                find support, encouragement, and a sense of belonging here at
                ArtHub's Community Corner.
              </p>
            </div>
          </div>
        </div>
        <div className="px-44 mt-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-secondary">
              <PiNumberSquareThreeBold />
            </div>
            <div>
              <div className="w-fit">
                <p className="text-3xl ">Analyze</p>
                <hr className="border-secondary border rounded mb-3" />
              </div>
              <p className="text-md mt-1">
                At ArtHub, our goal is to help you understand and appreciate art
                in a fun and easy way. We've designed our website to be
                user-friendly, so you can explore different artworks, learn
                about artists, and join discussions with ease. With features
                like artist spotlights, news updates, and community forums,
                you'll find everything you need to dive into the world of art.
                Whether you're a beginner or a seasoned enthusiast, our website
                is here to make your art journey enjoyable and fulfilling. So
                come on in, explore, and let your creativity soar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
