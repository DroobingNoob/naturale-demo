import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Riya Sharma",
    review:
      "Naturale Makhana has become my go-to healthy snack. Light, crunchy and guilt-free. Absolutely love it!",
  },
  {
    name: "Aman Verma",
    review:
      "The Pop Makhana is so tasty! I replaced my chips with this and I feel so much healthier.",
  },
  {
    name: "Priya Nair",
    review:
      "Amazing quality and freshness. The Everyday Makhana is perfect for evening tea-time.",
  },
  {
    name: "Rohit Agarwal",
    review:
      "I bought the Global Makhana pack — truly unique flavors! My family loved it.",
  },
  {
    name: "Sneha Kapoor",
    review:
      "Crispy, delicious, and packed with nutrition. Naturale has nailed it!",
  },
  {
    name: "Arjun Malhotra",
    review:
      "Best makhana brand I’ve tried. Clean packaging, great taste, and super healthy.",
  },
];

const TestimonialsCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="px-4 md:px-10 py-16 bg-[#f8efea] relative">
      <h2 className="text-3xl md:text-4xl font-bold text-brandGreenDark text-center mb-12">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1.2}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance}
        className="max-w-6xl mx-auto pb-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
              <Quote className="text-brandTeal w-8 h-8 mb-4" />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {t.review}
              </p>
              <span className="mt-auto text-brandGreenDark font-semibold text-sm md:text-base">
                — {t.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-brandTeal p-2 rounded-full shadow-sm hover:bg-brandTeal hover:text-white transition z-10"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        ref={nextRef}
        aria-label="Next slide"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-brandTeal p-2 rounded-full shadow-sm hover:bg-brandTeal hover:text-white transition z-10"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
};

export default TestimonialsCarousel;
