"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
// import landing_photo from "@/public/asset/products_and_solution/Wastewater-treatment-and-disposal-evreka-scaled.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 2.jpg";
import aqualogix_logo from "@/public/asset/products_and_solution/Desire-Aqualogix.webp";
import aqualogix_creative_1 from "@/public/asset/products_and_solution/Aqualogix-creative.png";
import aqualogix_creative_2 from "@/public/asset/products_and_solution/Aqualogix-Automation.jpeg";
import aqualogix_creative_3 from "@/public/asset/products_and_solution/aqualogix2.jpg";
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
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed">
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
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed">
          Desire Energy has been at the forefront of adopting IoT technology and
          WIMS Software in India&apos;s water management sector. Since 2013,
          their in-house solutions, AquaLogix and DMTS, have played a crucial
          role in monitoring and maintaining water supply systems across over
          100,000 villages and 14 cities through the AquaLogix platform.
        </p>
      </div>
      <div
        className={
          "flex smLaptop:flex-row xsPhone:flex-col justify-center items-center w-[85%] gap-4"
        }
      >
        <div className="smLaptop:w-[50%] xsPhone:w-full">
          <Image src={aqualogix_creative_1} alt="" />
        </div>

        <div className="smLaptop:w-[50%] xsPhone:w-full flex justify-center items-center">
          <Image src={aqualogix_creative_2} alt="" />
        </div>


      </div>

      <div className=" xsPhone:w-full flex justify-center items-center mt-10">
        <Image src={aqualogix_creative_3} alt="" />
      </div>

      <div className="my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4] py-16 relative overflow-clip">
        <h1 className="w-[95%] text-start p-4 pl-8 xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(4vh,4vw)] font-bold text-[#085C2C] font-titilium">
          AquaLogix Automation: Transforming Water Supply in Varanasi, Chandoli,
          Bhadohi, and Aligarh, Uttar Pradesh
        </h1>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          Desire Energy Solutions Pvt. Ltd. is revolutionizing water access in
          the Varanasi region (Chandoli and Bhadohi districts) and Aligarh,
          Uttar Pradesh, through our innovative AquaLogix Automation solution.
          We&apos;re not just delivering water; we&apos;re providing sustainability,
          safety, and a better quality of life to thousands of families.
        </p>
        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Overview of AquaLogix
        </div>
        <div className="flex flex-col justify-start items-start space-y-6 w-[90%] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700">
          <p>
            AquaLogix is an IoT-based software solution for project management,
            integrating advanced features that streamline and optimize water
            management operations. It provides comprehensive capabilities for
            monitoring, managing breakdowns, performing preventive maintenance,
            ensuring efficient and reliable water supply.
          </p>
          <p className="font-bold">Key Features:</p>
          <ul className="list-disc pl-6">
            <li>Live data monitoring</li>
            <li>GIS tagging</li>
            <li>WIMS (Water Information Management System) simulations</li>
            <li>Complaint management</li>
            <li>
              AquaLogix smart meters automate water consumption data collection,
              eliminating manual readings, detecting leaks, and abnormal usage.
            </li>
          </ul>
          <p className="font-bold">IoT and WIMS Leadership:</p>
          <p>
            Desire Energy has been at the forefront of adopting IoT technology
            and WIMS Software in India&apos;s water management sector. Since 2013,
            our in-house solutions, AquaLogix and DMTS, have played a crucial
            role in monitoring and maintaining water supply systems across over
            100,000 villages and 14 cities.
          </p>

          <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
            Salient Features of AquaLogix:
          </div>
          <ul className="list-disc pl-6">
            <li>
              Configurable cloud/web interface for local/remote management
            </li>
            <li>Configurable parameters for data logging</li>
            <li>Operations of pumps through mobile app</li>
            <li>System notifications and alarms</li>
            <li>Data analytics through various search filters</li>
            <li>
              Tree view dashboards for showing live data for monitored
              parameters
            </li>
            <li>Report of NRWP & KWH/KL power consumption</li>
            <li>List of faults and alerts</li>
          </ul>

          <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
            Our Impact:
          </div>
          <p className="underline">Varanasi Region (Chandoli & Bhadohi):</p>
          <ul className="list-disc pl-6">
            <li>
              Integrated advanced Electrical & Instrumentation (E&I) systems,
              SCADA technology, and solar-powered solutions for a smart and
              efficient water supply network.
            </li>
            <li>
              Ensuring the health and well-being of every individual by
              carefully mixing chlorine into the water.
            </li>
            <li>
              Successfully implemented over 120+ regular water supply schemes
              for 500+ villages, impacting lakhs of lives.
            </li>
            <li>
              Installed Functional Household Tap Connections (FHTCs),
              guaranteeing safe, treated water directly into homes.
            </li>
          </ul>
          <p className="underline">
            Aligarh, Uttar Pradesh (Block Lodha, Lekhrajpur Jatanpur Chikawati):
          </p>
          <ul className="list-disc pl-6">
            <li>
              Jal Jeevan Mission (JJM) project is now LIVE, underscoring our
              commitment to sustainable water solutions.
            </li>
            <li>
              AquaLogix technology enables real-time monitoring and management
              for efficient and reliable water distribution.
            </li>
            <li>
              Data-driven decisions optimize water supply and ensure system
              performance.
            </li>
            <li>
              Significantly enhancing water availability for communities in
              Uttar Pradesh.
            </li>
          </ul>

          <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
            Our Commitment:
          </div>
          <p>
            Desire Energy Solutions is dedicated to improving water access
            through innovative and sustainable solutions. Our team works
            diligently to uphold the highest standards of quality and
            efficiency, contributing to transformative initiatives that
            positively impact lives.
          </p>
          <p className="font-bold">Key Improvements:</p>
          <ul className="list-disc pl-6">
            <li>
              Added an Overview Section: Provides context and highlights the
              core functionalities of AquaLogix.
            </li>
            <li>
              Detailed Feature List: Clearly outlines the capabilities of the
              software.
            </li>
            <li>
              Emphasis on Leadership: Showcases Desire Energy&apos;s expertise in IoT
              and WIMS.
            </li>
            <li>Maintained regional project information.</li>
            <li>Improved flow of information.</li>
          </ul>
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
