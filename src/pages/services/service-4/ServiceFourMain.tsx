"use client"
import {  fadeAnimation, imageRevealAnimation, panelAnimation, scrollMovingText } from '@/hooks/useGsapAnimation';
import DigitalMarketingBrandTwo from '@/components/brand/DigitalMarketingBrandTwo';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ServiceFourHero from '@/components/hero-banner/ServiceFourHero';
import ServiceFourBanner from '@/components/banner/ServiceFourBanner';
import InnerServiceFour from '@/components/service/InnerServiceFour';
import ServiceSolution from '@/components/service/ServiceSolution';
import ServiceFourBrand from '@/components/brand/ServiceFourBrand';
import ServicePricing from '@/components/price-area/ServicePricing';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ServiceFeature from '@/components/features/ServiceFeature';

const ServiceFourMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#F8F9FA" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            imageRevealAnimation();
            scrollMovingText();
            fadeAnimation();
                panelAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <ITSolutionHeader />
            
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <ServiceFourHero />
                        <ServiceFourBanner />
                        <ServiceSolution />
                        <div className="tp-service-4-padding-area" style={{ backgroundColor: "#F6F8EF" }}>
                            <InnerServiceFour />
                            <ServiceFourBrand />
                        
                              
                        <ServiceFeature />
                            <ServicePricing />
                        </div>
                        {/* <ServiceProcessArea /> */}
                        <DigitalMarketingBrandTwo/>
                    </main>
                    <ITSolutionFooter />
                </div>
            </div>
        </>
    );
};

export default ServiceFourMain;