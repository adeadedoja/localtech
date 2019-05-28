import React, { Component } from 'react';
import TicketPerson from '../../assets/images/ticket.svg';
import { FiArrowRight } from 'react-icons/fi';


class NewTicket extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mx-5">
                    <div className="col-md-6 mt-4">
                        <p className="mt-5 mb-0 text-muted">Hi Damola,</p>
                        <h1 className="font-weight-bold">Submit a ticket</h1>
                        <div>
                            <p className="text-muted w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet massa ac egestas sollicitudin. Curabitur hendrerit vestibulum justo at tristique. Nulla lacinia tellus nec neque accumsan auctor.</p>
                            <img src={TicketPerson} alt="ticket" className="ticket__img" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <form className="mt-4 w-75">
                            <div className="form-group">
                                <label className="text-muted font-weight-normal">Support Category</label>
                                <input type="text" className="form-control bg-light" id="support-category" />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Subject</label>
                                <input type="text" className="form-control bg-light" id="subject" />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Description</label>
                                <textarea className="form-control bg-light" id="description" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-danger rounded-0 w-100 p-2 px-3 text-left">Submit <span className="float-right"><FiArrowRight /></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTicket;