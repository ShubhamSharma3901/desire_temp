"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
// import landing_photo from "@/public/asset/Services/opm.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 3.jpg";
import epc2 from "@/public/asset/Services/o&m-intro.jpeg";

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
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";

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
                className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]">
                Services
              </BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-titilium smTablet:text-[min(2.4vh,2.4vw)] xsPhone:text-[min(3vh,3vw)]">
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
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-justify">
                {/*Effective operations and maintenance translate to tangible*/}
                {/*savings in the future by means of optimizing energy, chemical*/}
                {/*and water consumption. Better asset management reduces or*/}
                {/*eliminates unplanned plant shutdowns and extends the life of*/}
                {/*equipment.*/}
                Desire Energy Solutions Pvt. Ltd. is a leading ESCO (Energy
                Service Company) in India, specializing in energy-saving water
                supply and pumping systems. We are committed to providing
                comprehensive Operation & Maintenance (O&M) services for
                critical water infrastructure, ensuring reliable, efficient, and
                sustainable water supply to communities across Gujarat and
                beyond. Our expertise spans civil and electromechanical assets,
                including intake wells, reservoirs, treatment plants, pipelines,
                and pumping systems.
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

      {/*<div className="mb-16  flex flex-col justify-center items-center font-titilium text-start w-[85%] space-y-10">*/}
      {/*  <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed">*/}
      {/*    Desire Water’s operations and maintenance services eliminate the need*/}
      {/*    for an in-house team. An expert in the water domain, Desire undertakes*/}
      {/*    to manage facilities with innovative and effective solutions that*/}
      {/*    secure the life of equipment and discovers avenues of further*/}
      {/*    reduction of operating expenses. The overall aim of operation and*/}
      {/*    maintenance is to ensure safety of people and process, operational*/}
      {/*    efficiency and sustainability of water treatment facilities.*/}
      {/*  </p>*/}
      {/*  <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed">*/}
      {/*    Our customized operating procedures comply with stringent safety*/}
      {/*    norms, discharge limitations, supervision, on-call services, supply of*/}
      {/*    all spares and consumables, and management reporting. Desire develops*/}
      {/*    and implements innovative plans to continually improve the performance*/}
      {/*    and productivity of the facilities under contract. O&M customers get*/}
      {/*    access to our wealth of technical knowledge, the latest technology and*/}
      {/*    innovative solutions for operating and capital expenditure reduction.*/}
      {/*    Our design engineers provide consultancy support on future expansion*/}
      {/*    and retrofit needs as and when required. Subject matter experts*/}
      {/*    perform periodic site visit, audit processes and conduct training on*/}
      {/*    safety, equipment and best practices. Desire Water’s O&M services*/}
      {/*    entail.*/}
      {/*  </p>{" "}*/}
      {/*  <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed">*/}
      {/*    Looking towards the market potential Desire established it self a*/}
      {/*    Leading ESCO Company In India with the specialization of energy saving*/}
      {/*    in water supply and Pumping system, and now having many of the*/}
      {/*    prestigious and successfull ESCO Projects which are being executed*/}
      {/*    since 2010.*/}
      {/*  </p>*/}
      {/*  <div className="text-neutral-700 xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] space-y-5">*/}
      {/*    <p>*/}
      {/*      • &nbsp;&nbsp; 24x7 services by a skilled team of O&M professionals.*/}
      {/*      The team provides on the job training, performs preventive*/}
      {/*      assessments to mitigate the risk of water quality outage and*/}
      {/*      maintains compliance to EH&S and industrial standards.*/}
      {/*    </p>{" "}*/}
      {/*    <p>*/}
      {/*      • &nbsp;&nbsp; Water analysis, analytical and chemistry trials are*/}
      {/*      carried out to enhance/troubleshoot performance and processes with a*/}
      {/*      strong focus to reduce cost of operation.*/}
      {/*    </p>{" "}*/}
      {/*    <p>• &nbsp;&nbsp; Optimal operating point calculation.</p>{" "}*/}
      {/*    <p>*/}
      {/*      • &nbsp;&nbsp; Development of site safety standards, safety*/}
      {/*      training, periodic refreshers, daily tool box meetings, performing*/}
      {/*      risk assessment, hazard identification and mitigation plans, safety*/}
      {/*      reports (near miss, incidents, observation, etc.) with periodic*/}
      {/*      performance, process and quality audits.*/}
      {/*    </p>{" "}*/}
      {/*    <p>*/}
      {/*      • &nbsp;&nbsp; Comprehensive maintenance program with inventory*/}
      {/*      management that provides access to all maintenance skills and spares*/}
      {/*      needed; a vast OEM network for specialized services to increase*/}
      {/*      equipment availability and reduce turnaround time.*/}
      {/*    </p>{" "}*/}
      {/*    <p>*/}
      {/*      • &nbsp;&nbsp; Pan India presence of experts, ensures fastest reach*/}
      {/*      during contingency.*/}
      {/*    </p>{" "}*/}
      {/*    <p>*/}
      {/*      • &nbsp;&nbsp; Custom automation solutions with remote monitoring to*/}
      {/*      control processes automatically - without manual intervention.*/}
      {/*    </p>{" "}*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4] py-16 relative overflow-clip">
        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Why Choose Desire Water&apos;s O&M Services?
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          <strong>Eliminate the Need for In-House Teams:</strong> We act as your
          expert water domain partner.
          <br />
          <br />
          <strong>Innovative and Effective Solutions:</strong> We manage
          facilities to secure equipment lifespan and reduce operational
          expenses.
          <br />
          <br />
          <strong>Focus on Safety and Efficiency:</strong> Our aim is to ensure
          the safety of people and processes, operational efficiency, and
          sustainability of water treatment facilities.
          <br />
          <br />
          <strong>Customized Operating Procedures:</strong> We comply with
          stringent safety norms, discharge limitations, supervision, on-call
          services, supply of spares and consumables, and management reporting.
          <br />
          <br />
          <strong>Continuous Improvement:</strong> We develop and implement
          innovative plans to enhance performance and productivity.
          <br />
          <br />
          <strong>Technical Expertise and Innovation:</strong> Our customers
          gain access to our wealth of technical knowledge, the latest
          technology, and solutions for cost reduction.
          <br />
          <br />
          <strong>Consultancy Support:</strong> Our design engineers provide
          support for future expansion and retrofit needs.
          <br />
          <br />
          <strong>Subject Matter Experts:</strong> We conduct periodic site
          visits, audits, and training on safety, equipment, and best practices.
          <br />
          <br />
          <strong>Leading ESCO Expertise:</strong> We have a proven track record
          of successful ESCO projects since 2010, specializing in energy saving
          in water supply and pumping systems.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Our O&M Services Include:
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          <strong>24x7 Skilled Team:</strong> On-the-job training, preventive
          assessments, and compliance with EH&S and industrial standards.
          <br />
          <br />
          <strong>Water Analysis and Chemistry Trials:</strong> Enhance
          performance, troubleshoot processes, and reduce operating costs.
          <br />
          <br />
          <strong>Optimal Operating Point Calculation.</strong>
          <br />
          <br />
          <strong>Comprehensive Safety Programs:</strong> Site safety standards,
          training, risk assessment, and detailed safety reporting.
          <br />
          <br />
          <strong>Comprehensive Maintenance:</strong> Inventory management, OEM
          network access, and increased equipment availability.
          <br />
          <br />
          <strong>Pan India Presence:</strong> Fastest reach during
          contingencies.
          <br />
          <br />
          <strong>Custom Automation Solutions:</strong> Remote monitoring and
          automated process control.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Our Recent Projects
        </div>

        {/* <div className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          <Table className={"bg-white/40"}>
            <TableHeader>
              <TableRow className={"bg-neutral-600 hover:bg-neutral-600 smTablet:text-[min(1.8vh,1.8vw)]"}>
                <TableHead className={"text-white"}>Project Name</TableHead>
                <TableHead className={"text-white"}>Location</TableHead>
                <TableHead className={"text-white"}>Scope of Work</TableHead>
                <TableHead className="text-white">Key Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Pipaliya Group NC-7 Water Supply Scheme",
                  location: "Morbi & Maliya Talukas",
                  scope: "Comprehensive IoT Driven O&M",
                  details: "Managing assets to ensure reliable potable water supply.",
                },
                {
                  name: "Kakrapar Water Supply Scheme",
                  location: "Surat (GWSSB)",
                  scope: "Comprehensive IoT Driven O&M of civil & electromechanical assets",
                  details: "Delivering 26.73 MLD potable water to 161 villages.",
                },
                {
                  name: "Pavagadh Water Supply Project",
                  location: "Panchmahal District, Gujarat",
                  scope: "Advanced Comprehensive IoT Driven O&M solutions",
                  details: "Managing key water infrastructure (WTPs, pumps, pipelines, ESRs).",
                },
                {
                  name: "Surat O&M Project",
                  location: "Surat, Gujarat",
                  scope: "Operation of pipelines, pumps, reservoirs",
                  details: "Ensuring safe and sustainable water supply.",
                },
              ].map((proj, idx) => (
                  <TableRow key={idx} className={"smTablet:text-[min(1.8vh,1.8vw)]"}>
                    <TableCell className="font-semibold text-start">{proj.name}</TableCell>
                    <TableCell>{proj.location}</TableCell>
                    <TableCell>{proj.scope}</TableCell>
                    <TableCell>{proj.details}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </div> */}



