import React, { Component } from 'react';
import 'styles/ChooseAccount.scss';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import SignUpFormProject from 'pages/SignUpFormProject';
import SignUpFormFreelancer from 'pages/SignInForm';
import AccountForm from 'pages/AccountForm';

class ChooseAccount extends Component {
    render() {
        return (
        <Router>
            <div className="Background">
                {/* <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div> */}
                <div className="App__Account">
                 <div className="FormTitle">
                 Select An Account Type To Register
                 </div>
                 <Route exact path="/accountform" component={AccountForm}/>
                 <div className="App__AccountForm">
                    <Link to="/signup_freelancer" className="AccountButton__Link" component={SignUpFormFreelancer}>
                        <div className="FreelancerButton">
                            <Image className="freelancer_pic" src="assets/crypto.svg"/><p>JOIN AS FREELANCER</p>
                        </div>
                    </Link>
                    <Link  exact to="/signup_project" className="AccountButton__Link " component={SignUpFormProject}>
                        <div className="ProjectButton">
                            <Image className="project_pic" src="assets/crypto.svg"/><p>CREATE A PROJECT</p>
                        </div>
                    </Link>

                   <Route exact path="/signup_freelancer" component={SignUpFormFreelancer}></Route>
                    <Route exact path="/signup_project" component={SignUpFormProject}></Route>

                 </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default ChooseAccount;