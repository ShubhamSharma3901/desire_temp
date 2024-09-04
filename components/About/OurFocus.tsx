"use client";
import Image from "next/image";
import React from "react";
import focusImage from "@/public/asset/aboutPage/About_Focus.png";
const OurFocus = () => {
	return (
		<>
			<div className='flex justify-start items-center w-full gap-5 font-titilium'>
				<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800'>
					Our Focus
				</p>
				<hr className='relative right-0 h-1 w-[100px] bg-[#085C2C]' />
			</div>
			<p className='smTablet:text-[min(6vh,6vw)] xsPhone:text-[min(7vw,7vh)] font-titilium font-light text-neutral-800'>
				Driving efficiency in water management through technology-driven
				solutions and renewable energy
			</p>
			<p className='xsPhone:w-fit tablet:w-[30em] font-titilium smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vw,4vh)] text-neutral-800 font-extralight'>
				Enabling smart, efficient, and inclusive public water infrastructure
				through innovative, technology-driven solutions for sustainable water
				management and accessibility.
			</p>
			<Image
				src={focusImage}
				alt='focus_about_page_image'
				className='absolute smTablet:w-[45vw] xsPhone:w-[70vw] h-auto right-[4em] bottom-[3em]'
			/>
		</>
	);
};

export default OurFocus;
