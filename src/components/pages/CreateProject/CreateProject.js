import React, { Component } from 'react';
import  {Link,NavLink} from 'react-router-dom';
import './CreateProject.scss';
import {Image} from 'react-bootstrap';

class CreateProject extends Component {
    constructor(){
        super();

        this.state = {
            company : '',
            projectName : '',
            projectDescription :'',
            budget: ''
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
                        <NavLink exact to="/signup_project" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Create A Project Account</NavLink>
                </div>
                 <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">Company Name</label>
                                    <input type="text" id="company" className="FormField__Input" placeholder="Enter your company name" name="company" 
                                    value={this.state.name} onChange={this.handleChange}/>
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
                                        <label className="FormField__Label" htmlFor="password">Monthly Budget</label>
                                        <input type="text" id="budget" className="FormField__Input Budget" placeholder="Enter your Budget" name="budget" 
                                        value={this.state.budget} onChange={this.handleChange}/>
                                </div>

                                 <div className="FormField">
                                <Link to="/dashboard"><button className="FormField__Button submit_form" type="submit">Submit Form</button></Link>
                                </div>
                            </form>
                          </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProject;