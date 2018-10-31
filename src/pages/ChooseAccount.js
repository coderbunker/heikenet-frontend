import React, { Component } from 'react';
import 'styles/ChooseAccount.scss';
import  {Link, NavLink} from 'react-router-dom';
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
                    <NavLink to='/signup_freelancer' activeClassName="FormTitle__Link_Choosetype--Active" className="FormTitle__Link__Account ">JOIN AS FREELANCER</NavLink>
                    </div>
                  
                    
                    <div className="ProjectButton">
                    <NavLink to='/signup_project' activeClassName="FormTitle__Link_Choosetype--Active" className="FormTitle__Link__Account ">CREATE A PROJECT</NavLink>
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

export default ChooseAccount;