import Image from "next/image";
import React from "react";
import OurFocus from "@/components/About/OurFocus";
import WhoWeAre from "@/components/About/WhoWeAre";
import CoreValues from "@/components/About/CoreValues";

import headerImage from "@/public/asset/aboutPage/AboutPageCreative.png";
import Services from "@/components/About/Services";
const Page = () => {
  return (
    <div className="relative w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full pt-4">
        <div className="smLaptop:h-[40vh] xsPhone:h-[40vh] smTablet:h-[min(42vh,42vw)] tablet:h-[min(45vh,45vw)] landscapes:h-[min(63vh,63vw)] w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 ">
          <div className="smTablet:w-[50%] xsPhone:w-full pt-[4rem] space-y-2">
            <p className="smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light">
              Who We Are?
            </p>
            <h1 className="text-[min(7vh,7vw)] font-titilium">About Us</h1>
          </div>
          <div className="smTablet:w-[50%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10">
            <p>
              Desire Energy Solutions Pvt Ltd, headquartered in Jaipur, is a
              nationally acclaimed tech-driven water management company. It
              specializes in IoT, AI, and renewable energy solutions for public
              water infrastructure projects across India.
            </p>
          </div>
        </div>
        <div className="smLaptop:h-[60vh] xsPhone:h-[65vh] smTablet:h-[68vh] w-full">
          <Image
            src={headerImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start gap-10 ">
          <OurFocus />
        </div>
      </div>

      <div className="bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start gap-10 ">
          <WhoWeAre />
        </div>
      </div>

      <div className="bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start gap-10 ">
          <CoreValues />
        </div>
      </div>

      <div className="bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start ">
          <Services />
        </div>
      </div>

      {/* <div className='bg-white w-full flex justify-center items-start relative overflow-clip'>
				<Image src={footerImage} alt='footer-img' className='w-full' />
			</div> */}
    </div>
  );
};

export default Page;
