import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { sliderArr, serviceArr, clientArr } from "@/utils/Home";
import Image from "next/image";
import { cmd } from "@/assests/Home";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

// Vision, Mission & Core Values data
const companyValues = {
  vision: "To be a globally recognized leader in sustainable infrastructure solutions, driving progress through innovation and excellence.",
  mission: "To deliver exceptional value to our clients through quality construction, timely execution, and sustainable practices while fostering a culture of safety, integrity, and continuous improvement.",
  coreValues: [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, continuously improving our processes and outcomes."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to meet evolving challenges."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices that benefit communities and future generations."
    },
    {
      title: "Collaboration",
      description: "We work together with clients, partners, and teams to achieve shared success."
    }
  ]
};

// Additional sections data
const statsData = [
  { number: "500+", label: "Projects Completed" },
  { number: "25+", label: "Years of Experience" },
  { number: "1000+", label: "Happy Clients" },
  { number: "50+", label: "Expert Team Members" }
];

const additionalServices = [
  {
    title: "Project Management",
    description: "End-to-end project management services ensuring timely and within-budget completion.",
    icon: "📊"
  },
  {
    title: "Consulting",
    description: "Expert consulting services to help you make informed decisions about your projects.",
    icon: "💼"
  },
  {
    title: "Maintenance",
    description: "Comprehensive maintenance services to keep your infrastructure in optimal condition.",
    icon: "🔧"
  }
];

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const router = useRouter();

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <section className="w-full h-full overflow-hidden">
        <Slider {...settings}>
          {sliderArr.map((item, index) => (
            <div key={index} className="relative w-full lg:h-screen h-96">
              <img
                src={item.img.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                <div
                  className="main-container text-left text-white"
                  data-aos="flip-up"
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold mb-4 mt-3">
                    {item.title}
                  </h1>
                  <p className="font-semibold md:text-lg leading-loose mb-6 w-full sm:w-2/3 md:w-1/2">
                    {item.paragraph}
                  </p>
                  <Link href="/services">
                    <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

<section className="w-full py-16 md:py-24 bg-gray-50 main-container">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title with decorative element */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
        About Us
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-600 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Delivering excellence in industrial solutions across India
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Text Content */}
      <div className="space-y-6">

        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-bold text-green-600">TOPFRONT</span>, a proud
          vertical of the prestigious{" "}
          <span className="font-semibold text-gray-900">UTKAL GROUP</span> with a net worth of{" "}
          <span className="font-semibold text-gray-900">₹12 billion</span>, is a trusted leader
          in delivering world-class industrial solutions across India. Under
          the visionary leadership of our Managing Director,{" "}
          <span className="font-semibold text-gray-900">Mr. Suresh Mishra</span>, we
          combine technology, safety, and operational excellence to provide
          reliable, efficient, and sustainable results.
        </p>



        <p className="text-lg text-gray-700 leading-relaxed">
          With a strong national presence, we specialize in{" "}
          <span className="font-semibold text-gray-900">
            Operations & Maintenance (O&M)
          </span>{" "}
          for steel plants, power plants, cement plants, refineries,
          aluminum plants, refractory units, and more.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Beyond O&M, our expertise extends to{" "}
          <span className="font-semibold text-gray-900">
            Fabrication & Erection, Plant & Equipment Commissioning,
            Refurbishment of Old Plants, Shutdown Maintenance, and Technical
            Audits
          </span>.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          We also excel in{" "}
          <span className="font-semibold text-gray-900">Manpower Management</span>,
          offering recruitment, staffing, HR outsourcing (payroll &
          compliance), talent development, performance management, and
          employee engagement. Our success is built on hard work, innovation
          and long-term partnerships — ensuring measurable outcomes while
          maintaining the highest standards of safety and quality.
        </p>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 gap-6 pt-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">12+</p>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">500+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
        </div>
      </div>

      {/* Director Profile */}
      <div className="flex flex-col items-center lg:items-end">
        <div className="relative">
          <div className="w-72 h-72 relative rounded-lg overflow-hidden">
            <Image
              src={cmd.src} // Replace with actual image path
              alt="Managing Director Mr. Suresh Mishra"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-green-600 rounded-lg"></div>
          <div className="absolute top-4 -left-4 bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium shadow-sm">
            Leadership
          </div>
        </div>
        
        <div className="text-center mt-8 bg-white p-6 rounded-lg shadow-sm w-full max-w-md">
          <h3 className="text-2xl font-bold text-gray-900">
            Mr. Suresh Mishra
          </h3>
          <p className="text-blue-600 font-medium mb-4">Managing Director</p>
          <p className="text-gray-600 italic">
            Our commitment to excellence drives everything we do, ensuring our clients receive the highest quality service and solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* Vision, Mission & Core Values Section */}
      <section className="w-full py-16 main-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Vision, Mission & Values</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">{companyValues.vision}</p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg shadow-md" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">{companyValues.mission}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="main-container">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
      <div className="w-24 h-1 bg-green-500 mx-auto"></div>
      <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
        We provide comprehensive solutions tailored to meet your specific requirements with excellence and precision.
      </p>
    </div>
    
    {/* Card Style Services Slider */}
    <div className="relative">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4000}
        arrows={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            }
          }
        ]}
        className="services-card-slider"
      >
        {serviceArr.map((service, index) => (
          <div key={service.id} className="px-3 outline-none h-full">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Image Container - Fixed Height */}
              <div className="overflow-hidden h-48">
                <img
                  src={service.img.src}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Content Container - Flexible but consistent */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-green-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>

                {/* Bullet Points (limited to 3) */}
                <ul className="text-gray-700 space-y-2 mb-6 flex-grow">
                  {service.description.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Button - Fixed at bottom */}
                <button
                  className="text-center text-green-600 font-semibold py-2 border border-green-600 rounded-full transition-all duration-300 hover:bg-green-600 hover:text-white mt-auto"
                  onClick={() => router.push('/services')}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
    {/* View All Button */}
    <div className="text-center mt-16">
      <button 
        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
        onClick={() => router.push('/services')}
      >
        View All Services
      </button>
    </div>

    {/* Custom Slider Styles */}
    <style jsx global>{`
      .services-card-slider .slick-list {
        margin: 0 -12px;
      }
      .services-card-slider .slick-slide > div {
        height: 100%;
      }
      .services-card-slider .slick-dots {
        bottom: -40px;
      }
      .services-card-slider .slick-dots li button:before {
        font-size: 12px;
        color: #cbd5e0;
      }
      .services-card-slider .slick-dots li.slick-active button:before {
        color: #10b981;
      }
      .services-card-slider .slick-prev,
      .services-card-slider .slick-next {
        width: 40px;
        height: 40px;
        z-index: 10;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      .services-card-slider .slick-prev:hover,
      .services-card-slider .slick-next:hover {
        background: #10b981;
      }
      .services-card-slider .slick-prev {
        left: -20px;
      }
      .services-card-slider .slick-next {
        right: -20px;
      }
      .services-card-slider .slick-prev:before,
      .services-card-slider .slick-next:before {
        color: #4b5563;
        font-size: 18px;
      }
      .services-card-slider .slick-prev:hover:before,
      .services-card-slider .slick-next:hover:before {
        color: white;
      }
      
      @media (max-width: 640px) {
        .services-card-slider .slick-prev {
          left: -10px;
        }
        .services-card-slider .slick-next {
          right: -10px;
        }
      }
    `}</style>
  </div>
</section>

      {/* Stats Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="main-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Additional Services Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="main-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Additional Services</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a comprehensive range of services to meet all your infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-16">
        <div className="main-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are proud to have worked with some of the most respected names in the industry.
            </p>
          </div>
          
          <div className="overflow-hidden mb-12">
            <Slider {...{
              infinite: true,
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              speed: 1000,
              autoplaySpeed: 4000,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ],
            }}>
              {clientArr.map((client) => (
                <div key={client.id} className="flex justify-center px-4">
                  <img 
                    src={client.img.src} 
                    alt={`client-${client.id}`} 
                    className="w-32 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-green-600 py-16">
        <div className="main-container text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className='w-full h-[70vh] main-container p-6 my-12'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin" 
          className='w-full h-full rounded-lg shadow-md'  
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}