import Footer from "@/components/Home/Footer";
import NavBar from "@/components/NavBar";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div>
				<div className='absolute z-10 w-full flex justify-center items-center top-[1rem]'>
					<NavBar type='Dark' />
				</div>
				<div className=' w-full min-h-screen flex justify-center items-center  bg-white pb-20'>
					<Suspense
						fallback={
							<div className='w-screen h-screen flex justify-center items-center'>
								<Loader2 className='animate-spin w-10 h-auto text-[#000121]' />
							</div>
						}>
						{children}
					</Suspense>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
