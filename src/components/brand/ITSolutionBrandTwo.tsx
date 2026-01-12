import { brandMarqueeSwiperParams } from '@/constants/swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIconEight } from '@/svg/StarIcons';
import React from 'react';

const ITSolutionBrandTwo = () => {

    const brandItems = [
        { id: 1, title: "Web development" },
        { id: 2, title: "Custom Web Apps" },
        { id: 3, title: "UI/UX Design" },
        { id: 4, title: "API Integrations" },
        { id: 5, title: "Secure Maintenance" },
        { id: 6, title: "E-commerce Solutions" },
        { id: 7, title: "CMS Development" },
        { id: 8, title: "Newsletter Development" },
        { id: 9, title: "Web development" },
        { id: 10, title: "Custom Web Apps" },
        { id: 11, title: "UI/UX Design" },
        { id: 12, title: "API Integrations" },
        { id: 13, title: "Secure Maintenance" },
        { id: 14, title: "E-commerce Solutions" },
        { id: 15, title: "CMS Development" },
         { id: 16, title: "Newsletter Development" },
    ];
    return (
        <div className="tp-brand-area it-brand-style pt-100">
            {/* First Brand Wrapper */}
            <div className="tp-brand-wrapper z-index-1" style={{ backgroundColor: "#5757ff" }}>
                <Swiper
                    className='tp-brand-active fix slide-transtion'
                    {...brandMarqueeSwiperParams}
                >
                    {brandItems.map((item) => (
                        <SwiperSlide key={`first-${item.id}`}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title">{item.title}</span>{" "}
                                <span><StarIconEight /></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Second Brand Wrapper (RTL) */}
            <div className="tp-brand-wrapper tp-brand-style-2" style={{ backgroundColor: "#000" }}>
                <Swiper
                    dir="rtl"
                    className='tp-brand-active fix slide-transtion'
                    {...brandMarqueeSwiperParams}
                >
                    {brandItems.map((item) => (
                        <SwiperSlide key={`second-${item.id}`}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title">{item.title}</span>{" "}
                                <span><StarIconEight /></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ITSolutionBrandTwo;