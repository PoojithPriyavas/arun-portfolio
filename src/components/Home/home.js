import React,{useState,useEffect} from 'react';
import './home.css'
import Header from '../Header/header';
import Loader from '../Loader/loader';
import Video from '../Video/video';
import Projects from '../Projects/projects';

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
                </>
            )}
        </div>
    )
}
export default Home