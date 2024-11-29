import React from "react";
import Image from "next/image";

const data = [
  {
    heading: "Women Empowerment",
    content: "Promoting entrepreneurship to reduce time spent fetching water.",
  },
  {
    heading: "Customer Satisfaction",
    content:
      "Proactive project monitoring ensures efficient, customer-focused services",
  },
  {
    heading: "Support System",
    content: "Toll-Free Service Desk offers prompt support and feedback.",
  },
  {
    heading: "Social Impact",
    content:
      "Initiatives promote societal development and advance gender equality.",
  },
];

const Vision = () => {
  return (
    <div className={"flex flex-col gap-20 justify-center items-center"}>
      <div className="flex flex-col justify-center items-center  h-auto w-[90%]">
        <p className="font-light xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5vh,5vw)] font-titilium text-center">
          Empowering Communities, Enriching Lives
        </p>
      </div>

      <div className="container mx-auto px-4  md:mb-[4rem] tablet:mt-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-2 smLaptop:grid-cols-4 smLaptop:gap-[0.5rem] gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border mx-5 px-[2rem] py-[1.2rem] smLaptop:px-[2rem] smLaptop:py-[2rem] rounded-lg overflow-hidden  smLaptop:hover:bg-[#085C2C] smLaptop:hover:text-[#FFFFFF] smLaptop:hover:cursor-pointer"
            >
              <div className="font-titilium font-semibold text-[min(4vh,4vw)] smLaptop:text-[min(3vh,3vw)] tablet:text-[min(3vh,3vw)]">
                <p className="mb-[1rem]">{item.heading}</p>
                <hr />
              </div>
              <div className="font-titilium font-extralight mt-[1rem]">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
