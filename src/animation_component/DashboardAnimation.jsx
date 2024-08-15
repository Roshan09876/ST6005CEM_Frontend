import React from 'react';
import dashboardAnimationData from '../assets/animation/wood_logo_animation.json';
import Lottie from 'react-lottie';

const DashboardAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: dashboardAnimationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="hidden relative md:block w-full max-w-[200px] md:max-w-[700px] sm:max-w-[200px] xs:max-w-[200px] mx-auto">
            <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
    );
};

export default DashboardAnimation;
