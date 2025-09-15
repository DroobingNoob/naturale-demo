import React from "react";
import { Truck, RefreshCw, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: <Truck size={32} className="text-brandTeal" />,
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery to every corner of India.",
  },
  {
    icon: <RefreshCw size={32} className="text-brandTeal" />,
    title: "7-Day Easy Returns",
    description: "Not satisfied? Return within 7 days, hassle-free.",
  },
  {
    icon: <Leaf size={32} className="text-brandTeal" />,
    title: "100% Natural & Nutritious",
    description: "Our makhana is clean, healthy, and preservative-free.",
  },
  {
    icon: <Users size={32} className="text-brandTeal" />,
    title: "Supporting Farmers",
    description: "Empowering 5000+ local farmers across India.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-brandGreenDark mb-8">
        Why Choose Naturale?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-[#f8efea] rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="mb-2">{feature.icon}</div>
            <h3 className="font-semibold text-base md:text-lg text-brandGreenDark mb-1 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
