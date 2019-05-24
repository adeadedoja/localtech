import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { FiUser, FiPlus, FiUserPlus } from 'react-icons/fi';


class Header extends Component {
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
            <div>
                <Navbar color="faded" className="container" light expand="md">
                    <NavbarBrand href="/">Logo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="mr-3" href="/home/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="mr-3 text-primary" href="/"><FiPlus/> Submit a ticket</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="btn btn-outline-primary mr-3 text-primary" href="/"><FiUser/> Log in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="btn btn-primary text-white" href="/"><FiUserPlus/> Sign up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;