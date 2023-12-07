import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between mt-[5%] py-5 bg-black px-5">
        <div>
          <img
            src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/09/essential-oils_23.jpg"
            width={"40%"}
          />
        </div>
        <div className="text-white">
          <h1 className="font-bold">Visit</h1>A paragraph is a series of
          sentences that are organized and coherent, and are all related to a
          single topic.
          <div className="">
            <h1 className="font-bold">Subscribe</h1>
            <TextField label="email" className="!z-20 bg-white" size="small" />
            {/* <div className="px-5 py-5 bg-gray-400 w-[220px] absolute top-[60%] -left-[2%] "></div> */}
          </div>
          <div className="mt-[2%]">
            <Button
              variant="contained"
              className="!bg-gray-300 !px-[1rem] !text-black"
            >
              Subscribe
            </Button>
          </div>
          {/* <div className="px-4 py-4 bg-gray-400 w-[120px] "></div> */}
        </div>

        <div className="text-white">
          <h1 className="font-bold">Email</h1>smriti@demo.In
          <h1 className="font-bold">Call</h1>92XXXXX98
        </div>
      </div>
    </div>
  );
};

export default Footer;
