"use client";
import React from "react";
import Image from "next/image";
import blog1 from "@/public/1.jpeg";
import { TbArrowUpRight } from "react-icons/tb";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import SanityImage from "@/components/ui/SanityImage";
import { ArrowUpRight } from "lucide-react";
const BlogCard = ({
	imageSrc,
	title,
	description,
	date,
}: {
	imageSrc: SanityImageSource;
	title: string;
	description: string;
	date: string;
}) => {
	return (
		<div className='mx-auto my-auto flex items-center justify-center gap-12 font-titilium'>
			<div className='flex flex-col items-start justify-center gap-5'>
				<div className='w-full h-auto overflow-clip aspect-video'>
					<SanityImage
						src={imageSrc}
						className='h-auto w-fit object-cover rounded-none '
					/>
				</div>
				<div className='flex w-full justify-between  font-extralight phone:text-[min(3vh,3vw)] smTablet:text-[min(1.6vh,1.6vw)]'>
					<p className=' '>Author: Desire Energy Solutions Pvt. Ltd. </p> &nbsp;
					&nbsp; &nbsp;
					<p className=' '>{new Date(date).toUTCString()}</p>
				</div>
				<p className=' font-semibold tracking-wide phone:text-[min(4.5vh,4.5vw)] smTablet:text-[min(2.8vw,2.8vh)]'>
					{title}
				</p>
				<p className='line-clamp-2  font-extralight phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vw,1.8vh)]'>
					{description}
				</p>
				<div className='w-full'>
					<button className='smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]  xsPhone:py-2 text-[#D5F590] bg-[#003300] hover:bg-[#D5F590] hover:text-[#003300] transition tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 font-figtree my-4 '>
						Read More{" "}
						<ArrowUpRight
							className='h-auto smLaptop:w-7 smTablet:w-6'
							strokeWidth={1.4}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
