"use client"
import { contactBgAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ContactFormArea from '@/components/contacts/ContactFormArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';

import InnerMapArea from '@/components/contacts/InnerMapArea';
import ContactHero from '@/components/contacts/ContactHero';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import ITSolutionFooter from '@/layouts/footers/ITSolutionFooter';
import ITSolutionHeader from '@/layouts/headers/ITSolutionHeader';
import ContactUsAbout from '@/components/about/ContactUsAbout';

const ContactMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            contactBgAnimation()
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
            {/* <InnerPageHeader /> */}
            <ITSolutionHeader/>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ContactHero />
                        <InnerMapArea />
                        <ContactFormArea />
                                  <ContactUsAbout />
                        {/* <ContactLocationArea /> */}
                    </main>
                    {/* <HomeMainFooter /> */}
                    <ITSolutionFooter />
                </div>
            </div>
        </>
    );
};

export default ContactMain;