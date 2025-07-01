import Image from "next/image";
import React from "react";
import waterPlant from "@/public/asset/waste-water-treatment-plant 2.png";
import aquaLogix from "@/public/asset/Aqualogix-Icon 1.png";
import EPC from "@/public/asset/EPC-Icon-q3wms47rcav7256quzqpl54xdwvtryth14ixzuwd50 1.png";
import DWM from "@/public/asset/pump-q3wms7z43n0aaxautfhz0elrq2ivi61a4al3po3ajk 1.png";
import OM from "@/public/asset/OM-q3wms39x5gtwqj840hc30ndgsj0gk9pqozvgikxrb8 1.png";
import ESCO from "@/public/asset/suigas-q3wmrzike4org3dkmfpkqobmezizphatch9ilh3c04 1.png";
// import TapVector from "@/public/asset/Vector.png";
import DesireLogo from "@/public/asset/DesireLogoWater.svg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const OurServices = () => {
	return (
		<div className='w-screen h-full relative'>
			<div className='smTablet:grid smTablet:grid-cols-1 xsPhone:flex xsPhone:flex-col xsPhone:justify-center xsPhone:items-center  smLaptop:grid-rows-1 smLaptop:grid-cols-2  smLaptop:max-h-full'>
				<div className='smLaptop:max-h-full h-full xsPhone:max-h-[50vh]'>
					<div className='relative smLaptop:max-h-full h-full xsPhone:max-h-[50vh]'>
						<Image
							src={waterPlant}
							alt=''
							className='min-w-full smLaptop:max-h-full h-full object-cover xsPhone:max-h-[50vh]'
						/>
						<div className='absolute top-[3rem] left-[3rem] text-white space-y-8'>
							<div className='font-figtree w-fit text-[min(3.2vh,3.2vw)] font-normal space-y-2'>
								<p>
									Our <span className='text-[#D5F590]'>Services</span>
								</p>
								<hr className='bg-[#D5F590] w-[70%] h-1 rounded-xl' />
							</div>
							<p className='font-titilium text-[min(7vh,7vw)] font-semibold'>
								We redefine <br />
								Water Sustainability
							</p>
						</div>
					</div>
				</div>
				<div className='grid smTablet:grid-cols-2 xsPhone:grid-cols-1 h-full'>
					<Link
						href={`${process.env.NEXT_PUBLIC_APP_URL}/services/esco`}
						className={"group"}>
						<div className='border flex flex-col justify-start items-start gap-6 py-10 group-hover:scale-95 transition'>
							<Image src={ESCO} alt='ESCO' className='w-20 h-auto ml-6' />
							<div className='font-titilium font-semibold ml-10 text-[min(3vh,3vw)]'>
								<p className='smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
									ESCO
								</p>
							</div>
							<div className='font-titilium text-black/50 ml-10 w-[80%]'>
								<p>
									Desire Energy Solutions Pvt Ltd, a BEE-certified ESCO, excels
									in global energy conservation for water infrastructure, saving
									millions of electric units and billions of water liters
									annually.
								</p>
							</div>
						</div>
					</Link>
					<Link
						href={`${process.env.NEXT_PUBLIC_APP_URL}/services/smart-epc`}
						className={"group"}>
						<div className='border flex flex-col justify-start items-start gap-6 py-10 group-hover:scale-95 transition'>
							<Image src={EPC} alt='EPC' className='w-20 h-auto ml-8' />
							<div className='font-titilium font-semibold ml-10 text-[min(3vh,3vw)]'>
								<p className='smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
									Smart EPC
								</p>
							</div>
							<div className='font-titilium text-black/50 ml-10 w-[80%]'>
								<p>
									Desire Energy Solutions transforms conventional water
									infrastructure projects into smart, efficient systems using
									advanced management tools, tech solutions, and sustainable
									designs.
								</p>
							</div>
						</div>
					</Link>
					<Link
						href={`${process.env.NEXT_PUBLIC_APP_URL}/services/decentralized-water-management`}
						className={"group"}>
						<div className='border flex flex-col justify-start items-start gap-6 py-10 group-hover:scale-95 transition'>
							<Image src={DWM} alt='DWM' className='w-20 h-auto ml-10' />
							<div className='font-titilium font-semibold ml-10 text-[min(3vh,3vw)]'>
								<p className='smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
									Decentralised Water <br />
									Management
								</p>
							</div>
							<div className='font-titilium text-black/50 ml-10 w-[80%]'>
								<p>
									Desire Energy Solutions provides innovative,
									electricity-independent water solutions, saving lives in
									remote areas through solar DFU units, RO systems, and
									ATM-based dispensers.
								</p>
							</div>
						</div>
					</Link>

					<Link
						href={`${process.env.NEXT_PUBLIC_APP_URL}/services/operation-and-maintenance`}
						className={"group"}>
						<div className='border flex flex-col justify-start items-start gap-6 py-10 group-hover:scale-95 transition h-full'>
							<Image src={OM} alt='OM' className='w-20 h-auto ml-8' />
							<div className='font-titilium font-semibold ml-10 text-[min(3vh,3vw)]'>
								<p className='smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
									Operations & Maintenance
								</p>
							</div>
							<div className='font-titilium text-black/50 ml-10 w-[80%]'>
								<p>
									Effective operations and maintenance optimize energy,
									chemical, and water consumption, enhance asset management,
									reduce unplanned shutdowns, and extend equipment lifespan.
								</p>
							</div>
						</div>
					</Link>

					<Link
						href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-automation-solution`}
						className={"group"}>
						<div className='border flex flex-col justify-start items-start gap-6 py-10 group-hover:scale-95 transition'>
							<Image
								src={aquaLogix}
								alt='AquaLogix'
								className='w-[7rem] h-auto ml-10'
							/>
							<div className='font-titilium font-semibold ml-10 text-[min(3vh,3vw)]'>
								<p className='smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
									AquaLogix
								</p>
							</div>
							<div className='font-titilium text-black/50 ml-10 w-[80%]'>
								<p>
									AquaLogix, an IoT-based web, and mobile software, offers live
									data monitoring, GIS tagging, WIMS simulations, and complaint
									management for comprehensive water project management.
								</p>
							</div>
						</div>
					</Link>

					<div className='border flex flex-col relative justify-between bg-[#085C2C] items-start gap-10 py-10 overflow-x-clip'>
						<Image
							src={DesireLogo}
							alt='TapVector'
							className='w-[10rem] h-auto absolute right-[-3rem] bottom-0 '
						/>
						<div className='font-titilium font-normal ml-10 w-[70%] text-white text-md tracking-wide'>
							<p>
								Desire is saving lives by providing innovative solutions to
								remote areas striving for clean and regular water supply without
								any dependence on electricity.
							</p>
						</div>
						<div className='font-titilium text-black/50 ml-10 w-[80%]'>
							<Link
								href={`${process.env.NEXT_PUBLIC_APP_URL}/services/esco`}
								className='smTablet:text-[min(2vh,2vw)] w-fit  xsPhone:text-[min(3vh,3vw)] xsPhone:py-2 bg-[#D5F590] text-[#085C2C] hover:bg-[#003300] hover:text-[#D5F590] transition tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1'>
								Know More{" "}
								<ArrowUpRight
									className='h-auto xsPhone:w-5 smLaptop:w-7 smTablet:w-6'
									strokeWidth={1.4}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
