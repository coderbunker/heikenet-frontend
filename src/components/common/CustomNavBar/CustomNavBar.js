import React, { Component } from 'react';
import {Navbar,Nav,NavItem,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavBar.scss';

class CustomNavBar extends Component {
    render() {
        return (
           <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><Image src="assets/logo.svg" /> Heike Network</Link>
                </Navbar.Brand>
            <Navbar.Toggle /> {/* Docs say it helps for the mobile */}
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight >
                    <NavItem eventKey={1} componentClass={Link} href="/" to='/'>
                        Home
                    </NavItem>
                   <NavItem eventKey={2} componentClass={Link} href="/about" to='/about'>
                        About
                    </NavItem>
                    {/* <NavItem eventKey={2} componentClass={Link} href="/confirmpayment" to='/confirmpayment'>
                        Confirm Payment
                    </NavItem> */}
                    <NavItem eventKey={4} componentClass={Link} href="/signin" to='/signin'>
                        Sign In
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
           </Navbar>
        );
    }
}

export default CustomNavBar;