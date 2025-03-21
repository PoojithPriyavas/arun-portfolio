import React from "react";
import './video.css'

function Video() {
    return (
        <div className="main-div">
            <video autoPlay loop muted playsInline className="bg-video" style={{ objectFit: 'cover' }}>
                <source src="/assets/video/bg.mp4" type="video/mp4" style={{ height: '100%', width: '100%' }} />
                
            </video>
            <div className="content">
                <h1 className="name">Hi ,i'm Arun</h1>
                <h4 className="brand">branding•illustration•design</h4>
            </div>

        </div>
    )
}
export default Video