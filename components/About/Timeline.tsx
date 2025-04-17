"use client";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import React from "react";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import timeline from "@/public/asset/aboutPage/timeline.png";
import Image from "next/image";

const TimelineComponent = () => {
  return (
      <div>

          <Image src={timeline} alt={""}/>
      </div>
  );
};

export default TimelineComponent;
