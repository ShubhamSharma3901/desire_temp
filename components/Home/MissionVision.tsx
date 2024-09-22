import React from "react";
import Image from "next/image";
import mission from "@/public/asset/home/Mission.png";
import vision from "@/public/asset/home/Vision.png";
import values from "@/public/asset/home/values.png";
const MissionVision = () => {
  return (
    <div className="bg-[#FAFAFA] h-auto w-screen flex justify-center items-center smLaptop:my-20 py-2 xsPhone:my-0">
      <div className="w-[90%] flex justify-center items-center font-titilium">
        <div className="grid xsPhone:grid-cols-1 smLaptop:grid-cols-3 w-[98%] justify-center items-start smLaptop:gap-[5rem]">
          {/* 1st */}
          <div className="w-full p-7 grid grid-cols-1 grid-rows-3 h-full">
            <div className={"flex justify-start items-center"}>
              <Image
                src={mission}
                alt={"Mission_logo"}
                className={"max-w-[100px] h-auto "}
              />
            </div>
            <div className="flex gap-2 items-center">
              <p className="p-2 font-semibold smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                Our Mission
              </p>
              <hr className="border-[#085C2C] border-[0.10rem] w-[4rem] " />
            </div>
            <div>
              <p className="p-2">
                To provide water management solutions to every nook and corner
                of India.
              </p>
            </div>
          </div>

          {/* 2nd */}
          <div className="w-full p-7 grid grid-cols-1 grid-rows-3 h-full">
            <div className={"flex justify-start items-center"}>
              <Image
                src={vision}
                alt={"Vision_logo"}
                className={"w-auto min-h-[60%] max-h-[60px] "}
              />
            </div>

            <div className="flex gap-2 items-center">
              <p className="p-2 font-semibold smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                Our Vision
              </p>
              <hr className="border-[#085C2C] border-[0.10rem] w-[4rem] " />
            </div>
            <div>
              <p className="p-2">
                Making public water infrastructure smart, efficient, and
                accessible to all.
              </p>
            </div>
          </div>

          {/* 3rd */}
          <div className="w-full p-7 grid grid-cols-1 grid-rows-3 h-full">
            <div className={"flex justify-start items-center"}>
              <Image
                src={values}
                alt={"Values_logo"}
                className={"w-auto min-h-[60%] max-h-[60px] "}
              />
            </div>
            <div className="flex gap-2 items-center">
              <p className="p-2 font-semibold smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                Core Values
              </p>
              <hr className="border-[#085C2C] border-[0.10rem] w-[4rem] " />
            </div>
            <div>
              <p className="p-2">
                Trust, Transparency, Technology, and Partnership are the
                foundation of who we are and what we believe in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
