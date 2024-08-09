/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import logo from "@/public/asset/desire_logo_white.png";
import { Separator } from "@radix-ui/react-separator";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { BsInstagram, BsLinkedin, BsMeta, BsTwitterX } from "react-icons/bs";
const Footer = () => {
	return (
		<div>
			<footer className='bg-gradient-to-b from-[#085C2C] to-[#003300] text-white'>
				<div className='mx-auto w-[85%] px-4 xsPhone:py-8 smLaptop:py-[4rem]'>
					<div className='flex xsPhone:flex-col tablet:flex-row'>
						<div className='mb-6 md:mb-0 flex flex-col justify-center items-start gap-[4rem] font-titilium text-white/80 tablet:w-[50%] xsPhone:w-full'>
							<div className='flex flex-col justify-center items-start gap-[2rem]'>
								<a href='#' className='flex items-center'>
									<Image
										src={logo}
										className='h-auto w-[15rem]'
										alt='FlowBite Logo'
									/>
								</a>
								<p className='tablet:w-[80%] xsPhone:w-full '>
									401, Manupasana Tower, Near Chomu HouseCircle, C-Scheme,
									Jaipur (Raj.) INDIA
								</p>
							</div>
							<div className='space-y-[1rem]'>
								<p>info@desireenergy.com</p>
								<p>Toll Free No : 1800 180 6010</p>
							</div>
						</div>
						<div className='grid tablet:grid-cols-3 xsPhone:grid-cols-1 gap-8 tablet:w-[80%] xsPhone:w-full'>
							<div className=''>
								<h2 className='mb-6 font-semibold  uppercase text-white font-figtree tablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.4vh,3.5vw)]'>
									Services
								</h2>
								<Separator className='tablet:w-[80%] xsPhone:w-full h-[2px] bg-white mb-7' />
								<ul className='text-white font-medium space-y-4 font-titilium'>
									<li className=''>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											ESCO
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Aqualogix Smart Water Meter
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Aqualogix Automation Solution
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Sunaquator Solar Power Plant
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Operation and Maintenance Service
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-6 font-semibold  uppercase text-white font-figtree tablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.4vh,3.5vw)]'>
									Quick Links
								</h2>
								<Separator className='tablet:w-[80%] xsPhone:w-full h-[2px] bg-white mb-7' />
								<ul className='text-white font-medium space-y-4 font-titilium'>
									<li className=''>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											About Us
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Contact Us
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Products & Solutions
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:underline hover:text-[#D5F590] transition'>
											Services
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-6 font-semibold  uppercase text-white font-figtree tablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(3.4vh,3.5vw)]'>
									Socials
								</h2>
								<Separator className='tablet:w-[80%] xsPhone:w-full h-[2px] bg-white mb-7' />
								<div className='text-white font-medium  font-titilium flex justify-start gap-8 items-center'>
									<a
										href='#'
										className='hover:underline hover:text-[#D5F590] transition'>
										<BsInstagram className='h-auto w-6' />
									</a>

									<a
										href='#'
										className='hover:underline hover:text-[#D5F590] transition'>
										<BsMeta className='h-auto w-6' />
									</a>

									<a
										href='#'
										className='hover:underline hover:text-[#D5F590] transition'>
										<BsTwitterX className='h-auto w-6' />
									</a>

									<a
										href='#'
										className='hover:underline hover:text-[#D5F590] transition'>
										<BsLinkedin className='h-auto w-6' />
									</a>
								</div>
							</div>
						</div>
					</div>
					<hr className=' border-gray-200 dark:border-gray-700  mt-20 mb-10' />
					<div className='sm:flex sm:items-center sm:justify-between text-white/80 font-titilium'>
						<span className='text-sm text-white/80 sm:text-center  font-titilium'>
							All rights reserved © DesireEnergy
						</span>
						<div className='flex mt-4 sm:justify-center sm:mt-0 gap-10'>
							<a
								href='#'
								className='hover:underline hover:text-[#D5F590] transition'>
								Privacy Policy
							</a>
							<a
								href='#'
								className='hover:underline hover:text-[#D5F590] transition'>
								Cookie Policy
							</a>
							<a
								href='#'
								className='hover:underline hover:text-[#D5F590] transition'>
								Terms & Conditions
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
