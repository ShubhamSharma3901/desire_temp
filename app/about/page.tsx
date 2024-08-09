import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import headerImage from "@/public/asset/aboutPage/AboutPageCreative.png";
const Page = () => {
	return (
		<div className='relative w-screen flex felx-col justify-center items-center'>
			<div className='fixed  z-10 w-full flex justify-center items-center top-0 py-[2rem] bg-white'>
				<NavBar type='Light' />
			</div>
			<div className='flex flex-col justify-center items-center w-full pt-2'>
				<div className='smLaptop:h-[40vh] xsPhone:h-[35vh] smTablet:h-[32vh] w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 '>
					<div className='smTablet:w-[50%] xsPhone:w-full pt-[4rem] space-y-2'>
						<p className='text-[min(3vh,3vw)] font-titilium font-light'>
							Who We Are?
						</p>
						<h1 className='text-[min(7vh,7vw)] font-titilium'>About Us</h1>
					</div>
					<div className='smTablet:w-[50%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10'>
						<p>
							From small renovations to complex billion dollar projects; from
							modular construction, to advanced digital technologies, to
							cutting-edge sustainability, Konstruktion has you covered.
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

			<div className='bg-[#F9F9F9] py-20 w-full flex justify-center items-center'>
				<div className='w-[85%] flex flex-col justify-start items-start'></div>
			</div>
		</div>
	);
};

export default Page;
