import React from "react";

const MissionVision = () => {
	return (
		<div className='bg-[#FAFAFA] h-auto w-screen flex justify-center items-center smLaptop:my-20 py-4 xsPhone:my-0'>
			<div className='w-[90%] flex justify-center items-center font-titilium'>
				<div className='grid xsPhone:grid-cols-1 smLaptop:grid-cols-3 w-[98%] justify-center items-start smLaptop:gap-[5rem]'>
					{/* 1st */}
					<div className='w-full p-7'>
						<div className='flex gap-2 items-center'>
							<p className='p-2 font-semibold smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
								Our Mission
							</p>
							<hr className='border-[#085C2C] border-[0.10rem] w-[4rem] ' />
						</div>
						<div>
							<p className='p-2'>
								To provide water management solutions to every nook and corner
								of India.
							</p>
						</div>
					</div>

					{/* 2nd */}
					<div className='w-full  p-7'>
						<div className='flex gap-2 items-center'>
							<p className='p-2 font-semibold smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
								Our Vision
							</p>
							<hr className='border-[#085C2C] border-[0.10rem] w-[4rem] ' />
						</div>
						<div>
							<p className='p-2'>
								Making public water infrastructure smart, efficient, and
								accessible to all.
							</p>
						</div>
					</div>

					{/* 3rd */}
					<div className='w-full p-7'>
						<div className='flex gap-2 items-center'>
							<p className='p-2 font-semibold smTablet:text-[min(2.5vh,2.5vw)] xsPhone:text-[min(4.5vh,4.5vw)]'>
								Core Values
							</p>
							<hr className='border-[#085C2C] border-[0.10rem] w-[4rem] ' />
						</div>
						<div>
							<p className='p-2'>
								Trust, Transparency, Technology, and Partnership are the
								foundation of who we are and what we believe in
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MissionVision;
