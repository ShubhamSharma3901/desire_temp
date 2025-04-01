import Image from "next/image";
// import landingImage from "@/public/How-to-Optimize-Wastewater-Treatment-Plants-for-Maximum-Efficiency 1 (1).png";
import landingImage2 from "@/public/asset/headerImages/Header Image 1.jpg";
import landingImage from "@/public/asset/headerImages/home_landing_2.jpg";
//import landingImage2 from "@/public/asset/products_and_solution/Wastewater-treatment-and-disposal-evreka-scaled.jpg";

import { Carousel } from "flowbite-react";
import { ArrowUpRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Youtube from "@/components/Home/Youtube";
import MissionVision from "@/components/Home/MissionVision";
import OurServices from "@/components/Home/OurServices";
import Solutions from "@/components/Home/OurSolutions";
import Results from "@/components/Home/Results";
import ReshapingSus from "@/components/Home/Sustainability";
import Footer from "@/components/Home/Footer";
import Blogs from "@/components/Home/Blogs";
import Marque from "@/components/Home/Marquee";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen relative overflow-clip">
        <div className="absolute z-10 w-full flex justify-center items-center top-[2rem]">
          <NavBar type="Dark" />
        </div>
        <Carousel
          className=""
          theme={{
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
            },
            item: {
              wrapper: {
                on: "w-full flex-shrink-0 transform cursor-default snap-center",
              },
            },
          }}
        >
          <div className="h-full w-full relative">
            <Image
              src={landingImage}
              alt=""
              className="w-full h-screen object-cover absolute"
            />
            <div className="absolute z-[1] text-white font-figtree xsPhone:text-[min(9vh,9vw)] smTablet:text-[min(7vh,7vw)] font-semibold tracking-wide bottom-[22%] left-[6%] space-y-[3rem]">
              <p>
                Integrated Water Management
                <br /> & Energy Efficiency Services.
              </p>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/about`}
                className="smTablet:text-[min(2vh,2vw)] w-fit xsPhone:text-[min(3vh,3vw)] xsPhone:py-2 bg-[#D5F590] text-[#085C2C] tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 hover:bg-[#D5F590] hover:text-[#003300] transition"
              >
                Know More{" "}
                <ArrowUpRight
                  className="h-auto xsPhone:w-5 smLaptop:w-7 smTablet:w-6"
                  strokeWidth={1.4}
                />
              </Link>
            </div>
          </div>

          <div className="h-full w-full relative">
            <Image
              src={landingImage2}
              alt=""
              className="w-full h-screen object-cover absolute brightness-75"
            />
            <div className="absolute z-[1] text-white font-figtree xsPhone:text-[min(9vh,9vw)] smTablet:text-[min(7vh,7vw)] font-semibold tracking-wide bottom-[22%] left-[6%] space-y-[3rem]">
              <p>
                Integrated Water Management
                <br /> & Energy Efficiency Services.
              </p>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/about`}
                className="smTablet:text-[min(2vh,2vw)] w-fit xsPhone:text-[min(3vh,3vw)] xsPhone:py-2 bg-[#D5F590] text-[#085C2C] tracking-normal font-normal flex justify-center items-center py-3 px-6 gap-1 hover:bg-[#D5F590] hover:text-[#003300] transition"
              >
                Know More{" "}
                <ArrowUpRight
                  className="h-auto xsPhone:w-5 smLaptop:w-7 smTablet:w-6"
                  strokeWidth={1.4}
                />
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
      <Youtube />
      <MissionVision />
      <OurServices />
      <Solutions />
      <Results />
      <ReshapingSus />
      <Blogs />
      <Marque />
      <Footer />
    </>
  );
}
