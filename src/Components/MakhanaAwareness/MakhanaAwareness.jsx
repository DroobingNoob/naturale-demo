import React from "react";
import { Leaf, HeartPulse, Activity, ShieldCheck } from "lucide-react";

const MakhanaAwareness = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#f8efea] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
          {/* Left: Text */}
          <div className="order-2 sm:order-1 text-center sm:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose <span className="text-brandGreenDark">Makhana?</span>
            </h2>

            {/* Readable text blocks */}
            <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Treasured in <strong>Ayurveda</strong> for centuries,{" "}
                <strong>makhana (fox nuts)</strong> is being rediscovered as a
                healthier alternative to fried and processed snacks.
              </p>
              <p>
                Light, crunchy, and nutrient-rich — it’s the snack your body
                will thank you for.
              </p>
              <p>
                Packed with{" "}
                <strong>
                  antioxidants, essential minerals, and plant-based protein
                </strong>
                , makhana fits effortlessly into your modern lifestyle.
              </p>
              <p>
                Its <strong>low-calorie, gluten-free profile</strong> makes it
                perfect for all ages, supporting bone strength, heart health,
                and metabolism.
              </p>
              <p>
                With high fiber content, it aids digestion and keeps you fuller
                for longer — an ideal companion for weight management.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 sm:order-2 flex justify-center">
            <img
              src="/makhana-bowl1.webp"
              alt="Bowl of Makhana"
              className="rounded-2xl shadow-lg w-3/4 sm:w-full max-w-sm sm:max-w-md object-cover"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 flex overflow-x-auto snap-x snap-mandatory sm:overflow-visible scrollbar-hide">
          {[
            {
              icon: (
                <Leaf size={28} className="mx-auto text-brandGreenDark mb-3" />
              ),
              title: "100% Natural",
              text: "Grown without chemicals, gluten-free, and completely plant-based.",
            },
            {
              icon: (
                <HeartPulse
                  size={28}
                  className="mx-auto text-brandGreenDark mb-3"
                />
              ),
              title: "Heart-Healthy",
              text: "Low in cholesterol and rich in magnesium, supporting a healthy heart.",
            },
            {
              icon: (
                <Activity
                  size={28}
                  className="mx-auto text-brandGreenDark mb-3"
                />
              ),
              title: "Energy Boost",
              text: "A protein-rich snack that fuels your day without heavy calories.",
            },
            {
              icon: (
                <ShieldCheck
                  size={28}
                  className="mx-auto text-brandGreenDark mb-3"
                />
              ),
              title: "Immunity",
              text: "Full of antioxidants that fight free radicals & support health.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="min-w-[70%] sm:min-w-0 snap-center bg-white shadow-md rounded-xl p-4 sm:p-6 text-center mx-2 sm:mx-0"
            >
              {item.icon}
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
            With every bite of{" "}
            <span className="text-brandGreenDark">makhana</span>, you choose
            wellness, taste, and tradition — a{" "}
            <strong>guilt-free superfood</strong> your family can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MakhanaAwareness;
