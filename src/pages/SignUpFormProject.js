import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class SignUpFormProject extends Component {
    render() {
        return (
            
                 <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">Name</label>
                                    <input type="text" id="name" className="FormField__Input" placeholder="Enter your fullname" name="name" />
                                </div>
                            </form>
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
                       
                        
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="projectName">Project Name</label>
                                    <input type="text" id="projectName" className="FormField__Input" placeholder="Enter your Project Name" name="projectName" />
                                </div>
                            </form>
                        </div>
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField desc">
                                    <label className="FormField__Label" htmlFor="projectName">Project Description</label>
                                    <textarea rows="3" cols="50" type="text" id="projectDescription" className="FormField__Input" placeholder="Describe your Project" name="projectDescription" />
                                </div>
                            </form>
                        </div>
                        <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/>
                            I agree all statement in <a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button><Link to="/signin"
                            className="FormField__Link">I'm already member</Link>
                        </div>
                    </div>
                  
            
        );
    }
}

export default SignUpFormProject;