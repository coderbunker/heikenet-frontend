import React, { Component } from 'react';
import 'styles/SignIn.scss';
import {Image} from 'react-bootstrap';
import  {Link,NavLink} from 'react-router-dom';



class userInfo extends Component {
    
    render() {
        return (
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
                        <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">User Info {this.props.email}</NavLink> 
                        
                     </div>
                     <div>
                         <button className="FormField__Button_Confirm"><Link to='/confirmpayment'>Confirm Payment</Link></button>
                         
                         
                     </div>
                     <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                               
                            </form>
                    </div>
                </div>
         
                </div>
            </div>
        );
    }
}

export default userInfo;