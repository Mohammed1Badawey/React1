import React, { useState } from "react";

export default function About() {
  return (
    <>
      <div className="bg-[#1abc9c] flex-col h-lvh pt-4 m-auto content-center justify-items-center	">
        <div className="p-5">
          <h1 className="text-center font-bold text-5xl text-white uppercase">
            about component
          </h1>
          <div className="flex justify-center pt-8 items-center ">
            <div className="w-36 h-1 me-5  bg-white"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="w-36 ms-5 h-1 bg-white"></div>
          </div>

          <div className="p-5 lg:w-3/4 w-full flex flex-col content-center justify-center  mt-5 m-auto text-start md:flex-row">
          <p className="p-3 text-white text-justify">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="p-3  text-white text-justify">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
