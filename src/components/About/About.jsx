import React, {Component} from 'react';
import signature from '../../assets/images/lo.PNG';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="p-5 text-center h-400px d-flex flex-column justify-content-center">
                        <h1 className="display-4 text-primary">Offering comprehensive enterprise level IT support services to clients across all sectors.</h1>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                            <div>
                                <h1 className="text-primary">More about us</h1>
                                <p>LocalTech LLC, offers comprehensive enterprise level IT support services to clients across all sectors. With an extensive engineer network and years of support experience, we are uniquely positioned to support and streamline your current IT infrastructure for optimal performance and security.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="d-flex bd-highlight overflow-hidden">
                        <div><img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="400" /></div>
                        <div><img src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="400" /></div>
                        <div><img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=1260" width="400" /></div>
                        <div><img src="https://images.pexels.com/photos/2451645/pexels-photo-2451645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="400" /></div>
                        <div><img src="https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="400" /></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row py-5 text-center">
                        <div className="col-md-8 offset-md-2 col-6 offset-3">
                            <h1 className="text-primary small-border-bottom"><img src="https://image.flaticon.com/icons/svg/98/98868.svg" width="32" /> </h1>
                            <h3>"While servicing a support request, we at LocalTech LLC promise to hold your hand all through the process, using our bespoke proprietary system, we would give you real time updates and ETA on your request.</h3>
                            <img src={signature} width={200}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
