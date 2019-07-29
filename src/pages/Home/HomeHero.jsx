import React, {Component} from 'react';
import {Button} from "reactstrap";
import landingImage from "../../assets/images/server.svg";
import {FaFacebookF, FaTwitter, FaWhatsapp} from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi";

class HomeHero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="container d-flex h-100">
                    <div className="row align-self-center w-100">
                        <div className="col-md-5 hero__info">
                            <div>
                                <h1>Get technical support right now</h1>
                                <p className="py-3">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <Button color="danger" className="btn btn-danger rounded-0 mr-4">Get Started</Button>
                                <a><b><span className="text-danger"><FiChevronRight/></span> Explore the platform</b></a>
                            </div>
                            <div className="py-5">
                                <h2>
                                    <span className="mr-4"><FaFacebookF/></span>
                                    <span className="mr-4"><FaTwitter/></span>
                                    <span><FaWhatsapp/></span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-7 hero__image">
                            <img src={landingImage} alt="landing" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomeHero;