import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav class="flex items-center justify-between flex-wrap bg-white p-6 pb-[1rem] lg:pb-6 fixed z-20 w-full shadow-sm shadow-gray-300 ">
          <div class="flex items-center flex-shrink-0 text-teal-500 mr-6">
            {/* <svg
              class="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg> */}
            <div class="block lg:hidden">
              <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div class="font-semibold text-2xl tracking-tight ml-3 lg:ml-[6rem] lg:mr-[2rem] ">
              <span className="text-[#A9A9A9]">Real Tea Leaves</span>
            </div>
          </div>
          {/* <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div> */}
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div class="hidden lg:text-xl lg:flex-grow lg:block ">
              <a
                href="/"
                class="block mt-4 lg:inline-block lg:mt-0 text-slate-400 hover:text-[#FFA500] mx-[2rem]"
              >
                Home
              </a>
              <a
                href="/home"
                class="block mt-4 lg:inline-block lg:mt-0 text-slate-400 hover:text-[#FFA500] mx-[2rem]"
              >
                Shops
              </a>
              <a
                href="/"
                class="block mt-4 lg:inline-block lg:mt-0 text-slate-400 hover:text-[#FFA500] ml-[2rem]"
              >
                Recipes
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
