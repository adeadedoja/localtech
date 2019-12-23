import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {FaCloudDownloadAlt} from "react-icons/fa";
import emailjs from 'emailjs-com';

const OnboardingModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const submit = () => {

        emailjs.init('user_sq8K9NkzlZ5KKRlWTPaLi');
        emailjs.sendForm('gmail','template_hwW2FeT9', '#myForm')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
                console.log('FAILED...', err);
            });
    }

    return (
        <div className="d-inline">
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
                <ModalHeader toggle={toggle} className="border-0">&nbsp;</ModalHeader>
                <ModalBody className="p-5">
                   <div className="row">
                       <div className="col-md-8">
                           <h1 className="pb-5">Fill the form and we will get back to you ASAP.</h1>
                       </div>
                       <div className="col-md-4">&nbsp;</div>
                       <div className="col-md-8">
                           <Form className="pr-5 border-right" id="myForm">
                               <FormGroup row>
                                   <Col md={6}>
                                       <Input type="text" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom" name="first_name" id="firstName" placeholder="First Name" />
                                   </Col>
                                   <Col md={6}>
                                       <Input type="text" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom" name="last__name" id="lastName" placeholder="Last Name" />
                                   </Col>
                               </FormGroup>
                               <FormGroup>
                                   <Input type="email" name="email" placeholder="Email" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom"/>
                               </FormGroup>
                               <FormGroup>
                                   <Input type="textarea" rows="5" name="message" className="border-top-0 border-right-0 border-left-0 rounded-0 border-bottom" placeholder="Briefly tell us about your project/organization and your current goals. How can we help you?" />
                               </FormGroup>
                               <Button onClick={submit} className="btn btn-danger">Send Message</Button>
                           </Form>
                       </div>
                       <div className="col-md-4 h-100">
                           <div className="d-flex align-items-end">
                               <div>
                                   <h4>Need Presentation?</h4>
                                   <p className="py-4">
                                       You like what we do, but need more convincing or need to convince your colleagues? Just download the link below or print or share the link to the PDF with your colleagues.
                                   </p>
                                   <a href="/stuff"><FaCloudDownloadAlt/> Company Profile (10 mb.)</a>
                               </div>
                           </div>
                       </div>
                   </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default OnboardingModal;