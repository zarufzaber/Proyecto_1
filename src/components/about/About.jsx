import React from "react";
import "./about.css";
import about from "../../image/imageAbout.jpg";

import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";

const About = () => {
    return (
        <div className="container about-section" id="about">
            <div className="row">

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-image">
                        <img src={about} alt="about_image" />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <div className="about-title">
                            <h5>About</h5>
                            <span className="line"></span>
                        </div>

                        <p>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </p>

                        <div className="card-design">
                            <div className="about-list-item">
                                <div className="about-details-icon">
                                    <p>
                                        <FcSlrBackSide size={50} />
                                    </p>
                                </div>
                                <div>
                                    <h6>Perfect day out</h6>
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-design">
                            <div className="about-list-item">
                                <div className="about-details-icon">
                                    <p>
                                        <FcWorkflow size={50} />
                                    </p>
                                </div>
                                <div>
                                    <h6>Perfect day out</h6>
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-design">
                            <div className="about-list-item">
                                <div className="about-details-icon">
                                    <p>
                                        <FcShop size={50} />
                                    </p>
                                </div>
                                <div>
                                    <h6>Perfect day out</h6>
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
