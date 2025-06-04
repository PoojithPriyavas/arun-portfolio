import React, { useState } from "react";
import './services.css';
import Modal from '../Modal/modal'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Services() {

    const serviceDetails = [
        {

            id: 1,
            icon: <i class="fa fa-video-camera" aria-hidden="true"></i>,
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
            ],
            related: [
                {
                    id: 1,
                    heading: "Website Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 2,
                    heading: "Mobile App Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 3,
                    heading: "Brand Identity",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                }
            ]
        },
        {
            id: 2,
            icon: <i class="fa fa-scissors" aria-hidden="true"></i>,
            heading: "Video editing ",
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
            ],
            related: [
                {
                    id: 1,
                    heading: "Website Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 2,
                    heading: "Mobile App Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 3,
                    heading: "Brand Identity",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                }
            ]
        },
        {
            id: 3,
            icon: <i class="fa fa-desktop" aria-hidden="true"></i>,
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
            ],
            related: [
                {
                    id: 1,
                    heading: "Website Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 2,
                    heading: "Mobile App Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 3,
                    heading: "Brand Identity",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                }
            ]
        },
        {
            id: 4,
            icon: <i class="fa fa-volume-up" aria-hidden="true"></i>,
            heading: "Sound design ",
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
            ],
            related: [
                {
                    id: 1,
                    heading: "Website Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 2,
                    heading: "Mobile App Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 3,
                    heading: "Brand Identity",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                }
            ]
        },
        {
            id: 5,
            icon: <i class="fa fa-spinner" aria-hidden="true"></i>,
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
            ],
            related: [
                {
                    id: 1,
                    heading: "Website Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 2,
                    heading: "Mobile App Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 3,
                    heading: "Brand Identity",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                }
            ]
        },
        {
            id: 6,
            icon: <i class="fa fa-magic" aria-hidden="true"></i>,
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
            ],
            related: [
                {
                    id: 1,
                    heading: "Website Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 2,
                    heading: "Mobile App Design",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                },
                {
                    id: 3,
                    heading: "Brand Identity",
                    icon: '',
                    desc: 'Lacus, etiam sed est eu tempus need Temer diam congue.'
                }
            ]
        },
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        console.log("service", service)
        setIsOpen(true);
    };

    return (

        <div className="service-main" id="services">
            <div className="service-text">
                <br></br>
                <br></br>

                <br></br>
                <p className="srv-title" style={{fontWeight:700}}>Check Services</p>
                <h1 style={{ color: '#fff' ,fontWeight:700}} className="font-mullish">My Best Services</h1>
            </div>
            <br></br>
            <br></br>


            <div className="srv-section">
                <Row className="srv-section-row">
                    {serviceDetails.map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                            <div className="service-items">
                                <div className="fi">{item.icon}</div>
                                <h2 className="chakra-petch-semibold ">{item.heading}</h2>
                                <p className="truncate-2-lines font-mulish">{item.desc}</p>
                                <button
                                    className="read-more"
                                    onClick={() => handleOpenModal(item)}
                                >
                                    <img src="/assets/icons/arrow-down-right.svg" alt="Read More" />
                                </button>
                            </div>
                        </Col>
                    ))}
                </Row>

            </div>

            {/* <div class="service-bg"><h1>Services</h1></div> */}
            {isOpen && selectedService && (

                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="close-button-container">
                            <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
                        </div>
                        <img
                            src={selectedService.banner}
                            alt="Modal Image"
                            className="modal-image"
                        />
                        <h2 className="modal-heading" >{selectedService.heading}</h2>
                        <p> {selectedService.desc}</p> <br />
                        <p>{selectedService.desc2}</p>
                        <div className="row">
                            <div className="col-6 col-md-12 col-12 "><img src={selectedService.banner} /></div>
                            <div className="col-6 col-md-12 col-12 "><img src={selectedService.banner} /></div>
                        </div>
                        <h2 className="modal-heading" >Our Capabilities</h2>
                        <ul className="modal-list">
                            {selectedService.capabilities.map((item, i) =>
                                <li><span><i class="fa fa-check" aria-hidden="true"></i></span>{item} </li>
                            )}
                        </ul>
                        <h2 className="modal-heading" >Our Approach</h2>
                        <ul className="modal-list">
                            <p>{selectedService.approach}</p>
                        </ul>
                        <h2 className="modal-heading" >Our Process</h2>
                        <ul className="modal-list">
                            {selectedService.capabilities.map((item, i) =>
                                <li><span><i class="fa fa-check" aria-hidden="true"></i></span>{item} </li>
                            )}
                        </ul>
                    </div>



                </div>
            )
            }
        </div >
    )
}