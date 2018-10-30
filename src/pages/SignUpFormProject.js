import React, { Component } from 'react';
import  {Link,NavLink} from 'react-router-dom';
import 'styles/SignIn.scss';
import {Image} from 'react-bootstrap';

class SignUpFormProject extends Component {
    constructor(){
        super();

        this.state = {
            name : '',
            email : '',
            password : '',
            projectName : '',
            projectDescription :'',
            hasAgreed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange (e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        console.log('The form was submitted with the following date:');
        console.log(this.state);
    }

    render() {
        return (
            
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Form">
                <div className="FormTitle">
                        {/* <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or  */}
                        <NavLink exact to="/signup_project" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Create A Project</NavLink>
                </div>
                 <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">Name</label>
                                    <input type="text" id="name" className="FormField__Input" placeholder="Enter your fullname" name="name" 
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" 
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" 
                                    value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="projectName">Project Name</label>
                                    <input type="text" id="projectName" className="FormField__Input" placeholder="Enter your Project Name" name="projectName" 
                                    value={this.state.projectName} onChange={this.handleChange}/>
                                </div>
                                <div className="FormField desc">
                                    <label className="FormField__Label" htmlFor="projectName">Project Description</label>
                                    <textarea rows="3" cols="50" type="text" id="projectDescription" className="FormField__Input" placeholder="Describe your Project" name="projectDescription" 
                                    value={this.state.projectDescription} onChange={this.handleChange}/>
                                </div>
                                <div className="FormField">
                                <label className="FormField__CheckboxLabel">
                                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/>
                                    I agree all statement in <Link to="#" href="" className="FormField__TermsLink">terms of service</Link>
                                </label>
                                </div>

                                <div className="FormField">
                                    <button className="FormField__Button mr-20">Sign Up</button><Link to="/signin"
                                    className="FormField__Link haveMember">I'm already member</Link>
                                </div>
                            </form>
                          </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpFormProject;