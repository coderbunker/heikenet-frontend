import React, { Component } from 'react';
import  {Link,NavLink} from 'react-router-dom';
import './Register.scss';
import {Image} from 'react-bootstrap';
import Iframe from 'react-iframe'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            wallet:'',            
            rate :'',
            currency :'',
            info:''
        }
    }

    render() {
        return (
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div>
                <Iframe 
                    url="https://docs.google.com/forms/d/e/1FAIpQLSfnRDWE3UrYLGEoErwmfgk1wb1_9U8By8JXg95GGWuWp2EYew/viewform?embedded=true" 
                    width="75%" height="818" frameborder="0" marginheight="0" marginwidth="0">
                Loading...</Iframe>
                </div>
            </div>
            
        );
    }
}

export default Register;