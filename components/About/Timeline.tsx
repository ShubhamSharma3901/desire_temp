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

const TimelineComponent = () => {
  const timelineData = [
    { year: "2011", title: "Company Inception" },
    { year: "2011", title: "First ESCO Project" },
    { year: "2014", title: "Initiation of Solar Pumping Solutions" },
    { year: "2016", title: "National Award" },
    { year: "2017", title: "Udhyog Ratna Award" },
    { year: "2018", title: "IoT-Based Solutions" },
    { year: "2019", title: "Expansion to EPC Projects" },
  ];

  return (
    <>
      <Timeline horizontal={true} className={"tablet:flex xsPhone:hidden"}>
        {timelineData.map((event, index) => (
          <TimelineItem key={index}>
            <TimelinePoint />
            <TimelineContent className={"font-titilium space-y-2"}>
              <TimelineTime className={"text-xl"}>{event.year}</TimelineTime>
              <TimelineTitle>{event.title}</TimelineTitle>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Timeline horizontal={false} className={"tablet:hidden xsPhone:block"}>
        {timelineData.map((event, index) => (
          <TimelineItem key={index}>
            <TimelinePoint />
            <TimelineContent className={"font-titilium space-y-2"}>
              <TimelineTime className={"text-xl"}>{event.year}</TimelineTime>
              <TimelineTitle>{event.title}</TimelineTitle>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default TimelineComponent;
