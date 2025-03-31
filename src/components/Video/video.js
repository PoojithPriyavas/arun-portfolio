import React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import './video.css';

function Video() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log("Scroll Progress:", latest);
    });

    return (
        <section className="parallax">
            <div className="main-div">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="bg-video"
                    title="Background Video"
                >
                    <source src="/assets/video/bg.mp4" type="video/mp4" />
                </video>
                <motion.div className="content" style={{ opacity }}>
                    <h1 className="name">Hi, I'm Arun</h1>
                    <h4 className="brand">Branding • Illustration • Design</h4>
                </motion.div>
            </div>
        </section>

    );
}

export default Video;
