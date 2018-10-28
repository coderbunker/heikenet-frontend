import React, { Component } from 'react';
import 'styles/SignIn.scss';
import  {BrowserRouter as Router,Route} from 'react-router-dom';
import {DropdownButton,MenuItem,Image} from 'react-bootstrap';

class SignUp extends Component {
    render() {
        return (
            <Router>
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <a href="#" className="PageSwitcher__Item">Sign In</a>
                        <a href="#" className="PageSwitcher__Item PageSwithcher__Item--Active">Sign Up</a>
                    </div>

                    <div className="FormTitle">
                        <a href="#" className="FormTitle__Link">Sign In</a> or 
                        <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
                    </div>

                    <div className="FormCenter">
                        <form className="FormField" onSubmit={this.handleSubmit}>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">Email</label>
                                <input type="text" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" />
                            </div>
                        </form>
                    </div>
                    <div className="FormCenter">
                        <form className="FormField" onSubmit={this.handleSubmit}>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" />
                            </div>
                        </form>
                    </div>
                    <div>
                    <div className="Form Currency">
                    <DropdownButton
                        // bsStyle={title.toLowerCase()}
                        // title={title}
                        // key={i}
                        // id={`dropdown-basic-${i}`}
                        >
                        <MenuItem eventKey="1">USD $</MenuItem>
                        <MenuItem eventKey="2">RMB $</MenuItem>
                        <MenuItem eventKey="3">SGD $</MenuItem>
                        <MenuItem eventKey="3">WON $</MenuItem>
                        <MenuItem eventKey="3">RUB $</MenuItem>
                        <MenuItem eventKey="4" active>
                            Active Item
                        </MenuItem>
                       
                        </DropdownButton>
                    </div>
                    <div className="FormCenter Rate">
                        <form className="FormField" onSubmit={this.handleSubmit}>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Rate</label>
                                <input type="text" id="rate" className="FormField__Input Rate" placeholder="Enter your rate" name="rate" />
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="FormCenter">
                        <form className="FormField" onSubmit={this.handleSubmit}>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Wallet Address</label>
                                <input type="password" id="wallet_address" className="FormField__Input" placeholder="Enter your Wallet Address" name="wallet_address" />
                            </div>
                        </form>
                    </div>
                    <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/>
                        I agree all statement in <a href="" className="FormField__TermsLink">terms of service</a>
                    </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button><a href="#"
                        className="FormField__Link">I'm already member</a>
                    </div>

                </div>
            </div>
            </Router>
        );
    }
}

export default SignUp;