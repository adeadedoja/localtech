import React, {Component} from 'react';
import {GiArmorPunch, GiBigGear, GiDandelionFlower} from "react-icons/gi";

class HomeWhyUse extends Component {
    render() {
        return (
            <div className="container mb-4">
                <h1 className="text-center small-border-bottom">Why use LocalTech?</h1>
                <div className="d-flex justify-content-center">
                    <span className="border-bottom">&nbsp;</span>
                </div>
                <div className="row py-5">
                    <div className="col-md-4">
                        <h4><span className="mr-4"><GiBigGear/></span>99% Resolution Time</h4>
                        <p className="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industrimply dummy text of the printing andindustrimply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-4">
                        <h4><span className="mr-4"><GiDandelionFlower/></span>Real Time Updates</h4>
                        <p className="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industrimply dummy text of the printing andindustrimply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-4">
                        <h4><span className="mr-4"><GiArmorPunch/></span>Kick Ass Tech Geeks</h4>
                        <p className="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industrimply dummy text of the printing andindustrimply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeWhyUse;