import React from "react";
import Image from "next/image";
import Vector from "@/public/asset/LeafVector.svg";
import Sus2 from "@/public/asset/Sus2.png";
import Sus1 from "@/public/asset/Sus1.png";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Sustainability = () => {
	return (
		<div className='flex justify-center items-center bg-[#FAFAFA] '>
			<div className='h-fit w-[85%] flex smLaptop:flex-row xsPhone:flex-col justify-center items-center gap-5 py-20'>
				{/* left */}
				<div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
					<div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden  bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
						<Image
							src={Sus2}
							alt='dp'
							className='h-full w-full object-cover object-center'
							width={400}
							height={500}
						/>
					</div>

					<div className='overflow-hidden  bg-gray-100 shadow-lg'>
						<Image
							src={Sus1}
							alt='dp'
							className='h-full w-full object-cover object-center'
							width={300}
							height={500}
						/>
					</div>
				</div>

				{/* right */}
				<div className='smLaptop:w-[40%] xsPhone:w-full flex flex-col justify-start items-start gap-4 smLaptop:p-12 xsPhone:pl-0 xsPhone:py-12 xsPhone:pr-0 font-figtree'>
					<div className='flex gap-3 items-center'>
						<p className='font-titilium xsPhone:text-[min(4vh,4vw)] smTablet:text-[min(3.2vh,3.2vw)] '>
							Our Way
						</p>
						<hr className='border-[#D5F590] border-[0.10rem] w-[4rem] ' />
					</div>
					<div className='flex gap-3'>
						<h1 className='xsPhone:text-[min(8vh,8vw)] smTablet:text-[min(6vh,6vw)] font-semibold'>
							Sustainability
						</h1>
						<Image src={Vector} alt='dp' className='h-auto w-[1.5rem]' />
					</div>
					<div>
						<h1 className='font-light '>
							Sustainability involves using resources efficiently and adopting
							renewable energy to meet today&apos;s needs while protecting
							future generations, reducing environmental impact, and promoting
							long-term ecosystem and community health.
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sustainability;
