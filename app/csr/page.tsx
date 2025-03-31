import Acordian from "@/components/CSR/Acordian";
import DesireFoundation from "@/components/CSR/DesireFoundation";
import OurWay from "@/components/CSR/OurWay";
import Vision from "@/components/CSR/Vision";
import Footer from "@/components/Home/Footer";

import React from "react";
import ImageGallery from "@/components/CSR/ImageGallery";
import Project from "@/components/CSR/Project";
import CSRDetails from "@/components/CSR/Details";

const page = () => {
  return (
    <div className={"mb-10 flex flex-col items-center justify-start w-full"}>
      <OurWay />
      <DesireFoundation />
      <Vision />
      <Acordian />
      <CSRDetails />
      <ImageGallery />
      <Project />
    </div>
  );
};

export default page;
