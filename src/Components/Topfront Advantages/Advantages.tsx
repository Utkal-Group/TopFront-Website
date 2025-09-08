import { slider1 } from "@/assests/Home";

export default function Advantages() {
  const advantages = [
    "With years of industry experience, Topfront brings a deep understanding of market dynamics and business challenges.",
    "We don’t believe in one-size-fits-all solutions. At Topfront, we take the time to understand your goals, challenges, and vision.",
    "Staying ahead of the curve is crucial in today’s fast-paced business environment. Topfront integrates cutting-edge technology into every aspect of our services.",
    "As your business grows and evolves, Topfront scales with you. Our solutions are flexible and adaptable, able to meet both current and future demands.",
    "At Topfront, we understand the importance of maximizing value. Our solutions are designed to optimize resources, reduce inefficiencies, and cut unnecessary costs.",
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto main-container space-y-24">
      {/* Section 1: Topfront Advantage */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">
          TOPFRONT ADVANTAGE
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Topfront stands out as a leading partner for your business
              solutions due to our unique blend of expertise, innovation, and
              personalized service. We are committed to providing comprehensive,
              flexible, and scalable solutions that cater to the diverse needs
              of businesses across industries.
            </p>
            <div>
              <h3 className="text-green-600 font-semibold mb-4">
                We ensure that our strengths translate to advantages for our
                clients:
              </h3>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <img
              src={slider1.src}
              alt="Topfront Advantage"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Why Choose Us */}
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose <span className="text-green-600">Topfront?</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Choosing Topfront means partnering with a team that puts your
            success first. We combine proven strategies with innovative
            solutions tailored to your business goals, ensuring impactful and
            measurable results.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✔</span>
              <span className="text-gray-700">
                Proven track record of delivering success stories across
                industries.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✔</span>
              <span className="text-gray-700">
                A client-centric approach that focuses on long-term partnerships.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">✔</span>
              <span className="text-gray-700">
                Innovative mindset that ensures you stay ahead of competitors.
              </span>
            </li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/666e48177717893.64db94428f0c4.jpg"
            alt="Why Choose Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 3: Our Approach */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-green-600">Approach</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Topfront, we don’t just provide services—we partner with you to
            create sustainable growth strategies. Our approach is collaborative,
            data-driven, and flexible to ensure that your business achieves its
            full potential.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">🚀</span>
              <span className="text-gray-700">
                Research-driven strategies customized for your industry.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">🚀</span>
              <span className="text-gray-700">
                Transparent communication and collaborative teamwork.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">🚀</span>
              <span className="text-gray-700">
                Scalable solutions built to adapt to your future growth.
              </span>
            </li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 relative">
          <img
            src="https://www.process26.com/sites/default/files/Our-Process-diagram.png"
            alt="Our Approach"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
