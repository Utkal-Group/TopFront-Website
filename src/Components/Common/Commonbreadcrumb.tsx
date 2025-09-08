import React from "react";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useRouter } from 'next/router';

type Prop = {
  data: {
    cont1: string;
    // cont2: string;
  };
  image: string;
};

export default function Commonbreacrumb({ data, image }: Prop) {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const router = useRouter();
  return (
    <section className="w-full h-[600px]  flex flex-col justify-center items-center relative !overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-28 py-12 md:py-20 text-start" data-aos="fade-left">
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-sans leading-tight" >
            {data.cont1}
          </h1>
          {/* <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-red-500 mt-3" onClick={() => router.push('/')}>
            {data.cont2}
          </h2> */}
        </div>
      </div>
    </section>
  );
}
