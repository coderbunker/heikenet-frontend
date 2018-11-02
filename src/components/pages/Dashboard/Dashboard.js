import React, { Component } from 'react';
import './Dashboard.scss';
import  {Link,NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';





class SignIn extends Component {
   
    render() {
   
        return (
            
            <div className="Background">
            <div className="App__Aside">
            <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
            </div>
            <div className="App__Account">
             <div className="FormTitle">
             <p className="chooseac_title">Dashboard</p> 
             </div>
            <div className="App__AccountForm">
            
            
               

                <div className="FormField__Link_Home">
                <Link to="/home" >Move to Home Page</Link> 
                </div>

                
            </div>
                        
             </div>
            </div>
        );
    }
}

export default SignIn;