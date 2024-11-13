"use client";
import React from "react";
import Trust from "@/public/asset/aboutPage/CoreValues-Trust.png";
import Image from "next/image";
import logo from "@/public/asset/aboutPage/DesireLogoWater.svg";
import trust from "@/public/asset/aboutPage/Trust.png";
import transparency from "@/public/asset/aboutPage/Transparency.png";
import partnership from "@/public/asset/aboutPage/Partnership.png";
import technology from "@/public/asset/aboutPage/Technology.png";

const coreValues = [
	{
		name: "Trust",
		desc: "We consistently apply this principle in every action, forming enduring partnerships that deliver exceptional and lasting results.",
		img: trust,
	},
	{
		name: "Transparency",
		desc: "We work openly with our partners and team, fostering transparency and setting benchmarks for clear communication and standards.",
		img: transparency,
	},
	{
		name: "Technology",
		desc: "We harness cutting-edge technologies to streamline project execution and management. Our proprietary ERP system is continually enhanced to deliver smart, efficient outcomes.",
		img: technology,
	},
	{
		name: "Partnership",
		desc: "We cultivate an environment where ethics are paramount in decision-making, rewarding team members positively, including through profit-sharing incentives.",
		img: partnership,
	},
];

const CoreValues = () => {
	return (
		<>
			<div className='flex justify-start items-center w-full gap-5 font-titilium'>
				<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800'>
					Our Values
				</p>
				<hr className='relative   right-0 h-1 w-[100px] bg-[#085C2C]' />
			</div>
			<p className='smTablet:text-[min(6vh,6vw)] xsPhone:text-[min(6vw,6vh)] font-titilium font-light text-neutral-800 '>
				Building Tomorrow with <br />
				Trust, Transparency, Technology, and Partnership.
			</p>
			<div className='grid smLaptop:grid-cols-4 tablet:grid-cols-2 xsPhone:grid-cols-1 gap-10 w-full mt-10 '>
				{coreValues.map((value, idx) => {
					return (
						<div
							key={idx}
							className='w-full flex flex-col font-titilium gap-6 relative'>
							<Image
								src={value.img}
								alt=''
								className='max-w-[150px] relative -left-6'
							/>
							<h2 className='text-[#085C2C] smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(6vw,6vh)]'>
								{value.name}
							</h2>
							<p className='text-neutral-600 smLaptop:text-[min(2.5vh,2.5vw)]  smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.5vh,3.5vw)] font-light'>
								{value.desc}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CoreValues;
