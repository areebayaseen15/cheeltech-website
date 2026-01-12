"use client";

import React from "react";

// Components
import BlogListBreadCrumb from "@/components/breadcurmb/BlogListBreadCrumb";
import BlogListItem from "@/components/blog/subComponents/BlogListItem";
import BlogListPagination from "@/components/blog/BlogListPagination";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";

// Hooks
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import useScrollSmooth from "@/hooks/useScrollSmooth";

// GSAP
import { useGSAP } from "@gsap/react";
import {
  fadeAnimation,
  charAnimation,
  textRevealAnimation,
  scrollAnimation,
  portfolioItemPinAnimation,
  ScrollTrigger,
} from "@/hooks/useGsapAnimation";

// Data
import blogData from "@/data/blogData";

const BlogListMain = () => {
  // Client-only hooks
  useCursorAndBackground();
  useScrollSmooth();

  // GSAP animations (NO useEffect)
  useGSAP(() => {
    fadeAnimation();
    charAnimation();
    textRevealAnimation();
    scrollAnimation();
    portfolioItemPinAnimation();

    // Cleanup on unmount
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  });

  return (
    <>
      {/* Custom Cursor */}
      <div id="magic-cursor" className="cursor-white-bg">
        <div id="ball"></div>
      </div>

      <BackToTop />
      <ITSolutionHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogListBreadCrumb />

            <div id="down" className="tp-blog-list-ptb pb-80">
              <div className="container container-1230">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tp-blog-list-item-wrap pb-10">
                      {blogData.slice(25, 29).map((blog) => (
                        <BlogListItem key={blog.id} blog={blog} />
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="basic-pagination-wrap">
                      <div className="row">
                        <div className="col-xl-6">
                          <BlogListPagination />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <ITSolutionFooter />
        </div>
      </div>
    </>
  );
};

export default BlogListMain;
