"use client";
import {
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbList,
} from "@/components/ui/breadcrumb";
// import landing_photo from "@/public/asset/Services/epc.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 4.jpg";
import epc2 from "@/public/asset/Services/epc-intro.jpeg";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";

import epc1 from "@/public/asset/Services/Smart_epc-e1678690983969.webp";

import { BreadcrumbItem } from "flowbite-react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableFooter,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

import { motion, Variant } from "framer-motion";
import Marque from "@/components/Home/Marquee";

const epcProjectsUP = [
	{
		district: "Ballia",
		// omvalue: "₹267.5 Cr",
		keyInfra: "110 OHSRs, 150000 FHTC's, WTP - 115 MLD, Intake well - 145 MLD",
	},
	{
		district: "Mau",
		// omvalue: "₹66.5 Cr",
		keyInfra: "108 OHSRs, 108 Tube Wells, 55000 FHTC's",
	},
	{
		district: "Varanasi",
		// omvalue: "₹125.8 Cr",
		keyInfra: "230 OHSRs, 230 Tube Wells, 115000 FHTC's",
	},
	{
		district: "Siddharth Nagar",
		// omvalue: "₹20.1 Cr",
		keyInfra: "19500 FHTC's, 50 OHSRs, 50 Tube Wells",
	},
];

const epcProjectsRajasthan = [
	{
		district: "Maharajganj & Mahuari",
		// omvalue: "₹62.9 Cr",
		keyInfra: "108 OHSRs, 105 Tube Wells, 81358 FHTC's",
	},
	{
		district: "Dungarpur",
		// omvalue: "₹11.31 Cr",
		keyInfra: "25 OHSRs, WTP - 3 MLD, Intake Well - 3 MLD, 22000 FHTC's",
	},
	{
		district: "Arthuna",
		// omvalue: "₹11.05 Cr",
		keyInfra: "47 Tube Wells, 47 OHSR's, 11000 FHTC's",
	},
	{
		district: "Bichhiwara",
		// omvalue: "₹11.05 Cr",
		keyInfra: "12700 FHTC's, 29 Tube Wells, 29 OHSRs",
	},
	{
		district: "Sarada",
		// omvalue: "₹11.05 Cr",
		keyInfra: "16 OHSR's, 12000 FHTC's, WTP - 3.5 MLD",
	},
];

