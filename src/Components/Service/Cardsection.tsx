import Link from 'next/link';
import { servicesData } from '@/utils/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function Herosection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-12 lg:main-container bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="zoom-out-right"
        >
          {servicesData.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer w-full h-full">
                <img
                  src={service.image.src}
                  alt={service.title}
                  className="w-full h-48 sm:h-60 lg:h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
