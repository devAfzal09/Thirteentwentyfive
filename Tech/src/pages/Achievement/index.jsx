import React, { useEffect, useRef, useState } from "react";

// Dummy data
const achievements = [
  { number: 45, suffix: "+", label: "Projects Delivered" },
  { number: 10, prefix: "$", suffix: "M+", label: "Client Value Generated" },
  { number: 35, suffix: "+", label: "Expert Team Members" },
  { number: 6, suffix: "+", label: "Years of Excellence" },
];

export default function Achievement() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Trigger animation when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 
                        bg-gray-50/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 
                        shadow-xl p-10 md:p-14 text-center">

          {achievements.map((item, index) => (
            <CounterItem
              key={index}
              target={item.number}
              prefix={item.prefix || ""}
              suffix={item.suffix || ""}
              label={item.label}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// CountUp Animation Component
function CounterItem({ target, prefix = "", suffix = "", label, inView }) {
  const [count, setCount] = useState(0);
  const duration = 2.5; // seconds
  const frameRate = 60;
  const totalFrames = duration * frameRate;

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const increment = target / totalFrames;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.min(Math.round(target * progress), target);

      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [inView, target, totalFrames]);

  return (
    <div className="group">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight
                     group-hover:scale-110 transition-transform duration-300">
        {prefix}
        {count}
        {suffix}
      </h3>
      <p className="mt-3 text-gray-600 text-sm md:text-base font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
}