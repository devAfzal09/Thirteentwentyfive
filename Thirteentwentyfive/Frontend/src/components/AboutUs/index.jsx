import { Agreement02Icon, AnalyticsUpIcon, BulbChargingIcon, ChipIcon } from "hugeicons-react";
import React from "react";

export default function AboutUs() {
  return (
    <div className="w-full py-16">
      <div className="text-center mb-8 sm:mb-12 lg:mb-14 px-4">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          About Our Company
        </h2>

        <p
          className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
        >
          We build modern digital solutions that help businesses grow,
          innovate, and stay ahead in a fast-moving tech world.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Tech Team"
            className="w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[450px] object-cover rounded-2xl shadow-lg"        
          />
        </div>

        <div className="w-full lg:w-[70%]">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
            Who We Are
          </h3>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">     
            At ThirteenTwentyFive Tech, we don’t just build products — we engineer intelligent systems tailored for your business goals. From AI-driven automation to robust software platforms, we partner with you to transform ideas into real business impact.
            <br /><br />
            Founded with a vision to democratize advanced technology, we bridge the
            gap between complex technical possibilities and real business outcomes.
          </p>

          <div className="mt-6 sm:mt-8 flex justify-start">
            <button
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.20)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.30)]
                transition
              "
            >
              See More
            </button>
          </div>

        </div>
      </div>


      <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
          What Inspires Us
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black shadow-lg">
                <AnalyticsUpIcon size={20} className="sm:size-[24px]" color="white" strokeWidth={1.8} />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold">
                Innovation at Our Core
              </h4>
            </div>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-4">
              Turning ambitious ideas into powerful digital solutions that
              create real business impact.
            </p>
          </div>

          <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black">
                <Agreement02Icon size={20} className="sm:size-[24px]" color="white" strokeWidth={1.8} />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold">
                Client Success Obsession
              </h4>
            </div>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4">
              We measure our success by the success of our clients and the
              results we help them achieve.
            </p>
          </div>

          <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black shadow-lg">
                <ChipIcon size={20} className="sm:size-[24px]" color="white" strokeWidth={1.8} />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold">
                Technology for Good
              </h4>
            </div>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4">
              Building solutions that simplify processes and empower people
              through technology.
            </p>
          </div>

          <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)] bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black shadow-lg">
                <BulbChargingIcon size={20} className="sm:size-[24px]" color="white" strokeWidth={1.8} />
              </div>

              <h4 className="text-lg sm:text-xl font-semibold">
                Continuous Learning
              </h4>
            </div>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4">
              Constantly evolving our skills to stay ahead in a fast-changing
              tech landscape.
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
}
