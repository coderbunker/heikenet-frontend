/* global gapi */
import React, { Component } from 'react';
import {Navbar,Nav,NavItem,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import './CustomNavBar.scss';

class CustomNavBar extends Component {
    state = {
        profileObj: null,
        loggedIn: false
    }

    login(response) {
        console.log(response);
        this.setState({profileObj: response.profileObj});
        this.setState({loggedIn: true});
    }

    logout(response)  {
        console.log(response);
        this.setState({profileObj: null});
        this.setState({loggedIn: false});
    }

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
                    {
                        <NavItem eventKey={4} componentClass={Link} href="/register" to='/register'>
                           Register
                        </NavItem>
                    }
                    {
                        window.gapi &&
                        <NavItem eventKey={5} componentClass={Link} href="/profile" to='/profile'>
                           Profile
                        </NavItem>
                    }
                    {
                        this.state.loggedIn &&
                            <GoogleLogout
                            buttonText="Logout"
                            onLogoutSuccess={(e) => this.logout(e)}
                            >
                            </GoogleLogout>
                    }
                    {
                        !this.state.loggedIn &&
                        <GoogleLogin
                            clientId="754813079045-187m76rpapsbeu0srek2pjb5r2cj7c6p.apps.googleusercontent.com"
                            buttonText="Login using your Google Account"
                            onSuccess={(e) => this.login(e)}
                            onFailure={(e) => this.login(e)}
                            scope="profile email https://www.googleapis.com/auth/drive
                            https://www.googleapis.com/auth/presentations.currentonly
                            https://www.googleapis.com/auth/script.container.ui
                            https://www.googleapis.com/auth/script.external_request
                            https://www.googleapis.com/auth/spreadsheets
                            https://www.googleapis.com/auth/userinfo.email"
                            />    
                    }  
                    {
                        (this.state.profileObj && this.state.profileObj.name) && 
                            <div>{this.state.profileObj.name}</div>
                    }
   
                </Nav>
            </Navbar.Collapse>
           </Navbar>
        );
    }
}

export default CustomNavBar;