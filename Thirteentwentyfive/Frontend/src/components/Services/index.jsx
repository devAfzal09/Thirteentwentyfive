import React from "react";
import { AiProgrammingIcon, ArtificialIntelligence04Icon, CloudIcon, MobileProgramming01Icon } from "hugeicons-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "AI Development",
      description: "We create intelligent AI-driven systems that automate processes and scale your business.",
      icon: <ArtificialIntelligence04Icon className="w-12 h-12 text-blue-500" />,
      tag: "AI & ML",
      bg: "#F9DFDF"
    },
    {
      id: 2,
      title: "Web Development",
      description: "High-performance websites built with modern frameworks for speed, security, and quality.",
      icon: <AiProgrammingIcon className="w-12 h-12 text-green-500" />,
      tag: "Web Apps",
      bg: "#CCE5CF"
    },
    {
      id: 3,
      title: "App Development",
      description: "Fast, smooth, and user-friendly mobile applications for Android & iOS.",
      icon: <MobileProgramming01Icon className="w-12 h-12 text-purple-500" />,
      tag: "Mobile App",
      bg: "#ABE0F0"
    },
    {
      id: 4,
      title: "Cloud",
      description: "Automate workflows, save time, reduce cost, and improve overall business efficiency.",
      icon: <CloudIcon className="w-12 h-12 text-pink-500" />,
      tag: "Automation",
      bg: "#F3E8DF"
    },
  ];

  return (
    <div className="w-full py-20 mb-5 bg-[#D8EFFF]">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item) => (
              <div
                key={item.id}
                // style={{ backgroundColor: item.bg }}
                className={`shadow-[0_10px_40px_rgba(0,0,0,0.20)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.30)] transition rounded-2xl p-6 flex flex-col items-center text-center`}
              >                
                <div className="mb-4">{item.icon}</div>
                
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <span className="mt-auto px-4 py-1 text-sm rounded-full shadow-md bg-gray-50">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        {/* </AnimatedContent> */}
      </div>
    </div>
  );
}
