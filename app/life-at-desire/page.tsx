"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
// @ts-ignore
import headerImage from "@/public/asset/life/groupPhoto.JPG";
import { Gallery } from "react-grid-gallery";
import axios from "axios";
import { Jobs, photos } from "@/types";
import { urlForImage } from "@/sanity/lib/image";
import { Skeleton } from "@/components/ui/skeleton";

import { ThumbnailImageProps } from "react-grid-gallery";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import SanityImage from "@/components/ui/SanityImage";
import { BriefcaseBusiness, Mail } from "lucide-react";
import Link from "next/link";

const ImageComponent = (props: ThumbnailImageProps) => {
	return (
		<div className={"w-full h-full"}>
			<Dialog>
				<DialogTrigger asChild={true}>
					<Image
						{...props.imageProps}
						alt={""}
						title={""}
						width={320}
						height={212}
						className={"object-cover"}
					/>
				</DialogTrigger>
				<DialogContent
					className={"rounded-none bg-transparent border-0 text-white"}>
					<Image
						{...props.imageProps}
						alt={""}
						title={""}
						width={1020}
						height={1212}
						className={"w-full"}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
};

const Page = () => {
	let [images, setImages] = useState<photos[]>();
	let [jobs, setJobs] = useState<Jobs[]>();
	const [loaded, setLoaded] = React.useState(false);
	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/jobs`)
			.then((res) => {
				setJobs(res.data);
				setLoaded(true);
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/photos`)
			.then((res) => {
				setImages(res.data);
				setLoaded(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	// console.log(jobs);
	return (
		<div className='relative w-screen flex flex-col justify-center items-center pb-20'>
			<div className='flex flex-col justify-center items-center w-full pt-4 relative'>
				<div className='smLaptop:h-[40vh] xsPhone:h-[40vh] smTablet:h-[min(42vh,42vw)] tablet:h-[min(45vh,45vw)] landscapes:h-[min(63vh,63vw)] w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 '>
					<div className='smTablet:w-[50%] xsPhone:w-full pt-[4rem] space-y-2'>
						<p className='smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light'>
							We Play Together and Work Together
						</p>
						<h1 className='text-[min(7vh,7vw)] font-titilium'>Life@Desire</h1>
					</div>
					<div className='smTablet:w-[50%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10'>
						<p>
							We are a family of 1000+ technocrats from different streams and
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
			</div>

			<div className='flex justify-center items-center bg-[#085C2C] w-[87%]  font-titilium my-20 '>
				<div className='grid xsPhone:grid-cols-1 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start'>
					{/* left */}
					<div className='w-full flex justify-between h-full items-start text-start flex-col gap-10'>
						<div className='space-y-8 tablet:p-16 xsPhone:p-10'>
							<p className='text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5.3vh,5.3vw)]'>
								We{" "}
								<span className='text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5.3vh,5.3vw)]'>
									work
								</span>{" "}
								together. We{" "}
								<span className='text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5.3vh,5.3vw)]'>
									grow
								</span>{" "}
								together. We{" "}
								<span className='text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5.3vh,5.3vw)]'>
									enjoy
								</span>{" "}
								together.
							</p>
							<br />
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] leading-relaxed'>
								We are a team of 2000+ people and every one of us is passionate
								about solving the water management problem. Our work culture
								promotes innovative ideas, leadership and new learnings. We
								provide a productive and cheerful environment for all of us to
								grow together as better human beings and better professionals.
							</p>
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] leading-relaxed'>
								We are the leading Innovator in integrated water Management and
								efficient products & services to manage water efficiently, and
								equally among all.
							</p>
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] leading-relaxed'>
								We are leading the digital transformation of water management,
								automation and solar energy. We make it possible for IoT-enabled
								solutions to seamlessly connect, collect, analyse and act on
								data in real-time delivering enhanced safety, efficiency,
								reliability, and sustainability.
							</p>
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] leading-relaxed'>
								We empower everyone to make the most of their energy and
								resources, ensuring to have Passionate but happy Life for
								everyone, at every moment. Along the way, we create and provide
								equal opportunities for everyone, everywhere. We continuously
								create an inclusive environment and welcome people from all over
								the world.
							</p>{" "}
							<p className='text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] leading-relaxed'>
								It&apos;s a family of 1000+ technocrats from different streams
								and life, to achieve a common goal of sustainability by
								delivering efficient & integrated water management innovative
								technologies, products and services.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className={
					"h-full space-y-10 smLaptop:w-[87%] xsPhone:w-full flex flex-col justify-center items-center pb-20"
				}>
				<p className='text-[#085C2C] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5.3vh,5.3vw)] font-titilium text-center'>
					Moments We Cherish
				</p>
				{loaded ? (
					// <Gallery
					//   images={images}
					//   rowHeight={300}
					//   enableImageSelection={false}
					//   thumbnailImageComponent={ImageComponent}
					// />
					<div
						className={
							"grid smLaptop:grid-cols-3 xsPhone:grid-cols-1 smTablet:grid-cols-2 gap-2 xsPhone:w-[85%] smLaptop:w-full"
						}>
						{images &&
							images?.length !== 0 &&
							images!.map((img: photos, idx) => {
								return (
									<Dialog key={idx}>
										<DialogTrigger className={"relative group"}>
											<SanityImage
												key={idx}
												src={img.mainImage}
												className={""}
											/>
											<div
												className={
													"absolute bottom-0 w-full p-4 text-center font-titilium text-md text-white hidden group-hover:block bg-[#085C2C]/50 transition"
												}>
												{img.title}
											</div>
										</DialogTrigger>
										<DialogContent
											className={
												"bg-transparent text-white border-0 min-w-[80vw] h-auto"
											}>
											<SanityImage
												key={idx}
												src={img.mainImage}
												className={"w-full h-full"}
											/>
										</DialogContent>
									</Dialog>
								);
							})}
					</div>
				) : (
					<Skeleton className={"w-full h-[300px]"} />
				)}
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
										Careers
									</p>
									<hr className='relative right-0 h-1 w-[100px] bg-[#085C2C]' />
								</div>
								<h1 className='text-[min(7vh,7vw)] font-titilium'>
									Discover Your New Career With Desire Energy
								</h1>
							</div>
							<div className='smTablet:w-[40%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10'>
								<p>
									Better opportunities are constantly knocking at your door.
									It’s up to you to let them pass or grab them with both hands.
									Desire Energy aims to help employees grow and experience what
									it is like to work with the best possible resources on an
									international level. If you’re ready to embark on a journey
									with many milestones to reach and hundreds of shared moments,
									we might be the best place for you.
								</p>
							</div>
						</div>
					</div>

					<div className={"grid grid-cols-3 gap-2"}>
						{jobs && jobs.length != 0 && loaded ? (
							jobs.map((job: Jobs, idx) => {
								return (
									<div
										key={idx}
										className={
											"bg-white font-titilium flex flex-col justify-center items-start p-10 gap-6"
										}>
										<div
											className={
												"flex justify-center items-center gap-6 w-full"
											}>
											<div
												className={
													"border-[#31C36C] text-[#31C36C] border  font-figtree p-4 text-center w-1/2"
												}>
												{job.designation}
											</div>
											<div className={"w-1/2 flex flex-col"}>
												<div>{job.experience} years Exp.</div>
												<div>{job.location}</div>
											</div>
										</div>

										<div className={"text-[min(3.5vh,3.5vw)]"}>
											{job.profile}
										</div>
										<div className={"space-y-2"}>
											{job.jobSpecification.map((spec, idx) => {
												return <div key={idx}>{spec}</div>;
											})}
										</div>
										<Link
											href={"mailto:hrd@desireenergy.com"}
											className={
												"bg-[#085C2C] text-white w-full text-center p-4 flex justify-center items-center gap-3"
											}>
											<Mail />
											hrd@desireenergy.com
										</Link>
									</div>
								);
							})
						) : (
							<Skeleton className={"w-full h-[300px] bg-white"} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
