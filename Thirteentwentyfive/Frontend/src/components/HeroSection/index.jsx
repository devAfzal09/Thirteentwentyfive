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
          text={"Your Strategic Partner in AI & Custom Technology Engineering for Business Growth"}
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
          We combine AI, custom software engineering, and automation with deep industry expertise to build scalable, sustainable technology solutions that drive growth and long-term success
        </p>

      </div>

    </div>
  )
}
