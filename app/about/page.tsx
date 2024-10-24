"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OurFocus from "@/components/About/OurFocus";
import WhoWeAre from "@/components/About/WhoWeAre";
import CoreValues from "@/components/About/CoreValues";

import headerImage from "@/public/asset/aboutPage/AboutPageCreative.png";
import Services from "@/components/About/Services";
import { team } from "@/types";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import SanityImage from "@/components/ui/SanityImage";

const Page = () => {
  let [team, setTeam] = useState<team[]>();
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_URL}/api/team`)
      .then((res) => {
        setTeam(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="relative w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full pt-4">
        <div className="smLaptop:h-[40vh] xsPhone:h-[40vh] smTablet:h-[min(42vh,42vw)] tablet:h-[min(45vh,45vw)] landscapes:h-[min(63vh,63vw)] w-[85%] xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 ">
          <div className="smTablet:w-[50%] xsPhone:w-full pt-[4rem] space-y-2">
            <p className="smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light">
              Who We Are?
            </p>
            <h1 className="text-[min(7vh,7vw)] font-titilium">About Us</h1>
          </div>
          <div className="smTablet:w-[50%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10">
            <p>
              Desire Energy Solutions Pvt Ltd, headquartered in Jaipur, is a
              nationally acclaimed tech-driven water management company. It
              specializes in IoT, AI, and renewable energy solutions for public
              water infrastructure projects across India.
            </p>
          </div>
        </div>
        <div className="smLaptop:h-[60vh] xsPhone:h-[65vh] smTablet:h-[68vh] w-full">
          <Image
            src={headerImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start gap-10 ">
          <OurFocus />
        </div>
      </div>

      <div className="bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start gap-10 ">
          <WhoWeAre />
        </div>
      </div>

      <div className="bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start gap-10 ">
          <CoreValues />
        </div>
      </div>

      <div className="bg-white py-20 w-full flex justify-center items-start relative min-h-[100vh]">
        <div className="w-[85%] flex flex-col justify-start items-start ">
          <Services />
        </div>
      </div>
      <div
        className={"bg-[#F7F7F7] w-full flex justify-center items-center py-20"}
      >
        <div className={"h-full space-y-20 w-[87%] "}>
          <div className="flex flex-col justify-center items-center w-full  relative">
            <div className=" w-full xsPhone:flex-col smTablet:flex-row flex justify-center items-center xsPhone:gap-4 gap-8">
              <div className="smTablet:w-[60%] xsPhone:w-full  space-y-2">
                <div className={"flex justify-start items-center gap-6"}>
                  <p className="smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(4vw,4vh)] font-titilium font-light">
                    Team@Desire
                  </p>
                  <hr className="relative right-0 h-1 w-[100px] bg-[#085C2C]" />
                </div>
                <h1 className="text-[min(7vh,7vw)] font-titilium">
                  Meet Our Leaders
                </h1>
              </div>
              <div className="smTablet:w-[40%] xsPhone:h-fit smTablet:h-fit flex flex-col justify-center font-titilium text-gray-500 smTablet:pt-10">
                <p>
                  Our team leaders are the driving force behind our success.
                  With a passion for innovation and a commitment to excellence,
                  they bring diverse expertise and leadership experience to
                  guide our teams toward achieving our goals. Each leader is
                  dedicated to fostering a collaborative and inclusive work
                  environment, ensuring that every team member can thrive and
                  contribute their best. Together, they inspire creativity,
                  cultivate growth, and drive the continuous improvement that
                  powers our organization forward
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              "grid smLaptop:grid-cols-4 xsPhone:grid-cols-1 smTablet:grid-cols-3 gap-10 "
            }
          >
            {team && team.length != 0 && loaded ? (
              team.map((team: team, idx) => {
                return (
                  <div
                    key={idx}
                    className={
                      "bg-white font-titilium flex flex-col justify-start items-start  gap-10 "
                    }
                  >
                    <div
                      className={
                        "flex flex-col justify-start items-start gap-6 w-full pb-6"
                      }
                    >
                      <div className={"w-full h-[300px] overflow-clip"}>
                        <SanityImage
                          src={team.mainImage}
                          className={"w-full min-h-full object-cover "}
                        />
                      </div>

                      <div
                        className={
                          "flex flex-col justify-center items-start px-6"
                        }
                      >
                        <h1 className={"text-[min(3vh,3vw)]"}>{team.name}</h1>
                        <p className={"text-gray-500"}>{team.designation}</p>
                      </div>
                      <p className={"px-6 text-neutral-600"}>{team.about}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <Skeleton className={"w-full h-[300px] bg-white"} />
            )}
          </div>
        </div>
      </div>
      {/* <div className='bg-white w-full flex justify-center items-start relative overflow-clip'>
				<Image src={footerImage} alt='footer-img' className='w-full' />
			</div> */}
    </div>
  );
};

export default Page;
