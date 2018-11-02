import React, { Component } from 'react';
import './ChooseAccount.scss';
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
             <p className="chooseac_title">Choose Your Account</p> 
             </div>
            <div className="App__AccountForm">
            
            
                <div className="FreelancerButton">
                <NavLink to='/create_freelancer' activeClassName="FormTitle__Link_Choosetype--Active" className="FormTitle__Link__Account ">Create Freelancer Account</NavLink>
                </div>
              
                
                <div className="ProjectButton">
                <NavLink to='/create_project' activeClassName="FormTitle__Link_Choosetype--Active" className="FormTitle__Link__Account ">Create Project Project</NavLink>
                </div>

                <div className="FormField__Link_have_an_account">
                <Link to="/signin" >Already have an account</Link> 
                </div>

                
            </div>
                        
             </div>
            </div>
        );
    }
}

export default SignIn;