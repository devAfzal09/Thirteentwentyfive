import {
  Agreement02Icon,
  AnalyticsUpIcon,
  BulbChargingIcon,
  ChipIcon
} from "hugeicons-react";
import { Spinner } from "@heroui/react";
import { useEffect, useState } from "react";


export default function About() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

   if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Spinner size="lg" color="primary" label="Loading..." />
      </div>
    );
  }

  const teamsdata = [
      {
        name: "Ashley Spencer",
        role: "Founder",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Teresa Mendes",
        role: "Trip Leader",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Samuel Owen",
        role: "Trip Leader",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
      },
      {
        name: "Beatrice Hansen",
        role: "Trip Leader",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ]

  return (
    
    <div className="w-full mt-30">

{/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build modern digital solutions that help businesses grow,
            innovate, and stay ahead in a fast-moving tech world.
          </p>
        </div>
      {/* ===== HERO IMAGE ===== */}
      <div className="w-full px-6 py-6 ">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Tech Team"
          className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover rounded-2xl"
        />
      </div>

      {/* ===== ABOUT CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-5 py-16">

        

        {/* Who We Are */}
        <div className="w-full mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Who We Are
          </h3>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            At Demaze Technologies, we're more than just developers; we're digital
            transformation architects. We're a passionate team of 35+
            technologists, innovators, and strategic thinkers who believe in the
            power of AI and cutting-edge technology to reshape businesses.
            <br /><br />
            Founded with a vision to democratize advanced technology, we bridge
            the gap between complex technical possibilities and real business
            outcomes.
          </p>
        </div>

        {/* ===== CEO SECTION ===== */}
<div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-12">

  {/* CEO CARD 1 */}
  <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md">
    <img
      src="https://randomuser.me/api/portraits/men/75.jpg"
      alt="CEO"
      className="w-14 h-14 rounded-full object-cover"
    />

    <div>
      <h4 className="text-lg font-semibold text-blue-600">
        Founder Name
      </h4>
      <p className="text-sm text-gray-500">
        Founder & CEO
      </p>
    </div>
  </div>

  {/* CEO CARD 2 */}
  <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md">
    <img
      src="https://randomuser.me/api/portraits/men/65.jpg"
      alt="CEO"
      className="w-14 h-14 rounded-full object-cover"
    />

    <div>
      <h4 className="text-lg font-semibold text-blue-600">
        Co-Founder Name
      </h4>
      <p className="text-sm text-gray-500">
        Co-Founder & CEO
      </p>
    </div>
  </div>

</div>


{/* ===== OUR TEAM ===== */}
<div className="mt-20">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
      Our Team
    </h3>
    <p className="text-gray-500 text-sm sm:text-base">
      “People forget years and remember moments”
    </p>
  </div>

  {/* Team Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Team Card */}
    {teamsdata.map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg p-6 text-center
        hover:-translate-y-2 transition-transform duration-300"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />

        <h4 className="font-semibold text-lg">
          {member.name}
        </h4>

        <p className="text-gray-500 text-sm">
          {member.role}
        </p>

        {/* Plus Button */}
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full
            border border-gray-300 text-gray-600 cursor-pointer
            hover:bg-black hover:text-white transition">
            +
          </div>
        </div>
      </div>
    ))}

  </div>
</div>

        {/* ===== WHAT INSPIRES US (UNCHANGED) ===== */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            What Inspires Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black shadow-lg">
                  <AnalyticsUpIcon size={22} color="white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Innovation at Our Core
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
                Turning ambitious ideas into powerful digital solutions that
                create real business impact.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black">
                  <Agreement02Icon size={22} color="white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Client Success Obsession
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
                We measure our success by the success of our clients and the
                results we help them achieve.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black shadow-lg">
                  <ChipIcon size={22} color="white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Technology for Good
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
                Building solutions that simplify processes and empower people
                through technology.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black shadow-lg">
                  <BulbChargingIcon size={22} color="white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Continuous Learning
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
                Constantly evolving our skills to stay ahead in a fast-changing
                tech landscape.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
