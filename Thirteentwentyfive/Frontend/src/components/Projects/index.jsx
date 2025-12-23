import React, { useRef, useEffect, useState } from "react";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.jpg";
import projectImg3 from "../../assets/project3.jpg";
import projectImg4 from "../../assets/project4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

export default function Projects() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const projectData = [
        {
            id: 1,
            title: "AI-Powered Wildlife Detection System",
            image: projectImg1,
            description: "This project uses advanced machine learning models to detect wildlife in real time.",
            badges: ["React Native", "AI Model", "Node.js", "Cloudinary", "Real-Time"],
        },
        {
            id: 2,
            title: "Smart Real Estate App",
            image: projectImg2,
            description: "A complete real estate solution built using React Native & Firebase.",
            badges: ["React Native", "Firebase", "Maps", "Chat", "Modern UI"],
        },
        {
            id: 3,
            title: "Music Streaming App",
            image: projectImg3,
            description: "A high-quality music app featuring playlists and animations.",
            badges: ["React Native", "Cloud", "Music Player", "UI/UX", "Animations"],
        },
        {
            id: 4,
            title: "Video AI Enhancer",
            image: projectImg4,
            description: "An AI-powered tool that enhances videos using cloud algorithms.",
            badges: ["AI Model", "Video Processing", "Node.js", "Cloudinary", "API"],
        },
    ];

    const activeProject = projectData[activeIndex];


    return (
        <div className="relative w-[min(90rem,90%)] mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <div
                key={activeIndex}
                className="space-y-6 animate-fade-slide"
            >
                <span className="uppercase tracking-widest text-sm text-gray-500">
                    Featured Project
                </span>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    {activeProject.title.split(" ")[0]}{" "}
                    <span className="text-teal-500">
                        {activeProject.title.split(" ").slice(1).join(" ")}
                    </span>
                </h1>

                <div className="w-20 h-1 bg-teal-500" />

                <p className="text-gray-600 max-w-md leading-relaxed">
                    {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {activeProject.badges.map((badge, i) => (
                        <span
                            key={i}
                            className="text-xs px-4 py-2 rounded-full bg-teal-100 text-teal-700"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>



            <Swiper
                modules={[EffectCoverflow, Pagination, Autoplay]}
                effect="coverflow"
                centeredSlides
                grabCursor
                slidesPerView="auto"
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -60,
                    depth: 220,
                    modifier: 2.8,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                className="w-full pt-10"
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {projectData.map((data) => (
                    <SwiperSlide
                        key={data.id}
                        onMouseEnter={() => swiperInstance?.autoplay?.stop()}
                        onMouseLeave={() => swiperInstance?.autoplay?.start()}
                        className="
                        group
                        relative
                        w-[220px] h-[320px]
                        sm:w-[240px] sm:h-[360px]
                        md:w-[260px] md:h-[380px]
                        lg:w-[280px] lg:h-[400px]
                        rounded-2xl
                        overflow-hidden
                        bg-black
                    "
                    >


                        <img
                            src={data.image}
                            alt={data.title}
                            // className="
                            //     w-full h-full object-cover
                            //     transition-transform duration-700
                            //     group-hover:scale-110
                            // "
                            className="
    w-full
    h-[320px]
    sm:h-[360px]
    md:h-[380px]
    lg:h-[400px]
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
  "
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500
                                flex flex-col justify-end
                                p-4
                            "
                        >
                            <h3 className="text-white text-lg font-semibold">
                                {data.title}
                            </h3>

                            <p className="text-gray-300 text-sm mt-2 leading-snug">
                                {data.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {data.badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-white/20 text-white"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="#"
                                className="
                                    my-4 inline-block w-max
                                    text-sm uppercase tracking-wide
                                    text-teal-600
                                    hover:text-teal-500
                                    py-2 px-4 bg-teal-200 rounded-lg
                                "
                            >
                                Explore
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
