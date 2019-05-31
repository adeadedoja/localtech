import React, { Component } from 'react';
import TicketPerson from '../../assets/images/ticket.svg';
import NewTicketForm from '../Ticket/NewTicketForm';


class NewTicket extends Component {
    render() {
        return (
            <div className="container">
                <div className="row col-md-10 offset-md-1">
                    <div className="col-md-6 mt-4">
                        <p className="mt-5 mb-0 text-muted">Hi Damola,</p>
                        <h1 className="font-weight-bold">Submit a ticket</h1>
                        <div>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet massa ac egestas sollicitudin. Curabitur hendrerit vestibulum justo at tristique. Nulla lacinia tellus nec neque accumsan auctor.</p>
                            <img src={TicketPerson} alt="ticket" className="ticket__img" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <NewTicketForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTicket;