import React from "react";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

export default function Portfolio() {
  const images = [{ img1 }, { img2 }, { img3 }];

  return (
    <>
      <div className="container m-auto p-14 mt-24">
        

      
          <h1 className="text-center font-bold text-5xl uppercase">
          portfolio component
          </h1>
          <div className="flex justify-center pt-8 items-center ">
            <div className="w-36 h-1 me-5 bg-black "></div>
            <i className="fa-solid fa-star "></i>
            <div className="w-36 ms-5 h-1 bg-black"></div>
          </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-7 gap-12">

        <div className="relative group">
          <img src={img1} alt="../../images/poert1.png" className="w-full rounded-md" />
          <div className="bg-green-700 opacity-0  group-hover:opacity-70 absolute inset-0 flex justify-center items-center transition-all duration-500" >
            <div><i className="text-white fa-solid fa-plus fa-6x "></i></div>
          </div>
        </div>

        <div className="relative group">
          <img src={img2} alt="" className="w-full rounded-md" /><div className="bg-green-700 opacity-0  group-hover:opacity-70 absolute inset-0 flex justify-center items-center transition-all duration-500" >
            <div><i className="text-white fa-solid fa-plus fa-6x "></i></div>
          </div>
        </div>

        <div className="relative group">
          <img src={img3} alt="" className="w-full rounded-md" /><div className="bg-green-700 opacity-0  group-hover:opacity-70 absolute inset-0 flex justify-center items-center transition-all duration-500" >
            <div><i className="text-white fa-solid fa-plus fa-6x "></i></div>
          </div>
        </div>

        <div className="relative group">
          <img src={img1} alt="" className="w-full rounded-md" /><div className="bg-green-700 opacity-0  group-hover:opacity-70 absolute inset-0 flex justify-center items-center transition-all duration-500" >
            <div><i className="text-white fa-solid fa-plus fa-6x "></i></div>
          </div>
        </div>

        <div className="relative group">
          <img src={img2} alt="" className="w-full rounded-md" /><div className="bg-green-700 opacity-0  group-hover:opacity-70 absolute inset-0 flex justify-center items-center transition-all duration-500" >
            <div><i className="text-white fa-solid fa-plus fa-6x "></i></div>
          </div>
        </div>

        <div className="relative group">
          <img src={img3} alt="" className="w-full rounded-md" /><div className="bg-green-700 opacity-0  group-hover:opacity-70 absolute inset-0 flex justify-center items-center transition-all duration-500" >
            <div><i className="text-white fa-solid fa-plus fa-6x "></i></div>
          </div>
        </div>
        </div>
      </div>

      
    </>
  );
}
