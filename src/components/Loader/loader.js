import React, { useState, useEffect, useRef } from "react";
import "./loader.css";

const Loader = ({ duration = 3000, onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const intervalRef = useRef(null);
    const completeTimerRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    // Wait 1 second before starting fade out
                    completeTimerRef.current = setTimeout(() => {
                        setIsVisible(false);
                    }, 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, duration / 100);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(completeTimerRef.current);
        };
    }, [duration]);

    // When fade out completes, call onComplete
    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => onComplete(), 300); // Match this with CSS transition time
            return () => clearTimeout(timer);
        }
    }, [isVisible, onComplete]);

    return (
        <div className={`loader-container ${isVisible ? 'visible' : 'hidden'}`}>
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