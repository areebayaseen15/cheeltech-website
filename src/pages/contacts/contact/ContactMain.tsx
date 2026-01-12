"use client";

import React, { useEffect } from "react";

// Components
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import ContactFormArea from "@/components/contacts/ContactFormArea";
import ContactHero from "@/components/contacts/ContactHero";
import InnerMapArea from "@/components/contacts/InnerMapArea";
import ContactUsAbout from "@/components/about/ContactUsAbout";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";

// Hooks
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import { fadeAnimation, contactBgAnimation } from "@/hooks/useGsapAnimation";

const ContactMain = () => {
  // Client-only hooks
  useCursorAndBackground({ bgColor: "#fff" });
  useScrollSmooth();

  // Run GSAP animations safely
  useEffect(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      contactBgAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div id="magic-cursor" className="cursor-white-bg">
        <div id="ball"></div>
      </div>

      {/* Global Components */}
      <BackToTop />
      <ITSolutionHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactHero />
            <InnerMapArea />
            <ContactFormArea />
            <ContactUsAbout />
          </main>
          <ITSolutionFooter />
        </div>
      </div>
    </>
  );
};

export default ContactMain;
