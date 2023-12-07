import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Button from "@mui/material/Button";
import Slider from "../component/Slider/Slider";
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Slider />

      <div className="mt-[50%] flex justify-center w-full ">
        <div className=" flex gap-[15%] w-[60%] z-10 ">
          <div className="">
            <img src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/09/essential-oils_10.jpg" />
          </div>

          <div className="">
            <h1 className="text-gray-700 text-5xl text-bold text-transparent">
              About
            </h1>
            <div className="mt-[5%] ">
              A paragraph is a series of sentences that are organized and
              coherent, and are all related to a single topic. Almost every
              piece of writing you do that is longer than a few sentences should
              be organized into paragraphs.
            </div>
            <div className="flex justify-center mt-[25%]">
              <Button
                variant="contained"
                className="!px-[2rem] !py-[0.5rem] !bg-black"
              >
                Learn More
              </Button>
            </div>
            <div></div>
          </div>
        </div>
        {/* <div className="border-2 border-black w-[60%]"></div> */}
      </div>
      <div className="border-2 border-black w-[18%] absolute top-[110%]  h-[50%] ml-[20%]"></div>

      <div className=" mt-[5%] flex justify-center w-full">
        <div className="flex justify-center w-[60%] p-5 border-2 border-black  ">
          <div className="flex-col ">
            <div className="text-9xl font-bold text-center ">
              New Arrivals Are In
            </div>
            <div className="mt-[30%] flex justify-center">
              <Button variant="contained" className="!bg-black !px-[3rem]">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[177%] left-[16%] z-10 hover:animate-bounce hover:cursor-pointer">
        <img
          src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
          width={"30%"}
        />
      </div>
      <div className="absolute top-[220%] left-[76%] z-10 hover:animate-bounce hover:cursor-pointer">
        <img
          src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_18-1.png"
          width={"30%"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
