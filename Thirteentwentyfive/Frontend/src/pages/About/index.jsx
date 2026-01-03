// import {
//   Agreement02Icon,
//   AnalyticsUpIcon,
//   BulbChargingIcon,
//   ChipIcon
// } from "hugeicons-react";
// import { Spinner } from "@heroui/react";
// import { useEffect, useState } from "react";


// export default function About() {
//    const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//    if (loading) {
//     return (
//       <div className="w-full min-h-screen flex items-center justify-center">
//         <Spinner size="lg" color="primary" label="Loading..." />
//       </div>
//     );
//   }

//   const teamsdata = [
//       {
//         name: "Ashley Spencer",
//         role: "Founder",
//         image: "https://randomuser.me/api/portraits/men/32.jpg",
//       },
//       {
//         name: "Teresa Mendes",
//         role: "Trip Leader",
//         image: "https://randomuser.me/api/portraits/women/44.jpg",
//       },
//       {
//         name: "Samuel Owen",
//         role: "Trip Leader",
//         image: "https://randomuser.me/api/portraits/men/41.jpg",
//       },
//       {
//         name: "Beatrice Hansen",
//         role: "Trip Leader",
//         image: "https://randomuser.me/api/portraits/women/65.jpg",
//       },
//     ]

//   return (
    
//     <div className="w-full mt-30">

// {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             About Our Company
//           </h2>

//           <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             We build modern digital solutions that help businesses grow,
//             innovate, and stay ahead in a fast-moving tech world.
//           </p>
//         </div>
//       {/* ===== HERO IMAGE ===== */}
//       <div className="w-full px-6 py-6 ">
//         <img
//           src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//           alt="Tech Team"
//           className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover rounded-2xl"
//         />
//       </div>

//       {/* ===== ABOUT CONTENT ===== */}
//       <div className="max-w-6xl mx-auto px-5 py-16">

        

//         {/* Who We Are */}
//         <div className="w-full mb-16">
//           <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
//             Who We Are
//           </h3>

//           <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
//             At Demaze Technologies, we're more than just developers; we're digital
//             transformation architects. We're a passionate team of 35+
//             technologists, innovators, and strategic thinkers who believe in the
//             power of AI and cutting-edge technology to reshape businesses.
//             <br /><br />
//             Founded with a vision to democratize advanced technology, we bridge
//             the gap between complex technical possibilities and real business
//             outcomes.
//           </p>
//         </div>

//         {/* ===== CEO SECTION ===== */}
// <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-12">

//   {/* CEO CARD 1 */}
//   <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md">
//     <img
//       src="https://randomuser.me/api/portraits/men/75.jpg"
//       alt="CEO"
//       className="w-14 h-14 rounded-full object-cover"
//     />

//     <div>
//       <h4 className="text-lg font-semibold text-blue-600">
//         Founder Name
//       </h4>
//       <p className="text-sm text-gray-500">
//         Founder & CEO
//       </p>
//     </div>
//   </div>

//   {/* CEO CARD 2 */}
//   <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md">
//     <img
//       src="https://randomuser.me/api/portraits/men/65.jpg"
//       alt="CEO"
//       className="w-14 h-14 rounded-full object-cover"
//     />

//     <div>
//       <h4 className="text-lg font-semibold text-blue-600">
//         Co-Founder Name
//       </h4>
//       <p className="text-sm text-gray-500">
//         Co-Founder & CEO
//       </p>
//     </div>
//   </div>

// </div>


// {/* ===== OUR TEAM ===== */}
// <div className="mt-20">
//   {/* Heading */}
//   <div className="text-center mb-12">
//     <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
//       Our Team
//     </h3>
//     <p className="text-gray-500 text-sm sm:text-base">
//       “People forget years and remember moments”
//     </p>
//   </div>

//   {/* Team Grid */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
//     {/* Team Card */}
//     {teamsdata.map((member, index) => (
//       <div
//         key={index}
//         className="bg-white rounded-2xl shadow-lg p-6 text-center
//         hover:-translate-y-2 transition-transform duration-300"
//       >
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
//         />

//         <h4 className="font-semibold text-lg">
//           {member.name}
//         </h4>

//         <p className="text-gray-500 text-sm">
//           {member.role}
//         </p>
 
//         <div className="mt-4 flex justify-center">
//           <div className="w-8 h-8 flex items-center justify-center rounded-full
//             border border-gray-300 text-gray-600 cursor-pointer
//             hover:bg-black hover:text-white transition">
//             +
//           </div>
//         </div>
//       </div>
//     ))}

//   </div>
// </div>

