import React from 'react'
import consultingAnimationData from '../assets/animation/consulting_animation.json';

import Lottie from 'react-lottie';

const ConcultingAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: consultingAnimationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="rounded-xl hidden md:block w-full max-w-[100px] md:max-w-[200px] sm:max-w-[150px] xs:max-w-[100px] mx-auto">
            <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
    );
}

export default ConcultingAnimation
