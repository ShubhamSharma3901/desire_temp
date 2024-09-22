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
      <div className="grid smLaptop:grid-cols-2 xsPhone:grid-cols-1 smLaptop:gap-[5rem] xsPhone:gap-[4rem]">
        <div className="flex flex-col justify-start smLaptop:items-start xsPhone:items-center gap-10">
          <h1 className="smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(6vw,6vh)] font-titilium">
            Driving Water Solutions: Innovating Efficiency, Harnessing Renewable
            Energy for Sustainable Public Infrastructure Nationwide.
          </h1>
          <Image
            src={WhoWeAre1}
            alt="WhoWeAre Image 1"
            className="max-w-[550px] w-full"
          />
        </div>
        <div className="flex flex-col justify-start smLaptop:items-start xsPhone:items-center gap-10">
          <p className="smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.5vh,3.5vw)] font-titilium text-neutral-800 font-light">
            Desire Energy Solutions Pvt Ltd specializes in ESCO, solar, IoT, and
            infrastructure projects, implementing initiatives such as the Jal
            Jeevan Mission in over 100,000 villages and 14 cities. They utilize
            renewable energy and advanced technology to enhance water management
            efficiency.
          </p>
          <p className="smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.5vh,3.5vw)]  font-titilium text-neutral-800 font-light">
            Founded in 2011 by Mr. Gaurav Kumar Gupta, Mr. Saurabh Gupta, and
            Mrs. Ruchi Khandelwal, the Company champions transparency and trust.
            With a team exceeding 2,000 professionals, it has garnered accolades
            for innovative service and energy efficiency.
          </p>
          <Image
            src={WhoWeAre2}
            alt="WhoWeAre Image 2"
            className="max-w-[550px] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
