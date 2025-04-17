"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OurFocus from "@/components/About/OurFocus";
import WhoWeAre from "@/components/About/WhoWeAre";
import CoreValues from "@/components/About/CoreValues";

// import headerImage from "@/public/asset/aboutPage/AboutPageCreative.png";
import headerImage from "@/public/asset/headerImages/Header Image 3.jpg";
import Services from "@/components/About/Services";
import { team } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import SanityImage from "@/components/ui/SanityImage";
import gauravgupta from "@/public/asset/aboutPage/MrGauravGupta.avif";
import saurabhSir from "@/public/asset/aboutPage/saurabhSir.webp";
import ruchi from "@/public/asset/aboutPage/ruchi.png";
import suraj from "@/public/asset/aboutPage/suraj sir.webp";
import Timeline from "@/components/About/Timeline";

const TeamCarousel = ({ team, loaded }: { team: team[]; loaded: any }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    if (currentIndex < team.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center">
      {team && team.length !== 0 && loaded ? (
        <div
          style={{
            transform: `translateX(-${(currentIndex * 100) / team.length}%)`,
          }}
          className="flex transition-transform duration-500 ease-in-out gap-4"
        >
          {team.map((member: any, idx: any) => (
            <div
              key={idx}
              className={`bg-white font-titilium flex flex-col justify-start  items-start gap-10`}
            >
              <div
                className={"flex flex-col justify-start items-start gap-6 pb-6"}
              >
                <div className={"w-[300px] h-[300px] overflow-clip"}>
                  <SanityImage
                    src={member.mainImage}
                    className={"w-full min-h-full object-cover "}
                  />
                </div>

                <div
                  className={"flex flex-col justify-center items-start px-6"}
                >
                  <h1
                    className={
                      "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(6vh,6vw)]"
                    }
                  >
                    {member.name}
                  </h1>
                  <p className={"text-gray-500"}>{member.designation}</p>
                </div>
                <p className={"px-6 text-neutral-600"}>{member.about}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton className="w-full h-[300px] bg-white" />
      )}

      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 ${
          currentIndex === 0 ? "bg-gray-400" : "bg-gray-700 text-white"
        }`}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        disabled={currentIndex === team.length - 1}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 ${
          currentIndex === team.length - 1
            ? "bg-gray-400"
            : "bg-gray-700 text-white"
        }`}
      >
        ›
      </button>
    </div>
  );
};

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
              specializes in IoT, AI, based renewable energy solutions for
              public water infrastructure projects across India.
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

      <div className="w-[85%] flex flex-col justify-start items-start gap-10 py-10">
        <div className="flex justify-start items-center w-full gap-5 font-titilium">
          <p className="smTablet:text-[min(3vw,3vh)] xsPhone:text-[min(5vw,5vh)] font-light text-neutral-800">
           Company Timeline
          </p>
          <hr className="relative   right-0 h-1 w-[100px] bg-[#085C2C]" />
        </div>
        <Timeline />
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

          <div className={"flex gap-10 xsPhone:flex-col smLaptop:flex-row"}>
            <Image
              src={gauravgupta}
              alt={""}
              className={"smLaptop:w-[50%] xsPhone:w-full h-auto"}
            />
            <div className={"flex flex-col gap-10"}>
              <div className={"space-y-3"}>
                <p
                  className={
                    "smTablet:text-[min(5vh,5vw)] xsPhone:text-[min(7vh,7vw)] font-titilium text-[#085C2C]"
                  }
                >
                  Mr. Gaurav Gupta
                </p>
                <p
                  className={
                    "smTablet:text-[min(2.6vh,2.6vw)] xsPhone:text-[min(4vh,4vw)] font-light font-titilium"
                  }
                >
                  Founder and Managing Director
                </p>
              </div>
              <div
                className={
                  "font-figtree smTablet:text-[min(2.3vh,2.3vw)] xsPhone:text-[min(3.7vh,3.7vw)] text-gray-600 font-light"
                }
              >
                Gaurav Kumar Gupta, co-founder and managing director of Desire
                Energy Solutions Pvt. Ltd, directs the company&apos;s strategic
                vision and leadership, focusing on advancing efficient water
                management infrastructure in India. Since founding Desire Energy
                in 2011, he has overseen its growth in implementing water
                projects across ESCO, RO, EPC, IoT, and Solar sectors, garnering
                significant recognition. Committed to mentoring, Gaurav supports
                aspiring entrepreneurs to make a meaningful impact globally.
              </div>
            </div>
          </div>

          <div
            className={
              "grid  smTablet:grid-cols-2 xsPhone:grid-cols-1 smLaptop:grid-cols-3 font-titilium gap-5"
            }
          >
            <div
              className={
                "flex flex-col justify-start items-start gap-6 pb-6 bg-white"
              }
            >
              <div className={"w-full h-[400px] overflow-clip"}>
                <Image
                  src={saurabhSir}
                  alt={""}
                  className={"w-full min-h-full object-cover "}
                />
              </div>

              <div className={"flex flex-col justify-center items-start px-6"}>
                <h1
                  className={
                    "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(6vh,6vw)]"
                  }
                >
                  Mr. Saurabh Gupta
                </h1>
                <p className={"text-gray-500"}>Director</p>
              </div>
              <p className={"px-6 text-neutral-600"}>
                Saurabh Gupta, as Director at Desire Energy Solutions,
                spearheads the decentralized water management division,
                utilizing extensive operational expertise to lead strategic
                initiatives in solar and water management, influencing long-term
                organizational strategies and priorities.
              </p>
            </div>
            <div
              className={
                "flex flex-col justify-start items-start gap-6 pb-6 bg-white"
              }
            >
              <div className={"w-full h-[400px] overflow-clip"}>
                <Image
                  src={suraj}
                  alt={""}
                  className={"w-full min-h-full object-cover "}
                />
              </div>

              <div className={"flex flex-col justify-center items-start px-6"}>
                <h1
                  className={
                    "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(6vh,6vw)]"
                  }
                >
                  Mr. Suraj Khandelwal
                </h1>
                <p className={"text-gray-500"}>Director</p>
              </div>
              <p className={"px-6 text-neutral-600"}>
                Suraj Khandelwal, Director at Desire Energy Solutions, heads the
                ESCO and EPC division with strong operational skills in project
                execution, business expansion, and team management. His
                leadership spans successful projects in Rajasthan and Uttar
                Pradesh.
              </p>
            </div>

            <div
              className={
                "flex flex-col justify-start items-start gap-6 pb-6 bg-white"
              }
            >
              <div className={"w-full h-[400px] overflow-clip"}>
                <Image
                  src={ruchi}
                  alt={""}
                  className={"w-full min-h-full object-cover "}
                />
              </div>

              <div className={"flex flex-col justify-center items-start px-6"}>
                <h1
                  className={
                    "smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(6vh,6vw)]"
                  }
                >
                  Mrs. Ruchi Gupta
                </h1>
                <p className={"text-gray-500"}>Director</p>
              </div>
              <p className={"px-6 text-neutral-600"}>
                Ruchi Khandelwal, Director, drives company performance and
                growth with a focus on culture and talent development. She
                shapes strategy, leads support teams, and holds a commerce
                degree from Maharani College, University of Rajasthan, and is a
                Chartered Financial Analyst.
              </p>
            </div>
          </div>

          {team && <TeamCarousel team={team} loaded={loaded} />}

          <div
            className={
              "grid smLaptop:grid-cols-4 xsPhone:grid-cols-1 smTablet:grid-cols-3 gap-10 "
            }
          >
            {/* {team && team.length != 0 && loaded ? (
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
            )} */}
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
