import mapIcon from '../../../public/assets/img/contact/map-icon.svg';
import Image from 'next/image';
import React from 'react';

const InnerMapArea = () => {
    return (
        <div className="tp-contact-map-ptb p-relative pb-120">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image src={mapIcon} alt="contact image" /></span>
                    </div>
                </div>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.52055898726!2d67.05112127369826!3d24.948397777871936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341a806a18791%3A0x909401ee044186e4!2sBhayani%20Shopping%20Centre!5e0!3m2!1sen!2s!4v1760730202921!5m2!1sen!2s" width="600" height="450"style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default InnerMapArea;