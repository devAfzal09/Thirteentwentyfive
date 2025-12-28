import React from 'react'
import TiltedCard from '../../ReactbitzComponent/TiltedCard'
import img from '../../assets/ai2.jpg'
import RotatingText from '../../ReactbitzComponent/RotatingText'
import Particles from '../../ReactbitzComponent/Particles'
import BlurText from '../../ReactbitzComponent/BlurText'

export default function Index() {
    return (
        <>

            <div className="relative w-full min-h-[70vh] overflow-hidden">
                <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
                    <Particles
                        particleColors={['#C8E3F7', '#FFC7D1']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
                <div className="relative z-10 flex flex-col gap-10 w-full py-20 px-6 items-center justify-center">
                    <div className="flex items-center justify-center w-full">
                        <TiltedCard
                            imageSrc={img}
                            altText={undefined}
                            captionText={false}
                            containerHeight="auto"
                            containerWidth="100%"
                            imageHeight="auto"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                        />
                    </div>

                    <div className="w-full">
                        <div className="flex items-center gap-2 justify-center my-3 flex-wrap">
                            <h1 className='font-medium text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>Creative</h1>
                            <RotatingText
                                texts={['Thinking', 'Coding', 'Cool!']}
                                mainClassName="w-[150px] px-2 sm:px-2 md:px-3 bg-[#8CE4FF] flex items-center text-white text-3xl py-0.5 sm:py-1 md:py-2 rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-center mt-8 gap-x-2 gap-y-2 text-center mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[75%]">
                            <BlurText
                                text="We"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-[#8CE4FF] text-xl sm:text-2xl md:text-3xl font-medium"
                            />

                            <BlurText
                                text="transform your"
                                delay={180}
                                animateBy="words"
                                direction="top"
                                className="text-gray-500 text-xl sm:text-2xl md:text-3xl font-medium"
                            />

                            <BlurText
                                text="vision and data"
                                delay={210}
                                animateBy="words"
                                direction="top"
                                className="text-[#8CE4FF] text-xl sm:text-2xl md:text-3xl font-medium"
                            />

                            <BlurText
                                text="into high-impact AI solutions"
                                delay={240}
                                animateBy="words"
                                direction="top"
                                className="text-gray-500 font-semibold text-xl sm:text-2xl md:text-3xl"
                            />

                            <BlurText
                                text="that elevate your brand"
                                delay={270}
                                animateBy="words"
                                direction="top"
                                className="text-[#8CE4FF] text-xl sm:text-2xl md:text-3xl font-medium"
                            />

                            <BlurText
                                text="and accelerate revenue,"
                                delay={300}
                                animateBy="words"
                                direction="top"
                                className="text-gray-500 font-semibold text-xl sm:text-2xl md:text-3xl"
                            />

                            <BlurText
                                text="backed by focused and"
                                delay={330}
                                animateBy="words"
                                direction="top"
                                className="text-[#8CE4FF] font-semibold text-xl sm:text-2xl md:text-3xl"
                            />

                            <BlurText
                                text="accountable execution."
                                delay={360}
                                animateBy="words"
                                direction="top"
                                className="text-gray-500 font-semibold text-xl sm:text-2xl md:text-3xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
