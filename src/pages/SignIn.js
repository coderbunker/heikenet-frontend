import React, { Component } from 'react';
import 'styles/SignIn.scss';
import  {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';


class SignIn extends Component {
    render() {
        return (
            
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Form">
                    {/* <div className="PageSwitcher">
                    <Link to="/signin" className="PageSwitcher__Item">Sign In</Link>
                    <Link to="/signup_freelancer" className="PageSwitcher__Item PageSwithcher__Item--Active">Sign Up</Link>
                    </div> */}
                    <div className="FormTitle">
                        <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                     </div>
                     <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" />
                                </div>
                            </form>
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" />
                                </div>
                            </form>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign In</button>
                            <div>
                            <Link to="/chooseaccount" className="FormField__Link" >Create an account</Link> 
                            </div>
                            
                    </div>
                </div>
         
                </div>
            </div>
           
        );
    }
}

export default SignIn;