<div className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          <Table className={"bg-white/40"}>
            <TableHeader>
              <TableRow className={"bg-neutral-600 hover:bg-neutral-600 smTablet:text-[min(1.8vh,1.8vw)]"}>
                <TableHead className={"text-white"}>Location</TableHead>
                <TableHead className="text-white">Key Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
      {[
        // --- Existing Data ---
        {
          location: "Veraval (Gir Somnath)",
          details: "Real-time monitoring of a 19.42 MLD WTP, supplying treated water to 70 villages in Veraval, Sutrapada & Talala.",
        },
        {
          location: "Varanasi",
          details: "Smart O&M enabled 100% FHTCs across 150+ villages through IoT-led tracking and maintenance.",
        },
        {
          location: "Chandauli",
          details: "IoT-integrated O&M ensured efficient water supply across 60+ villages with reduced downtime.",
        },
        {
          location: "Jaunpur",
          details: "Managing 70+ villages using automated alerts and preventive maintenance for seamless operations.",
        },
        {
          location: "Mathura",
          details: "Executing smart O&M in 75+ villages, blending automation and field insights for reliable water delivery.",
        },
        {
          location: "Mainpuri",
          details: "Monitoring 25+ villages via IoT, ensuring prompt issue resolution and operational transparency.",
        },
        {
          location: "Panchmahal",
          details: "Serving 222 villages with a total water demand of 40.95 MLD, supported by two WTPs of 73.30 MLD and 13 MLD, under IoT-driven O&M systems.",
        },
        {
          location: "Aravali",
          details: "Managing operations across 197 villages with a 60.06 MLD water demand, optimized through IoT-based performance monitoring.",
        },
        {
          location: "Mahisagar (Kadana)",
          details: "Efficiently operating in 150 villages with a 12.44 MLD water demand, using data-backed maintenance systems.",
        },
        {
          location: "Morbi (Pipaliya)",
          details: "Delivering smart O&M across 70 villages, catering to 5.90 MLD water demand through digital monitoring tools.",
        },
        {
          location: "Surat",
          details: "Ensuring seamless delivery of 26.73 MLD of potable water to 161 villages through proactive IoT-based operations.",
        },
        {
          location: "Morbi (Khirai)",
          details: "Managing two Water Treatment Plants of 11 MLD capacity each with smart O&M technologies for improved performance.",
        },

        // --- New Uttar Pradesh Data ---
        {
          location: "Ballia",
          details: "Enabled safe water access in Ballia through 110 OHSRs, 1.5 lakh FHTCs, 115 MLD WTP, and 145 MLD Intake Well.",
        },
        {
          location: "Mau",
          details: "Enhanced water distribution through 108 Overhead Reservoirs, 113 Tube Wells, and 55,000 Functional Household Tap Connections.",
        },
        {
          location: "Varanasi",
          details: "Executed large-scale infrastructure with 230 OHSRs, 230 Tube Wells, and 1.15 lakh FHTCs, building a robust water system.",
        },
        {
          location: "Siddharth Nagar",
          details: "Improved rural water access with 50 OHSRs, 52 Tube Wells, and 19,500 FHTCs, ensuring supply to underserved communities.",
        },
        {
          location: "Mahuari",
          details: "Built a strong foundation with 102 OHSRs, 98 Tube Wells, and 79,829 FHTCs, reaching every household.",
        },
        {
          location: "Mahuari 1",
          details: "Strengthened urban water supply with 6 OHSRs, 14 Tube Wells, and 6300 FHTCs, ensuring safe water delivery.",
        },

        // --- New Rajasthan Data ---
        {
          location: "Dungarpur",
          details: "Established a robust system with 25 OHSRs, 3 MLD WTP, 3 MLD Intake Well, and 22,000 FHTCs for reliable treated water.",
        },
        {
          location: "Arthuna",
          details: "Upgraded rural infrastructure with 30 Tube Wells, 47 OHSRs, and 11,000 FHTCs, improving water availability.",
        },
        {
          location: "Bichhiwara",
          details: "Enabled safe drinking water with 13,523 FHTCs, 2 Tube Wells, and 30 OHSRs, improving quality of life.",
        },
        {
          location: "Sarada",
          details: "Enhanced regional water systems with 15 OHSRs, 11,400 FHTCs, and 2 CWRs, boosting domestic water access.",
        },
        {
          location: "Deeg",
          details: "Empowered 400+ villages with 64 OHSRs, 12 CWRs, and 9,483 FHTCs, bridging the rural-urban gap.",
        },
        {
          location: "Banswara",
          details: "Transformed water access across 345 villages with 54 OHSRs, 15 CWR units, a 3.5 MLD WTP, and 65,821 FHTCs.",
        },
      ].map((row, idx) => (
        <TableRow key={idx}>
          <TableCell className="font-semibold">{row.location}</TableCell>
          <TableCell>{row.details}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>








        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide">
          Our Commitment
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.4vh,2.4vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
          At Desire Energy Solutions, we understand the importance of reliable
          water infrastructure. We are dedicated to:
          <br />
          <br />
          <strong>
            Ensuring the efficient operation and maintenance of all assets.
          </strong>
          <br />
          <br />
          <strong>Delivering safe and sustainable water solutions.</strong>
          <br />
          <br />
          <strong>
            Strengthening local infrastructure and enhancing infrastructure
            longevity.
          </strong>
          <br />
          <br />
          <strong>
            Contributing to the well-being and development of the communities we
            serve.
          </strong>
        </p>

        <Image
          src={desireLogo}
          alt="desire_logo"
          className="absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-5 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]"
        />
      </div>

      <div className={"mt-10 w-[90%]"}>
        <Marque />
      </div>
    </div>
  );
};

export default Page;
