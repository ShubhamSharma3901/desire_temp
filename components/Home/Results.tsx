import React from "react";
import ResultBg from "@/public/asset/ResultsBg.png";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "../ui/separator";
import DesireLogo from "@/public/asset/DesireLogoWater.svg";
const Results = () => {
	return (
		<div className='relative w-full flex flex-col justify-center items-center py-20 gap-20'>
			<div className='w-[85%] flex justify-between items-start relative h-auto'>
				<Image
					src={ResultBg}
					alt='ResultBg'
					className='smTablet:w-[80%] smLaptop:w-[70%] xsPhone:w-full h-auto absolute translate-x-[-50%] left-[50%] translate-y-[-80%] top-[80%] '
				/>
				<div className=' w-1/2 h-full font-titilium font-semibold'>
					<div className='flex flex-col justify-start items-start gap-10 '>
						<p className='text-[min(7vw,7vh)]'>
							Efficient, <br />
							<span className='text-[#085C2C]'>Tech Driven Results.</span>
						</p>
						<p className='font-light w-[70%] '>
							Desire Energy Solutions Pvt. Ltd. enhances India&apos;s water
							infrastructure, achieving energy efficiency, sustainability, and
							widespread access through innovative technologies.
						</p>
						<button className='smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]  xsPhone:py-2 text-[#D5F590] bg-[#003300] hover:bg-[#D5F590] hover:text-[#003300] transition tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 font-figtree'>
							Know More{" "}
							<ArrowUpRight
								className='h-auto smLaptop:w-7 smTablet:w-6'
								strokeWidth={1.4}
							/>
						</button>
					</div>
				</div>
				<div className='w-1/2 h-full font-titilium flex flex-col justify-start items-end  gap-14'>
					<div className='text-start smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-[90%] space-y-6'>
						<div className='space-y-1'>
							<p className='text-[min(7vw,7vh)]'>1,00,000</p>
							<p className='font-light xsPhone:text-[min(3vw,3vh)] smTablet:text-[min(2.1vh,2.1vw)]'>
								Villages & 14+ Cities Managed by Smart Water Supply System
							</p>
						</div>
						<Separator className=' bg-black' />
					</div>
					<div className='text-start smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-[90%] space-y-6'>
						<div className='space-y-1'>
							<p className='text-[min(7vw,7vh)] '>5,00,000 +</p>
							<p className='font-light xsPhone:text-[min(3vw,3vh)] smTablet:text-[min(2.1vh,2.1vw)]'>
								Household Functional Tap Connections
							</p>
						</div>
						<Separator className=' bg-[#085C2C]' />
					</div>
					<div className='text-start smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-[90%] space-y-6'>
						<div className='space-y-1'>
							<p className='text-[min(7vw,7vh)] '>35 Million</p>
							<p className='font-light xsPhone:text-[min(3vw,3vh)] smTablet:text-[min(2.1vh,2.1vw)] '>
								Electric Units Annual Energy Saving
							</p>
						</div>
						<Separator className=' bg-[#085C2C]' />
					</div>
					<div className='text-start smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-[90%] space-y-6'>
						<div className='space-y-1'>
							<p className='text-[min(7vw,7vh)]'>
								42000 <span className='text-[min(2.5vh,2.5vw)]'>kWh</span>
							</p>
							<p className='font-light xsPhone:text-[min(3vw,3vh)] smTablet:text-[min(2.1vh,2.1vw)] '>
								Annual Electricity Generation
							</p>
						</div>
						<Separator className=' bg-[#085C2C]' />
					</div>
				</div>
			</div>
			<div className='w-[85%] relative bg-[#085C2C] text-white flex flex-col justify-center items-center text-center text-wrap smLaptop:p-[6rem] xsPhone:py-[3rem] xsPhone:px-4 xsPhone:gap-4 smLaptop:gap-10 overflow-clip'>
				<p className='font-figtree smLaptop:text-[min(4vh,4vw)] font-semibold '>
					Wondering How did the Company achieve these{" "}
					<span className='text-[#D5F590]'>Numbers ?</span>
				</p>
				<p className='font-titilium smLaptop:text-[min(2.7vh,2.7vw)] w-[90%]'>
					Desire Energy achieved its milestones through strategic partnerships,
					innovative IoT solutions, ESCO projects, solar initiatives, and robust
					management.
				</p>
				<Image
					src={DesireLogo}
					alt=''
					className='w-[13rem] h-auto absolute right-[-3rem] bottom-0 xsPhone:hidden smLaptop:block'
				/>
			</div>
		</div>
	);
};

export default Results;
