import React, { Component } from 'react';
import {Navbar,Nav,NavItem,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavBar.scss';

class CustomNavBar extends Component {
    render() {
        return (
           <Navbar default collapseOnSelect>
            <Navbar.Header className="header">
                <Navbar.Brand>
                    <Link to="/"><Image src="assets/logo.svg" /> HeikeNet</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClanss={Link} href="/" to='/'>
                        Home
                    </NavItem>
                    <NavItem eventKey={2} componentClanss={Link} href="/about" to='/about'>
                        HeikeNet
                    </NavItem>
                    {/* <NavItem eventKey={2} componentClanss={Link} href="/confirmpayment" to='/confirmpayment'>
                        Confirm Payment
                    </NavItem> */}
                    <NavItem eventKey={4} componentClanss={Link} href="/signin" to='/signin'>
                        Sign In
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
           </Navbar>
        );
    }
}

export default CustomNavBar;