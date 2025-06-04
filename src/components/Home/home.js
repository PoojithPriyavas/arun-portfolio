import React, { useState } from 'react';
import './home.css';
import Header from '../Header/header';
import Loader from '../Loader/loader';
import Video from '../Video/video';
import Projects from '../Projects/projects';
import Footer from '../Footer/footer';
import About from '../About/about';
import Services from '../Services/services';
import Testimonials from '../Testimonials/testimonials';
import Contact from '../Contact/contact';
import Clients from '../Clients/clients';
import Tech from '../Technology/tech';

function Home() {
    const [loading, setLoading] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);

    const handleLoaderComplete = () => {
        setLoading(false);
        setContentVisible(true);
    };

    return (
        <>
            {loading ? (
                <Loader duration={3000} onComplete={handleLoaderComplete} />
            ) : null}
            
            <div className={`content-container ${contentVisible ? 'visible' : 'hidden'}`}>
                <Header />
                <Video />
                <Projects />
                <Clients />
                <About />
                <Services />
                <Testimonials/>
                <Tech />
                {/* <Contact /> */}
                <Footer />
            </div>
        </>
    );
}

export default Home;