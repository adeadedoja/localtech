import React, { Component } from 'react';
import { FiArrowRight } from 'react-icons/fi';


class NewTicketForm extends Component {
    render() {
        return (
            <form className="mt-4">
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
        );
    }
}

export default NewTicketForm;