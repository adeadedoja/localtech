import React, { Component } from 'react';
import TicketImage from '../../assets/images/ticket.svg';
import NewTicketForm from '../Ticket/NewTicketForm';


class NewTicket extends Component {
    render() {
        return (
            <div className="container">
                <div className="row my-5 justify-content-around">
                    <div className="col-md-4 my-4">
                        <p className="mb-0 text-muted">Hi Damola,</p>
                        <h1 className="font-weight-bold">Submit a ticket</h1>
                        <div>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet massa ac egestas sollicitudin. Curabitur hendrerit vestibulum justo at tristique. Nulla lacinia tellus nec neque accumsan auctor.</p>
                            <img src={TicketImage} alt="ticket" className="ticket__img" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <NewTicketForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTicket;