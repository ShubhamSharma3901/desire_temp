"use client";
import React from "react";
import Image from "next/image";
import waterPlant from "@/public/asset/waste-water-treatment-plant 2.png";
import aquaLogix from "@/public/asset/Aqualogix-Icon 1.png";
import EPC from "@/public/asset/EPC-Icon-q3wms47rcav7256quzqpl54xdwvtryth14ixzuwd50 1.png";
import DWM from "@/public/asset/pump-q3wms7z43n0aaxautfhz0elrq2ivi61a4al3po3ajk 1.png";
import OM from "@/public/asset/OM-q3wms39x5gtwqj840hc30ndgsj0gk9pqozvgikxrb8 1.png";
import ESCO from "@/public/asset/suigas-q3wmrzike4org3dkmfpkqobmezizphatch9ilh3c04 1.png";
import DesireLogo from "@/public/asset/DesireLogoWater.svg";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <div className="space-y-20 flex flex-col justify-center items-center">
      <div className="space-y-5">
        <h1 className="font-titilium text-[#085C2C] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(3.5vh,3.5vw)] smLaptop:text-[min(3.5vh,3.5vw)] text-[min(6vh,6vw)] text-center">
          Innovation, Quality And Continuous Improvement
        </h1>
        <h1 className="font-titilium smTablet:text-[min(4vh,4vw)] xsPhone:text-[min(5.2vh,5.2vw)] smLaptop:text-[min(5vh,5vw)] text-[min(6vh,6vw)] text-center">
          Latest Projects, Solutions And Energy Supplies
        </h1>
      </div>
      <div className="smTablet:grid smTablet:grid-cols-1 xsPhone:flex xsPhone:flex-col xsPhone:justify-center xsPhone:items-center  smLaptop:grid-rows-1 smLaptop:grid-cols-1 ">
        <div className="grid smLaptop:grid-cols-4 tablet:grid-cols-2 xsPhone:grid-cols-1 gap-10">
          <div className="border bg-white flex flex-col justify-start items-start gap-6 py-10">
            <Image src={ESCO} alt="ESCO" className="w-20 h-auto ml-6" />
            <div className="font-titilium font-semibold ml-6 text-[min(3vh,3vw)]">
              <p className="smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                ESCO
              </p>
            </div>
            <div className="font-titilium text-black/50 ml-6 w-[80%]">
              <p>
                ESCO specialize in energy efficiency, using performance-based
                contracts to ensure guaranteed savings and environmental
                benefits, effectively regenerating energy and resources.
              </p>
            </div>
          </div>
          <div className="border bg-white flex flex-col justify-start items-start gap-6 py-10">
            <Image src={EPC} alt="EPC" className="w-20 h-auto ml-6" />
            <div className="font-titilium font-semibold ml-6 text-[min(3vh,3vw)]">
              <p className="smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                Smart EPC
              </p>
            </div>
            <div className="font-titilium text-black/50 ml-6 w-[80%]">
              <p>
                Decentralized water management decentralizes infrastructure,
                enabling local treatment, storage, and distribution, enhancing
                resilience and sustainability while empowering communities with
                resource control.
              </p>
            </div>
          </div>
          <div className="border bg-white flex flex-col justify-start items-start gap-6 py-10">
            <Image src={DWM} alt="DWM" className="w-20 h-auto ml-6" />
            <div className="font-titilium font-semibold ml-6 text-[min(3vh,3vw)]">
              <p className="smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                Decentralised Water <br />
                Management
              </p>
            </div>
            <div className="font-titilium text-black/50 ml-6 w-[80%]">
              <p>
                Smart EPC leverages advanced technologies like AI and IoT for
                streamlined project execution, enhancing efficiency,
                sustainability, and operational performance across engineering,
                procurement, and construction processes.
              </p>
            </div>
          </div>
          <div className="border bg-white flex flex-col justify-start items-start gap-6 py-10">
            <Image src={OM} alt="OM" className="w-20 h-auto ml-6" />
            <div className="font-titilium font-semibold ml-6 text-[min(3vh,3vw)]">
              <p className="smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4.5vh,4.5vw)]">
                Operations & <br />
                Maintenance
              </p>
            </div>
            <div className="font-titilium text-black/50 ml-6 w-[80%]">
              <p>
                Operation and maintenance involve managing infrastructure to
                ensure functionality, efficiency, and longevity through regular
                inspections, repairs, and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="relative  right-0 h-1 w-[300px] bg-[#085C2C]" />
    </div>
  );
};

export default Services;
