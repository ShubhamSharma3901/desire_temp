"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// @ts-ignore
import headerImage from "@/public/asset/life/groupPhoto.JPG";
import axios from "axios";
import { Jobs, photos } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import SanityImage from "@/components/ui/SanityImage";
import { Mail } from "lucide-react";
import Link from "next/link";

// ------------------------- Page -------------------------
const Page = () => {
  const [images, setImages] = useState<photos[]>([]);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/jobs`),
      axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/photos`),
    ])
      .then(([jobRes, photoRes]) => {
        setJobs(jobRes.data);
        setImages(photoRes.data);
        setLoaded(true);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="relative w-screen flex flex-col justify-center items-center pb-20 pt-28">
      {/* ---------------- Careers Section ---------------- */}
      <div className="bg-[#F7F7F7] w-full flex justify-center items-center py-20">
        <div className="space-y-20 w-[87%]">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/5 w-full space-y-2">
              <p className="text-[min(3vw,3vh)] font-titilium font-light flex items-center gap-4">
                Careers <hr className="h-1 w-[100px] bg-[#085C2C]" />
              </p>
              <h1 className="text-[min(7vh,7vw)] font-titilium">
                Discover Your New Career With Desire Energy
              </h1>
            </div>
            <div className="md:w-2/5 text-gray-500 font-titilium">
              <p>
                Better opportunities are constantly knocking... If you’re ready
                to embark on a journey with many milestones, we might be the
                best place for you.
              </p>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loaded && jobs.length > 0 ? (
              jobs.map((job: Jobs, idx: number) => (
                <div
                  key={idx}
                  className="bg-white font-titilium flex flex-col justify-between items-start p-10 gap-6"
                >
                  {/* Job Header */}
                  <div className="flex justify-center items-center gap-6 w-full">
                    <div className="border-[#31C36C] text-[#31C36C] border font-figtree p-4 text-center w-1/2">
                      {job.designation}
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <div>{job.experience} years Exp.</div>
                      <div>{job.location}</div>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="text-[min(3.5vh,3.5vw)]">{job.profile}</div>

                  {/* Specs */}
                  <div className="space-y-2 text-gray-500">
                    {job.jobSpecification.map((spec, specIdx) => (
                      <div key={specIdx}>{spec}</div>
                    ))}
                  </div>

                  {/* Apply */}
                  <Link
                    href="mailto:hrd@desireenergy.com"
                    className="bg-[#085C2C] text-white w-full text-center p-4 flex justify-center items-center gap-3"
                  >
                    <Mail /> hrd@desireenergy.com
                  </Link>
                </div>
              ))
            ) : (
              <Skeleton className="w-full h-[300px] bg-white" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
