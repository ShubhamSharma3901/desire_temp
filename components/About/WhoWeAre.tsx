"use client";
import React from "react";
import WhoWeAre1 from "@/public/asset/aboutPage/WhoWeAre-1.png";
import WhoWeAre2 from "@/public/asset/aboutPage/WhoWeAre2.jpg";
import Image from "next/image";

const WhoWeAre = () => {
	return (
		<>
			{/* <div className='flex justify-start items-center w-full gap-5 font-titilium'>
				<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800'>
					Who We Are
				</p>
				<hr className='relative   right-0 h-1 w-[100px] bg-[#085C2C]' />
			</div> */}
			<div
				className={
					"flex flex-col justify-center items-center w-full gap-14 font-titilium"
				}>
				<div
					className={
						"flex xsPhone:flex-col justify-center items-start w-full gap-10 font-titilium"
					}>
					{/* <h1 className="smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(6vw,6vh)] font-titilium xsPhone:w-full">
            Driving Water Solutions: Innovating Efficiency, Harnessing Renewable
            Energy for Sustainable Public Infrastructure Nationwide.
          </h1> */}
					<p className='xsPhone:w-full smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.5vh,3.5vw)] font-titilium  text-justify text-neutral-800 font-light'>
						We are a nationally recognized, award-winning, technology-driven
						company specializing in water management. Headquartered in Jaipur,
						we operate across India with core competencies in energy efficiency,
						engineering, technology, construction, and manufacturing
						particularly in the public water sector.
						<br />
						<br />
						Recognized as one of India&apos;s fastest-growing water
						infrastructure and management companies, Desire Energy serves as a
						key aggregator collaborating with diverse stakeholders nationwide.
						The company has delivered impactful projects under several flagship
						initiatives such as the Jal Jeevan Mission, PM-Kusum, and Panghat
						Yojana, implementing ESCO models, solar energy systems, and
						IoT-based infrastructure solutions. Presently, we are managing water
						supply operations for over 1,00,000 villages and 14+ cities across
						India through an integrated approach combining advanced technology,
						renewable energy, and efficient management practices.
						<br />
						<br />
						Desire Energy also houses a dedicated technology arm, “AquaLogix,”
						which offers cutting-edge IoT and AI-powered solutions for real-time
						monitoring, predictive analytics, and preventive maintenance of
						water infrastructure—driving the transition towards smart,
						sustainable, and efficient public water systems.
						<br />
						<br />
						With a robust team of 2,000+ professionals deployed across the
						country, the company upholds values of trust, transparency,
						collaboration, and innovation.
						<br />
						<br />
						Through our integrated services and future-ready solutions, Desire
						Energy Solutions Pvt. Ltd. remains committed to transforming
						India&apos;s public water infrastructure into a model of
						sustainability and smart innovation.
					</p>
				</div>
			</div>
		</>
	);
};

export default WhoWeAre;
