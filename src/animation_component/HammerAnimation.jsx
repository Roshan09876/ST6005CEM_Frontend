import React from 'react';
import hammerAnimationData from '../assets/animation/hammer_animation.json';
import Lottie from 'react-lottie';

const HammerAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: hammerAnimationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="hidden relative md:block w-full max-w-[200px]  sm:max-w-[200px] xs:max-w-[200px] mx-auto">
            <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
    );
};

export default HammerAnimation;
