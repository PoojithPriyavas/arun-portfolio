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
            icon: "",
            heading: "Website Design",
            desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
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
            icon: "",
            heading: "Mobile App Design",
            desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
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
            icon: "Brand Identity",
            heading: "Website Design",
            desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
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
            icon: "",
            heading: "Market Analysis",
            desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
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
                <p className="srv-title">Check Services</p>
                <h1 style={{ color: '#fff' }}>My Best Services</h1>
            </div>

            <div className="srv-section">
                <div className="row srv-section-row">
                    {serviceDetails.map((item, index) =>
                        <div className="col col-lg-3 col-md-6 col-12" >
                            <div className="service-items" key={index}>
                                <i class="fi flaticon-vector"></i>
                                <h2>{item.heading}</h2>
                                <p>{item.desc}</p>
                                <button className="read-more" onClick={() => handleOpenModal(item)}><img src="/assets/icons/arrow-down-right.svg"/></button>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div class="service-bg"><h1>Services</h1></div>
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