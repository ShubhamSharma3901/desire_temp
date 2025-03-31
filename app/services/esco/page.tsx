"use client";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

// import landing_photo from "@/public/asset/Services/ESCO.jpg";
import landing_photo from "@/public/asset/headerImages/Header Image 2.jpg";
import creative from "@/public/asset/Services/esco-1.webp";
import { BreadcrumbItem } from "flowbite-react";
import Image from "next/image";
import React from "react";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";
import Marque from "@/components/Home/Marquee";

const sectors = [
  {
    no: "1",
    sector: "Agriculture Pumping",
    consumption: "92.33",
    potential: "27.79",
  },
  {
    no: "2",
    sector: "Commercial Buildings/ Establishments with connected load > 500 KW",
    consumption: "9.92",
    potential: "1.98",
  },
  {
    no: "3",
    sector: "Municipalities",
    consumption: "12.45",
    potential: "2.88",
  },
  {
    no: "4",
    sector: "Domestic",
    consumption: "120.92",
    potential: "24.16",
  },
  {
    no: "5",
    sector: "Industry (Including SMEs)",
    consumption: "265.38",
    potential: "18.57",
  },
  {
    no: "",
    sector: "TOTAL",
    consumption: "501.00",
    potential: "75.36",
  },
];

const escoProjects = [
  {
    name: "ESCO Deeg-Kaman",
    customer: "PHED - Rajasthan",
    projectTenure: 5,
    avgWaterProduction: 4,
    annualEnergySaving: 600000,
  },
  {
    name: "ESCO Chum & Ratangarh",
    customer: "PHED - Rajasthan",
    projectTenure: 5,
    avgWaterProduction: 25,
    annualEnergySaving: 4800000,
  },
  {
    name: "ESCO Kailana Jodhpur",
    customer: "PHED - Rajasthan",
    projectTenure: 10,
    avgWaterProduction: 145,
    annualEnergySaving: 5951833,
  },
  {
    name: "ESCO Sirohi",
    customer: "PHED - Rajasthan",
    projectTenure: 5,
    avgWaterProduction: 21,
    annualEnergySaving: 4581818,
  },
  {
    name: "ESCO Bharatpur",
    customer: "PHED - Rajasthan",
    projectTenure: 10,
    avgWaterProduction: 50,
    annualEnergySaving: 3085714,
  },
  {
    name: "ESCO-Weir Bhusawar",
    customer: "PHED - Rajasthan",
    projectTenure: 10,
    avgWaterProduction: 5.5,
    annualEnergySaving: 1119000,
  },
  {
    name: "ESCO-Ajmer",
    customer: "PHED - Rajasthan",
    projectTenure: 10,
    avgWaterProduction: 80,
    annualEnergySaving: 19485216,
  },
  {
    name: "ESCO-Deesa, Gujarat",
    customer: "Deesa Municipalities, Gujarat",
    projectTenure: 5,
    avgWaterProduction: 27,
    annualEnergySaving: 2000000,
  },
  {
    name: "ESCO-Mahesana, Gujarat",
    customer: "Mahesana Municipalities, Gujarat",
    projectTenure: 10,
    avgWaterProduction: 40,
    annualEnergySaving: 2204059,
  },
  {
    name: "ESCO-Sanand, Gujarat (Under implementation)",
    customer: "Sanand Municipalities, Gujarat",
    projectTenure: 5,
    avgWaterProduction: 17,
    annualEnergySaving: null,
  },
];

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[3rem] mb-16 overflow-clip">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <Image
          src={landing_photo}
          alt=""
          className="h-[80vh] object-cover brightness-[65%] w-full"
        />
        <div className="absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]">
          <div className="w-full space-y-6">
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] ">
              Energy Service Company (ESCO)
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              ESCO specialize in energy efficiency, using performance-based
              contracts to ensure guaranteed savings and environmental benefits,
              effectively regenerating energy and resources.
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
                ESCO
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-center bg-[#085C2C] w-[87%]  font-titilium my-20 ">
        <div className="grid xsPhone:grid-cols-1 xsPhone:gap-10 smLaptop:gap-0 w-full h-full justify-center items-start">
          {/* left */}
          <div className="w-full flex justify-between h-full items-start text-start flex-col gap-10">
            <div className="space-y-8 tablet:p-16 xsPhone:p-10">
              <p className="text-[#FFFFFF] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5vh,5vw)]">
                What is
                <span className="text-[#D5F590] xsPhone:text-[min(6vh,6vw)] smTablet:text-[min(5vh,5vw)]">
                  &nbsp;ESCO?
                </span>
              </p>
              <p className="text-[#FFFFFF] xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)]">
                We are leading player, out of very few “ESCO Company” which are
                certified by Bureau of Energy Efficiency (BEE), working globally
                towards energy conservation in water infrastructure field. With
                our existing ESCO projects we save more than 25 Million electric
                units every year. We have a very capable team consists of Energy
                Audors and Analysts for project analysis. We typically execute
                projects from 5 to 10 years. We have a very rich experience in
                water infra based ESCO projects and we are successfully
                executing 9 ESCO project since last 5 years, and saving energy
                in the range from 20% to 50% in each project. The beauty of
                Desire ESCO Projects is transparency; all of our ESCO projects
                are having SCADA Based web monitoring system, by which we
                monitor live data through dedicated web portal and mobile app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 mt-10 flex flex-col justify-center items-center font-titilium text-start w-[85%] space-y-10">
        <div className="flex justify-start items-center w-full gap-5 font-titilium">
          <p className="smTablet:text-[min(3.5vw,3.5vh)] xsPhone:text-[min(5vw,5vh)]  ">
            SAVING 25 MILLION ELECTRICITY UNITS & BILLION LITER OF WATER EVERY
            YEAR
          </p>
          <hr className="relative right-0 h-1 w-[100px] bg-[#085C2C]" />
        </div>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed">
          Energy conservation in water supply is another major issue in India.
          Municipalities and other water supply bodies consume 12.45 billion KWH
          energy per-year for water pumping and water supply. Aligning with
          India’s target for net zero emission by 2070, Desire Energy is among
          the first BEE certified ESCO companies focused towards energy
          conservation in water treatment, transmission and distribution. We are
          currently managing 14+ cities’ and 5000+ villages’ water management
          systems saving around 25-35 million electric units annually. Through
          our expertise in hydraulic – modeling, pumping system design, and
          techdriven platforms, we have been able to achieve up-to 70% energy
          efficiency in these ESCO projects. For our ESCO projects, we under
          performance contracting model wherein we invest all the capital cost
          and our compensation is performance based and if the project does not
          provide desired energy saving, we are responsible to pay the
          difference. Thus, assuring their clients of the energy and cost
          savings.
        </p>
        <Table>
          <TableHeader>
            <TableRow className={"bg-[#085C2C] hover:bg-[#085C2C] smTablet:text-[min(1.8vh,1.8vw)]"}>
              <TableHead className={"text-white"}>No.</TableHead>
              <TableHead className={"text-white"}>Sector</TableHead>
              <TableHead className={"text-white"}>
                Consumption (Billion KWH)
              </TableHead>
              <TableHead className="text-right text-white">
                Saving Potential (Billion KWH)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sectors.map((sector, idx) => (
              <TableRow key={idx} className={"smTablet:text-[min(1.8vh,1.8vw)]"}>
                <TableCell className="font-medium">{sector.no}</TableCell>
                <TableCell>{sector.sector}</TableCell>
                <TableCell>{sector.consumption}</TableCell>
                <TableCell className="text-right">{sector.potential}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed">
          To promote Energy Efficiency and energy conservation measures,
          Government of India enacted The Energy Conservation Act-2001. ADB
          study (2004) of Demand Side Management potential in industry,
          buildings, municipalities and the study by National Mission for
          Enhanced Energy Efficiency that seeks to unlock a market potential of
          Rs. 74,000 crores (INR) and an avoided capacity addition of 19,000 MW
          in India.
        </p>{" "}
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed">
          Looking towards the market potential Desire established it self a
          Leading ESCO Company In India with the specialization of energy saving
          in water supply and Pumping system, and now having many of the
          prestigious and successfull ESCO Projects which are being executed
          since 2010.
        </p>
      </div>

      <div className="w-[85%] space-y-20 font-titilium">
        <Table>
          <TableHeader>
            <TableRow className={"bg-[#085C2C] hover:bg-[#085C2C] smTablet:text-[min(1.8vh,1.8vw)]"}>
              <TableHead className={"text-white"}>
                Name of ESCO Project
              </TableHead>
              <TableHead className={"text-white"}>Name of Customer</TableHead>
              <TableHead className={"text-white"}>
                Project Tenure (Years)
              </TableHead>
              <TableHead className=" text-white">
                Avg. Water Production (MLD)
              </TableHead>{" "}
              <TableHead className="text-right text-white">
                Annual Energy Saving in KWH
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {escoProjects.map((proj, idx) => (
              <TableRow key={idx} className={"smTablet:text-[min(1.8vh,1.8vw)]"}>
                <TableCell className="font-medium">{proj.name}</TableCell>
                <TableCell>{proj.customer}</TableCell>
                <TableCell>{proj.projectTenure}</TableCell>
                <TableCell className="text-right">
                  {proj.avgWaterProduction}
                </TableCell>
                <TableCell className="text-right">
                  {proj.annualEnergySaving}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed">
          Along with the above major ESCO projects in water supply segments ,
          desire have implemented many projects in lighting and water supply to
          various Industries and achieved saving from 30% to 80%, by deep study
          of Qualified and experienced engineering team, and with the use of
          energy efficient products.
        </p>
      </div>

      <div className="my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4]  py-16 relative overflow-clip">
        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          Deeg & Kama Pilot Project
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          Desire has come up with some trendsetting technologies that have
          completely transformed the energy sector. In 2010, Public Health and
          Engineering Department (PHED) assigned 28 submersible pumps in DEEG
          and KAMA to ESCO companies. We have installed first of its kind ESCO
          project in DEEG & KAMA that saves up to 6,00,000 KWH annually that
          amounts to Rs. 30,00,000. This project was scrutinized by PHED’s
          engineering team for almost 2 years to study the cons and pros of the
          Project. In 2012, Desire was felicitated by PHED minister for
          achieving the milestone and was thus awarded ‘ Rajasthan Energy
          Conservation Award ‘ for contributing towards energy saving.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          Esco Churu Rajasthan
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          In the Churu district of Rajasthan, where potable water is not
          available for everyone, Desire has come up with an innovative method
          to make water accessible to the masses. Initially, there were 250 tube
          wells and 25 pump houses in the district maintained by Public Health
          and Engineering Department (PHED). With a power consumption of approx.
          15000 kWh daily for running these pump houses and tube wells, the
          water problem was a menace for many. Moreover, there was a very high
          maintenance and operating cost for running these setup.
          <br />
          <br />
          When Desire undertook the task of providing clean water in the
          district, it successfully did that with its energy-saving
          technologies. Desire managed to replace obsolete pumps with highly
          efficient one and control panels with digitally manageable panels.
          Moreover, a series of sophisticated energy meters and electromagnetic
          flow meters were installed with each pump set for monitoring and
          verification purpose. Now, with this modern setup, we are able to save
          up to 40% of the total energy used up by these pumps thus generating
          the total revenue of Rs. 27 million annually. In addition to this, we
          have managed to save up to 4.8 million kWh of energy per year.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Kailana Jodhpur
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          Desire has left its footprint on Jodhpur by installing an energy
          efficient system in KAILANA district. Before the conceptualization of
          Desire system, water was harnessed through an artificial Canal (RGLC)
          situated 250 km away from Jodhpur city. With a population of 11 lac,
          the city needed 150 MLD water but due to the constant collapse of the
          pumping system, the process could only generate 90 MLD.
          <br />
          <br />
          Desire in collaboration with PHED has come up with a well-planned
          system for settling up the water woes. The highly skilled team of
          Desire analyzed the reason behind the inefficiency of the system and
          came up with a modern technique that could produce 170 MLD.
          Consequently, this project has generated an annual saving of Rs.3
          crore with the production of 155 MLD.
          <br />
          <br />
          The system is fully controlled through SCADA where one can have access
          to the hourly production and distribution of potable water to the
          people. Currently, with this project, PHED is able to save 58,18,000
          kWh (Unit) of energy and can meet up the demand surge till 2024.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Sirohi Rajasthan
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          Sirohi, one of the arid districts of Rajasthan was battling with the
          water problem. Before 2015, the district was supplied potable water
          through its 250 tubewell and 30 pump houses network governed by PHED.
          But with the installation of energy efficient water pump by Desire,
          the district was able to receive the adequate supply of clean water.
          <br />
          <br />
          Through this new age solution, the city curtailed its energy need by
          40% with an annual saving of 45,81,000 KWH(units). Moreover, desire
          gave Rs. 2,52.00,000 back to the government as annual saving with the
          help of its modern water management system.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Bharatpur
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          Water has been the major issue in Bharatpur city since Desire has set
          foot on this barren land. With a population of over 5 lac, the city’s
          main source of water is Chambal river and Bandh Barethan. The overall
          demand for water was 45 MLD which was not produced by the existing
          water harvesting technique. Desire, on the other hand, took up the
          challenge and successfully installed cost-effective and energy
          efficient water pumps to make water accessible for everyone.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Deesa Gujrat
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          Deesa is a city and a municipality in the Banaskantha district in the
          state of Gujarat, India. Deesa is known for its potato plantations.
          Water production was 2050 KLD for the Deesa city, while the present
          demand is 3000KLD and it may increase during the project tensure up to
          5000 KLD. Desire design and install new or modified energy efficient
          pumping machineries to take the production on avg. of 3000 KLD and up
          to 5000 KLD. ESCO project in DEESA that saves up to 20,00,000 KWH
          annually that amounts to Rs. 1,20,00,000.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Weir-Bhusawar
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          Weir is a Tehsil Head Quarter of the Bharatpur District in the Indian
          state of Rajasthan. The geographical location of Weir is 25.68° North,
          75.73° East and it is 157 KM Away from state capital Jaipur. At
          present The activity of water supply in Weir is based on ground water
          sources. Under This ESCO Water supply to UWSS Weir is considered from
          12 Nos. tubewells and further supply from CWR, Which include the O&M
          for these tubewells and pump houses for a period of 10 years. The
          population of Weir as per 2011 census was 19385 Souls. Present
          population is approx 21325 souls. The present total demand of water is
          2100 KLD considering 100 LPCD, However present production is approx
          1550 KLD, The demand of water will be increase up to 3000 KLD in
          future. Desire will ready with their hardworking efforts to full fill
          that demand and complete it for sure.
          <br />
          <br />
          Bhusawar is a Tehsil Head Quarter of the Bharatpur District in the
          Indian state of Rajasthan. The geographical location of Bhusawar is
          25.68° North, 75.73° East and it is 157 KM Away from state capital
          Jaipur. At present the activity of water supply in Bhusawar is based
          on ground water sources. Under This ESCO Water supply to UWSS Bhusawar
          is considered from 13 Nos. tubewells and further supply from CWR,
          Which include the O&M for these tubewells and pump houses for a period
          of 10 Years. The population of Bhusawar as per 2011 census was 19385
          Souls. Present population is approx 21325 souls. The present total
          demand of water is 2200 KLD considering 100 LPCD, However present
          production is approx 1650 KLD, The demand of water will be increase up
          to 3200 KLD in future. ESCO Weir-Bhusawar project started from
          November-2017 and project has generated an annual saving of 11,19,000
          KWH (78,39,000 INR).
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Jaisamand
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          The beautiful city of Udaipur is situated in the southern portion of
          the Rajasthan State and lies in latitude 24° N and longitude 73° 43°
          E. It is also surrounded by Aravali hills on Delhi-Ahmedabad National
          Highway No. 8. Udaipur City is famous for its natural beauty and
          tourism. The capital of Rajsthan Jaipur, and Capital of Gujrat
          Ahmedabad also lies on N.H.8 and is at a distance of 430 km and 320
          respectively from Udaipur city. The scheme is presently being run on
          ESCO pattern, which envisage pumping of 21 MLD raw water from
          Jaisamand Lake to Teetardi WTP at Udaipur city through boosting from
          pumping station No.
          <br />
          <br />1 to 4 which are located PS-1 Jaisamand lake & PS- 2 Near daya
          Dam which is at a distance of 19 km from PS-1, PS-3 Near Kevda village
          which is at distance of 11.9 km from PS-2, PS-4 in Kevda ki Nal which
          is 5 KM from PS-4 through 600mm dia MS. Pipe line in a length of about
          53.00 KM. Project awarded to DESIRE from December-2017 and till now
          Annual Energy Saving in 21,00,000 KWH and generating the total revenue
          of Rs. 1,57,50,000 annually. achieved by Desire Energy Solution.
        </p>

        <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
          ESCO Ajmer
        </div>

        <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.5vh,2.5vw)] text-neutral-700 leading-relaxed w-[90%]">
          DESIRE is working with government (multiple) organization and some
          multinational conglomerate as energy service company which provide
          energy saving solutions through its hi-tech water purifying system.
          DESIRE has come up with a solution where it minimizes the overall
          energy consumption by installing it’s system thus curtailing the extra
          usage of energy. Furthermore, the company reimburse approx 15 to 20%
          of the total profit generated back to the government. With the surge
          in water demand the company also modifies its installations in order
          to maintain the quality service thus giving benefits to both people
          and government. India has a potential of generating more than 570
          billion kWh of energy out of which 15% energy could be saved by
          implementing energy conservation and energy efficient techniques at
          multiple sectors.
          <br />
          <br />
          Seeing this mammoth potential in energy sector, government of India
          enacted The energy conservation act-2001 which promoted various ESCO
          companies to establish energy saving techniques in water supply and
          pumping sector. More to it, this state of the art technique can be
          used in different sectors to optimize energy sources. Since then
          DESIRE as an ESCO company have taken various energy conservation
          projects and has been successfully contributing in this sector since
          2010.
        </p>

        <Image
          src={desireLogo}
          alt="desire_logo"
          className="absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-5 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]"
        />
      </div>

      <div>
        <Image src={creative} alt={""} />
      </div>
      <div className={"mt-20 w-[90%]"}>
        <Marque />
      </div>
    </div>
  );
};

export default Page;
