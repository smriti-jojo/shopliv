import React from "react";
import { Button } from "@mui/material";

const Slider = () => {
  return (
    <div>
      <div className="bg-slate-200 pt-[5%] h-[80%] ">
        <div className="bg-slate-200 absolute border-2 border-gray-500 z-20 p-5 ">
          <img src="https://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_64.png" />
          <div className="w-[70%] h-full top-[0%] left-[25%] border-2 border-gray-600 z-20 p-5 absolute object-contain">
            <div className="w-[60%] h-full top-[0%]  left-[0%] border-2 border-gray-600 z-20 p-5 absolute object-contain">
              <div className="w-[167.5%] h-[91%] top-[5%]  left-[0%] border-2 border-gray-600 z-20 p-5 absolute object-contain"></div>
            </div>
          </div>
          <div className="absolute top-[30%] left-[10%] z-20 ">
            <p className="font-bold">50% OFF ON SELECTIVE ITEMS</p>
            <h1 className="text-7xl  font-bold  ">DIVI ESSENTIAL </h1>
            <h1 className="text-7xl  font-bold "> OILS</h1>
          </div>
          <div className="absolute top-[70%] left-[48%]">
            <Button
              variant="outlined"
              size="large"
              className="!rounded-none !border-black !text-black !p-2 !px-[2rem] !bg-white z-10"
            >
              Learn More
            </Button>
          </div>
          <div className="absolute top-[71%] left-[47%] bg-black p-5 mt-1 px-[5.5rem] "></div>
        </div>
        {/* <div className="w-[50%] h-full top-[10%] left-[35%] border-2 border-black z-20 p-5 absolute">
        Hii
      </div> */}
      </div>
      <div className="absolute top-[30%] left-[62%] z-20">
        <img
          src="https://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/09/essential-oils_02.jpg"
          alt="essential_oil"
          height={"30%"}
          width={"30%"}
          className="!rounded-t-full border-2 border-gray-500"
        />
      </div>
      <div className="absolute top-[25%] left-[62%] z-20">
        <img
          src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_design-elements_01.png"
          alt="star"
          width={"80%"}
        />
      </div>

      <img
        src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/09/essential-oils_03-1.jpg"
        alt="flower"
        width={"10%"}
        className="absolute top-[73%] left-[90%] z-20 border-2 border-black"
      />
      <div className=" p-5 py-[2rem] rounded-[50%/60%_60%_60%_60%] border-2 border-gray-500 bg-[#FFA500] absolute top-[90%] left-[86.7%] z-20 rotate-45"></div>
    </div>
  );
};

export default Slider;
