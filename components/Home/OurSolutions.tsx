import React from "react";
import Image from "next/image";
import Solution1 from "@/public/asset/Solution1.png";
import Solution2 from "@/public/asset/Solution2.png";
// import Solution2 from "@/public/asset/solutions/AquaLogix.jpg";
import Solution3 from "@/public/asset/solutions/SunAquator.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Solutions = () => {
	return (
		<div className='bg-[#FAFAFA] relative flex justify-center items-center h-fit w-full '>
			<div className='flex flex-col justify-start items-start w-[85%] py-20 font-figtree gap-20'>
				{/* top */}
				<div className='flex  justify-center items-center gap-3  '>
					<h1 className='xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)] font-semibold '>
						{" "}
						Our <span className='text-[#085C2C]'>Solutions :</span> Efficiency.
						Innovation. Results.
					</h1>
					<hr className='border-[#085C2C] border-[0.10rem] w-[4rem] xsPhone:hidden smLaptop:block' />
				</div>
				{/* bottom */}
				<div className='grid smTablet:grid-cols-3 xsPhone:grid-cols-1 xsPhone:gap-[4rem] smTablet:gap-10 smLaptop:gap-[4rem] w-full h-full'>
					{/* 1st */}
					<div className='w-full flex flex-col gap-6'>
						<Image
							src={Solution1}
							alt=''
							className='h-auto w-[100%] max-w-[400px] '
						/>
						<h1 className='font-figtree smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)] font-semibold'>
							AquaLogix Automation Solution
						</h1>
						<p className='smTablet:line-clamp-3 font-titilium font-light smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]'>
							AquaLogix leverages IoT across web and mobile platforms, providing
							project management capabilities including live data monitoring,
							GIS tagging, simulations, and maintenance tools.
						</p>
						<Link
							href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-automation-solution`}
							className='flex '>
							<button className='smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]  xsPhone:py-2 hover:bg-[#D5F590] hover:text-[#003300] transition text-[#D5F590] bg-[#003300] tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 font-figtree my-4'>
								Know More{" "}
								<ArrowUpRight
									className='h-auto smLaptop:w-7 smTablet:w-6'
									strokeWidth={1.4}
								/>
							</button>
						</Link>
					</div>

					{/* 2nd */}
					<div className='w-full flex flex-col gap-6'>
						<Image src={Solution2} alt='' className='h-auto w-[100%]' />
						<h1 className='font-figtree smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)] font-semibold'>
							AquaLogix Smart Water-Metering Solution
						</h1>
						<p className='smTablet:line-clamp-3 font-titilium font-light smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]'>
							AquaLogix&apos;s smart water meter integrates IoT to monitor water
							usage efficiently, aiding in conservation efforts and enhancing
							management of water resources.
						</p>
						<Link
							href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-smart-water-meter`}
							className='flex '>
							<button className='smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]  xsPhone:py-2 hover:bg-[#D5F590] hover:text-[#003300] transition text-[#D5F590] bg-[#003300] tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 font-figtree my-4'>
								Know More{" "}
								<ArrowUpRight
									className='h-auto smLaptop:w-7 smTablet:w-6'
									strokeWidth={1.4}
								/>
							</button>
						</Link>
					</div>

					{/* 3rd */}
					<div className='w-full flex flex-col gap-6 h-full'>
						<Image src={Solution3} alt='' className='h-auto w-[100%]' />
						<h1 className='font-figtree smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)] font-semibold'>
							SunAquator Solar Pump Controller
						</h1>
						<p className='smTablet:line-clamp-3 font-titilium font-light smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]'>
							Sunaquator optimizes solar pumping with built-in AI-driven RMS,
							MPPT technology, and remote management via web and app interfaces
							for efficient water system control.
						</p>
						<Link
							href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/sunaquator-solar-power-plant`}
							className='flex '>
							<button className='smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)]  xsPhone:py-2 hover:bg-[#D5F590] hover:text-[#003300] transition text-[#D5F590] bg-[#003300] tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 font-figtree my-4'>
								Know More{" "}
								<ArrowUpRight
									className='h-auto smLaptop:w-7 smTablet:w-6'
									strokeWidth={1.4}
								/>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions;
