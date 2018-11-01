import React, { Component } from 'react';
import 'styles/SignIn.scss';
import  {Link,NavLink,Redirect} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import axios from 'axios';




class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }


    // if response is 'ok' then redirect
    handleSubmit(e) {
         e.preventDefault();
         this.setState({redirect:true});

        console.log('The form was submitted with the following data:');
        console.log(this.state);

        axios.post('https://heike-net.herokuapp.com/api/v1/login',{
            name:this.state.email,
            password:this.state.password,
            
            
        }).then(function (res) {
            console.log(res);
            
            if(res.data === 'ok'){
                console.log("login success");
                
            }
          })
          .catch(function (error) {
            console.log(error);
            console.log('unauthorized, logging out ...');
          })

          .then(()=> this.setState({redirect:true}))
    }

    render() {
        const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/userinfo'/>;
     }

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
                        <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                     </div>
                     <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <input type="text" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" 
                                    value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" 
                                    value={this.state.password} onChange={this.handleChange} />
                                </div>
                                 <div className="FormField">
                                    <button className="FormField__Button mr-20" type="submit">Sign In</button>
                                    <div>
                                    <Link to="/chooseaccount" className="FormField__Link" >Create an account</Link> 
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
         
                </div>
            </div>
           
        );
    }
}

export default SignIn;