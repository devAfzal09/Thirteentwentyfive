import React from 'react'
import Iridescence from '../../ReactbitzComponent/Iridescence'

export default function Home() {
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
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          Empowering Your Vision with Scalable AI, Web Development, and App Development
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl">
          We blend AI, software engineering, and automation with real industry insight
          to deliver scalable, future-ready solutions while partnering with you for long-term success.
        </p>

      </div>

    </div>
  )
}
