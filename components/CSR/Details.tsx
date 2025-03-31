import Image from "next/image";
import desireLogo from "@/public/asset/products_and_solution/DesireLogoWater.svg";
import React from "react";

export default function CSRDetails() {
  return (
    <div className="my-20 flex flex-col justify-start items-center font-titilium text-start w-[85%] space-y-10 bg-[#F4F4F4]  py-16 relative overflow-clip">
      <h1 className="w-[95%] text-start p-4 pl-8 xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-bold text-[#085C2C] font-titilium">
        Our Initiatives
      </h1>

      <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
        At Desire Foundation, we believe sustainability goes beyond ideas—it’s
        about action. Our participation in leading sustainability events
        showcases our commitment to creating real impact.
      </p>

      <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
        Jaipur Sustainability Fest – Promoting Eco-Friendly Choices
      </div>

      <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
        At the Jaipur Sustainability Fest, organized by Jaipur School of
        Business, JECRC, we introduced our Automatic Cloth Bag Dispensers a step
        toward reducing plastic waste and making sustainable choices more
        accessible. By automating the distribution of reusable cloth bags, we
        encouraged responsible consumption and simplified the journey towards a
        greener future.
        <br />
        <br />
        Every cloth bag dispensed was a step toward sustainability, proving that
        change starts with small, thoughtful actions.
      </p>
      <div className="w-[90%] bg-[#085C2C] p-4 pl-8 text-white text-[min(3.5vh,3.5vw)] font-light tracking-wide ">
        Jaipur Literature Festival 2025 – Empowering Sustainability &
        Livelihoods
      </div>

      <p className="xsPhone:text-[min(3.5vh,3.5vw)] smTablet:text-[min(2.2vh,2.2vw)] text-neutral-700 leading-relaxed w-[90%] text-justify">
        At the world-renowned Jaipur Literature Festival, we brought a story of
        sustainability, empowerment, and change. Our Automatic Cloth Bag
        Dispensers were more than an eco-friendly alternative they symbolized
        the hard work and dedication of rural women who handcrafted each bag.
        <br />
        <br />
        Every bag picked up by a visitor was not just a step toward a greener
        planet but a step toward empowering the hands that made them. This
        initiative bridged the gap between sustainability and social impact,
        transforming wastefulness into responsibility and limitations into
        livelihoods.
      </p>

      <Image
        src={desireLogo}
        alt="desire_logo"
        className="absolute xsPhone:right-[-2em] xsPhone:bottom-[-0.5em] tablet:right-[-5em] tablet:bottom-[-1em] opacity-5 xsPhone:w-[35vw] tablet:max-w-400px tablet:w-[20vw]"
      />
    </div>
  );
}
