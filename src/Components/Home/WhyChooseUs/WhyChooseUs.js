import React from 'react';
import './WhyChooseUs.css'
import img1 from '../../../images/Why Choose Us/1.png'
import img2 from '../../../images/Why Choose Us/2.png'
import img3 from '../../../images/Why Choose Us/3.png'

const WhyChooseUs = () => {
        return (
                <div className="container mt-5">
                        <div className="text-center">
                                <h1 className="brand-color fw-bold">Why Choose Us</h1>
                                <h6>Here are reasons you should plan trip with us</h6>
                                <div className="row text-center mt-5 pt-3 pb-5">
                                        <div className="col-lg-4">
                                                <img src={img1} className="img-fluid" width="120" alt="" />
                                                <div className="mt-3">
                                                        <h4 className="brand-color fw-bold">Handpicked Hotels</h4>
                                                        <p>Julia's love of historical buildings, the English countryside, local food, and good wine inspired her dream to own a collection of hotels that would</p>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <img src={img2} className="img-fluid" width="120" alt="" />
                                                <div className="mt-3">
                                                        <h4 className="brand-color fw-bold">Handpicked Hotels</h4>
                                                        <p>Julia's love of historical buildings, the English countryside, local food, and good wine inspired her dream to own a collection of hotels that would</p>
                                                </div>
                                        </div>
                                        <div className="col-lg-4">
                                                <img src={img3} className="img-fluid" width="120" alt="" />
                                                <div className="mt-3">
                                                        <h4 className="brand-color fw-bold">Handpicked Hotels</h4>
                                                        <p>Julia's love of historical buildings, the English countryside, local food, and good wine inspired her dream to own a collection of hotels that would</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default WhyChooseUs;