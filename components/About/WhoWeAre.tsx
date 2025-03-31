"use client";
import React from "react";
import WhoWeAre1 from "@/public/asset/aboutPage/WhoWeAre-1.png";
import WhoWeAre2 from "@/public/asset/aboutPage/WhoWeAre2.jpg";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <>
      <div className="flex justify-start items-center w-full gap-5 font-titilium">
        <p className="smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800">
          Who We Are
        </p>
        <hr className="relative   right-0 h-1 w-[100px] bg-[#085C2C]" />
      </div>
      <div
        className={
          "flex flex-col justify-center items-center w-full gap-14 font-titilium"
        }
      >
        <div
          className={
            "flex xsPhone:flex-col smTablet:flex-row justify-center items-start w-full gap-10 font-titilium"
          }
        >
          <h1 className="smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(6vw,6vh)] font-titilium xsPhone:w-full smTablet:w-[50%]">
            Driving Water Solutions: Innovating Efficiency, Harnessing Renewable
            Energy for Sustainable Public Infrastructure Nationwide.
          </h1>
          <p className="xsPhone:w-full smTablet:w-[50%] smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.5vh,3.5vw)] font-titilium  text-justify text-neutral-800 font-light">
            Desire Energy Solutions Pvt Ltd, founded in 2011 by Gaurav Kumar
            Gupta, Saurabh Gupta, and Ruchi Khandelwal, specializes in ESCO,
            solar, IoT, and infrastructure projects. Notably, it has implemented
            the Jal Jeevan Mission across 100,000+ villages and 14 cities,
            leveraging renewable energy and advanced technology for efficient
            water management. With a team of over 2,000 professionals, the
            company is recognized for its innovation, transparency, and
            commitment to energy efficiency.
          </p>
        </div>

        <div
          className={
            "grid smTablet:grid-cols-2 xsPhone:grid-cols-1 w-full gap-10 font-titilium"
          }
        >
          <div className={"w-full h-full border-2 overflow-clip"}>
            <Image
              src={WhoWeAre1}
              alt="WhoWeAre Image 1"
              className="min-w-full min-h-full object-fill object-center "
            />
          </div>
          <div
            className={
              "w-full h-auto border-2 overflow-clip xsPhone:hidden smTablet:block"
            }
          >
            <Image
              src={WhoWeAre2}
              alt="WhoWeAre Image 2"
              className="w-full object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
