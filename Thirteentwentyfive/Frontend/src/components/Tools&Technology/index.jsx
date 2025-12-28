import { Tabs, TabsContent, TabsList, TabsTrigger, TabsContents } from '../animate-ui/components/animate/tabs'
import React from 'react'
import {
  ReactIcon,
  FigmaIcon,
  Github01Icon,
  GithubIcon,
} from "hugeicons-react";

function TechCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition">
      <div className="text-gray-700">{icon}</div>
      <p className="mt-4 text-lg font-medium text-gray-800">{title}</p>
    </div>
  );
}



export default function ToolsTechnology() {

  return (
    <div className='w-full py-18'>
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 sm:mb-8">
          Tools & Technologies
        </h2>
      </div>

      <Tabs>
        {/* <TabsList
          className="flex items-center gap-4 bg-white shadow-xl rounded-full px-6 py-10 w-fit mx-auto mt-5"
        > */}
        <TabsList
          className="flex items-center gap-3 bg-white shadow-xl rounded-full px-6 py-8 sm:px-6 sm:py-6 w-full md:w-fit mt-5
            overflow-x-auto
            whitespace-nowrap
            scrollbar-hide

            justify-start
            md:justify-center

            md:mx-auto
            scrollbar-hide md:scrollbar-default 
          "
        >


          <TabsTrigger
            value="AIML"
            className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
            AI & ML
          </TabsTrigger>

          <TabsTrigger
            value="Web"
            className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
            Web
          </TabsTrigger>

          {/* Add more like screenshot */}
          <TabsTrigger
            value="mobile"
            className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
            Mobile App
          </TabsTrigger>

          <TabsTrigger
            value="uiux"
            className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
            UI/UX
          </TabsTrigger>

          <TabsTrigger
            value="ecommerce"
            className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
            eCommerce
          </TabsTrigger>

          <TabsTrigger
            value="cloud"
            className="flex-shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-blue-400 data-[state=active]:text-white transition-all cursor-pointer">
            Cloud
          </TabsTrigger>
        </TabsList>
        <TabsContents className="w-full mt-8">
          
          <TabsContent value="AIML">
            <div className="max-w-6xl mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">        
                <TechCard icon={<ReactIcon size={40} />} title="Langchain" />
                <TechCard icon={<GithubIcon size={40} />} title="Python" />
                <TechCard icon={<ReactIcon size={40} />} title="Tensorflow" />
                <TechCard icon={<ReactIcon size={40} />} title="OpenAI" />
                <TechCard icon={<ReactIcon size={40} />} title="Hugging Face" />
                <TechCard icon={<ReactIcon size={40} />} title="Pinecone Database" />
                <TechCard icon={<ReactIcon size={40} />} title="Apache Kafka" />
                <TechCard icon={<ReactIcon size={40} />} title="Elastic Search" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="Web">
            <div className="max-w-6xl mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <TechCard icon={<ReactIcon size={40} />} title="React" />
                <TechCard icon={<ReactIcon size={40} />} title="Next.js" />
                <TechCard icon={<ReactIcon size={40} />} title="Node.js" />
                <TechCard icon={<ReactIcon size={40} />} title="Express" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mobile">
            <div className="max-w-6xl mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <TechCard icon={<ReactIcon size={40} />} title="React Native" />
                <TechCard icon={<ReactIcon size={40} />} title="Flutter" />
                <TechCard icon={<ReactIcon size={40} />} title="Swift" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="uiux">
            <div className="max-w-6xl mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <TechCard icon={<FigmaIcon size={40} />} title="Figma" />
                <TechCard icon={<FigmaIcon size={40} />} title="Adobe XD" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ecommerce">
            <div className="max-w-6xl mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <TechCard icon={<ReactIcon size={40} />} title="Shopify" />
                <TechCard icon={<ReactIcon size={40} />} title="WooCommerce" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cloud">
            <div className="max-w-6xl mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <TechCard icon={<Github01Icon size={40} />} title="AWS" />
                <TechCard icon={<Github01Icon size={40} />} title="Google Cloud" />
                <TechCard icon={<Github01Icon size={40} />} title="Azure" />
              </div>
            </div>
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  )
}
