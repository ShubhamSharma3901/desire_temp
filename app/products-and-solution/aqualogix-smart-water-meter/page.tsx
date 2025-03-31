"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
// import landing_photo from "@/public/asset/products_and_solution/water_oscillations.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 1.jpg";
import aqualogix_logo from "@/public/asset/products_and_solution/Desire-Aqualogix.webp";
import aqualogix_creative_1 from "@/public/asset/products_and_solution/aqualogix_smart_water_collage.jpeg";
import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React from "react";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";

import { motion, Variant } from "framer-motion";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <Image
          src={landing_photo}
          alt=""
          className="h-[80vh] object-cover brightness-[65%]"
        />
        <motion.div className="absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]">
          <div className="w-full space-y-6">
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] ">
              AquaLogix Smart Water Meter
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              AquaLogix smart water meters automate data collection, enhancing
              efficiency by detecting leaks, abnormal consumption, and enabling
              precise water usage monitoring, pivotal for Desire Energy&apos;s
              water management initiatives in India.
            </p>
          </div>
        </motion.div>
      </div>
      <div className=" w-full py-10 border-b-4 flex justify-center items-center">
        <Breadcrumb className=" flex justify-start items-center w-[85%]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]">
                Products & Solutions
              </BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]">
                AquaLogix Smart Water Meter
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-center bg-[#085C2C] w-[87%]  font-titilium my-20 ">
        <div className="grid xsPhone:grid-cols-1 smLaptop:grid-cols-2 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start">
          {/* left */}
          <div className="w-full flex justify-between h-full items-start text-start flex-col gap-10">
            <div className="space-y-8 tablet:p-16 xsPhone:p-10">
              <p className="text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                Our Integrated
                <span className="text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                  &nbsp;Water Information Management System
                </span>
              </p>
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]">
                AquaLogix is an IoT based web & mobile software which provides a
                solution for effective project management, through its
                innovative software as well as hardware features. Some of its
                features include live data monitoring, GIS tagging, WIMS
                simulations, complaint management system etc. It is a complete
                end-to-end solution for effective monitoring, breakdown
                management and preventive maintenance of a water management
                project.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="w-full bg-white h-full object-cover p-10 flex justify-center items-center">
            <Image
              src={aqualogix_logo}
              alt="aqualogix_logo"
              className="w-[80%]"
            />
          </div>
        </div>
      </div>

      <div className="mb-16 mt-10 flex flex-col justify-center items-center font-titilium text-start w-[85%] space-y-10">
        <div className="flex justify-start items-center w-full gap-5 font-titilium">
          <p className="smTablet:text-[min(3.5vw,3.5vh)] xsPhone:text-[min(5vw,5vh)]  ">
            Overview
          </p>
          <hr className="relative right-0 h-1 w-[100px] bg-[#085C2C]" />
        </div>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed">
          The AquaLogix smart water meter utilizes fluidic oscillation theory, a
          cutting-edge technology that eliminates traditional moving parts. This
          innovation ensures the meter remains unaffected by foreign materials,
          maintaining high accuracy over an extended operational lifespan. By
          relying on fluidic oscillation instead of mechanical components, the
          meter achieves exceptional durability and reliability, making it ideal
          for long-term use in various water management applications.
        </p>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed">
          This advanced metering solution not only enhances accuracy but also
          minimizes maintenance requirements and operational disruptions
          typically associated with conventional meters. It enables automatic,
          precise measurement of water consumption, facilitating efficient
          management of resources and proactive detection of anomalies such as
          leaks or abnormal usage patterns. The incorporation of fluidic
          oscillation theory into the AquaLogix smart water meter underscores
          its technological sophistication and suitability for modern water
          management systems. It represents a significant advancement in
          metering technology, aligning with the industry&apos;s shift towards
          more reliable, sustainable, and maintenance-friendly solutions.
        </p>
      </div>

      <div className="w-[85%]">
        <Image src={aqualogix_creative_1} alt="" />
      </div>

      <div className="my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4]  py-16 relative overflow-clip">
        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          Salient Features
        </div>

        <div className="flex flex-col justify-start items-start space-y-10 w-[90%] xsPhone:text-[min(3.7vh,3.7vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700">
          <p>• &nbsp;&nbsp;&nbsp;No Wear</p>
          <p>• &nbsp;&nbsp;&nbsp;No Impeller</p>
          <p>• &nbsp;&nbsp;&nbsp;No Count Air Flow</p>
          <p>• &nbsp;&nbsp;&nbsp;Enhanced Accuracy</p>
          <p>• &nbsp;&nbsp;&nbsp;Installed Angle Free</p>
          <p>• &nbsp;&nbsp;&nbsp;Water Proof (IP68)</p>
        </div>
        <Image
          src={desireLogo}
          alt="desire_logo"
          className="absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-75 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Page;
