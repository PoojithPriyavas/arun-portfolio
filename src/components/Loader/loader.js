import React, { useState, useEffect, useRef } from "react";
import "./loader.css";

const Loader = ({ duration = 3000 }) => {
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    return 100;
                }
                return prev + 1;
            });
        }, duration / 100);

        return () => clearInterval(intervalRef.current);
    }, [duration]);

    return (
        <div className="progress-main">
            <div className="progress-container">
               
                <div className="progress-bar">
                    <div
                        className="progress-segment left"
                        style={{ width: `${progress / 2}%` }}
                    ></div>
                    <div
                        className="progress-segment right"
                        style={{ width: `${progress / 2}%` }}
                    ></div>
                </div>
                <div className="progress-text">{progress}%</div>
            </div>
        </div>
    );
};

export default Loader;
