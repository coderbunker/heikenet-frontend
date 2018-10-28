import React, { Component } from 'react';
import 'styles/SignIn.scss';
import  {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import SignUpFormFreelancer from 'pages/SignUpFormFreelancer';
import SignUpFormProject from 'pages/SignUpFormProject';
import SignInForm from 'pages/SignInForm';

import {Image} from 'react-bootstrap';

class SignUp extends Component {
    render() {
        return (
            <Router>
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
                        <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                        <NavLink exact to="/signup_project" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Sign Up</NavLink>
                    </div>
                    <Route exact path="/signup_freelancer" component={SignUpFormFreelancer}></Route>
                    <Route exact path="/signup_project" component={SignUpFormProject}></Route>

                    <Route exact path="/signin" component={SignInForm}>
                    
                        <h1>SignIn</h1>
                    </Route>
                </div>
            </div>
            </Router>
        );
    }
}

export default SignUp;