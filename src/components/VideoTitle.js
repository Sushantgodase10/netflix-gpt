import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[22%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-5 text-sm w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-3 px-10 text-lg rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className= " mx-3 bg-gray-500 text-white p-3 px-11 text-lg bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
