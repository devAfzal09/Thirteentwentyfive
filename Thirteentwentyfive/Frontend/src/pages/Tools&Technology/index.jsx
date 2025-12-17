// import { TabsContents } from '@/components/animate-ui/primitives/animate/tabs'
import { Tabs, TabsContent, TabsList, TabsTrigger, TabsContents } from '../../components/animate-ui/components/animate/tabs'
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
    <div className='w-full mt-18'>
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-6xl font-bold text-center mb-8">Tools & Technologies</h2>
      </div>
      <Tabs>
        <TabsList
          className="flex items-center gap-4 bg-white shadow-xl rounded-full px-6 py-4 w-fit mx-auto mt-5"
        >
          <TabsTrigger
            value="AIML"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            AI & ML
          </TabsTrigger>

          <TabsTrigger
            value="Web"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            Web
          </TabsTrigger>

          {/* Add more like screenshot */}
          <TabsTrigger
            value="mobile"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            Mobile App
          </TabsTrigger>

          <TabsTrigger
            value="uiux"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            UI/UX
          </TabsTrigger>

          <TabsTrigger
            value="ecommerce"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            eCommerce
          </TabsTrigger>

          <TabsTrigger
            value="cloud"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            Cloud
          </TabsTrigger>
        </TabsList>
        <TabsContents className="w-full mt-8 ">

          {/* AI & ML */}
          <TabsContent value="AIML" >
            <div className="max-w-6xl h-[32vh] mx-auto px-5">

              <div className="grid grid-cols-4 gap-6 items-center justify-center">
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

          {/* Web */}
          <TabsContent value="Web">
            <div className="max-w-6xl h-[32vh] mx-auto px-5">

              <div className="grid grid-cols-4 gap-6">
                <TechCard icon={<ReactIcon size={40} />} title="React" />
                <TechCard icon={<ReactIcon size={40} />} title="Next.js" />
                <TechCard icon={<ReactIcon size={40} />} title="Node.js" />
                <TechCard icon={<ReactIcon size={40} />} title="Express" />
              </div>
            </div>
          </TabsContent>

          {/* Mobile */}
          <TabsContent value="mobile">
            <div className="max-w-6xl h-[32vh] mx-auto px-5">

              <div className="grid grid-cols-4 gap-6">
                <TechCard icon={<ReactIcon size={40} />} title="React Native" />
                <TechCard icon={<ReactIcon size={40} />} title="Flutter" />
                <TechCard icon={<ReactIcon size={40} />} title="Swift" />
              </div>
            </div>
          </TabsContent>

          {/* UI/UX */}
          <TabsContent value="uiux">
            <div className="max-w-6xl h-[32vh] mx-auto px-5">

              <div className="grid grid-cols-4 gap-6">
                <TechCard icon={<FigmaIcon size={40} />} title="Figma" />
                <TechCard icon={<FigmaIcon size={40} />} title="Adobe XD" />
              </div>
            </div>
          </TabsContent>

          {/* eCommerce */}
          <TabsContent value="ecommerce">
            <div className="max-w-6xl h-[32vh] mx-auto px-5">

              <div className="grid grid-cols-4 gap-6">
                <TechCard icon={<ReactIcon size={40} />} title="Shopify" />
                <TechCard icon={<ReactIcon size={40} />} title="WooCommerce" />
              </div>
            </div>
          </TabsContent>

          {/* Cloud */}
          <TabsContent value="cloud">
            <div className="max-w-6xl h-[32vh] mx-auto px-5">

              <div className="grid grid-cols-4 gap-6">
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
