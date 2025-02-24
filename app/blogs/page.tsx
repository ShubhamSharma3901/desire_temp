"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

// import landing_photo from "@/public/asset/aboutPage/AboutPageCreative.png";
import landing_photo from "@/public/asset/headerImages/Header Image 2.jpg";
import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marque from "@/components/Home/Marquee";
import axios from "axios";
import { blogs } from "@/types";
import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";

const Page = () => {
  const [blogs, setBlogs] = useState<blogs[]>([]);
  useEffect(() => {
    const response = axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/blogs`);
    response
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16 overflow-clip">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <Image
          src={landing_photo}
          alt=""
          className="h-[80vh] object-cover brightness-[65%] w-full"
        />
        {/*<div className="absolute flex-col top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-titilium text-white font-semibold w-[85%]">*/}
        {/*  <div className="w-full space-y-6">*/}
        {/*    <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] w-full text-center ">*/}
        {/*      Blogs@Desire*/}
        {/*    </p>*/}
        {/*    /!*<p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">*!/*/}
        {/*    /!*  ESCO specialize in energy efficiency, using performance-based*!/*/}
        {/*    /!*  contracts to ensure guaranteed savings and environmental benefits,*!/*/}
        {/*    /!*  effectively regenerating energy and resources.*!/*/}
        {/*    /!*</p>*!/*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]">
          <div className="w-full space-y-6">
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] ">
              Blogs@Desire
            </p>

          </div>
        </div>
      </div>
      <div className=" w-full py-10 border-b-4 flex justify-center items-center">
        <Breadcrumb className=" flex justify-start items-center w-[85%]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)">
                Blogs
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className={"w-[90%] text-center font-titilium text-white bg-[#013300] py-10 text-xl my-10 space-y-6  smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(4vh,4vw)]"}>
        Join Desire Energy&apos;s official Newsletter:
        <Link href={"https://www.linkedin.com/newsletters/desire-cascade-7252961588683419648/"} className={"ml-2 font-semibold text-[#D5F590] hover:underline"}>
          Desire Cascade
        </Link>
        <div className={"font-titilium smTablet:text-[min(3.5vh,3.5vw)] xsPhone:text-[min(3.5vh,3.5vw)] font-light opacity-80"}>
          Our weekly guide to Water Management, Sustainability & Industry Insights
        </div>

      </div>

      <div className="grid text-[#000121] w-[90%] phone:grid-cols-1 phone:gap-[2rem]  tablet:grid-cols-2 tablet:gap-[2rem] smLaptop:gap-[2rem]">
        {blogs &&
          blogs.length !== 0 &&
          blogs.map((blog, idx) => {
            return (
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/viewBlog/${blog.slug.current}`}
                key={idx}
                className="flex items-center justify-center transition xsPhone:py-4 smLaptop:py-4"
              >
                <BlogCard
                  title={blog.title}
                  date={blog.publishedAt}
                  description={blog.description}
                  imageSrc={blog.mainImage}
                />
              </Link>
            );
          })}
      </div>

      <div className={"mt-20 w-[90%]"}>
        <Marque />
      </div>
    </div>
  );
};

export default Page;
