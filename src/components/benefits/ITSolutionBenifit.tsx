import benifitsShape from '../../../public/assets/img/home-11/feature/benifits-shape.png';
import Image from 'next/image';
import React from 'react';

const AboutBenifit = () => {

    // Create benefits data array
    // const benefitsData: BenefitItemDT[] = [
    //     {
    //         id: 1,
    //         icon: <GrowthChartIcon />,
    //         title: "Grow your business",
    //         description: "We believe in challenges and so we have made challenges.",
    //         link: "#"
    //     },
    //     {
    //         id: 2,
    //         icon: <CostSavingsIcon />,
    //         title: "Cost savings ideas",
    //         description: "We believe in challenges and so we have made challenges.",
    //         link: "#"
    //     },
    //     {
    //         id: 3,
    //         icon: <PerformanceIcon />,
    //         title: "Boost performance",
    //         description: "We believe in challenges and so we have made challenges.",
    //         link: "#"
    //     }
    // ];

    return (
        <div className="it-benifit-area p-relative pt-120 pb-120">
            <div className="container benefit-container">
                <div className="about-benifit-bg z-index-1" style={{ backgroundColor: "#ebebff" }}>
                    <div className="it-benifit-shape">
                        <Image className="tp-zoom-in-out" src={benifitsShape} alt="benifit-image" />
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="it-benifit-title-box mb-55">
                                {/* <span className="tp-section-subtitle-platform platform-text-black mb-20 tp-split-text tp-split-right">Our Benefits</span> */}
                                <h4 className="about-benefit-title">Our Benefits</h4>
                            </div>
                        </div>
                    </div>
                   <div className="tp-benefits-heading tp_fade_anim" data-delay=".3">
                            <p>You need the best person for the job, wherever they’re located. We provide support, payroll tax management, and compliance management for remote,
                                multi-state, multi-location, and international employees. We believe that the human essential to start any successful project and that this where splendid  emotion between the re-generated company.</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBenifit;
