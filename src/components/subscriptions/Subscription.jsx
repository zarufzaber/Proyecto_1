import React from "react";
import "./subscription.css";

import { IoIosSend } from "react-icons/io";

const Subscription = () => {
    return (
        <div className="container-fluid subscription">
            <div className="container">
                <div className="row">

                   
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="subscription_title">
                                <h5>News Letter. Subscribe Today</h5>
                            </div>

                            <div className="subscription-form">
                                <input type="text" placeholder="Your E-mail" />
                            </div>

                            <div className="subscription_button">
                                <p>Subscribe <IoIosSend size={20} /></p>
                            </div>
                        </div>


                </div>
            </div>
        </div>
    );
};

export default Subscription;
