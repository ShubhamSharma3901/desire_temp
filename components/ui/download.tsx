"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadButton = (name: { name: string }) => {
	const downloadFile = () => {
		const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
		window.location.href = `${baseUrl}/asset/brochures/${name.name}`;
	};
	return (
		<Button
			className='font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)] bg-[#085C2C] flex justify-center items-center hover:bg-[#D5F590] hover:text-[#003300] text-[#D5F590] tracking-normal font-normal p-6 gap-2'
			onClick={downloadFile}>
			<Download />
			Download Brochure
		</Button>
	);
};
export default DownloadButton;
