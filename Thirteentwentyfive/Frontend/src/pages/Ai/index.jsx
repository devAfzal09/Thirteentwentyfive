import React from 'react'
import TiltedCard from '../../ReactbitzComponent/TiltedCard'
import img from '../../assets/ai2.jpg'
import RotatingText from '../../ReactbitzComponent/RotatingText'
import Particles from '../../ReactbitzComponent/Particles'
import BlurText from '../../ReactbitzComponent/BlurText'

export default function Index() {
    return (
        <>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-0 -z-10">
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
                <div className="flex flex-col gap-10 w-full py-20 px-6 items-center justify-centen">
                    <div className="flex items-center justify-center w-full">
                        <TiltedCard
                            imageSrc={img}
                            altText={false}
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

                    <div>
                        <div className="flex items-center gap-2 justify-center my-3">
                            <h1 className='font-medium text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>Creative</h1>
                            <RotatingText
                                texts={['Thinking', 'Coding', 'Cool!']}
                                mainClassName="w-[150px] px-2 sm:px-2 md:px-3 bg-[#5227FF] flex items-center text-white text-3xl py-0.5 sm:py-1 md:py-2 rounded-lg"
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
                        <div className="flex items-center justify-center mt-8">
                            <BlurText
                                text="We transform your vision and data into high-impact AI solutions that elevate your brand and accelerate revenue , backed by focused and  accountable execution."
                                delay={150}
                                animateBy="words"
                                direction="top"
                                // onAnimationComplete={handleAnimationComplete}
                                className="text-2xl md:text-3xl leading-relaxed text-center font-medium w-[90%] md:w-[80%]"
                            />

                            {/* <h3 className="">
                                <span className="text-gray-500">"We </span>
                                transform your <span className="text-gray-500">vision and data</span> into
                                <span className="text-gray-500"> high-impact AI solutions that elevate</span>
                                <span className="text-gray-500"> your brand</span> and accelerate revenue
                                <span className="text-gray-500">, backed by focused and </span>
                                accountable execution."
                            </h3> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
