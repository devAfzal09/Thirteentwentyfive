import React, { useRef, useEffect, useState } from "react";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.jpg";
import projectImg3 from "../../assets/project3.jpg";
import projectImg4 from "../../assets/project4.jpg";

const Stack = ({ items }) => (
    <div className="flex flex-wrap gap-3 mt-5">
        {items.map((badge, i) => (
            <span
                key={i}
                className="px-4 py-2 text-sm text-blue-600 bg-white rounded-full shadow-xl 
                   transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
                {badge}
            </span>
        ))}
    </div>
);

export default function Projects() {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const velocityRef = useRef(0);
    const animationFrameRef = useRef(null);

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

    // Inertia scrolling
    const smoothScroll = () => {
        if (!scrollRef.current) return;
        velocityRef.current *= 0.95;
        if (Math.abs(velocityRef.current) > 0.5) {
            scrollRef.current.scrollLeft -= velocityRef.current;
            animationFrameRef.current = requestAnimationFrame(smoothScroll);
        }
    };

    const handleStart = (e) => {
        setIsDown(true);
        cancelAnimationFrame(animationFrameRef.current);
        const pageX = e.pageX || e.touches?.[0].pageX;
        setStartX(pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        velocityRef.current = 0;
    };

    const handleEnd = () => {
        if (!isDown) return;
        setIsDown(false);
        animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    const handleMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const pageX = e.pageX || e.touches?.[0].pageX;
        const x = pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2.5;
        const prevScroll = scrollRef.current.scrollLeft;
        scrollRef.current.scrollLeft = scrollLeft - walk;
        velocityRef.current = scrollRef.current.scrollLeft - prevScroll;
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (!ref) return;

        const start = (e) => handleStart(e);
        const end = () => handleEnd();
        const move = (e) => handleMove(e);

        ref.addEventListener("mousedown", start);
        ref.addEventListener("touchstart", start, { passive: false });

        ref.addEventListener("mouseup", end);
        ref.addEventListener("mouseleave", end);
        ref.addEventListener("touchend", end);

        ref.addEventListener("mousemove", move);
        ref.addEventListener("touchmove", move, { passive: false });

        return () => {
            ref.removeEventListener("mousedown", start);
            ref.removeEventListener("touchstart", start);
            ref.removeEventListener("mouseup", end);
            ref.removeEventListener("mouseleave", end);
            ref.removeEventListener("touchend", end);
            ref.removeEventListener("mousemove", move);
            ref.removeEventListener("touchmove", move);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isDown, startX, scrollLeft]);

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Projects
                    </h2>
                    {/* <p className="text-xl text-gray-600">Drag to explore →</p> */}
                </div>

                <div
                    ref={scrollRef}
                    className="flex py-6 gap-8 overflow-x-auto hide-scrollbar scroll-smooth"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="group relative min-w-[380px] md:min-w-[420px] rounded-3xl 
                                        shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl 
                                        hover:-translate-y-3 select-none cursor-grab active:cursor-grabbing"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Badges */}
                                <Stack items={project.badges} />
                            </div>

                            {/* Hover overlay effect */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /> */}
                        </div>
                    ))}

                    {/* End padding */}
                    {/* <div className="w-12 flex-shrink-0" /> */}
                </div>
            </div>

            {/* Hide scrollbar */}
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}