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
                {/* Uncomment to use Firebase examples */}

                <div style={{ padding: '2rem 0', background: '#f9f9f9' }}>
                    <FirebaseExample />
                </div>
                <div style={{ padding: '2rem 0' }}>
                    <ProjectsWithFirebase />
                </div>
                <div style={{ padding: '2rem 0', background: '#f9f9f9' }}>
                    <AddProjectForm />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Home;