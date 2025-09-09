import React, { useState } from 'react';
import './home.css';
import Header from '../Header/header';
import Loader from '../Loader/loader';
import Video from '../Video/video';
import { FirebaseExample, ProjectsWithFirebase, AddProjectForm } from '../FirebaseExample';
import Projects from '../Projects/projects';
import Footer from '../Footer/footer';
import About from '../About/about';
import Services from '../Services/services';
import Testimonials from '../Testimonials/testimonials';
import Contact from '../Contact/contact';
import Clients from '../Clients/clients';
import Tech from '../Technology/tech';
import { Link } from 'react-router-dom';

function Home() {
    // Temporarily commented out loader
    const [loading, setLoading] = useState(false);
    const [contentVisible, setContentVisible] = useState(true);

    const handleLoaderComplete = () => {
        setLoading(false);
        setContentVisible(true);
    };

    return (
        <>
            {/* Loader temporarily commented out
            {loading ? (
                <Loader duration={3000} onComplete={handleLoaderComplete} />
            ) : null}
            */}

            <div className={`content-container ${contentVisible ? 'visible' : 'hidden'}`}>
                <Header />
                <Video />
                <Projects />
                <Clients />
                <About />
                <Services />
                <Testimonials />
                <Tech />
                {/* <Contact /> */}


                {/* <div style={{ padding: '2rem 0', background: '#f9f9f9' }}>
                    <FirebaseExample />
                </div>
                <div style={{ padding: '2rem 0' }}>
                    <ProjectsWithFirebase />
                </div>
                <div style={{ padding: '2rem 0', background: '#f9f9f9' }}>
                    <AddProjectForm />
                </div>
                <div style={{ padding: '2rem 0', background: '#f0f0f0', textAlign: 'center' }}>
                    <h2>Firebase Storage Image URL Example</h2>
                    <p>Try our new tool for generating Firebase Storage image URLs</p>
                    <Link 
                        to="/image-url-example" 
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            background: '#4285F4',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            margin: '15px 0'
                        }}
                    >
                        Try Image URL Generator
                    </Link>
                </div>
                
                <div style={{ padding: '2rem 0', background: '#e0f7fa', textAlign: 'center' }}>
                    <h2>Firebase Storage Image Gallery</h2>
                    <p>View images from Firebase Storage in a beautiful gallery</p>
                    <Link 
                        to="/image-gallery" 
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            background: '#26a69a',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            margin: '15px 0'
                        }}
                    >
                        View Image Gallery
                    </Link>
                </div> */}

                <Footer />
            </div>
        </>
    );
}

export default Home;