import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="container pt-5">
                <footer className="py-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <small className="d-block mb-3 text-muted">&copy; 2020, LocalTech</small>
                        </div>
                        {/*<div className="col-6 col-md">*/}
                            {/*<h5>Features</h5>*/}
                            {/*<ul className="list-unstyled text-small">*/}
                                {/*<li><a className="text-muted" href="#">Cool stuff</a></li>*/}
                                {/*<li><a className="text-muted" href="#">Random feature</a></li>*/}
                                {/*<li><a className="text-muted" href="#">Team feature</a></li>*/}
                                {/*<li><a className="text-muted" href="#">Stuff for developers</a></li>*/}
                                {/*<li><a className="text-muted" href="#">Another one</a></li>*/}
                                {/*<li><a className="text-muted" href="#">Last time</a></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                        <div className="col-6 col-md">
                            <h5>Localtech</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/about">About</a></li>
                                <li><a className="text-muted" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Quick Link</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Submit Ticket</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
