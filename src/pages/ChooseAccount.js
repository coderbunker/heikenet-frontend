import React, { Component } from 'react';
import 'styles/ChooseAccount.scss';
import  {NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';


class ChooseAccount extends Component {
    render() {
        return (
      
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Account">
                 <div className="FormTitle">
                 <p className="chooseac_title">Select An Account Type</p> 
                 </div>
                <div className="App__AccountForm">
                
                
                    <div className="FreelancerButton">
                    <NavLink to='/signup_freelancer' activeClassName="FormTitle__Link_Choosetype--Active" className="FormTitle__Link "><Image className="freelancer_pic" src="assets/crypto.svg"/>JOIN AS FREELANCER</NavLink>
                    </div>
                  
                    
                    <div className="ProjectButton">
                    <NavLink to='/signup_project' activeClassName="FormTitle__Link_Choosetype--Active" className="FormTitle__Link "><Image className="project_pic" src="assets/crypto.svg"/>CREATE A PROJECT</NavLink>
                    </div>
                    
                </div>
                            
                 </div>
                </div>
          
        );
    }
}

export default ChooseAccount;