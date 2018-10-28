import React, { Component } from 'react';
import 'styles/ChooseAccount.scss';
import  {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';

class AccountForm extends Component {
    render() {
        return (
           
            <div className="App__AccountForm">
           
                <Link to='/signup_freelancer'>
                <div className="FreelancerButton">
                    <Image className="freelancer_pic" src="assets/crypto.svg"/><p>JOIN AS FREELANCER</p>
                </div>
                </Link>
                <Link>
                <div className="ProjectButton">
                    <Image className="project_pic" src="assets/crypto.svg"/><p>CREATE A PROJECT</p>
                </div>
                </Link>
            </div>
           
        );
    }
}

export default AccountForm;