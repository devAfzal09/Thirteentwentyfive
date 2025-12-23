import React, { useState } from "react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon
} from "hugeicons-react";
import testi1 from "../../assets/testi1.jpg"

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
  const [index, setIndex] = useState(0);

  const cardsPerView = 3;
  const maxIndex = testimonials.length - cardsPerView;

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <div className="w-full bg-[#D8EFFF] py-16">
      <div className="max-w-7xl mx-auto px-5 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>

          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-sm text-gray-400">Our team analyzes your data to deliver clear, actionable insights that elevate your digital performance.</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className={`p-2 rounded-full border bg-white shadow transition 
              ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`}
            >
              <ArrowLeft01Icon size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={index === maxIndex}
              className={`p-2 rounded-full border bg-white shadow transition 
              ${index === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`}
            >
              <ArrowRight01Icon size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-all duration-700"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-6 w-[30%] flex-shrink-0"
              >
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover mb-8"/>
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
