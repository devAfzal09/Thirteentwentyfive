import {
  ArtificialIntelligence02Icon,
  StackStarIcon,
  BitcoinGraphIcon,
} from "hugeicons-react";

export default function WhyChooseUs() {
  const items = [
    {
      id: 1,
      icon: (
        <ArtificialIntelligence02Icon
          size={40}
          strokeWidth={1.5}
          className="text-black"
        />
      ),
      title: "AI-First Innovation",
      description:
        "We don't just build software; we create intelligent solutions that learn, adapt, and evolve. Our deep expertise in AI and machine learning helps your business stay future-ready.",
    },
    {
      id: 2,
      icon: (
        <StackStarIcon
          size={40}
          strokeWidth={1.5}
          className="text-black"
        />
      ),
      title: "End-to-End Partnership",
      description:
        "From concept to deployment and beyond, we provide comprehensive support across the entire development lifecycle.",
    },
    {
      id: 3,
      icon: (
        <BitcoinGraphIcon 
          size={40}
          strokeWidth={1.5}
          className="text-black"
        />
      ),
      title: "Proven Track Record",
      description:
        "With 45+ successful projects across industries, our experienced team delivers measurable and long-lasting results.",
    },
  ];

  return (
    <div className="max-full mx-auto px-6 py-20">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Why Choose Us
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 shadow flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            <h2 className="text-xl font-bold text-center mt-6">{item.title}</h2>
            <p className="text-gray-600 text-center mt-4 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
