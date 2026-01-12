"use client"
import { eyeAnimation, fadeAnimation, panelAnimation } from '@/hooks/useGsapAnimation';
import CorporateAgencyBannerTwo from '@/components/banner/CorporateAgencyBannerTwo';
import CorporateAgencyService from '@/components/service/CorporateAgencyService';
import CorporateAgencyAbout from '@/components/about/CorporateAgencyAbout';
import AboutStartupHero from '@/components/hero-banner/AboutStartupHero';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import React from 'react';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import HomeMainWork from '@/components/work/HomeMainWork';
import AboutBenifit from '@/components/benefits/aboutBenefit';
import ITSolutionBrandThree from '@/components/brand/itsolutionbrandthree';

const AboutStartupMain = () => {
    //Background Color & Cursor Class
    useCursorAndBackground();

    // Initialize all animations and effects
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            panelAnimation();
            eyeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            {/* -- Begin magic cursor -- */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <SearchArea />
            {/* <CorporateAgencyHeader /> */}
            <ITSolutionHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <AboutStartupHero />
                        <CorporateAgencyBannerTwo />
                        <CorporateAgencyAbout />
                         <ITSolutionBrandThree />
                        {/* <CorporateAgencyBrand /> */}
                        <CorporateAgencyService />
                          <HomeMainWork />
                          <AboutBenifit/>

                    </main>
                     <ITSolutionFooter />
                </div>
            </div>
        </>
    );
};

export default AboutStartupMain;