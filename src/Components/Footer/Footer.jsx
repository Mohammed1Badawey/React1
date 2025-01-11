import React from "react";

export default function Footer() {
  return (
    <footer class="bg-slate-700 w-full shadow dark:bg-gray-900  ">
      <div class="w-4/5 m-auto p-20">
        <div class="grid grid-cols-3 items-center justify-between gap-y-2 ">
          <div className=" p-4 col-span-3  lg:col-span-1 ">
            <h2 className="text-white text-2xl font-bold py-2">LOCATION</h2>
            <div className="text-white">
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="  col-span-3  lg:col-span-1">
            <h2 className="text-white text-2xl font-bold py-2">
              AROUND THE WEB
            </h2>

            <div className="flex justify-center gap-2 pb-4">
              <div className="border-2 rounded-full border-black w-10 h-10 flex justify-center items-center">
                <i className="fa-brands fa-facebook-f fa-lg text-gray-200"></i>
              </div>

              <div className="border-2 rounded-full border-black w-10 h-10 flex justify-center items-center">
                <i className="fa-brands fa-twitter fa-lg text-gray-200"></i>
              </div>

              <div className="border-2 rounded-full border-black w-10 h-10 flex justify-center items-center">
                <i className="fa-brands fa-linkedin fa-lg text-gray-200"></i>
              </div>

              <div className="border-2 rounded-full border-black w-10 h-10 flex justify-center items-center">
                <i className="fa-brands fa-tiktok fa-lg text-gray-200"></i>
              </div>
            </div>
          </div>

          <div className="col-span-3  lg:col-span-1">
            <h2 className="text-white text-2xl font-bold">ABOUT FREELANCER</h2>
            <p className="pt-4 text-white">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className=" m-auto py-10 bg-slate-900">
        <span class="block text-sm text-gray-500 m-auto">
          © 2023 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
