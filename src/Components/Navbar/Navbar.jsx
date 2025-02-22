import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
const headerRef = useRef();
useEffect(()=> {
  window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100) { 
      headerRef.current.style.padding = "12px 0"
    }else{
      headerRef.current.style.padding = "28px 0"
    } 
  })
})

  return (
    <nav ref={headerRef} class=" border-gray-200 z-50 w-full bg-slate-700 py-7 top-0 left-0 fixed transition-all duration-500 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link
          href="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="self-center text-3xl font-bold text-white whitespace-nowrap uppercase dark:text-white">
            Start Framework
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to="about"
                class="block py-2 px-3 text-white font-bold text-lg uppercase rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 transition-all md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="portfolio"
                class="block py-2 px-3 text-white font-bold text-lg uppercase rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 transition-all md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                class="block py-2 px-3 text-white font-bold text-lg uppercase rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 transition-all md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
