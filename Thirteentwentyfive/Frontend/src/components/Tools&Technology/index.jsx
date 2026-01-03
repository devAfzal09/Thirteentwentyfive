// import { Tabs, TabsContent, TabsList, TabsTrigger, TabsContents } from '../animate-ui/components/animate/tabs'
// import React from 'react'
// import {
//   ReactIcon,
//   FigmaIcon,
//   Github01Icon,
//   GithubIcon,
// } from "hugeicons-react";

// function TechCard({ icon, title }) {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition">
//       <div className="text-gray-700">{icon}</div>
//       <p className="mt-4 text-lg font-medium text-gray-800">{title}</p>
//     </div>
//   );
// }



// export default function ToolsTechnology() {

//   return (
//     <div className='w-full py-18'>
//       <div className="max-w-6xl mx-auto px-4 sm:px-5">
//         <h2
//           className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 sm:mb-8">
//           Tools & Technologies
//         </h2>
//       </div>

//       <Tabs>
//         {/* <TabsList
//           className="flex items-center gap-4 bg-white shadow-xl rounded-full px-6 py-10 w-fit mx-auto mt-5"
//         > */}
//         <TabsList
//           className="flex items-center gap-3 bg-white shadow-xl rounded-full px-6 py-8 sm:px-6 sm:py-6 w-full md:w-fit mt-5
//             overflow-x-auto
//             whitespace-nowrap
//             scrollbar-hide

//             justify-start
//             md:justify-center

//             md:mx-auto
//             scrollbar-hide md:scrollbar-default 
//           "
//         >


//           <TabsTrigger
//             value="AIML"
//             className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
//             AI & ML
//           </TabsTrigger>

//           <TabsTrigger
//             value="Web"
//             className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
//             Web
//           </TabsTrigger>

//           {/* Add more like screenshot */}
//           <TabsTrigger
//             value="mobile"
//             className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
//             Mobile App
//           </TabsTrigger>

//           <TabsTrigger
//             value="uiux"
//             className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
//             UI/UX
//           </TabsTrigger>

//           <TabsTrigger
//             value="ecommerce"
//             className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
//             eCommerce
//           </TabsTrigger>

//           <TabsTrigger
//             value="cloud"
//             className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
//             Cloud
//           </TabsTrigger>
//         </TabsList>
//         <TabsContents className="w-full mt-8">
          
//           <TabsContent value="AIML">
//             <div className="max-w-6xl h-[300px] mx-auto px-4 sm:px-5">
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">        
//                 <TechCard icon={<ReactIcon size={40} />} title="Langchain" />
//                 <TechCard icon={<GithubIcon size={40} />} title="Python" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Tensorflow" />
//                 <TechCard icon={<ReactIcon size={40} />} title="OpenAI" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Hugging Face" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Pinecone Database" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Apache Kafka" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Elastic Search" />
//               </div>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="Web">
//             <div className="max-w-6xl h-[300px] mx-auto px-4 sm:px-5">
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                 <TechCard icon={<ReactIcon size={40} />} title="React" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Next.js" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Node.js" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Express" />
//               </div>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="mobile">
//             <div className="max-w-6xl h-[300px] mx-auto px-4 sm:px-5">
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                 <TechCard icon={<ReactIcon size={40} />} title="React Native" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Flutter" />
//                 <TechCard icon={<ReactIcon size={40} />} title="Swift" />
//               </div>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="uiux">
//             <div className="max-w-6xl h-[300px] mx-auto px-4 sm:px-5">
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                 <TechCard icon={<FigmaIcon size={40} />} title="Figma" />
//                 <TechCard icon={<FigmaIcon size={40} />} title="Adobe XD" />
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="ecommerce">
//             <div className="max-w-6xl h-[300px] mx-auto px-4 sm:px-5">
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                 <TechCard icon={<ReactIcon size={40} />} title="Shopify" />
//                 <TechCard icon={<ReactIcon size={40} />} title="WooCommerce" />
//               </div>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="cloud">
//             <div className="max-w-6xl h-[300px] mx-auto px-4 sm:px-5">
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                 <TechCard icon={<Github01Icon size={40} />} title="AWS" />
//                 <TechCard icon={<Github01Icon size={40} />} title="Google Cloud" />
//                 <TechCard icon={<Github01Icon size={40} />} title="Azure" />
//               </div>
//             </div>
//           </TabsContent>
//         </TabsContents>
//       </Tabs>
//     </div>
//   )
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
  Frontend: [
    { title: "Angular", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png" },
    { title: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" },
    { title: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png" },
    { title: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png" },
    { title: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" },
    { title: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { title: "Nuxt.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/512px-Nuxt_logo.svg.png" },
    { title: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png" },
    { title: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png" },
    { title: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Logo.svg/512px-HTML5_Logo.svg.png" },
    { title: "jQuery", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/512px-JQuery-Logo.svg.png" },
    { title: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" },
  ],
  "Backend & Database": [
    { title: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png" },
    { title: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { title: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png" },
    { title: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/512px-Postgresql_elephant.svg.png" },
  ],
  Frameworks: [
    { title: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/512px-Laravel.svg.png" },
    { title: "Django", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/512px-Django_logo.svg.png" },
  ],
  "Mobile App": [
    { title: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" },
    { title: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flutter_logo.svg/512px-Flutter_logo.svg.png" },
  ],
  "eCommerce & CMS": [
    { title: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Shopify_Logo.svg/512px-Shopify_Logo.svg.png" },
    { title: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png" },
  ],
};

const tabOrder = ["Frontend", "Backend & Database", "Frameworks", "Mobile App", "eCommerce & CMS"];

export default function ToolsTechnology() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const techs = categories[activeTab] || [];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-16"
        >
          Tools & Technologies
        </motion.h2>

        {/* Tabs with animated underline */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {tabOrder.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-8 py-4 text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute left-4 right-4 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Animated Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10"
          >
            {techs.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                whileHover={{ scale: 1.15, y: -12 }}
                className="flex flex-col items-center group"
              >
                <div className="w-36 h-36 mb-5 flex items-center justify-center bg-white rounded-3xl shadow-lg border border-gray-100 p-8 group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={tech.logo}
                    alt={tech.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-center text-lg font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {tech.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {techs.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 text-2xl py-32"
          >
            More technologies coming soon...
          </motion.p>
        )}
      </div>
    </section>
  );
}