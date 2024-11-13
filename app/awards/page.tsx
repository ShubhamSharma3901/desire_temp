import Image from "next/image";
import Award from "@/public/asset/award1.webp";
import landingImage from "@/public/asset/awards/awards_bg-2.png";

import { Carousel } from "flowbite-react";
import Recognition from "@/components/Awards/Recognition";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-screen w-screen relative overflow-clip mt-10">
        <div className="absolute z-10 w-full flex flex-col justify-center items-center top-[2rem]">
          {/* <NavBar type='Dark' /> */}
        </div>
        <div
          className={
            "absolute w-[85%] text-wrap xsPhone:text-[min(12vh,12vw)] text-center text-white font-figtree drop-shadow-md z-[2] translate-y-[-60%] top-[50%] translate-x-[-50%] left-[50%] smLaptop:text-[min(8vh,8vw)] smTablet:text-[min(7vh,7vw)] font-semibold"
          }
        >
          Celebrating Excellence in <br />
          Water Management
        </div>

        <div className="h-full w-full relative brightness-75">
          <Image
            src={Award}
            alt=""
            className="w-full h-screen object-cover absolute"
          />
        </div>
      </div>

      <Recognition />
      <Footer />
    </div>
  );
}
