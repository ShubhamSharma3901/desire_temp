"use client";
import AdvisoryBoard from "@/components/InnovationHub/AdvisoryBoard";

import { useEffect, useRef } from "react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Blogs from "@/components/Home/Blogs";
import Image from "next/image";
import landingImage from "@/public/asset/aboutPage/AboutPageCreative.png";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Specify the type for videoRef

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.75; // Set video speed to 1.75x
    }
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <div className="relative  w-screen flex justify-center items-center overflow-hidden">
        {/*<video*/}
        {/*  ref={videoRef}*/}
        {/*  className="h-full w-full object-cover"*/}
        {/*  autoPlay*/}
        {/*  loop*/}
        {/*  muted*/}
        {/*  preload="none"*/}
        {/*  controls={false}*/}
        {/*>*/}
        {/*  <source src="/InnovationHub101.mp4" type="video/mp4" />*/}
        {/*  <track kind="subtitles" srcLang="en" label="English" />*/}
        {/*</video>*/}
        <Image
          src={landingImage}
          alt=""
          className="w-full h-screen object-cover"
        />

        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content over the Video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white w-full space-y-6">
          <h1 className="smLaptop:text-[min(8vh,8vw)] smTablet:text-[min(7vh,7vw)] xsPhone:text-[min(12vh,12vw)]  font-titilium font-semibold">
            Innovation Hub
          </h1>
          <p className=" tablet:w-[80%] smLaptop:text-[min(3vh,3vw)] text-[min(3.6vh,3.6vw)]  font-titilium  xsPhone:w-[90%] smLaptop:w-[50%] text-center">
            The Desire Innovation Hub connects organizations worldwide,
            leveraging a vast network to drive impactful advancements in water
            management and distribution through strategic partnerships and
            cutting-edge technologies.
          </p>
        </div>
      </div>

      <AdvisoryBoard />

      <div className={"flex flex-col justify-center items-center mt-16 w-full"}>
        <Accordion type="single" collapsible className={"w-[90%] space-y-6"}>
          <AccordionItem
            value="item-1"
            className={"bg-[#085C2C] border-2 p-8  text-white font-titilium"}
          >
            <AccordionTrigger>
              <div
                className={
                  "flex flex-col justify-center items-start gap-3 text-start "
                }
              >
                <p
                  className={
                    "xsPhone:text-[min(5vh,5vw)] smTablet:text-[min(2.5vh,2.5vw)] smLaptop:text-[min(3vh,3vw)] font-figtree"
                  }
                >
                  SUSTAINABLE DEVELOPMENT GOAL 6
                </p>{" "}
                <p
                  className={
                    "xsPhone:text-[min(4vh,4vw)] smTablet:text-[min(2.2vh,2.2vw)] smLaptop:text-[min(2.8vh,2.8vw)] font-figtree font-light tracking-wide"
                  }
                >
                  Promoting global water and sanitation equity through
                  sustainable management
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={
                "space-y-6 py-6 smLaptop:text-[min(2.2vh,2.2vw)] xsPhone:text-[min(2.5vh,2.5vw)] leading-relaxed"
              }
            >
              <p>
                Target 6.1 aims to ensure that everyone has access to safe and
                affordable drinking water by 2030.{" "}
              </p>
              <p>
                Target 6.3 aims to enhance water quality by decreasing
                pollution, stopping dumping, reducing Hazardous chemical
                releases, cutting untreated wastewater, and boosting global
                recycling and safe reuse by 2030.{" "}
              </p>
              <p>
                Target 6.4 aims to improve water efficiency across all sectors
                by 2030.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className={"bg-[#085C2C] border-2 p-8  text-white font-titilium"}
          >
            <AccordionTrigger>
              <div
                className={
                  "flex flex-col justify-center items-start gap-3 text-start "
                }
              >
                <p
                  className={
                    "xsPhone:text-[min(5vh,5vw)] smTablet:text-[min(2.5vh,2.5vw)] smLaptop:text-[min(3vh,3vw)] font-figtree"
                  }
                >
                  SUSTAINABLE DEVELOPMENT GOAL 7
                </p>{" "}
                <p
                  className={
                    "xsPhone:text-[min(4vh,4vw)] smTablet:text-[min(2.2vh,2.2vw)] smLaptop:text-[min(2.8vh,2.8vw)] font-figtree font-light tracking-wide"
                  }
                >
                  Empowering Communities with Reliable and Modern Energy Access
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={
                "space-y-6 py-6 smLaptop:text-[min(2.2vh,2.2vw)] xsPhone:text-[min(2.5vh,2.5vw)] leading-relaxed"
              }
            >
              <p>
                Target 7.2: By 2030, increase substantially the share of
                renewable energy in the global energy mix.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className={"bg-[#085C2C] border-2 p-8  text-white font-titilium"}
          >
            <AccordionTrigger>
              <div
                className={
                  "flex flex-col justify-center items-start gap-3 text-start "
                }
              >
                <p
                  className={
                    "xsPhone:text-[min(5vh,5vw)] smTablet:text-[min(2.5vh,2.5vw)] smLaptop:text-[min(3vh,3vw)] font-figtree"
                  }
                >
                  SUSTAINABLE DEVELOPMENT GOAL 9
                </p>{" "}
                <p
                  className={
                    "xsPhone:text-[min(4vh,4vw)] smTablet:text-[min(2.2vh,2.2vw)] smLaptop:text-[min(2.8vh,2.8vw)] font-figtree font-light tracking-wide"
                  }
                >
                  Promoting Resilient Infrastructure and Sustainable Industries
                  through Innovation
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={
                "space-y-6 py-6 smLaptop:text-[min(2.2vh,2.2vw)] xsPhone:text-[min(2.5vh,2.5vw)] leading-relaxed"
              }
            >
              <p>
                Target 9.5: Enhance scientific research, upgrade the
                technological capabilities of industrial sectors in all
                countries, in particular developing countries, including by
                2030.
              </p>
              <p>
                Encouraging innovation and substantially increasing the number
                of research and development workers per 1 million people and
                public and private research and development spending.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className={""}>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Page;