const Page = () => {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16'>
			<div className='w-full h-full relative flex flex-col justify-center items-center'>
				<Image
					src={landing_photo}
					alt=''
					className='h-[80vh] object-cover brightness-[65%] w-full'
				/>
				<motion.div className='absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]'>
					<div className='w-full space-y-6'>
						<p className='smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] '>
							Smart EPC
						</p>
						<p className='smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]'>
							Smart EPC leverages advanced technologies like AI and IoT for
							streamlined project execution, enhancing efficiency,
							sustainability, and operational performance across engineering,
							procurement, and construction processes.
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
								className='font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]'>
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbPage className='font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]'>
								Services
							</BreadcrumbPage>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbPage className='font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]'>
								Smart EPC
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div className='flex justify-center items-center bg-[#085C2C] w-[87%] h-full font-titilium my-20 overflow-clip'>
				<div className='grid xsPhone:grid-cols-1 smLaptop:grid-cols-2 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start '>
					{/* left */}
					<div className='w-full flex justify-between h-full  items-start text-start flex-col gap-10'>
						<div className='space-y-8 tablet:p-16 xsPhone:p-10 text-justify'>
							<p className='text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]'>
								<span className='text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]'>
									Smart EPC
								</span>
							</p>
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]'>
								At Desire, we make the conventional water infra projects, which
								are neither techdriven/ efficiently managed nor consist of an
								efficient and sustainable design and construction, smart and
								efficient by utilizing smart management tools, tech solutions
								and quality sustainable development.
								<br />
								<br />
								Desire is currently providing efficient, sustainable and uniform
								water supply to around 7000+ villages under our visionary
								17,000+ Km Kilometers of Pipeline Installed 22,000+ Villages
								5,00,000+ House FHTC Connections 80 Lakh + People Served Jal
								Jeevan Mission that will benefit a population of millions of
								people. One of key project which also recognised by the
								Hon&apos;ble Government of UP was setting up water supply
								systems in UP&apos;s anganwadi, ashramshalas and schools at
								8,500 locations, 10 districts in 100 days.
							</p>
							<Image src={epc1} alt={""} />
						</div>
					</div>
					{/* right */}
					<div className='w-full bg-white h-full  grid grid-cols-1'>
						<div className={"h-full w-full"}>
							<Image
								src={epc2}
								alt={""}
								className={"h-full w-full object-cover"}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='mb-16 mt-10 flex flex-col justify-center items-center font-titilium text-start w-[85%] space-y-10'>
				<p className='xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-justify text-neutral-700 leading-relaxed'>
					Smart EPC represents a transformative shift in the way infrastructure
					projects are conceptualized, executed, and managed. It is grounded in
					the principles of digital engineering, integrated project delivery,
					and sustainable development, where technology is not an add-on, but a
					core enabler. By converging data-driven planning, real-time analytics,
					and intelligent automation, Smart EPC enhances every phase from design
					and procurement to construction and operation. The approach minimizes
					delays, reduces wastage, ensures compliance, and ultimately delivers
					higher value for public infrastructure investments. As India scales up
					its rural development and urban renewal efforts, the Smart EPC model
					is essential for creating systems that are not just functional, but
					resilient, adaptive, and future-ready.
				</p>
			</div>
			<div
				className='my-20
       flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4] py-16 relative overflow-clip'>
				<h1 className='w-[95%] text-start p-4 pl-8 xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-bold text-[#085C2C] font-titilium'>
					Engineering, Procurement & Construction (EPC) - Smart Water
					Infrastructure
				</h1>
				<p className='xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify'>
					Desire Energy Solutions is leading the way in smart, efficient, and
					sustainable public water infrastructure through Project Jal Prabal.
				    The project aligns with the
					Jal Jeevan Mission (JJM) to provide 55 LPCD (Liters Per Capita Per
					Day) of clean potable water to every rural household in India. Our EPC
					operations span 10 districts across Uttar Pradesh and Rajasthan, with
					tenure ranging from 5 to 10 years for long-term Operation &
					Maintenance (O&M).
				</p>
				<div className='w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide'>
					Scope of Work
				</div>
				<ul className='w-[90%] text-neutral-700 list-disc list-inside leading-relaxed xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]'>
					<li>Installation of Functional Household Tap Connections (FHTCs)</li>
					<li>Laying and retrofitting of water pipelines</li>
					<li>Construction of overhead reservoirs & pump houses</li>
					<li>
						Deployment of IoT devices & SCADA-based centralized monitoring
					</li>
					<li>Integration of solar-based water plants for energy efficiency</li>
					<li>
						Reduction of Non-Revenue Water (NRW) through AI-driven predictive
						analytics
					</li>
				</ul>

				<div className='w-[90%] space-y-4'>
					<p className='smTablet:text-[min(2vw,2vh)] xsPhone:text-[min(5vw,5vh)]  text-neutral-600'>
						1. Uttar Pradesh (10 Years of Tenure)
					</p>
					<Table className='w-full mx-auto smTablet:text-[min(1.8vh,1.8vw)]'>
						<TableHeader className='bg-gray-200 text-white'>
							<TableRow>
								<TableHead>District</TableHead>
								{/* <TableHead>O&M Value</TableHead> */}
								<TableHead>Key Infrastructure</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{epcProjectsUP.map((project, idx) => (
								<TableRow key={idx}>
									<TableCell>{project.district}</TableCell>
									{/* <TableCell>{project.omvalue}</TableCell> */}
									<TableCell>{project.keyInfra}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				<div className='w-[90%] space-y-4'>
					<p className='smTablet:text-[min(2vw,2vh)] xsPhone:text-[min(5vw,5vh)]  text-neutral-600'>
						2. Rajasthan (5 Years of Tenure)
					</p>
					<Table className='w-full mx-auto smTablet:text-[min(1.8vh,1.8vw)]'>
						<TableHeader className='bg-gray-200 text-white'>
							<TableRow>
								<TableHead>District</TableHead>
								{/* <TableHead>O&M Value</TableHead> */}
								<TableHead>Key Infrastructure</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{epcProjectsRajasthan.map((project, idx) => (
								<TableRow key={idx}>
									<TableCell>{project.district}</TableCell>
									{/* <TableCell>{project.omvalue}</TableCell> */}
									<TableCell>{project.keyInfra}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				<div className='w-[90%] mt-12'>
					<h2 className='font-semibold text-neutral-500 smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)] mb-4'>
						Smart Technology at Work
					</h2>
					<ul className='list-disc list-inside text-neutral-700  xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]'>
						<li>
							Real-time monitoring and analytics with IoT and SCADA systems
						</li>
						<li>AI-driven predictive maintenance for reduced downtime</li>
						<li>Automated water quality control and reporting</li>
						<li>Remote operation and centralized management</li>
					</ul>
				</div>

				<div className='w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide'>
					Sustainable Impact & Smart Technology
				</div>
				<ul className='w-[90%] text-neutral-700 list-disc list-inside leading-relaxed xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)]'>
					<li>
						Energy-efficient & solar-powered solutions support renewable energy
						goals and reduce carbon footprint
					</li>
					<li>
						Water treatment plant in Baghera, Rajasthan supplies 80,000 KL of
						potable water per day
					</li>
					<li>Potable water delivery to over 60 lakh citizens</li>
					<li>Empowering villages with smart infrastructure & clean energy</li>
					<li>
						Creating skilled jobs & sustainable livelihoods in rural India
					</li>
					<li>Aligning with India’s Net Zero and Digital Governance goals</li>
				</ul>

				<p className='xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify'>
					By integrating cutting-edge technology with sustainable engineering
					practices, Desire Energy Solutions is revolutionizing water
					infrastructure and supporting India&apos;s mission for universal clean
					water access.
				</p>

				<Image
					src={desireLogo}
					alt='desire_logo'
					className='absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-5 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]'
				/>
			</div>
			<div className={"mt-10 w-[90%]"}>
				<Marque />
			</div>
		</div>
	);
};

export default Page;
