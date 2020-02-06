import React, {Component} from 'react';
import {FiChevronRight} from "react-icons/fi";

class HomeDashboardTool extends Component {
    render() {
        return (
            <div className="container py-5 my-4">
                <div className="row">
                    <div className="col-md-6">
                        <h1><b>Use our impressive admin tool to custom payments experiences with well-documented APIs</b></h1>
                        <p>Vivamus ut orci mi. Nullam dictum posuere purus, at mattis enim cursus nec. Sed facilisis arcu ultrices mauris viverra pretium. Quisque interdum luctus posuere. Sed eget ipsum eget mauris accumsan scelerisque. Vestibulum ac elementum tellus. Proin nisi nunc, vehicula in quam eu, porttitor vulputate massa. Maecenas sagittis velit est, et ornare orci scelerisque eget. Aenean aliquet cursus maximus. Morbi quis ligula in velit efficitur ullamcorper.
                        </p>
                        <a className="btn btn-primary text-white">Get Started <FiChevronRight/> </a>
                    </div>
                    <div className="col-md-6">
                        <img src="https://assets.paystack.com/assets/img/content/_768x685_crop_center-center_60_line/Robust-Suite-of-APIs-Opt.png" className="img-fluid" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeDashboardTool;