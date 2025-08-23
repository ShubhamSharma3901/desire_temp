import React from "react";
import Marquee from "react-fast-marquee";
import Marquee1 from "@/public/asset/marquee/Marquee1.png";
import Marquee2 from "@/public/asset/marquee/Marquee2.png";
import Marquee3 from "@/public/asset/marquee/Marquee3.png";
import Marquee4 from "@/public/asset/marquee/Marquee4.png";
import Marquee5 from "@/public/asset/marquee/Marquee5.png";
import Marquee6 from "@/public/asset/marquee/Marquee6.png";
import Marquee8 from "@/public/asset/marquee/Marquee8.png";
import Marquee9 from "@/public/asset/marquee/Marquee9.png";
import Marquee10 from "@/public/asset/marquee/Marquee10.png";
import Marquee11 from "@/public/asset/marquee/Marquee11.png";
import Marquee12 from "@/public/asset/marquee/Marquee12.png";
import Marquee13 from "@/public/asset/marquee/Marquee13.png";
import Marquee14 from "@/public/asset/marquee/Marquee14.png";
import Marquee15 from "@/public/asset/marquee/Marquee15.png";
import Marquee16 from "@/public/asset/marquee/Marquee16.png";
import Marquee17 from "@/public/asset/marquee/Marquee17.png";
import Marquee18 from "@/public/asset/marquee/Marquee18.png";
import Marquee19 from "@/public/asset/marquee/Marquee19.png";

import Image from "next/image";

const Marque = () => {
	return (
		<div className='w-full h-fit pb-20'>
			<div>
				{/* top */}
				<div className='flex justify-center items-center flex-col gap-4  pb-10 '>
					<h1 className='xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)] font-semibold font-figtree text-center w-[85%]'>
						{" "}
						Pioneering <span className='text-[#085C2C]'>Sustainability</span> in
						Every Project
					</h1>
					<hr className='border-[#085C2C] border-[0.10rem] w-[20%]' />
				</div>

				{/* bottom */}
				<div className=''>
					<Marquee pauseOnHover>
						<div className='flex justify-center items-center gap-[6rem] space-x-5 p-4'>
							<div>
								<Image src={Marquee1} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee2} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee3} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee4} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee5} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee6} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee8} alt='' className='h-auto w-[9rem]' />
							</div>

							<div>
								<Image src={Marquee9} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee10} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee11} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee12} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee13} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee14} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee15} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee16} alt='' className='h-auto w-[9rem]' />
							</div>

              <div>
								<Image src={Marquee17} alt='' className='h-auto w-[9rem]' />
							</div>

               <div>
								<Image src={Marquee18} alt='' className='h-auto w-[9rem]' />
							</div>

               <div>
								<Image src={Marquee19} alt='' className='h-auto w-[9rem]' />
							</div>

						</div>
					</Marquee>
				</div>

				{/* <Marquee autoFill pauseOnClick>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className='m-1 rounded-xl flex font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
        </Marquee> */}
				{/* <Marquee autoFill pauseOnClick direction="right">
          <div className=' m-1 rounded-xl flex  font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer'>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
          <div className=' m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer '>
          <Image src={Marquee1} alt='' className='h-auto w-[9rem]'/>
          </div>
        </Marquee> */}
			</div>
		</div>
	);
};

export default Marque;
