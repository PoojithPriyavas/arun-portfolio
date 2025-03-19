import React,{useState,useEffect} from 'react';
import './home.css'
import Header from '../Header/header';
import Loader from '../Loader/loader';
import Video from '../Video/video';
import Projects from '../Projects/projects';
import Footer from '../Footer/footer';
import About from '../About/about';
import Services from '../Services/services';
import Testimonials from '../Testimonials/testimonials';
import Contact from '../Contact/contact';

function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='home-main'>
            {loading ? <Loader /> : (
                <>
                    <Header />
                    <Video />
                    <Projects />
                    <About />
                    <Services />
                    <Testimonials/>
                    <Contact />
                   
                </>
            )}
        </div>
    )
}
export default Home