//         <div className="mt-12">
//           <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
//             What Inspires Us
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//             <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
//               bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 rounded-lg bg-black shadow-lg">
//                   <AnalyticsUpIcon size={22} color="white" />
//                 </div>
//                 <h4 className="text-lg sm:text-xl font-semibold">
//                   Innovation at Our Core
//                 </h4>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
//                 Turning ambitious ideas into powerful digital solutions that
//                 create real business impact.
//               </p>
//             </div>

//             <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
//               bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 rounded-lg bg-black">
//                   <Agreement02Icon size={22} color="white" />
//                 </div>
//                 <h4 className="text-lg sm:text-xl font-semibold">
//                   Client Success Obsession
//                 </h4>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
//                 We measure our success by the success of our clients and the
//                 results we help them achieve.
//               </p>
//             </div>

//             <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
//               bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 rounded-lg bg-black shadow-lg">
//                   <ChipIcon size={22} color="white" />
//                 </div>
//                 <h4 className="text-lg sm:text-xl font-semibold">
//                   Technology for Good
//                 </h4>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
//                 Building solutions that simplify processes and empower people
//                 through technology.
//               </p>
//             </div>

//             <div className="rounded-2xl p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]
//               bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 rounded-lg bg-black shadow-lg">
//                   <BulbChargingIcon size={22} color="white" />
//                 </div>
//                 <h4 className="text-lg sm:text-xl font-semibold">
//                   Continuous Learning
//                 </h4>
//               </div>
//               <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
//                 Constantly evolving our skills to stay ahead in a fast-changing
//                 tech landscape.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import {
  Agreement02Icon,
  AnalyticsUpIcon,
  BulbChargingIcon,
  ChipIcon
} from "hugeicons-react";
import { Spinner } from "@heroui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    rest: { scale: 1, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
    hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 pt-20 via-purple-50 to-pink-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6">
          About Our Company
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We build modern digital solutions that help businesses grow, innovate, and stay ahead in a fast-moving tech world.
        </p>
      </motion.div>

      {/* Hero Image with subtle animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full px-6 mb-20"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Tech Team"
            className="w-full h-[300px] sm:h-[450px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </motion.div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Who We Are */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <motion.h3 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Who We Are
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
            At Demaze Technologies, we're more than just developers; we're digital transformation architects. We're a passionate team of 35+ technologists, innovators, and strategic thinkers who believe in the power of AI and cutting-edge technology to reshape businesses.
            <br /><br />
            Founded with a vision to democratize advanced technology, we bridge the gap between complex technical possibilities and real business outcomes.
          </motion.p>
        </motion.section>

        {/* Leadership Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-6 bg-white/80 backdrop-blur-md px-8 py-6 rounded-3xl shadow-xl border border-white/50"
            >
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Founder"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-200"
              />
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">Founder Name</h4>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-6 bg-white/80 backdrop-blur-md px-8 py-6 rounded-3xl shadow-xl border border-white/50"
            >
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Co-Founder"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-purple-200"
              />
              <div>
                <h4 className="text-2xl font-bold text-purple-600">Co-Founder Name</h4>
                <p className="text-gray-600">Co-Founder & CEO</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Team */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-xl text-gray-600 italic">“People forget years and remember moments”</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {teamsdata.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50"
              >
                <div className="p-8 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-6 ring-8 ring-gradient-to-br from-indigo-100 to-purple-100"
                  />
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-gray-600 mt-2">{member.role}</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* What Inspires Us */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <motion.h3 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            What Inspires Us
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: <AnalyticsUpIcon size={28} color="white" />, title: "Innovation at Our Core", desc: "Turning ambitious ideas into powerful digital solutions that create real business impact.", bg: "bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]" },
              { icon: <Agreement02Icon size={28} color="white" />, title: "Client Success Obsession", desc: "We measure our success by the success of our clients and the results we help them achieve.", bg: "bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]" },
              { icon: <ChipIcon size={28} color="white" />, title: "Technology for Good", desc: "Building solutions that simplify processes and empower people through technology.", bg: "bg-[linear-gradient(120deg,#cfe9ff,#ffe4d6,#e0e7ff)]" },
              { icon: <BulbChargingIcon size={28} color="white" />, title: "Continuous Learning", desc: "Constantly evolving our skills to stay ahead in a fast-changing tech landscape.", bg: "bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative rounded-3xl p-8 overflow-hidden ${item.bg} shadow-2xl`}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-black/50 backdrop-blur-md shadow-lg">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-black">{item.title}</h4>
                  </div>
                  <p className="text-black/60 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
