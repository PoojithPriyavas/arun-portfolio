import React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import './video.css';

function Video() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const display = useTransform(scrollYProgress, [0, 0.1], ['block', 'none']);
    const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log("Scroll Progress:", latest);
    });

    return (
        <section className="parallax">
            <div className="main-div">
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="bg-video"
                    title="Background Video"
                    style={display}
                >
                    <source src="/assets/video/bg.mp4" type="video/mp4" />
                </motion.video>
                <motion.div className="content" style={{ opacity }}>
                    <h1 className="name font-mulish" style={{ fontWeight: 800 }}>Hi, I'm Arun</h1>
                    <h4 className="brand">Videographer • Editor • Visual Creator</h4>
                </motion.div>
            </div>
        </section>

    );
}

export default Video;
