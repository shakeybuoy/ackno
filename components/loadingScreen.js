import React from "react";
import styles from '../styles/Home.module.css'

function LoadingScreen() {
    return (
        <div className="all">
            <div className="container">
                <div className="top"></div>
                <div className="inner-oval">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
            </div>
        </div>

    );
}

export default LoadingScreen;