import React, { useEffect, useState } from 'react'
import Iridescence from '../../ReactbitzComponent/Iridescence'
import SplitText from '../../ReactbitzComponent/SplitText'

export default function Home() {
   const [heroData, setHeroData] = useState(null)

   useEffect(() => {
    fetch("http://localhost:5000/api/home/hero")
      .then(res => res.json())
      .then(data => setHeroData(data))
      .catch(err => console.error(err))
  }, [])

  if (!heroData) return null;
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
          text={heroData.title}
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
          {heroData.description}
        </p>

      </div>

    </div>
  )
}
