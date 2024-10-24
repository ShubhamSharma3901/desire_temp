// // Import React and Next.js specific hooks
// 'use client'
// import { useEffect } from 'react';
// // Import Swiper core and required modules

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Swiper from 'swiper';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const SwiperSlider = () => {
//   useEffect(() => {
//     // Register Swiper modules
//     Swiper.use([Autoplay, Pagination, Navigation]);

//     // Initialize Swiper instance
//     new Swiper('.progress-slide-carousel', {
//       loop: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       pagination: {
//         el: '.progress-slide-carousel .swiper-pagination',
//         type: 'progressbar',
//       },
//     });
//   }, []);

//   return (
//     <div className="w-full  relative">
//       <div className="swiper progress-slide-carousel swiper-container relative">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide">
//             <div className="bg-indigo-50 rounded-2xl h-screen flex justify-center items-center">
//               <span className="text-3xl font-semibold text-indigo-600">Slide 1</span>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="bg-indigo-50 rounded-2xl h-screen flex justify-center items-center">
//               <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="bg-indigo-50 rounded-2xl h-screen flex justify-center items-center">
//               <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
//             </div>
//           </div>
//         </div>
//         <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
//       </div>
//     </div>
//   );
// };

// export default SwiperSlider;

'use client';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SwiperSlider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'progressbar',
        }}
        className="progress-slide-carousel"
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-screen flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">Slide 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-screen flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-screen flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  );
};

export default SwiperSlider;
