import Acordian from "@/components/CSR/Acordian";
import DesireFoundation from "@/components/CSR/DesireFoundation";
import OurWay from "@/components/CSR/OurWay";
import Vision from "@/components/CSR/Vision";
import Footer from "@/components/Home/Footer";

import React from "react";
import ImageGallery from "@/components/CSR/ImageGallery";
import Project from "@/components/CSR/Project";

const page = () => {
  return (
    <div className={"mb-10"}>
      <OurWay />
      <DesireFoundation />
      <Vision />
      <Acordian />
      <ImageGallery />
      <Project />
    </div>
  );
};

export default page;
