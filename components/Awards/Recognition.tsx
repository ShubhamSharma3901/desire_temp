
import Image from 'next/image';

// const data = [
//   {
//     img: '/asset/Award101.webp',
//     heading:' Outstanding Entrepreneurship October, 2016',
//     content: 'National Award by Prime Minister Shri Narendra Modi for Outstanding Entrepreneurship October, 2016',
//   },
//   {
//     img: '/asset/Awards102.webp',
//     heading:'Udhyog Ratna Award',
//     content: 'Udhyog Ratna Award by Chief Minister of Rajasthan Smt. Vasundhra Raje Sindhiya November, 2017',
//   },
//   {
//     img: '/asset/Awards103.webp',
//     heading:'Energy Circle Award',
//     content: 'Energy Circle Award for Innovating ESCO Model, by CII May, 2018'
//   },
//   {
//     img: '/asset/Awards104.webp',
//     heading:'Certified by Ministry of New & Renewable Energy',
//     content: 'Certified by Ministry of New & Renewable Energy (MNRE), Government of India for Solar Products',
//   },
//   {
//     img: '/asset/Awards105.webp',
//     heading:'Certified ESCO Company',
//     content: 'Certified ESCO Company by Bureau of Energy Efficiency, Government of India',
//   },
//   {
//     img: '/asset/Awards106.webp',
//     heading:'Enlisted by NABARD',
//     content: 'Enlisted by NABARD for the capital subsidy scheme, for Agriculture Solar Pumps',
//   },
//   {
//     img: '/asset/Awards107.webp',
//     heading:'SP-28 rating by CRISIL',
//     content: 'Obtained "SP-28" rating by CRISIL, for the high performance and financial strength for solar projects.',
//   },
//   {
//     img: '/asset/Awards108.webp',
//     heading:'Certified products with CE marketing',
//     content: 'Certified products with CE marketing. Tested and approved products by many NABAL Laboratories like NISE, ERDA, TUV etc.',
//   },
//
//   {
//     img: '/asset/Awards110.webp',
//     heading:'In-house R&D team',
//     content: ' Established in-house R&D team for the next gen technology development and possess many patented products',
//   },
//   {
//     img: '/asset/Awards110.webp',
//     heading:' Own Tailor made ERP',
//     content: ' Build and Implemented Own Tailor made ERP for all processes and Project Management',
//   },
//   {
//     img: '/asset/AWA_Award.webp',
//     heading:'Asian Water Awards',
//     content: '',
//   },
//
// ];

const data = [
  {
    img: '/asset/awards/bg/National Award for Outstanding Entrepreneurship.jpeg',
    heading:' Outstanding Entrepreneurship October, 2016',
    content: 'National Award by Prime Minister Shri Narendra Modi for Outstanding Entrepreneurship October, 2016',
  },
  {
    img: '/asset/awards/bg/Udhyog Ratna Award.jpg',
    heading:'Udhyog Ratna Award',
    content: 'Udhyog Ratna Award by Chief Minister of Rajasthan Smt. Vasundhra Raje Sindhiya November, 2017',
  },
  {
    img: '/asset/awards/bg/Energy_Circle_Award.jpg',
    heading:'Energy Circle Award',
    content: 'Energy Circle Award for Innovating ESCO Model, by CII May, 2018'
  },
  {
    img: '/asset/awards/bg/Asian_Water.jpeg',
    heading:'Asian Water Awards',
    content: 'Desire Energy was awarded three prestigious honors at Asian Water Awards 2024: the Water Technology Excellence Award for digital innovation, the Water Access Initiative of the Year for improving water access, and the Renewable Water Energy Innovation Award for integrating sustainable energy solutions in water management.',
  },
  {
    img: '/asset/awards/bg/Dare_to_Dream_Award.jpg',
    heading:'Dare to Dream Award',
    content: 'Dare to Dream Award By FORTI August, 2018'
  },
  {
    img: '/asset/Awards104.webp',
    heading:'Certified by Ministry of New & Renewable Energy',
    content: 'Certified by Ministry of New & Renewable Energy (MNRE), Government of India for Solar Products',
  },
  {
    img: '/asset/Awards105.webp',
    heading:'Certified ESCO Company',
    content: 'Certified ESCO Company by Bureau of Energy Efficiency, Government of India',
  },
  {
    img: '/asset/Awards106.webp',
    heading:'Enlisted by NABARD',
    content: 'Enlisted by NABARD for the capital subsidy scheme, for Agriculture Solar Pumps',
  },
  {
    img: '/asset/Awards107.webp',
    heading:'SP-28 rating by CRISIL',
    content: 'Obtained "SP-28" rating by CRISIL, for the high performance and financial strength for solar projects.',
  },
  {
    img: '/asset/Awards108.webp',
    heading:'Certified products with CE marketing',
    content: 'Certified products with CE marketing. Tested and approved products by many NABAL Laboratories like NISE, ERDA, TUV etc.',
  },

  {
    img: '/asset/Awards110.webp',
    heading:'In-house R&D team',
    content: ' Established in-house R&D team for the next gen technology development and possess many patented products',
  },
  {
    img: '/asset/Awards110.webp',
    heading:' Own Tailor made ERP',
    content: ' Build and Implemented Own Tailor made ERP for all processes and Project Management',
  },


];
const Recognition = () => {
  return (
    <div className={"my-20 space-y-16 flex flex-col justify-center items-center"}>
       <div className='flex flex-col justify-center items-center gap-[0.7rem] w-[90%]'>

         <p className='font-semibold xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-titilium text-center' >
                Our Journey of Honoring Excellence
         </p>
            </div>

    <div className="container mx-auto px-4 py-8">
      <div className="grid xsPhone:grid-cols-1 smTablet:grid-cols-2 smLaptop:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div key={index} className="bg-transparent  rounded-lg overflow-hidden shadow-md">
            {/* Update img to Image and set width/height */}
            <Image
              src={item.img}
              alt={`Image ${index + 1}`}
              width={500} // Set the desired width
              height={300} // Set the desired height
              objectFit="cover" // Ensure the image covers the space properly
              className="w-full h-48 object-contain bg-gray-100 "
            />
           <div className={"p-6 space-y-4"}>
            <div className=" font-titilium font-semibold xsPhone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,3vw)] smLaptop:text-[min(2.5vh,2.5vw)]">
              <p>{item.heading}</p>
            </div>
            <div className=" font-titilium font-extralight">
              <p>{item.content}</p>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Recognition;
