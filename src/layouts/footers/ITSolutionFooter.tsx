import footerShape from '../../../public/assets/img/images/footer-shape2-img.png';
import logoWhite from '../../../public/assets/img/images/cheeltech_logo_white1.png';
import { FooterSocialIcons } from './subComponents/FooterSocialIcons';
import { ArrowSeven } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ITSolutionFooter = () => {
    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="crp-footer-area it-footer-style crp-footer-bg p-relative pt-120 z-index-1">
                <div className="it-footer-shape">
                    <Image data-speed="1.1" src={footerShape} alt="footer-shape" />
                </div>
                <div className="container container-1350">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                            <div className="crp-footer-widget crp-footer-col-1 mb-90 tp_fade_anim" data-delay=".3">
                                <div className="crp-footer-logo">
                                    <Link href="/"><Image width={180} src={logoWhite} alt="logo-white" /></Link>
                                </div>
                                <p>Cheeltech empowers digital success <br />  with  innovativesolutions, exceptional <br />  websitedesign, and an unwavering<br /> commitment to client satisfaction.</p>

                                {/* footer social icons */}
                                <FooterSocialIcons className="crp-footer-social" />
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-2 mb-90 tp_fade_anim" data-delay=".5">
                                <h4 className="crp-footer-widget-title">Company</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="/">Home</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/About">About</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Services</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Projects">Projects</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Blog">Blog </Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                            <div className="crp-footer-widget crp-footer-col-3 mb-90 tp_fade_anim" data-delay=".5">
                                <h4 className="crp-footer-widget-title">IT Services</h4>
                                <div className="crp-footer-widget-menu">
                                    <ul>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Website Design</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Web Development</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Custom Web Apps</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Api Integration</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Secure Meintenance</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">E-Commerce solutions</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">CMS Development</Link></li>
                                        <li><Link className="tp-line-white cream-2" href="/Services">Newsletter Development</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                            <div className="crp-footer-widget crp-footer-col-4 mb-90 tp_fade_anim" data-delay=".7">
                                <div className="crp-footer-widget-info mb-20">
                                    <h4 className="crp-footer-widget-title">Location</h4>
                                    <Link className="tp-line-white cream-2" href="https://www.google.com/maps" target="_blank">
                                        Location: Karachi, Pakistan
                                    </Link>
                                </div>
                                <div className="crp-footer-widget-info">
                                    <h4 className="crp-footer-widget-title">Call Us on</h4>
                                    <div className="crp-footer-widget-contact">
                                        <Link className="tp-line-white cream-2" href="mailto:hello@cheeltech.com"> hello@cheeltech.comm</Link>
                                    </div>
                                    <div className="crp-footer-widget-contact">
                                        <Link className="tel tp-line-white cream-2 d-inline-block" href="tel:(+1)2345678910">(+92) 342 2766 346</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="colx-l-12">
                            <div className="crp-footer-big-text-wrap tp_fade_anim" data-delay=".3">
                                <Link className="crp-footer-big-text text-center" href="/Contact">
                                    <span>
                                        <span className="text-1">{`Let's Discuss`}</span>
                                        <span className="text-2">{`Let's Discuss`}</span>
                                    </span>
                                    <i>
                                        <ArrowSeven color='currentcolor' />
                                        <ArrowSeven color='currentcolor' />
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="crp-copyright-text text-center pt-40 pb-50">
                                {/* <p>© {getCurrentYear()} – {getCurrentYear()} | All rights reserved by <Link href="#"><span>Aqlova</span></Link></p> */}
                                <p>© 2021 - 2026 Cheeltech. All Rights Reserved. <Link href="https://themeforest.net/user/rajesh-doot/portfolio" target="blank"></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- footer area end -- */}

        </footer>
    );
};

export default ITSolutionFooter;