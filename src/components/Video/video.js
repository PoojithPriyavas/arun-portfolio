import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import './video.css';

function Video() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });
    
    // Enhanced fade transitions with better scroll ranges
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);
    const videoOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0.2]);
    
    // Scale effect for content as it fades
    const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.85]);
    
    // Vertical movement for parallax effect
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    
    // Blur effect as content fades
    const contentBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 10]);
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Scroll Progress:", latest);
    });

    return (
        <section className="parallax" ref={targetRef}>
            <div className="main-div">
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="bg-video"
                    // title="Background Video"
                    style={{ 
                        opacity: videoOpacity,
                    }}
                >
                    <source src={`${process.env.PUBLIC_URL}/assets/video/bg.mp4`} type="video/mp4" />
                </motion.video>
                
                <motion.div 
                    className="content" 
                    style={{ 
                        opacity: contentOpacity,
                        scale: contentScale,
                        y: contentY,
                        filter: useTransform(contentBlur, (value) => `blur(${value}px)`)
                    }}
                >
                    <motion.h1 
                        className="name font-mulish" 
                        style={{ fontWeight: 800 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Hi, I'm Arun
                    </motion.h1>
                    
                    <motion.h4 
                        className="brand"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Videographer • Editor • Visual Creator
                    </motion.h4>
                </motion.div>
                
                {/* Optional: Scroll indicator */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 2,
                        opacity: useTransform(contentOpacity, (value) => value > 0.5 ? 1 : 0)
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '2px',
                            height: '30px',
                            background: 'white',
                            margin: '0 auto',
                            borderRadius: '1px'
                        }}
                    />
                    <motion.p
                        style={{
                            color: 'white',
                            fontSize: '12px',
                            marginTop: '10px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}
                    >
                        Scroll
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

export default Video;