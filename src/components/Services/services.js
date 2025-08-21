import React, { useState, useRef } from "react";
import './services.css';
import { Row, Col } from "react-bootstrap";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

    const serviceDetails = [
        {
            id: 1,
            icon: <i className="fa fa-video-camera" aria-hidden="true"></i>,
            heading: "Cinematography",
            desc: "Capturing compelling visuals with cinematic techniques to bring every story to life.",
            desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.",
            desc3: 'Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.',
            banner: "/assets/service/1.jpg",
            desc4: 'Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.',
            capabilities: [
                "Non saed velit dictum quam risus pharetra esta.",
                "Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.",
                "Hac nibh fermentum nisi, platea condimentum cursus.",
                "Massa volutpat odio facilisis purus sit elementum.",
                "Elit curabitur amet risus bibendum."
            ],
            approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
            process: [
                'Non saed velit dictum quam risus pharetra esta.',
                'Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.',
                'Hac nibh fermentum nisi, platea condimentum cursus.',
                'Massa volutpat odio facilisis purus sit elementum.'
            ]
        },
        {
            id: 2,
            icon: <i className="fa fa-scissors" aria-hidden="true"></i>,
            heading: "Video editing",
            desc: "Crafting seamless narratives through precise cuts, pacing, and visual flow to elevate content impact.",
            desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.",
            desc3: 'Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.',
            banner: "/assets/service/1.jpg",
            desc4: 'Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.',
            capabilities: [
                "Non saed velit dictum quam risus pharetra esta.",
                "Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.",
                "Hac nibh fermentum nisi, platea condimentum cursus.",
                "Massa volutpat odio facilisis purus sit elementum.",
                "Elit curabitur amet risus bibendum."
            ],
            approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
            process: [
                'Non saed velit dictum quam risus pharetra esta.',
                'Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.',
                'Hac nibh fermentum nisi, platea condimentum cursus.',
                'Massa volutpat odio facilisis purus sit elementum.'
            ]
        },
        {
            id: 3,
            icon: <i className="fa fa-desktop" aria-hidden="true"></i>,
            heading: "Website Design",
            desc: "Designing modern, responsive websites that elevate user experience and reflect your brand.",
            desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.",
            desc3: 'Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.',
            banner: "/assets/service/1.jpg",
            desc4: 'Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.',
            capabilities: [
                "Non saed velit dictum quam risus pharetra esta.",
                "Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.",
                "Hac nibh fermentum nisi, platea condimentum cursus.",
                "Massa volutpat odio facilisis purus sit elementum.",
                "Elit curabitur amet risus bibendum."
            ],
            approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
            process: [
                'Non saed velit dictum quam risus pharetra esta.',
                'Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.',
                'Hac nibh fermentum nisi, platea condimentum cursus.',
                'Massa volutpat odio facilisis purus sit elementum.'
            ]
        },
        {
            id: 4,
            icon: <i className="fa fa-volume-up" aria-hidden="true"></i>,
            heading: "Sound design",
            desc: "Creating immersive audio landscapes that enhance emotion, realism, and storytelling depth.",
            desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.",
            desc3: 'Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.',
            banner: "/assets/service/1.jpg",
            desc4: 'Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.',
            capabilities: [
                "Non saed velit dictum quam risus pharetra esta.",
                "Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.",
                "Hac nibh fermentum nisi, platea condimentum cursus.",
                "Massa volutpat odio facilisis purus sit elementum.",
                "Elit curabitur amet risus bibendum."
            ],
            approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
            process: [
                'Non saed velit dictum quam risus pharetra esta.',
                'Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.',
                'Hac nibh fermentum nisi, platea condimentum cursus.',
                'Massa volutpat odio facilisis purus sit elementum.'
            ]
        },
        {
            id: 5,
            icon: <i className="fa fa-spinner" aria-hidden="true"></i>,
            heading: "Motiongraphics",
            desc: "Animating visuals with dynamic motion graphics to communicate ideas in a creative and engaging way.",
            desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.",
            desc3: 'Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.',
            banner: "/assets/service/1.jpg",
            desc4: 'Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.',
            capabilities: [
                "Non saed velit dictum quam risus pharetra esta.",
                "Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.",
                "Hac nibh fermentum nisi, platea condimentum cursus.",
                "Massa volutpat odio facilisis purus sit elementum.",
                "Elit curabitur amet risus bibendum."
            ],
            approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
            process: [
                'Non saed velit dictum quam risus pharetra esta.',
                'Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.',
                'Hac nibh fermentum nisi, platea condimentum cursus.',
                'Massa volutpat odio facilisis purus sit elementum.'
            ]
        },
        {
            id: 6,
            icon: <i className="fa fa-magic" aria-hidden="true"></i>,
            heading: "VFX",
            desc: "Adding high-quality visual effects to turn creative concepts into stunning on-screen realities.",
            desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.",
            desc3: 'Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.',
            banner: "/assets/service/1.jpg",
            desc4: 'Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.',
            capabilities: [
                "Non saed velit dictum quam risus pharetra esta.",
                "Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.",
                "Hac nibh fermentum nisi, platea condimentum cursus.",
                "Massa volutpat odio facilisis purus sit elementum.",
                "Elit curabitur amet risus bibendum."
            ],
            approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
            process: [
                'Non saed velit dictum quam risus pharetra esta.',
                'Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.',
                'Hac nibh fermentum nisi, platea condimentum cursus.',
                'Massa volutpat odio facilisis purus sit elementum.'
            ]
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedService(null);
        document.body.style.overflow = 'unset'; // Restore scroll
    };

    // Animation variants
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const titleVariant = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const serviceItemVariant = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const modalVariant = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const overlayVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const listItemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: { delay: index * 0.1, duration: 0.5 }
        })
    };

    return (
        <motion.div 
            className="service-main" 
            id="services"
            ref={sectionRef}
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className="service-text" variants={titleVariant}>
                <br />
                <br />
                <br />
                <motion.p 
                    className="srv-title" 
                    style={{ fontWeight: 700 }}
                    whileHover={{ 
                        scale: 1.05,
                        color: "#fff",
                        transition: { duration: 0.3 }
                    }}
                >
                    Check Services
                </motion.p>
                <motion.h1 
                    style={{ color: '#fff', fontWeight: 700 }} 
                    className="font-mullish"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    My Best Services
                </motion.h1>
            </motion.div>
            <br />
            <br />

            <motion.div 
                className="srv-section"
                variants={containerVariant}
            >
                <Row className="srv-section-row">
                    {serviceDetails.map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                            <motion.div
                                className="service-items"
                                variants={serviceItemVariant}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(229, 84, 10, 0.1)",
                                    borderColor: "#e5540a",
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleOpenModal(item)}
                            >
                                <motion.div 
                                    className="fi"
                                    whileHover={{ 
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {item.icon}
                                </motion.div>
                                
                                <motion.h2 
                                    className="chakra-petch-semibold"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                >
                                    {item.heading}
                                </motion.h2>
                                
                                <motion.p 
                                    className="truncate-2-lines font-mulish"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                >
                                    {item.desc}
                                </motion.p>
                                
                                <motion.button
                                    className="read-more"
                                    whileHover={{ 
                                        scale: 1.15,
                                        backgroundColor: "#e5540a",
                                        borderRadius: "50%",
                                        boxShadow: "0 0 20px rgba(229, 84, 10, 0.5)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
                                >
                                    <motion.img 
                                        src="/assets/icons/arrow-down-right.svg" 
                                        alt="Read More"
                                        whileHover={{
                                            rotate: [0, 15, -15, 45],
                                            scale: [1, 1.2, 1.1, 1.3],
                                            filter: "brightness(2)",
                                            transition: { 
                                                duration: 0.6,
                                                ease: "easeInOut",
                                                times: [0, 0.2, 0.5, 1]
                                            }
                                        }}
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                    />
                                </motion.button>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>

            {/* Animated Modal */}
            <AnimatePresence>
                {isOpen && selectedService && (
                    <motion.div 
                        className="modal-overlay"
                        variants={overlayVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={handleCloseModal}
                    >
                        <motion.div 
                            className="modal-container"
                            variants={modalVariant}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div 
                                className="close-button-container"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <motion.button 
                                    className="close-button" 
                                    onClick={handleCloseModal}
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: 90,
                                        color: "#e5540a",
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    &times;
                                </motion.button>
                            </motion.div>
                            
                            <motion.img
                                src={selectedService.banner}
                                alt="Modal Image"
                                className="modal-image"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            />
                            
                            <motion.h2 
                                className="modal-heading"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                {selectedService.heading}
                            </motion.h2>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                {selectedService.desc}
                            </motion.p>
                            
                            <br />
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {selectedService.desc2}
                            </motion.p>
                            
                            <motion.div 
                                className="row"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <div className="col-6 col-md-12 col-12">
                                    <motion.img 
                                        src={selectedService.banner}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                    />
                                </div>
                                <div className="col-6 col-md-12 col-12">
                                    <motion.img 
                                        src={selectedService.banner}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.h2 
                                className="modal-heading"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Our Capabilities
                            </motion.h2>
                            
                            <motion.ul 
                                className="modal-list"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                {selectedService.capabilities.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        custom={i}
                                        variants={listItemVariant}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{ 
                                            x: 10,
                                            color: "#e5540a",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                            
                            <motion.h2 
                                className="modal-heading"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Our Approach
                            </motion.h2>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <p>{selectedService.approach}</p>
                            </motion.div>
                            
                            <motion.h2 
                                className="modal-heading"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                            >
                                Our Process
                            </motion.h2>
                            
                            <motion.ul 
                                className="modal-list"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                            >
                                {selectedService.process.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        custom={i + 5} // Offset for stagger effect
                                        variants={listItemVariant}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{ 
                                            x: 10,
                                            color: "#e5540a",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span><i className="fa fa-check" aria-hidden="true"></i></span>
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}