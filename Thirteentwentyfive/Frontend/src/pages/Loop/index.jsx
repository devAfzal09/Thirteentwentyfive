import React from "react";
import LogoLoop from "../../ReactbitzComponent/LogoLoop";

export default function Loop() {
  const textItems = Array(1).fill({
    title: "text",
    node: (
      <span className="text-[22px] font-medium text-black opacity-90">
        Let’s connect and build smarter, faster, and stronger — together.
      </span>
    )
  });

  return (
    <div className="w-full py-6 shadow-md bg-white my-18">
      <LogoLoop
        logos={textItems}
        speed={40}
        direction="left"
        gap={120}            // Space between repeated text
        logoHeight={0}       // This removes default icon sizing
        fadeOut
        fadeOutColor="#ffffff"
        hoverSpeed={0}       // stop on hover (optional)
        scaleOnHover={false}
        renderItem={(item) => item.node}
      />
    </div>
  );
}
