import React, {Component} from 'react';
import phone from '../../assets/images/phone.png';
import {Button, Col, Form, FormGroup, Input} from "reactstrap";
import {submit} from "../../services/contact";
import {FaCloudDownloadAlt} from "react-icons/fa";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container min-vh-100 d-flex flex-column justify-content-center">
                    <div className="row pb-5">
                        <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                            <div>
                                <h1 className="text-primary display-3">Talk to us</h1>
                                <Form className="pr-5" id="myForm">
                                    <FormGroup row>
                                        <Col md={6}>
                                            <Input type="text" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom bg-transparent" name="first_name" id="firstName" placeholder="First Name" />
                                        </Col>
                                        <Col md={6}>
                                            <Input type="text" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom bg-transparent" name="last__name" id="lastName" placeholder="Last Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="email" name="email" placeholder="Email" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom bg-transparent"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="textarea" rows="5" name="message" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom bg-transparent" placeholder="Briefly tell us about your project/organization and your current goals. How can we help you?" />
                                    </FormGroup>
                                    <Button onClick={submit} className="btn btn-danger">Send Message</Button>
                                </Form>
                                <div className="mt-5">
                                    <h5>Need Presentation?</h5>
                                    <p className="py-4">
                                        You like what we do, but need more convincing or need to convince your colleagues? Just download the link below or print or share the link to the PDF with your colleagues.
                                    </p>
                                    <a href="/stuff"><FaCloudDownloadAlt/> Company Profile (10 mb.)</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={phone} className="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
