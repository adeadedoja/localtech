import React, {Component} from 'react';
import landingImage from "../../assets/images/h.png";
import {FaFacebookF, FaTwitter, FaWhatsapp} from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi";
import OnboardingModal from "../../components/Home/OnboardingModal";

class HomeHero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="container d-flex h-100">
                    <div className="row align-self-center w-100">
                        <div className="col-md-7 hero__info">
                            <div>
                                <h1 className="text-primary">Get technical support right now</h1>
                                <p className="py-3">
                                    LocalTech LLC, offers comprehensive enterprise level IT support services to clients across all sectors. With an extensive engineer network and years of support experience, we are uniquely positioned to support and streamline your current IT infrastructure for optimal performance and security.
                                </p>
                                <OnboardingModal buttonLabel="Get Started" className="chill"/>
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
                        <div className="col-md-5 hero__image">
                        </div>

                        <img src={landingImage} alt="landing" className="landing-image" />
                    </div>
                </div>

            </div>
        );
    }
}

export default HomeHero;