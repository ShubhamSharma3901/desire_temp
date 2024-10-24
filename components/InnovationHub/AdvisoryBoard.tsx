'use client';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import BD1 from '@/public/BD1.webp';
import BD2 from '@/public/BD2.webp';
import BD3 from '@/public/BD3.webp';
import BD4 from '@/public/BD4.webp';

import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const AdvisoryBoard: React.FC = () => {
  // Define the hover states for each card
  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  const handleMouseEnter = (index: number) => {
    setIsHovered(prevState =>
      prevState.map((hovered, i) => (i === index ? true : hovered))
    );
  };

  const handleMouseLeave = (index: number) => {
    setIsHovered(prevState =>
      prevState.map((hovered, i) => (i === index ? false : hovered))
    );
  };

  // Advisor data: names and descriptions
  const advisors = [
    {
      name: 'Mr. Saheed Yinusa',
      description: 'Water Sanitation and Hygiene Consultant',
      image: BD1, // Associate BD1 with the first advisor
    },
    {
      name: 'Ms. Bircan Unver',
      description: 'Founder & President of The Light Millennium',
      image: BD2, // Associate BD2 with the second advisor
    },
    {
      name: 'Mr. Joshua Barnette',
      description: 'Water Resilience Analyst',
      image: BD3, // Associate BD3 with the third advisor
    },
    {
      name: 'Ms. Shelli Brunswick',
      description: 'CEO of Space Foundation',
      image: BD4, // Associate BD4 with the fourth advisor
    },
  ];

  return (
    <div className="">
      {/* <NavBar type={'Dark'} /> */}
      <div className="container h-auto w-screen flex flex-col justify-center items-center gap-20 px-6">
        <h2 className="smTablet:text-[min(7vh,7vw)] xsPhone:text-[min(9vh,9vw)] font-titilium font-semibold text-center  text-[#085C2C]">Advisory Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {advisors.map((advisor, index) => (
            <div className='border-2 border-[#085C2C]'
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <ReactCardFlip isFlipped={isHovered[index]} flipDirection="vertical">
                {/* Front of the card with BD images */}
                <div className="relative bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-sm mx-auto h-72">
                  <Image
                    src={advisor.image} // Use the corresponding advisor image
                    alt={`${advisor.name} image`} // Alt text for the image
                    layout="fill" // Make the image fill the parent div
                    objectFit="cover" // Maintain aspect ratio while covering the div
                    className="rounded-lg mb-4"
                  />
                </div>

                {/* Back of the card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-sm mx-auto h-72">
                  <h3 className="text-xl font-semibold mb-2 font-titilium">{advisor.name}</h3>
                  <p className="text-gray-600 text-center font-titilium">
                    {advisor.description}
                  </p>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
