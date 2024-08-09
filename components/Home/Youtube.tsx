import React from "react";
import headerPattern from "@/public/asset/Footer pattern 1.png";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const Youtube = () => {
	return (
		<div className=' w-screen relative overflow-clip flex justify-center items-center xsPhone:py-10 smTablet:py-20 '>
			<Image
				src={headerPattern}
				alt=''
				className='absolute right-0 top-[min(-10vh,-10vw)] w-[40rem] h-auto z-[-1]'
			/>

			<div className='flex justify-center items-center bg-[#085C2C] w-[87%]  font-titilium p-10'>
				<div className='grid xsPhone:grid-cols-1 smLaptop:grid-cols-2 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start'>
					{/* left */}
					<div className='w-full  flex justify-between h-full items-start text-start flex-col gap-10'>
						<div className='space-y-8'>
							<p className='text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]'>
								&quot;Leading the Way in Water{" "}
								<br className='xsPhone:hidden smTablet:block' />
								Sustainability: Efficient{" "}
								<span className='text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]'>
									Tech-Driven <br />
									Solutions.&quot;
								</span>
							</p>
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]'>
								Water Efficiency Across 100,000+ Villages and 14+ Cities.
							</p>
						</div>
						<div className='flex '>
							<button className='smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]  xsPhone:py-2 text-[#D5F590] bg-[#003300] hover:bg-[#D5F590] hover:text-[#003300] transition tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 font-figtree'>
								Know More{" "}
								<ArrowUpRight
									className='h-auto smLaptop:w-7 smTablet:w-6'
									strokeWidth={1.4}
								/>
							</button>
						</div>
					</div>
					{/* right */}
					<div className='w-full'>
						<iframe
							className='w-full aspect-video self-stretch md:min-h-96'
							src='https://www.youtube.com/embed/NlrNrEHgnD4'
							title='Desire Energy Corporate Video 2022'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Youtube;
