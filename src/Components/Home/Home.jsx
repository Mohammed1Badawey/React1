import React from "react";
import mySVG from "../../assets/images/avataaars.svg";

export default function Home() {
  return (
    <div className="bg-[#1abc9c] flex-col h-screen m-auto content-center justify-items-center">
      <img src={mySVG} alt="" className="w-1/5 " />
      <div className="p-5">
        <h1 className="text-center font-bold text-5xl text-white uppercase"> start Framework </h1>
<div className="flex justify-around pt-8 items-center ">
<div className="w-36 h-1  bg-white"></div> 
        <i className="fa-solid fa-star text-white"></i>
        <div className="w-36  h-1 bg-white"></div>
</div>
        <div className="p-3 text-white">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
