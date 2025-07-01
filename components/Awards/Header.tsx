import React from "react";
import Image from "next/image";
import landingImage from "@/public/asset/awards/awards-bg-3.jpg";

const Header = () => {
	return (
		<div>
			<div className='relative w-screen flex flex-col justify-center items-center'>
				<div className='flex flex-col justify-center items-center w-full pt-4'>
					<div className='smLaptop:h-[40vh] xsPhone:h-[40vh] smTablet:h-[min(42vh,42vw)] tablet:h-[min(45vh,45vw)] landscapes:h-[min(63vh,63vw)] w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 '>
						<div className='smTablet:w-[100%] xsPhone:w-full pt-[4rem] space-y-2'>
							<p className='smTablet:text-[min(4vw,4vh)] xsPhone:text-[min(6vw,6vh)] font-titilium font-light'>
								Awards & Recognition
							</p>
							<h1 className='smLaptop:text-[min(7vh,7vw)] smTablet:text-[min(6.5vh,6.5vw)]  xsPhone:text-[min(10vh,10vw)] font-titilium'>
								Celebrating Excellence in Water Management
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
