"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
// import landing_photo from "@/public/asset/Services/opm.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 3.jpg";
import epc2 from "@/public/asset/Services/opm2.jpg";

import epc1 from "@/public/asset/Services/Smart_epc-e1678690983969.webp";

import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React from "react";

import { motion, Variant } from "framer-motion";
import Marque from "@/components/Home/Marquee";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <Image
          src={landing_photo}
          alt=""
          className="h-[80vh] object-cover brightness-[65%] w-full"
        />
        <motion.div className="absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]">
          <div className="w-full space-y-6">
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] ">
              Operation and Maintenance
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              Operation and maintenance involve managing infrastructure to
              ensure functionality, efficiency, and longevity through regular
              inspections, repairs, and performance optimization.
            </p>
          </div>
        </motion.div>
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
                Services
              </BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2vh,2vw)] xsPhone:text-[min(3vh,3vw)">
                Operation and Maintenance
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-center bg-[#085C2C] w-[87%] h-full font-titilium my-20 overflow-clip">
        <div className="grid xsPhone:grid-cols-1 smLaptop:grid-cols-2 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start">
          {/* left */}
          <div className="w-full flex justify-between h-full  items-start text-start flex-col gap-10">
            <div className="space-y-8 tablet:p-16 xsPhone:p-10">
              <p className="text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                <span className="text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(4vh,4vw)]">
                  Operation and Maintenance
                </span>
              </p>
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)]">
                Effective operations and maintenance translate to tangible
                savings in the future by means of optimizing energy, chemical
                and water consumption. Better asset management reduces or
                eliminates unplanned plant shutdowns and extends the life of
                equipment.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="w-full bg-white h-full grid grid-cols-1">
            <div className={"h-full w-full"}>
              <Image
                src={epc2}
                alt={""}
                className={"h-full w-full object-cover"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16  flex flex-col justify-center items-center font-titilium text-start w-[85%] space-y-10">
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed">
          Desire Water’s operations and maintenance services eliminate the need
          for an in-house team. An expert in the water domain, Desire undertakes
          to manage facilities with innovative and effective solutions that
          secure the life of equipment and discovers avenues of further
          reduction of operating expenses. The overall aim of operation and
          maintenance is to ensure safety of people and process, operational
          efficiency and sustainability of water treatment facilities.
        </p>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed">
          Our customized operating procedures comply with stringent safety
          norms, discharge limitations, supervision, on-call services, supply of
          all spares and consumables, and management reporting. Desire develops
          and implements innovative plans to continually improve the performance
          and productivity of the facilities under contract. O&M customers get
          access to our wealth of technical knowledge, the latest technology and
          innovative solutions for operating and capital expenditure reduction.
          Our design engineers provide consultancy support on future expansion
          and retrofit needs as and when required. Subject matter experts
          perform periodic site visit, audit processes and conduct training on
          safety, equipment and best practices. Desire Water’s O&M services
          entail.
        </p>{" "}
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed">
          Looking towards the market potential Desire established it self a
          Leading ESCO Company In India with the specialization of energy saving
          in water supply and Pumping system, and now having many of the
          prestigious and successfull ESCO Projects which are being executed
          since 2010.
        </p>
        <div className="text-neutral-700 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] space-y-5">
          <p>
            • &nbsp;&nbsp; 24x7 services by a skilled team of O&M professionals.
            The team provides on the job training, performs preventive
            assessments to mitigate the risk of water quality outage and
            maintains compliance to EH&S and industrial standards.
          </p>{" "}
          <p>
            • &nbsp;&nbsp; Water analysis, analytical and chemistry trials are
            carried out to enhance/troubleshoot performance and processes with a
            strong focus to reduce cost of operation.
          </p>{" "}
          <p>• &nbsp;&nbsp; Optimal operating point calculation.</p>{" "}
          <p>
            • &nbsp;&nbsp; Development of site safety standards, safety
            training, periodic refreshers, daily tool box meetings, performing
            risk assessment, hazard identification and mitigation plans, safety
            reports (near miss, incidents, observation, etc.) with periodic
            performance, process and quality audits.
          </p>{" "}
          <p>
            • &nbsp;&nbsp; Comprehensive maintenance program with inventory
            management that provides access to all maintenance skills and spares
            needed; a vast OEM network for specialized services to increase
            equipment availability and reduce turnaround time.
          </p>{" "}
          <p>
            • &nbsp;&nbsp; Pan India presence of experts, ensures fastest reach
            during contingency.
          </p>{" "}
          <p>
            • &nbsp;&nbsp; Custom automation solutions with remote monitoring to
            control processes automatically - without manual intervention.
          </p>{" "}
        </div>
      </div>

      <div className={"mt-10 w-[90%]"}>
        <Marque />
      </div>
    </div>
  );
};

export default Page;
