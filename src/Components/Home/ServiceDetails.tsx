// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { serviceArr } from '@/utils/Home';
// import { useRouter } from 'next/router';

// export default function ServiceDetails() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);

//   const router = useRouter();

//   return (
//     <div className="mb-10 mt-10 main-container w-full bg-blue-50">
//       {serviceArr.map((service, index) => (
//         <div
//           key={service.id}
//           className={`flex flex-col md:flex-row md:items-center  p-4 md:p-6 gap-6 ${
//             index % 2 !== 0 ? 'md:flex-row-reverse' : ''
//           }`}
//           data-aos="flip-left"
//         >
//           {/* Image Container */}
//           <div
//             className="w-full md:w-1/2 "
//             data-aos="zoom-in"
//           >
//             <img
//               src={service.img.src}
//               alt={service.title}
//               className="w-full h-auto rounded-md"
//             />
//           </div>

//           {/* Content Container */}
//           <div
//             className="w-full md:w-1/2 space-y-4"
//             data-aos="fade-up"
//           >
//             <h2 className="text-2xl sm:text-2xl md:text-2xl text-red-700 font-serif mb-2 md:mb-4">
//               {service.title}
//             </h2>

//             {/* Bullet Points */}
//             <ul className="text-black font-bold list-disc list-inside space-y-2  ">
//               {service.description
//                 .split('.')
//                 .filter(Boolean)
//                 .map((point, index) => (
//                   <li key={index} className="text-lg">
//                     {point.trim()}.
//                   </li>
//                 ))}
//             </ul>

//             {/* Button */}
//             <button
//               className="mt-4 border hover:border-green-500 hover:bg-white hover:text-green-500 px-4 py-2 rounded-full bg-green-600 text-white transition"
//               onClick={() => router.push('/services')}
//             >
//               Know More
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { serviceArr } from '@/utils/Home';
import { useRouter } from 'next/router';

export default function ServiceDetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const router = useRouter();

  return (
    <div className=" lg:main-container mb-10 mt-10 w-full bg-blue-50">
      {serviceArr.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row items-center gap-6 p-4 md:p-6 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
          data-aos="flip-left"
        >
          {/* Image Container */}
          <div className="w-full md:w-1/2" data-aos="zoom-in">
            <img
              src={service.img.src}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 space-y-4" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl text-red-700 font-serif font-bold">
              {service.title}
            </h2>

            {/* Bullet Points */}
            <ul className="text-gray-800 font-normal list-disc list-inside space-y-2">
              {service.description.map((point, idx) => (
                <li key={idx} className="text-base sm:text-lg">
                  {point}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className="mt-4 border hover:border-green-500 hover:bg-white hover:text-green-500 px-6 py-3 rounded-full bg-green-600 text-white transition-all duration-300 ease-in-out"
              onClick={() => router.push('/services')}
            >
              Know More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
