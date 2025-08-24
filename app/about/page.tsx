"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OurFocus from "@/components/About/OurFocus";
import WhoWeAre from "@/components/About/WhoWeAre";
import CoreValues from "@/components/About/CoreValues";
// import headerPattern from "@/public/asset/Footer pattern 1.png";
import headerImage from "@/public/asset/aboutPage/strip_image.jpg";
// import headerImage from "@/public/asset/headerImages/Header Image 3.jpg";
import Services from "@/components/About/Services";
import { team } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import SanityImage from "@/components/ui/SanityImage";
import gauravgupta from "@/public/asset/aboutPage/MrGauravGupta.avif";
import saurabhSir from "@/public/asset/aboutPage/saurabhSir.webp";
import ruchi from "@/public/asset/aboutPage/ruchi.png";
import suraj from "@/public/asset/aboutPage/suraj sir.webp";
import TeamTree from "@/public/asset/aboutPage/TeamTree.png";
import Timeline from "@/components/About/Timeline";
import org_struc from "@/public/asset/aboutPage/organizational-structure.jpeg";
import MissionVision from "@/components/Home/MissionVision";
const TeamCarousel = ({ team, loaded }: { team: team[]; loaded: any }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const nextSlide = () => {
		if (currentIndex < team.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className='relative w-full h-full overflow-hidden flex items-center'>
			{team && team.length !== 0 && loaded ? (
				<div
					style={{
						transform: `translateX(-${(currentIndex * 100) / team.length}%)`,
					}}
					className='flex transition-transform duration-500 ease-in-out gap-4'>
					{team.map((member: any, idx: any) => (
						<div
							key={idx}
							className={`bg-white font-titilium relative w-[300px] h-[400px] overflow-hidden group cursor-pointer`}>
							{/* Image Container - Fixed Height */}
							<div
								className={
									"w-full h-full overflow-hidden bg-gray-100 relative"
								}>
								<SanityImage
									src={member.mainImage}
									className={
										"absolute inset-0 w-full min-h-full object-cover object-top"
									}
								/>
							</div>

							{/* Name and Designation - Fixed Position */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 h-[100px] flex flex-col justify-center z-10"
								}>
								<h1
									className={
										"smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4vh,4vw)] font-semibold leading-tight"
									}>
									{member.name}
								</h1>
								<p className={"text-gray-500 text-sm mt-1"}>
									{member.designation}
								</p>
							</div>

							{/* About Text - Slides up on hover with dynamic height */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 z-20"
								}>
								<p className={"text-neutral-600 text-sm leading-relaxed"}>
									{member.about}
								</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<Skeleton className='w-full h-[300px] bg-white' />
			)}

			<button
				onClick={prevSlide}
				disabled={currentIndex === 0}
				className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 ${
					currentIndex === 0 ? "bg-gray-400" : "bg-gray-700 text-white"
				}`}>
				‹
			</button>
			<button
				onClick={nextSlide}
				disabled={currentIndex === team.length - 1}
				className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 ${
					currentIndex === team.length - 1
						? "bg-gray-400"
						: "bg-gray-700 text-white"
				}`}>
				›
			</button>
		</div>
	);
};

const Page = () => {
	let [team, setTeam] = useState<team[]>();
	const [loaded, setLoaded] = React.useState(false);
	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/team`)
			.then((res) => {
				setTeam(res.data);
				setLoaded(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='relative w-screen flex flex-col justify-center items-center'>
			{/* <div className='flex flex-col justify-center items-center w-full pt-4 relative'>
				<div className='smLaptop:h-[40vh] xsPhone:h-[40vh] smTablet:h-[min(42vh,42vw)] tablet:h-[min(45vh,45vw)] landscapes:h-[min(63vh,63vw)] w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 '>
					<div className='smTablet:w-[50%] xsPhone:w-full pt-[4rem] space-y-2'>
						<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light'>
							Who We Are?
						</p>
						<h1 className='text-[min(7vh,7vw)] font-titilium'>About Us</h1>
					</div>
					<div className='smTablet:w-[50%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10'>
						<p>
							We are a family of 2000+ technocrats from different streams and
							life, to achieve a common goal of sustainability by delivering
							efficient & integrated water management innovative technologies,
							products and services.
						</p>
					</div>
				</div>
				<div className='smLaptop:h-[60vh] xsPhone:h-[65vh] smTablet:h-[68vh] w-full'>
					<Image
						src={headerImage}
						alt=''
						className='w-full h-full object-cover'
					/>
				</div>
			</div> */}
			<div className='flex flex-col justify-center items-center w-full h-fit mt-[calc(10vh+4%)] relative'>
				<div className='w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-start items-center xsPhone:gap-4'>
					<div className='smTablet:w-[50%] xsPhone:w-full space-y-2'>
						<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light'>
							Who We Are?
						</p>
						<h1 className='text-[min(7vh,7vw)] font-titilium'>About Us</h1>
					</div>
				</div>
			</div>
			<Image
				src={headerImage}
				alt=''
				className='h-full w-full object-cover my-10'
			/>
			<div className='bg-white mb-20 w-full flex justify-center items-start relative '>
				<div className='w-[85%] flex flex-col justify-start items-start gap-10 '>
					<WhoWeAre />
				</div>
			</div>

			{/* <div className='w-[85%] flex flex-col justify-start items-start gap-10 mb-20 shadow-none'>
				<Image src={TeamTree} alt={""} />
			</div> */}

			<div className='w-[85%] flex flex-col justify-start items-start gap-10 my-10'>
				<div className='flex justify-start items-center w-full gap-5 font-titilium'>
					<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800'>
						Company Timeline
					</p>
					<hr className='relative   right-0 h-1 w-[100px] bg-[#085C2C]' />
				</div>
				<Timeline />
			</div>

			{/* <div className='bg-neutral-100 py-20 mt-20 w-full flex justify-center items-start relative '>
				<div className='w-[85%] flex flex-col justify-start items-start gap-10 '>
					<div className='flex justify-start items-center w-full gap-5 font-titilium'>
						<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800'>
							Mission
						</p>
						<hr className='relative   right-0 h-1 w-[100px] bg-[#085C2C]' />
					</div>
					<p className='smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(3vw,3vh)] font-titilium font-light text-neutral-800 '>
						To provide water management solutions to every nook and corner of
						India.
					</p>
					<div className='flex justify-start items-center w-full gap-5 font-titilium'>
						<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800'>
							Vision
						</p>
						<hr className='relative   right-0 h-1 w-[100px] bg-[#085C2C]' />
					</div>
					<p className='smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(3vw,3vh)] font-titilium font-light text-neutral-800 '>
						Making Public Water Infrastructure Smart, Efficient & Sustainable.
					</p>
				</div>
			</div> */}
			<MissionVision />

			<div className='bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]'>
				<div className='w-[85%] flex flex-col justify-start items-start gap-10 '>
					<CoreValues />
				</div>
			</div>

			<div className='bg-white py-20 w-full flex justify-center items-start relative '>
				<div className='w-[85%] flex flex-col justify-start items-start '>
					<Services />
				</div>
			</div>

			<div
				className={
					"bg-[#F7F7F7] w-full flex justify-center items-center py-20"
				}>
				<div className={"h-full space-y-20 w-[87%] "}>
					<div className='flex flex-col justify-center items-center w-full  relative'>
						<div className=' w-full xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 gap-8'>
							<div className='smTablet:w-[60%] xsPhone:w-full  space-y-2'>
								<div className={"flex justify-start items-center gap-6"}>
									<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light'>
										Team@Desire
									</p>
									<hr className='relative right-0 h-1 w-[100px] bg-[#085C2C]' />
								</div>
								<h1 className='text-[min(7vh,7vw)] font-titilium'>
									Meet Our Leaders
								</h1>
							</div>
							<div className='smTablet:w-[40%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10'>
								<p>
									Our team leaders are the driving force behind our success.
									With a passion for innovation and a commitment to excellence,
									they bring diverse expertise and leadership experience to
									guide our teams toward achieving our goals. Each leader is
									dedicated to fostering a collaborative and inclusive work
									environment, ensuring that every team member can thrive and
									contribute their best. Together, they inspire creativity,
									cultivate growth, and drive the continuous improvement that
									powers our organization forward
								</p>
							</div>
						</div>
					</div>

					<div className={"flex gap-10 xsPhone:flex-col smLaptop:flex-row"}>
						<Image
							src={gauravgupta}
							alt={""}
							className={"smLaptop:w-[50%] xsPhone:w-full h-auto"}
						/>
						<div className={"flex flex-col gap-10"}>
							<div className={"space-y-3"}>
								<p
									className={
										"smTablet:text-[min(5vh,5vw)] xsPhone:text-[min(7vh,7vw)] font-titilium text-[#085C2C]"
									}>
									Mr. Gaurav Gupta
								</p>
								<p
									className={
										"smTablet:text-[min(2.6vh,2.6vw)] xsPhone:text-[min(4vh,4vw)] font-light font-titilium"
									}>
									Founder and Managing Director
								</p>
							</div>
							<div
								className={
									"font-figtree smTablet:text-[min(2.3vh,2.3vw)] xsPhone:text-[min(3.7vh,3.7vw)] text-gray-600 font-light"
								}>
								Gaurav Kumar Gupta, co-founder and managing director of Desire
								Energy Solutions Pvt. Ltd, directs the company&apos;s strategic
								vision and leadership, focusing on advancing efficient water
								management infrastructure in India. Since founding Desire Energy
								in 2011, he has overseen its growth in implementing water
								projects across ESCO, RO, EPC, IoT, and Solar sectors, garnering
								significant recognition. Committed to mentoring, Gaurav supports
								aspiring entrepreneurs to make a meaningful impact globally.
							</div>
						</div>
					</div>

					<div
						className={
							"grid  smTablet:grid-cols-2 xsPhone:grid-cols-1 smLaptop:grid-cols-3 font-titilium gap-5"
						}>
						<div
							className={
								"bg-white font-titilium relative w-full h-[400px] overflow-hidden group cursor-pointer"
							}>
							{/* Image Container - Fixed Height */}
							<div
								className={
									"w-full h-[300px] overflow-hidden bg-gray-100 relative"
								}>
								<Image
									src={saurabhSir}
									alt={""}
									className={
										"absolute inset-0 w-full h-full object-cover object-top"
									}
								/>
							</div>

							{/* Name and Designation - Fixed Position */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 h-[100px] flex flex-col justify-center z-10"
								}>
								<h1
									className={
										"smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4vh,4vw)] font-semibold leading-tight"
									}>
									Mr. Saurabh Gupta
								</h1>
								<p className={"text-gray-500 text-sm mt-1"}>Director</p>
							</div>

							{/* About Text - Slides up on hover with dynamic height */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 z-20"
								}>
								<p className={"text-neutral-600 text-sm leading-relaxed"}>
									Saurabh Gupta, as Director at Desire Energy Solutions,
									spearheads the decentralized water management division,
									utilizing extensive operational expertise to lead strategic
									initiatives in solar and water management, influencing
									long-term organizational strategies and priorities.
								</p>
							</div>
						</div>

						<div
							className={
								"bg-white font-titilium relative w-full h-[400px] overflow-hidden group cursor-pointer"
							}>
							{/* Image Container - Fixed Height */}
							<div
								className={
									"w-full h-[300px] overflow-hidden bg-gray-100 relative"
								}>
								<Image
									src={suraj}
									alt={""}
									className={
										"absolute inset-0 w-full h-full object-cover object-top"
									}
								/>
							</div>

							{/* Name and Designation - Fixed Position */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 h-[100px] flex flex-col justify-center z-10"
								}>
								<h1
									className={
										"smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4vh,4vw)] font-semibold leading-tight"
									}>
									Mr. Suraj Khandelwal
								</h1>
								<p className={"text-gray-500 text-sm mt-1"}>Director</p>
							</div>

							{/* About Text - Slides up on hover with dynamic height */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 z-20"
								}>
								<p className={"text-neutral-600 text-sm leading-relaxed"}>
									Suraj Khandelwal, Director at Desire Energy Solutions, heads
									the ESCO and EPC division with strong operational skills in
									project execution, business expansion, and team management.
									His leadership spans successful projects in Rajasthan and
									Uttar Pradesh.
								</p>
							</div>
						</div>

						<div
							className={
								"bg-white font-titilium relative w-full h-[400px] overflow-hidden group cursor-pointer"
							}>
							{/* Image Container - Fixed Height */}
							<div
								className={
									"w-full h-[300px] overflow-hidden bg-gray-100 relative"
								}>
								<Image
									src={ruchi}
									alt={""}
									className={
										"absolute inset-0 w-full h-full object-cover object-top"
									}
								/>
							</div>

							{/* Name and Designation - Fixed Position */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 h-[100px] flex flex-col justify-center z-10"
								}>
								<h1
									className={
										"smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4vh,4vw)] font-semibold leading-tight"
									}>
									Mrs. Ruchi Gupta
								</h1>
								<p className={"text-gray-500 text-sm mt-1"}>Director</p>
							</div>

							{/* About Text - Slides up on hover with dynamic height */}
							<div
								className={
									"absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 z-20"
								}>
								<p className={"text-neutral-600 text-sm leading-relaxed"}>
									Ruchi Khandelwal, Director, drives company performance and
									growth with a focus on culture and talent development. She
									shapes strategy, leads support teams, and holds a commerce
									degree from Maharani College, University of Rajasthan, and is
									a Chartered Financial Analyst.
								</p>
							</div>
						</div>
					</div>

					{team && <TeamCarousel team={team} loaded={loaded} />}
				</div>
			</div>
		</div>
	);
};

export default Page;
