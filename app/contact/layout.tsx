"use client";
import Footer from "@/components/Home/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import { Toaster } from "sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <div className="fixed z-10 w-full flex justify-center items-center top-0 py-[1rem] bg-white">
          <NavBar type="Light" />
        </div>
        <div className=" w-full h-full flex justify-center items-center  bg-white ">
          <Toaster />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
