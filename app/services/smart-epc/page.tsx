"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
// import landing_photo from "@/public/asset/Services/epc.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 4.jpg";
import epc2 from "@/public/asset/Services/epc2.jpg";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";

import epc1 from "@/public/asset/Services/Smart_epc-e1678690983969.webp";

import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React from "react";

import { motion, Variant } from "framer-motion";
import Marque from "@/components/Home/Marquee";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <Image
          src={landing_photo}
          alt=""
          className="h-[80vh] object-cover brightness-[65%] w-full"
        />
        <motion.div className="absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]">
          <div className="w-full space-y-6">
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] ">
              Smart EPC
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              Smart EPC leverages advanced technologies like AI and IoT for
              streamlined project execution, enhancing efficiency,
              sustainability, and operational performance across engineering,
              procurement, and construction processes.
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
                Services
              </BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]">
                Smart EPC
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-center bg-[#085C2C] w-[87%] h-full font-titilium my-20 overflow-clip">
        <div className="grid xsPhone:grid-cols-1 smLaptop:grid-cols-2 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start">
          {/* left */}
          <div className="w-full flex justify-between h-full  items-start text-start flex-col gap-10">
            <div className="space-y-8 tablet:p-16 xsPhone:p-10">
              <p className="text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                <span className="text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                  Smart EPC
                </span>
              </p>
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]">
                At Desire, we make the conventional water infra projects, which
                are neither techdriven/ efficiently managed nor consist of an
                efficient and sustainable design and construction, smart and
                efficient by utilizing smart management tools, tech solutions
                and quality sustainable development.
                <br />
                <br />
                Desire is currently providing efficient, sustainable and uniform
                water supply to around 7000+ villages under our visionary
                17,000+ Km Kilometers of Pipeline Installed 22,000+ Villages
                5,00,000+ House FHTC Connections 80 Lakh + People Served Jal
                Jeevan Mission that will benefit a population of millions of
                people. One of key project which also recognised by the Hon’ble
                Government of UP was setting up water supply systems in UP’s
                anganwadi, ashramshalas and schools at 8,500 locations, 10
                districts in 100 days.
              </p>
              <Image src={epc1} alt={""} />
            </div>
          </div>
          {/* right */}
          <div className="w-full bg-white h-full  grid grid-cols-1">
            <div className={"h-full w-full"}>
              <Image
                src={epc2}
                alt={""}
                className={"h-full w-full object-cover"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="my-20
       flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4] py-16 relative overflow-clip"
      >
        <h1 className="w-[95%] text-start p-4 pl-8 xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-bold text-[#085C2C] font-titilium">
          Engineering, Procurement & Construction (EPC) – Smart Water Infrastructure
        </h1>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          Desire Energy Solutions is leading the way in smart, efficient, and
          sustainable public water infrastructure through Project Jal Prabal.
          With a total valuation of ₹2592 crores, the project aligns with the
          Jal Jeevan Mission (JJM) to provide 55 LPCD (Liters Per Capita Per
          Day) of clean potable water to every rural household in India.
        </p>
        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Scope of Work
        </div>
        <ul className="w-[90%] text-neutral-700 list-disc list-inside leading-relaxed xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]">
          <li>
            Installation of 5+ lakh Functional Household Tap Connections (FHTCs)
          </li>
          <li>Laying and retrofitting 16,636 km of water pipelines</li>
          <li>Construction of 507 overhead reservoirs & 460 pump houses</li>
          <li>
            Deployment of IoT devices & SCADA-based centralized monitoring
          </li>
          <li>Integration of solar-based water plants for energy efficiency</li>
          <li>
            Reduction of Non-Revenue Water (NRW) through AI-driven predictive
            analytics
          </li>
        </ul>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Sustainable Impact & Smart Technology
        </div>
        <ul className="w-[90%] text-neutral-700 list-disc list-inside leading-relaxed xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]">
          <li>
            SCADA-based control systems ensure real-time water quality and
            infrastructure monitoring
          </li>
          <li>
            IoT-enabled water systems reduce human errors and optimize resource
            utilization
          </li>
          <li>
            Energy-efficient & solar-powered solutions support renewable energy
            goals and reduce carbon footprint
          </li>
          <li>
            Water treatment plant in Baghera, Rajasthan supplies 80,000 KL of
            potable water per day
          </li>
        </ul>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          By integrating cutting-edge technology with sustainable engineering
          practices, Desire Energy Solutions is revolutionizing water
          infrastructure and supporting India&apos;s mission for universal clean
          water access.
        </p>

        <Image
          src={desireLogo}
          alt="desire_logo"
          className="absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-5 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]"
        />
      </div>
      <div className={"mt-10 w-[90%]"}>
        <Marque />
      </div>
    </div>
  );
};

export default Page;
