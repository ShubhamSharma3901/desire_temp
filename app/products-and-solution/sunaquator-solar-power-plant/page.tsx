"use client";
import {
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbList,
} from "@/components/ui/breadcrumb";
import landing_photo from "@/public/asset/products_and_solution/SunAquator.jpg";
import sunaquator_logo from "@/public/asset/products_and_solution/sunaquator_logo.png";
import sunaquator_creative_1 from "@/public/asset/products_and_solution/Sunaquator-creative-1.png";
import sunaquator_creative_2 from "@/public/asset/products_and_solution/Sunaquator-creatiive-2.png";
import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React from "react";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";

import { motion, Variant } from "framer-motion";

const Page = () => {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16'>
			<div className='w-full h-full relative flex flex-col justify-center items-center'>
				<Image
					src={landing_photo}
					alt=''
					className='h-[80vh] object-cover brightness-[65%]'
				/>
				<motion.div className='absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]'>
					<div className='w-full space-y-6'>
						<p className='smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] '>
							SunAquator Solar Power Plant
						</p>
						<p className='smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]'>
							SunAquator, crafted by Desire Energy, integrates MPPT and
							AI-driven RMS into solar pump controllers, facilitating remote
							monitoring and operation via web and app, ideal for efficient
							water management in agriculture and municipal sectors.
						</p>
					</div>
				</motion.div>
			</div>
			<div className=' w-full py-10 border-b-4 flex justify-center items-center'>
				<Breadcrumb className=' flex justify-start items-center w-[85%]'>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								href='/'
								className='font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)'>
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbPage className='font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)'>
								Products & Solutions
							</BreadcrumbPage>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbPage className='font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)'>
								SunAquator Solar Power Plant
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div className='flex justify-center items-center bg-[#085C2C] w-[87%]  font-titilium my-20 '>
				<div className='grid xsPhone:grid-cols-1 smLaptop:grid-cols-2 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start'>
					{/* left */}
					<div className='w-full flex justify-between h-full items-start text-start flex-col gap-10'>
						<div className='space-y-8 tablet:p-16 xsPhone:p-10'>
							<p className='text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]'>
								Empowering Sustainability,
								<span className='text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]'>
									&nbsp;Energizing Future
								</span>
							</p>
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]'>
								A revolutionary solar pump controller that leverages solar
								energy and IoT technology to provide a dependable, efficient,
								and environmentally friendly solution. By addressing the
								shortcomings of conventional systems, SunAquator 2.0 sets a new
								benchmark for global water management practices, ensuring water
								accessibility even in the most remote locations. SunAquator 2.0
								is not just a conventional VFD but a PCB-based controller
								designed to revolutionize the operation of solar pump
								controllers.
							</p>
						</div>
					</div>
					{/* right */}
					<div className='w-full bg-white h-full object-cover p-10 flex justify-center items-center'>
						<Image
							src={sunaquator_logo}
							alt='aqualogix_logo'
							className='w-[80%]'
						/>
					</div>
				</div>
			</div>

			<div className='mb-16 mt-10 flex flex-col justify-center items-center font-titilium text-start w-[85%] space-y-10'>
				<div className='flex justify-start items-center w-full gap-5 font-titilium'>
					<p className='smTablet:text-[min(3.5vw,3.5vh)] xsPhone:text-[min(5vw,5vh)]  '>
						Overview
					</p>
					<hr className='relative right-0 h-1 w-[100px] bg-[#085C2C]' />
				</div>
				<p className='xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed'>
					SunAquator, developed by Desire Energy, is an innovative solution in
					solar pump and controller technology known for its efficiency in the
					solar pumping sector. Featuring integrated Maximum Power Point
					Tracking (MPPT), SunAquator maximizes energy extraction from solar
					panels. Certifications from MNRE, NISE, ERDA, and TUV validate
					SunAquator&apos;s adherence to stringent quality and performance
					standards, affirming its reliability across various solar energy
					applications.
				</p>
				<p className='xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed'>
					SunAquator pump controllers seamlessly integrate with a mobile app and
					web portal, facilitating remote monitoring and operation. Users
					efficiently manage their solar pumping systems, accessing real-time
					data, monitoring performance metrics, and promptly addressing
					operational needs. Desire Energy&apos;s SunAquator significantly
					contributes to India&apos;s renewable energy goals by providing
					dependable, efficient, and advanced solutions for solar pumping. Its
					incorporation of MPPT technology and robust monitoring capabilities
					plays a crucial role in advancing sustainable energy practices and
					supporting India&apos;s journey towards environmental sustainability.
				</p>
			</div>

			<div className='w-[85%] space-y-20'>
				<Image src={sunaquator_creative_1} alt='' className='' />
				<Image src={sunaquator_creative_2} alt='' className='' />
			</div>

			<div className='my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4]  py-16 relative overflow-clip'>
				<div className='w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide '>
					Salient Features
				</div>

				<div className='flex flex-col justify-start items-start space-y-10 w-[90%] xsPhone:text-[min(3.7vh,3.7vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700'>
					<p>• &nbsp;&nbsp;&nbsp;IoT-enabled IP-65 protection</p>
					<p>• &nbsp;&nbsp;&nbsp;Compatible with 3G/4G</p>
					<p>• &nbsp;&nbsp;&nbsp;In-built RMS, FOTA</p>
					<p>• &nbsp;&nbsp;&nbsp;User-friendly plug-and-play system</p>
					<p>• &nbsp;&nbsp;&nbsp;Mobile app operation</p>
					<p>• &nbsp;&nbsp;&nbsp;Shockproof and corrosion-free body</p>
					<p>• &nbsp;&nbsp;&nbsp;FRP body for field conditions</p>
					<p>• &nbsp;&nbsp;&nbsp;Largest heat sink for long life</p>
					<p>• &nbsp;&nbsp;&nbsp;50,000+ installations</p>
					<p>
						• &nbsp;&nbsp;&nbsp;24x7 support via toll-free number 1800-1806-010.
					</p>
				</div>
				<Image
					src={desireLogo}
					alt='desire_logo'
					className='absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-75 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]'
				/>
			</div>
		</div>
	);
};

export default Page;
