import React from "react";
import Image from "next/image";
import CSRLogo from "@/public/asset/CSRLogo.png";
import CSR101 from "@/public/asset/CSR101.png";
import bulb from "@/public/asset/bulb.png";

const DesireFoundation = () => {
  return (
    <div className="flex justify-center items-center mb-20 smLaptop:mt-20 xsPhone:mt-0">
      <div className="flex smLaptop:flex-row xsPhone:flex-col justify-center items-center  w-[95%]">
        {/* left */}
        <div className="smLaptop:w-[50%] xsPhone:w-full flex justify-center items-center">
          <Image src={CSRLogo} alt="img" className="object-contain " />
        </div>

        {/* right */}
        <div className="smLaptop:w-[50%] xsPhone:w-full  ">
          <div className="border smLaptop:p-[3rem] xsPhone:p-[2rem] bg-[#085C2C] space-y-4">
            <p className=" font-titilium  xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5.3vh,5.3vw)] text-[#D5F590] ">
              {" "}
              Desire Foundation
            </p>
            <p className="font-titilium  xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] leading-relaxed text-[#FFFFFF]">
              Desire Energy believes in prioritizing value creation within
              business, emphasizing profit sharing and societal improvement. In
              India, women spend millions of workdays annually fetching water,
              resulting in significant national income loss. Desire Energy aims
              to minimize this impact, empowering women to contribute more too
              national development. Through its CSR initiatives, Desire
              Foundation fosters women entrepreneurship and empowerment in rural
              India to enhance nation-building efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesireFoundation;
