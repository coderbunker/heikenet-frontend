import React, { Component } from 'react';
import './Dashboard.scss';
<<<<<<< HEAD
import  {Link,NavLink} from 'react-router-dom';
=======
import  {Link} from 'react-router-dom';
>>>>>>> 8f45f1ddac5406a04a317a07ddd4b25b5d43fe75
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
            
<<<<<<< HEAD
            
               

                <div className="FormField__Link_Home">
                <Link to="/home" >Move to Home Page</Link> 
=======
                <div className="FormField__Link_Home">
                <Link to="#" >Move to Home Page</Link> 
>>>>>>> 8f45f1ddac5406a04a317a07ddd4b25b5d43fe75
                </div>

                
            </div>
                        
             </div>
            </div>
        );
    }
}

export default SignIn;