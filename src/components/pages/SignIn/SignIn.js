import React, { Component } from 'react';
import './SignIn.scss';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom';
import {Image} from 'react-bootstrap';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirect: false
        };
    }

    responseGoogle(response) {
        console.log(response);
    }


    render() {
        return (
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div>
                <GoogleLogin
                    clientId="90022681731-dsrldqhegnt1jshje3i0opl2nlk3hfq8.apps.googleusercontent.com"
                    buttonText="Login using your Google Account"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />           
                </div>
            </div>
        );
    }
}

export default SignIn;