import brand1 from "../../../public/assets/img/cheeltech-logos/bnc-logo.png";
import brand2 from "../../../public/assets/img/cheeltech-logos/Untitled-2.png";
import brand3 from "../../../public/assets/img/cheeltech-logos/markable-logo.png";
import brand4 from "../../../public/assets/img/cheeltech-logos/brandopurtunity-logo.png";
import brand5 from "../../../public/assets/img/cheeltech-logos/prepaynation-logo.png";
import brand6 from "../../../public/assets/img/cheeltech-logos/imp-logo.png";
import brand7 from "../../../public/assets/img/cheeltech-logos/assendive-logo.png";
import Image from 'next/image';
import React from 'react';

// Import Swiper components and modules
import { creative_brand_swiper } from "@/constants/swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ITSolutionBrand = () => {
    // Brand data array
    const brandData = [
        { id: 1, imageSrc: brand1, alt: 'Brand 1' },
        { id: 2, imageSrc: brand2, alt: 'Brand 6' },
        { id: 3, imageSrc: brand3, alt: 'Brand 3' },
        { id: 4, imageSrc: brand4, alt: 'Brand 4' },
        { id: 5, imageSrc: brand5, alt: 'Brand 5' },
        { id: 6, imageSrc: brand6, alt: 'Brand 6' },
         { id: 7, imageSrc: brand7, alt: 'Brand 7' },
        { id: 8, imageSrc: brand1, alt: 'Brand 1' },
        { id: 9, imageSrc: brand2, alt: 'Brand 2' },
        { id: 10, imageSrc: brand3, alt: 'Brand 3' },
        { id: 11, imageSrc: brand4, alt: 'Brand 4' },
        { id: 12, imageSrc: brand5, alt: 'Brand 5' },
        { id: 13, imageSrc: brand6, alt: 'Brand 6' },
        { id: 14, imageSrc: brand7, alt: 'Brand 7' },
        { id: 15, imageSrc: brand1, alt: 'Brand 1' },
        { id: 16, imageSrc: brand2, alt: 'Brand 2' },
        { id: 17, imageSrc: brand3, alt: 'Brand 3' },
        { id: 18, imageSrc: brand4, alt: 'Brand 4' },
    ];

    return (
        <div className="creative-brand-area it-brand-style text-center paste-bg-2 p-relative pt-20 pb-100">
            <span className="creative-brand-top-text tp-split-text tp-split-right">
                Trusted by worldwide companies
            </span>
            <div className="creative-brand-wrapper">
                <Swiper
                    className="creative-brand-active slider-transtion"
                    {...creative_brand_swiper}
                >
                    {brandData.map((brand) => (
                        <SwiperSlide key={brand.id}>
                            <div className="creative-brand-item">
                                <Image
                                    src={brand.imageSrc}
                                    alt={brand.alt}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default ITSolutionBrand;