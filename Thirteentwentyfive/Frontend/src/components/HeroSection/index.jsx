import React, { useEffect, useState } from 'react'
import Iridescence from '../../ReactbitzComponent/Iridescence'
import SplitText from '../../ReactbitzComponent/SplitText'

export default function HeroSection() {
   
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      {/* Hero Content */}
      <div className="w-full h-full flex flex-col items-center justify-end text-center py-15">
        <SplitText
          text={"Empowering Your Vision with Scalable AI, Web Development, and App Development"}
          className="text-4xl md:text-6xl font-semibold text-center px-4"
          delay={50}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl">
          We blend AI, software engineering, and automation with real industry insight to deliver scalable, future-ready solutions while partnering with you for long-term success.
        </p>

      </div>

    </div>
  )
}
