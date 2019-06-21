import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import './Home.scss';
import landingImage from '../../assets/images/server.svg'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="hero">
                    <div className="container d-flex h-100">
                        <div className="row align-self-center w-100">
                            <div className="col-md-6 hero__info">
                                <h1>Get a technician right now</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <Button color="danger" size="lg" className="hero__info__button btn btn-danger rounded-0">Get a technician now</Button>
                            </div>
                            <div className="col-md-6 hero__image">
                                <img src={landingImage} alt="landing" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>

            </Fragment>
        );
    }
}

export default Home;