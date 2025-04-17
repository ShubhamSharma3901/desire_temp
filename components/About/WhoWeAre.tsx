"use client";
import React from "react";
import WhoWeAre1 from "@/public/asset/aboutPage/WhoWeAre-1.png";
import WhoWeAre2 from "@/public/asset/aboutPage/WhoWeAre2.jpg";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <>
      <div className="flex justify-start items-center w-full gap-5 font-titilium">
        <p className="smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800">
          Who We Are
        </p>
        <hr className="relative   right-0 h-1 w-[100px] bg-[#085C2C]" />
      </div>
      <div
        className={
          "flex flex-col justify-center items-center w-full gap-14 font-titilium"
        }
      >
        <div
          className={
            "flex xsPhone:flex-col justify-center items-start w-full gap-10 font-titilium"
          }
        >
          <h1 className="smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(6vw,6vh)] font-titilium xsPhone:w-full">
            Driving Water Solutions: Innovating Efficiency, Harnessing Renewable
            Energy for Sustainable Public Infrastructure Nationwide.
          </h1>
          <p className="xsPhone:w-full smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.5vh,3.5vw)] font-titilium  text-justify text-neutral-800 font-light">
            Desire Energy Solutions Pvt. Ltd. is a national award-winning,
            tech-driven water management company dedicated to addressing
            critical water challenges through innovation and expertise. As a
            certified Bureau of Energy Efficiency (BEE) ESCO company, we
            specialize in delivering energy-efficient solutions, solar
            integration, and IoT-based technologies that drive sustainable
            transformation in the public water sector.
            <br />
            <br />
            With a PAN India presence, we are proud to be one of the
            fastest-growing water infrastructure and management companies in
            India. Our impactful work spans key government initiatives such as
            Jal Jeevan Mission, PM-Kusum, and Panghat Yojna, where we have
            successfully implemented energy-saving and technology-driven
            projects. Today, we manage water supply to over 100,000 villages and
            14+ cities, ensuring millions of people have access to clean,
            reliable, and sustainable water.
            <br />
            <br />
            Our advanced technology division, AquaLogix, offers IoT and AI-based
            solutions for monitoring, predictive, and preventive maintenance of
            water infrastructure. These innovative solutions help enhance the
            efficiency, sustainability, and reliability of public water systems
            nationwide.
            <br />
            <br />
            At Desire Energy Solutions, our team of 2,000+ professionals is
            committed to making public water infrastructure smarter, more
            efficient, and more sustainable. Guided by values of trust,
            transparency, and innovation, we are dedicated to not just meeting
            today&apos;s water management needs, but also anticipating the challenges
            of tomorrow.
          </p>
        </div>


      </div>
    </>
  );
};

export default WhoWeAre;
