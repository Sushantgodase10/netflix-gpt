import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[22%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-5 text-sm w-1/3">{overview}</p>
      <div className="my-3 md:m-0">
        <button className= "bg-white text-black py-1 md:py-3 px-1 md:px-10 text-xl rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className= "hidden md:inline-block mx-3 bg-gray-500 text-white p-3 px-11 text-lg bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
