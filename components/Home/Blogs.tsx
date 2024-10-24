"use client";
import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cx } from "class-variance-authority";

const Blogs = () => {
  const [blogs, setBlogs] = useState<blogs[]>([]);
  useEffect(() => {
    const response = axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/caseStudies`,
    );
    response
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={cx(
        "h-auto w-screen bg-white flex justify-center items-center py-20",
      )}
    >
      <div className="flex flex-col items-center justify-center w-[85%]">
        {/* top */}
        <div className="flex justify-start items-center gap-3 w-full text-start font-figtree pb-10">
          <h1 className="xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)] font-semibold ">
            Water Conservation Innovations:{" "}
            <span className="text-[#085C2C]">Case Studies & Stories.</span>{" "}
          </h1>
          <hr className="border-[#085C2C] border-[0.10rem] w-[4rem] xsPhone:hidden smLaptop:block" />
        </div>

        <div className="grid text-[#000121] w-[100%] phone:grid-cols-1 phone:gap-[2rem]  tablet:grid-cols-2 tablet:gap-[2rem] smLaptop:gap-[2rem]">
          {blogs &&
            blogs.length !== 0 &&
            blogs.slice(0, 2).map((blog, idx) => {
              return (
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/viewCaseStudy/${blog.slug.current}`}
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
      </div>
    </div>
  );
};

export default Blogs;
