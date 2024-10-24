"use client";
import React from "react";
import Image from "next/image";
import CSR102 from "@/public/asset/CSR102.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Acordian = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div>
      <div className="mb-[2.5rem] flex flex-col gap-5 smLaptop:flex-row smLaptop:mt-[4rem] md:mt-[2rem] px-10">
        {/* left */}
        <div className="smLaptop:w-[50%] xsPhone:w-full">
          <Image
            src={CSR102}
            alt="image"
            className="object-contain  w-full h-auto"
          />
        </div>

        {/* right */}
        <div className="font-titilium pl-[2rem] border-none flex flex-col gap-5 smLaptop:w-[50%] smLaptop:mt-[1.4rem] smLaptop:flex smLaptop:flex-col smLaptop:gap-4">
          <div className="text-center  font-titilium text-[min(7vh,7vw)] mb-2">
            Salient Features
          </div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-semibold"
            >
              Women Empowerment and Entrepreneurship
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Desire Foundation promotes women entrepreneurship and empowerment
              in rural India, aiming to reduce the economic impact of women
              spending significant workdays fetching water.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Free RO Water Supply
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Provides free RO water to over 400 schools and hospitals, ensuring
              access to clean drinking water for communities in need.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Power of Conserve Award
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Annual award to create awareness among youth about energy and
              water conservation, fostering a culture of sustainability.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Employment for Physically Handicapped
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Offers jobs to physically handicapped individuals, promoting
              inclusivity and providing economic opportunities.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Tree Plantations
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Conducts tree plantations at project sites to offset environmental
              impact and promote ecological sustainability.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Support for National Football Tournament
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Sponsors national football tournaments, supporting sports
              development and community engagement.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Support for Orphanages
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Provides association and support to various orphanage homes,
              contributing to the welfare of underprivileged children.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Customer-Centric Approach
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Ensures customer satisfaction through a dedicated PMSC Cell for
              project monitoring and a Toll-Free Customer Service Desk for
              prompt resolution of issues and feedback.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Commitment to Value Creation
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Believes in value creation as a primary purpose, with a focus on
              profit sharing and delivering societal benefits through
              sustainable business practices.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="font-semibold"
            >
              Vision for Nation Building
            </AccordionSummary>
            <AccordionDetails className="font-light">
              Aligns CSR efforts with a vision for nation-building, emphasizing
              community development, empowerment, and environmental stewardship.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Acordian;
