import React, { Component } from 'react';
import  {Link} from 'react-router-dom';


class SignInForm extends Component {
    render() {
        return (
            
                 <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" />
                                </div>
                            </form>
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" />
                                </div>
                            </form>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign In</button>
                            <div>
                            <Link to="/createaccount" className="FormField__Link">Create an account</Link> 
                            </div>
                            
                    </div>
                </div>
        );
    }
}

export default SignInForm;