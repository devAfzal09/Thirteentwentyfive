import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";
import testi1 from "../../assets/testi1.jpg";

const testimonials = [
  {
    id: 1,
    image: testi1,
    ceo: "CEO of XYZ company",
    name: "Kevin Martin",
    text: "Schedules that work for you. Our visual designer lets you quickly...",
    stars: 5,
  },
  {
    id: 2,
    image: testi1,
    ceo: "CEO of XYZ company",
    name: "Kevin Martin",
    text: "Health screenings for seniors. Our visual designer lets you quickly...",
    stars: 5,
  },
  {
    id: 3,
    image: testi1,
    ceo: "CEO of XYZ company",
    name: "Kevin Martin",
    text: "Seniors stay independent. Our visual designer lets you quickly...",
    stars: 5,
  },
  {
    id: 4,
    image: testi1,
    ceo: "CEO of XYZ company",
    name: "Kevin Martin",
    text: "Great support and easy appointments...",
    stars: 5,
  },
  {
    id: 5,
    image: testi1,
    ceo: "CEO of XYZ company",
    name: "Kevin Martin",
    text: "Very reliable and trusted service...",
    stars: 5,
  },
  {
    id: 6,
    image: testi1,
    name: "Kevin Martin",
    text: "Amazing doctor experience and quick diagnosis...",
    stars: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const gap = 24; // px gap between cards

  // Update cardsPerView on window resize
  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);       // mobile
      else if (width < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3);                   // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Reset index if necessary when cardsPerView changes
  useEffect(() => {
    const maxIndex = testimonials.length - cardsPerView;
    if (index > maxIndex) setIndex(0);
  }, [cardsPerView]);

  // Calculate card width including gap
  useEffect(() => {
    if (containerRef.current) {
      const totalGap = gap * (cardsPerView - 1);
      const width = (containerRef.current.offsetWidth - totalGap) / cardsPerView;
      setCardWidth(width);
    }
  }, [cardsPerView, containerRef.current]);

  const maxIndex = testimonials.length - cardsPerView;

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <div className="w-full bg-[#D8EFFF] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10">

          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-full sm:max-w-[80%] lg:max-w-[60%] mx-auto lg:mx-0">
              Our team analyzes your data to deliver clear, actionable insights that elevate your digital performance.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-end gap-3">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`p-2 sm:p-3 rounded-full border bg-white shadow transition
                ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`}
            >
              <ArrowLeft01Icon size={18} />
            </button>

            <button
              onClick={handleNext}
              disabled={index === maxIndex}
              className={`p-2 sm:p-3 rounded-full border bg-white shadow transition
                ${index === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`}
            >
              <ArrowRight01Icon size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-all duration-700"
            style={{
              transform: `translateX(-${index * (cardWidth + gap)}px)`,
              gap: `${gap}px`
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-6 flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover mb-8" />
                <h4 className="font-semibold text-md mb-2">{item.ceo}</h4>
                <p className="text-gray-700 mb-4">{item.text}</p>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-yellow-400 mt-1 text-lg">
                    {"★".repeat(item.stars)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
