"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import landing_photo from "@/public/asset/products_and_solution/Wastewater-treatment-and-disposal-evreka-scaled.jpg";
import aqualogix_logo from "@/public/asset/products_and_solution/Desire-Aqualogix.webp";
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
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)]">
              AquaLogix Automation Solution
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              AquaLogix leverages IoT across web and mobile platforms, providing
              project management capabilities including live data monitoring,
              GIS tagging, simulations, and maintenance tools.
            </p>
          </div>
        </motion.div>
      </div>
      <div className=" w-full py-10 border-b-4 flex justify-center items-center">
        <Breadcrumb className=" flex smTablet:justify-start xsPhone:justify-center items-center smTablet:w-[85%] xsPhone:w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]">
                Products & Solutions
              </BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]">
                AquaLogix Automation Solution
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
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed">
          AquaLogix, an IoT-based software solution for project management,
          integrates advanced features such as live data monitoring, GIS
          tagging, WIMS simulations, and complaint management. It offers
          comprehensive capabilities for monitoring, managing breakdowns, and
          performing preventive maintenance in water management projects.
          AquaLogix smart meters automate water consumption data collection,
          enhancing efficiency by eliminating manual readings, detecting leaks,
          and abnormal usage. AquaLogix, an IoT-based software solution for
          project management, integrates advanced features such as live data
          monitoring, GIS tagging, WIMS simulations, and complaint management.
          It offers comprehensive capabilities for monitoring, managing
          breakdowns, and performing preventive maintenance in water management
          projects. AquaLogix smart meters automate water consumption data
          collection, enhancing efficiency by eliminating manual readings,
          detecting leaks, and abnormal usage.
        </p>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed">
          Desire Energy has been at the forefront of adopting IoT technology and
          WIMS Software in India&apos;s water management sector. Since 2013,
          their in-house solutions, AquaLogix and DMTS, have played a crucial
          role in monitoring and maintaining water supply systems across over
          100,000 villages and 14 cities through the AquaLogix platform.
        </p>
      </div>

      <div className="my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4]  py-16 relative overflow-clip">
        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          Salient Features
        </div>
        <div className="flex flex-col justify-start items-start space-y-10 w-[90%] xsPhone:text-[min(3.7vh,3.7vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700">
          <p>
            • &nbsp;&nbsp;&nbsp;Configurable cloud/web interface for for
            Local/Remote management
          </p>
          <p>• &nbsp;&nbsp;&nbsp;Configurable parameters for data logging</p>
          <p>• &nbsp;&nbsp;&nbsp;Operations of pumps through mobile app</p>
          <p>• &nbsp;&nbsp;&nbsp;System notifications and alarms</p>
          <p>
            • &nbsp;&nbsp;&nbsp;Data Analytics through various search filters
          </p>
          <p>
            • &nbsp;&nbsp;&nbsp;Tree view dashboards for showing live data for
            monitored parameters
          </p>
          <p>• &nbsp;&nbsp;&nbsp;Report of NRWP & KWH/KL Power consumption</p>
          <p>• &nbsp;&nbsp;&nbsp;List of faults and alerts</p>
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
