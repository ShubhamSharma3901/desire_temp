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
                className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)">
                Services
              </BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)">
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
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]">
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
      <div className={"mt-10 w-[90%]"}>
        <Marque />
      </div>
    </div>
  );
};

export default Page;
