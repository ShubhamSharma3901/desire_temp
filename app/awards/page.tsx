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
          Awards and Recognition
        </div>
        <Carousel
          className="brightness-75 relative"
          theme={{
            control: {
              base: "relative z-11 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D5F590] group-hover:bg-[#D5F590]/80 group-focus:outline-none group-focus:ring-4 group-focus:ring-[#085C2C] sm:h-10 sm:w-10",
              icon: "h-5 w-5 relative z-11 sm:h-6 sm:w-6 text-[#085C2C]",
            },
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
              src={Award}
              alt=""
              className="w-full h-screen object-cover absolute"
            />
          </div>

          <div className="h-full w-full relative">
            <Image
              src={landingImage}
              alt=""
              className="w-full h-screen object-cover absolute"
            />
          </div>
        </Carousel>
      </div>

      <Recognition />
      <Footer />
    </div>
  );
}
