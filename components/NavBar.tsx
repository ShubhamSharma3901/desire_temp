"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/asset/desire_logo_white.png";
import logoGreen from "@/public/asset/Desire_Logo_Green.png";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "./ui/button";
import { ChevronDown, MenuIcon } from "lucide-react";

const NavBar = ({ type }: { type: "Dark" | "Light" }) => {
  return (
    <div
      className={cn(
        "smLaptop:w-[90%] tablet:w-[95%] xsPhone:w-[85%] bg-transparent flex justify-evenly items-center ",
        type === "Dark" ? "bg-transparent" : "bg-white",
      )}
    >
      <Link
        href={`${process.env.NEXT_PUBLIC_APP_URL}`}
        className="smLaptop:w-[20%] xsPhone:w-full  flex justify-start items-center"
      >
        {type === "Dark" ? (
          <Image
            src={logo}
            alt=""
            className="smTablet:w-[min(24vw,24vh)] xsPhone:w-[min(40vh,40vw)] h-auto"
          />
        ) : (
          <Image
            src={logoGreen}
            alt=""
            className="smTablet:w-[min(24vw,24vh)] xsPhone:w-[min(40vh,40vw)] h-auto"
          />
        )}
      </Link>
      <div
        className={cn(
          "w-[80%] smLaptop:flex xsPhone:hidden flex justify-between items-center font-titilium  uppercase",
          type === "Dark" ? "text-white" : "text-black",
        )}
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_APP_URL}/about`}
          className="text-center"
        >
          About
        </Link>
        <Link href={"#"} className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={"flex justify-center items-center gap-2 uppercase"}
            >
              Company <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"font-titilium p-4 space-y-2"}>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)] "}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/life-at-desire `}
                  className={"hover:text-[#085C2C]"}
                >
                  Life@Desire
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/csr`}
                  className={"hover:text-[#085C2C]"}
                >
                  CSR
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/awards`}
                  className={"hover:text-[#085C2C]"}
                >
                  Awards and Recognition
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>
        <Link href={"#"} className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={"flex justify-center items-center gap-2 uppercase"}
            >
              Products & Solutions <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"font-titilium p-4 space-y-2"}>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)] "}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-automation-solution `}
                  className={"hover:text-[#085C2C]"}
                >
                  AquaLogix Automation Solution
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-smart-water-meter`}
                  className={"hover:text-[#085C2C]"}
                >
                  AquaLogix Smart Water Meter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/sunaquator-solar-power-plant`}
                  className={"hover:text-[#085C2C]"}
                >
                  SunAquator Solar Power Plant
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>
        <Link href={"#"} className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={"flex justify-center items-center gap-2 uppercase"}
            >
              Services <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"font-titilium p-4 space-y-2"}>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)] "}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/services/esco `}
                  className={"hover:text-[#085C2C]"}
                >
                  ESCO
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/services/smart-epc`}
                  className={"hover:text-[#085C2C]"}
                >
                  Smart EPC
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/services/decentralized-water-management`}
                  className={"hover:text-[#085C2C]"}
                >
                  Decentralized Water Management
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"uppercase tracking-wide text-[min(1.8vh,1.8vw)]"}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/services/operation-and-maintenance`}
                  className={"hover:text-[#085C2C]"}
                >
                  Operation and Maintenance
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_APP_URL}/innovationhub`}
          className="text-center"
        >
          Innovation Hub
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_APP_URL}/blogs`}
          className="text-center"
        >
          Blogs
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_APP_URL}/contact`}
          className="text-center"
        >
          Contact Us
        </Link>
      </div>
      <div className="xsPhone:block smLaptop:hidden relative z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div
              className={cn(
                "w-full flex flex-col justify-start items-start font-titilium gap-10  uppercase text-black",
              )}
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/about`}
                className="text-center hover:text-[#085C2C]  transition-all hover:underline"
              >
                About
              </Link>
              <Accordion type="single" collapsible className={"w-full"}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Company</AccordionTrigger>
                  <AccordionContent
                    className={
                      "flex flex-col no-underline gap-10 p-4 bg-neutral-100 rounded-sm"
                    }
                  >
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/life-at-desire`}
                      className={"hover:text-[#085C2C]"}
                    >
                      Life@Desire
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/csr`}
                      className={"hover:text-[#085C2C]"}
                    >
                      CSR
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/awards`}
                      className={"hover:text-[#085C2C]"}
                    >
                      Awards and Recognition
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className={"w-full"}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Products & Solutions</AccordionTrigger>
                  <AccordionContent
                    className={
                      "flex flex-col no-underline gap-10 p-4 bg-neutral-100 rounded-sm"
                    }
                  >
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-automation-solution `}
                      className={"hover:text-[#085C2C]"}
                    >
                      AquaLogix Automation Solution
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-smart-water-meter`}
                      className={"hover:text-[#085C2C]"}
                    >
                      AquaLogix Smart Water Meter
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/sunaquator-solar-power-plant`}
                      className={"hover:text-[#085C2C]"}
                    >
                      SunAquator Solar Power Plant
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className={"w-full"}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Services</AccordionTrigger>
                  <AccordionContent
                    className={
                      "flex flex-col no-underline gap-10 p-4 bg-neutral-100 rounded-sm"
                    }
                  >
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/services/esco `}
                      className={"hover:text-[#085C2C]"}
                    >
                      ESCO
                    </Link>

                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/services/smart-epc`}
                      className={"hover:text-[#085C2C]"}
                    >
                      Smart EPC
                    </Link>

                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/services/decentralized-water-management`}
                      className={"hover:text-[#085C2C]"}
                    >
                      Decentralized Water Management
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/services/operation-and-maintenance`}
                      className={"hover:text-[#085C2C]"}
                    >
                      Operation and Maintenance
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/innovationhub`}
                className="text-center hover:text-[#085C2C]  transition-all hover:underline"
              >
                Innovation Hub
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/blogs`}
                className="text-center hover:text-[#085C2C]  transition-all hover:underline"
              >
                Blogs
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/contact`}
                className="text-center hover:text-[#085C2C]  transition-all hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
