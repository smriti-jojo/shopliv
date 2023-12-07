import { Button } from "@mui/material";
import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StarIcon from "@mui/icons-material/Star";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Tabs from "../component/Tab/tabs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useIsSmall } from "../component/Hooks/MinHeight";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Footer from "../component/Footer/Footer";

const AddCart = () => {
  const tabValue = [
    {
      index: 0,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
    {
      index: 1,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
    {
      index: 2,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
    {
      index: 3,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
    {
      index: 4,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
    {
      index: 5,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
    {
      index: 6,
      title:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
      component:
        "http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png",
    },
  ];
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];

  const percentageList = [
    { percentage: 66, value: "display" },
    { percentage: 36, value: "camera" },
    { percentage: 86, value: "screen " },
  ];

  const progressList = [
    { completed: 60, star: 4 },
    { completed: 50, star: 5 },
    { completed: 30, star: 3 },
  ];
  const h = useIsSmall();
  console.log("height", h);
  return (
    <div className="min-w-full">
      <Navbar />
      <div className={"flex-col-span-1 sm:flex col-span-2"}>
        <div className="flex  lg:mt-[5%] sm:max-h-screen sm:max-w-[50%] ">
          {/* <img
            src="https://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/09/essential-oils_02.jpg"
            width={"70%"}
          /> */}
          <div className="max-w-[70%]">
            <Tabs tabValue={tabValue} />
          </div>
        </div>
        <div className="absolute top-[40%] lg:top-[80%] left-[15%]">
          <div className="flex gap-5">
            <Button variant="contained" className="!bg-[#FFBF00]">
              <ShoppingCartIcon />
              {""} Add to cart
            </Button>
            <Button variant="contained" className="!px-7 !py-2 !bg-[#008000]">
              <ElectricBoltIcon />
              {""}Buy Now
            </Button>
          </div>
        </div>
        <div
          className={
            "overflow-auto max-h-screen w-full mx-[2rem] sm:mx-0 sm:w-[50%] pr-5"
          }
        >
          <div className=" sm:mt-[30%] lg:mt-[13%]">
            {/* <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs> */}
            <div className="text-2xl font-bold ">
              Realme 11x 5G (Purple Dawn, 128 GB) (8 GB RAM)
            </div>
            <div className="text-[#008000] font-bold">Extra ₹3000 off</div>
            <div className="">
              <span className="text-xl font-bold ">₹15,999</span>{" "}
              <span className="line-through !text-xl text-gray-500">
                ₹18999
              </span>{" "}
              <span className="text-[#008000]">15% off</span>
            </div>
            <div>+₹49 Secured Packaging Fee</div>
            {/* <ul>
              <li className="text-[#008000]">Available offers</li>
              <li>
                <LocalOfferIcon className="!text-[#008000] mr-2" />
                Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
              </li>
              <li>
                <LocalOfferIcon className="!text-[#008000] mr-2" />
                Special PriceGet extra ₹3000 off (price inclusive of
                cashback/coupon)T&C
              </li>
              <li>
                <LocalOfferIcon className="!text-[#008000] mr-2" /> Buy any
                product & get Rs. 150 Off on your next purchase of GeysersT&C
              </li>
              <li>
                <LocalOfferIcon className="!text-[#008000] mr-2" />
                Buy for 100 get ₹100 off your Next BuyT&C
              </li>
            </ul> */}
            <div className="my-5 ">
              <h1 className="text-2xl font-bold">Product Description</h1>
              <p>
                Productively transform your life with the smooth performance of
                MediaTek Dimensity 6100+ 5G chipset. Enhance your performance
                and multitask seamlessly and upgrade to innovative features like
                New Smart 5G, 5G Low Power Smart Hotspot Technology, Antenna
                Array Matrix 2.0 and Super Network Searching.
              </p>
              <p>
                Productively transform your life with the smooth performance of
                MediaTek Dimensity 6100+ 5G chipset. Enhance your performance
                and multitask seamlessly and upgrade to innovative features like
                New Smart 5G, 5G Low Power Smart Hotspot Technology, Antenna
                Array Matrix 2.0 and Super Network Searching.
              </p>
              <p>
                Productively transform your life with the smooth performance of
                MediaTek Dimensity 6100+ 5G chipset. Enhance your performance
                and multitask seamlessly and upgrade to innovative features like
                New Smart 5G, 5G Low Power Smart Hotspot Technology, Antenna
                Array Matrix 2.0 and Super Network Searching.
              </p>
            </div>
            <div className="my-4 ">
              <h1 className="text-2xl font-bold">Specifications</h1>
              <div className="w-full">
                <h1 className="font-bold text-md mt-2">General</h1>
                <div className="flex col-span-2">
                  <div className="w-[40%]">
                    <li className="py-3">IN THE BOX</li>
                    <li>Model Number</li>
                    <li>Model Name</li>
                    <li>Color</li>
                  </div>
                  <div>
                    <li>
                      Handset, Adapter, USB Cable, Important Info Booklet with
                      Warranty Card, Quick Guide, Sim Card Tool, Screen Protect
                      Film, TPU Case
                    </li>
                    <li>RMX3785</li>
                    <li>11x 5G</li>
                    <li>Purple Dawn</li>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-[2rem] w-full">
              <h1 className="text-2xl font-bold">Ratings & Reviews</h1>

              <div className="flex w-full justify-around">
                <div className="w-full">
                  <span className="text-xl font-bold">4.3 </span>{" "}
                  <StarIcon className="text-[#FFFF00]" />
                  <br></br>
                  7,763 Ratings & <br></br>554 Reviews
                </div>

                <div className=" w-full flex-col">
                  {progressList.map((item) => (
                    <div className=" flex">
                      <div>
                        {item.star} <StarIcon />
                      </div>
                      <div className="w-[50%]">
                        <ProgressBar completed={item.completed} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 w-full">
                  {percentageList.map((item) => (
                    <div style={{ width: 50, height: 50 }}>
                      <CircularProgressbar
                        value={item.percentage}
                        text={`${item.percentage}%`}
                      />
                      <div className="">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            {/* <div className="flex-col w-full ">
              <div className="my-3 p-2 border-2 border-y-gray-200">
                4<StarIcon /> <span>Excellent</span>
                <br></br>
                <div>Nice mobile</div>
                <br></br>
                <img alt="product image" />
              </div>
              <div className="my-3 p-2 border-2 border-y-gray-200">
                5<StarIcon /> <span>Excellent</span>
                <div>Nice mobile</div>
                <br></br>
                <img alt="product image" />
              </div>
              <div className="my-3 p-2 border-2 border-y-gray-200">
                6<StarIcon /> <span>Excellent</span>
                <div>Nice mobile</div>
                <br></br>
                <img alt="product image" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="px-[4rem]">
        <div className="mt-[2rem] w-full">
          <h1 className="text-3xl font-bold">Ratings & Reviews</h1>

          <div className="flex w-full justify-around my-4">
            <div className="w-full">
              <span className="text-xl font-bold">4.3 </span>{" "}
              <StarIcon className="text-[#FFFF00]" />
              <br></br>
              7,763 Ratings & <br></br>554 Reviews
            </div>

            <div className=" w-full flex-col">
              {progressList.map((item) => (
                <div className=" flex">
                  <div>
                    {item.star} <StarIcon />
                  </div>
                  <div className="w-[50%]">
                    <ProgressBar completed={item.completed} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-5 w-full">
              {percentageList.map((item) => (
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={item.percentage}
                    text={`${item.percentage}%`}
                  />
                  <div className="">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-col w-full ">
          <div className="my-3 p-2 border-2 border-y-gray-200 ">
            <div>
              4<StarIcon /> <span>Excellent</span> <br></br>
              <span className="flex justify-end">
                <div className="flex gap-3 cursor-pointer">
                  <ThumbUpOffAltIcon />
                  456
                  <ThumbDownOffAltIcon />
                  26
                </div>
              </span>
              <div>Nice mobile</div>
              <br></br>
              <img alt="product image" />
            </div>
          </div>
          <div className="my-3 p-2 border-2 border-y-gray-200">
            5<StarIcon /> <span>Excellent</span>
            <span className="flex justify-end">
              <div className="flex gap-3 cursor-pointer">
                <ThumbUpOffAltIcon />
                456
                <ThumbDownOffAltIcon />
                26
              </div>
            </span>
            <div>Nice mobile</div>
            <br></br>
            <img alt="product image" />
          </div>
          <div className="my-3 p-2 border-2 border-y-gray-200">
            6<StarIcon /> <span>Excellent</span>{" "}
            <span className="flex justify-end">
              <div className="flex gap-3 cursor-pointer">
                <ThumbUpOffAltIcon />
                456
                <ThumbDownOffAltIcon />
                26
              </div>
            </span>
            <div>Nice mobile</div>
            <br></br>
            <img alt="product image" />
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-auto mb-[5%] py-7 px-[4rem]">
        <h1 className="text-3xl font-bold my-3">You Might be Interested In</h1>

        <div className="flex gap-2   mt-5 ">
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-8 min-w-[15%] ">
            <div>
              <img
                src="http://ishtiaq.sandbox.etdevs.com/essential-oils/wp-content/uploads/sites/34/2021/10/essential-oils_17.png"
                width={"100"}
              />
            </div>

            <div className="w-full">
              Power Banks<br></br>
              Min 50% Off<br></br>
              <Button variant="contained" className="!mt-5">
                {" "}
                Shop <span className="ml-2">Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddCart;
