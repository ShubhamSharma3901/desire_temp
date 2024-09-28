"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import landing_photo from "@/public/asset/Services/dwm.webp";
import dwm1 from "@/public/asset/Services/dwm1.webp";
import dwm2 from "@/public/asset/Services/dwm2.webp";
import dwm3 from "@/public/asset/Services/dwm3.webp";
import dwm4 from "@/public/asset/Services/dwm4.webp";
import dwm5 from "@/public/asset/Services/dwm5.webp";
import dwm6 from "@/public/asset/Services/dwm6.webp";
import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React from "react";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";

import { motion, Variant } from "framer-motion";
import Marque from "@/components/Home/Marquee";

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
              Decentralized Water Management
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              Decentralized water management decentralizes infrastructure,
              enabling local treatment, storage, and distribution, enhancing
              resilience and sustainability while empowering communities with
              resource control.
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
                Decentralized Water Management
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
                <span className="text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                  Decentralized Water Management
                </span>
              </p>
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]">
                Desire is saving lives by providing innovative solutions to
                remote areas striving for clean and regular water supply without
                any dependence on electricity.
                <br />
                <br />
                Our community-based solar DFU units, RO system and ATM-based
                water dispenser have resoled the problem of transmission of
                clean water to fluoride and TDS infected areas without any
                dependence on electricity, which has saved millions of lives by
                reducing the spread of various diseases like cholera, diarrhea,
                hepatitis, and typhoid in rural India.
                <br />
                <br />
                These pathbreaking innovative techniques has been praised and
                recognised in both national as well as international platforms.
                Energy Generation 42,000 kWh units of electricity generated
                annually Plants 5000+ solar water treatment plants installed
                Community RO 1200+ plants supplied
              </p>

              <div className="text-[#D5F590] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]">
                <p>
                  • &nbsp;&nbsp; Plant: 5000+ solar water treatment plants
                  installed
                </p>{" "}
                <p>
                  • &nbsp;&nbsp; Energy Generation: 42,000 KWh units of
                  electricity generated annually
                </p>{" "}
                <p>• &nbsp;&nbsp; Community Ro: 1200 +plants supplied</p>{" "}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full bg-white h-full object-cover smLaptop:px-10 xsPhone:py-10 smLaptop:py-0 grid grid-cols-2 gap-2">
            <div className={"   overflow-clip"}>
              <Image
                src={dwm1}
                alt="aqualogix_logo"
                className="object-cover w-full min-h-full "
              />
            </div>
            <div className={"   overflow-clip"}>
              <Image
                src={dwm2}
                alt="aqualogix_logo"
                className="object-cover w-full min-h-full"
              />
            </div>
            <div className={"   overflow-clip"}>
              <Image
                src={dwm3}
                alt="aqualogix_logo"
                className="object-cover w-full min-h-full "
              />
            </div>
            <div className={"   overflow-clip"}>
              <Image
                src={dwm4}
                alt="aqualogix_logo"
                className="object-cover w-full min-h-full "
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
