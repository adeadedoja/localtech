import React, {Component} from 'react';
import {GiArmorPunch, GiBigGear, GiDandelionFlower} from "react-icons/gi";

class HomeWhyUse extends Component {
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center small-border-bottom">Why use LocalTech?</h1>
                <div className="d-flex justify-content-center">
                    <span className="border-bottom">&nbsp;</span>
                </div>
                <div className="row py-5">
                    <div className="col-md-4 py-2">
                        <h4><span className="mr-4"><GiBigGear/></span>99% Resolution Time</h4>
                        <p className="py-2">Our Team is experienced in making sure whatever the support required, regardless of complexity. We get the job done in time to meet our specified SLA commitments.</p>
                    </div>
                    <div className="col-md-4 py-2">
                        <h4><span className="mr-4"><GiDandelionFlower/></span>Real Time Updates</h4>
                        <p className="py-2">While servicing a support request, we at LocalTech LLC promise to hold your hand all through the process, using our bespoke proprietary system, we would give you real time updates and ETA on your request.</p>
                    </div>
                    <div className="col-md-4 py-2">
                        <h4><span className="mr-4"><GiArmorPunch/></span>Kick Ass Tech Geeks</h4>
                        <p className="py-2">
                            The Geeks over at LocalTech LLC are experienced industry veterans that have invaluable experience in support of enterprise level hardware and software maintenance to industry leaders in all domains.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeWhyUse;