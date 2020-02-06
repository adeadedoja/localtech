import React, { Component, Fragment } from 'react';
import './Home.scss';
import HomeDashboardTool from './HomeDashboardTool';
import HomeTestimonial from './HomeTestimonial';
import HomeWhyUse from './HomeWhyUse';
import HomeHero from "./HomeHero";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HomeHero/>

                <HomeWhyUse/>

                <HomeTestimonial/>

                {/*<HomeDashboardTool/>*/}
            </Fragment>
        );
    }
}

export default Home;
