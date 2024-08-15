import React from 'react'
import cupAnimationData from '../assets/animation/cup_animation.json';

import Lottie from 'react-lottie';

const CupAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: cupAnimationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="rounded-xl hidden md:block w-full max-w-[100px] md:max-w-[400px] sm:max-w-[150px] xs:max-w-[100px] mx-auto">
            <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
    );
}

export default CupAnimation
