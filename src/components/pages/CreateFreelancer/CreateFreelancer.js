import React, { Component } from 'react';
import  {Link,NavLink} from 'react-router-dom';
import './CreateFreelancer.scss';
import {Image} from 'react-bootstrap';
import axios from 'axios';

class CreateFreelancer extends Component {
    constructor() {
        super();

        this.state = {
            wallet:'',            
            rate :'',
            currency :'',
            info:''
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

 
    handleSubmit(e) {
        e.preventDefault();
        
       console.log('The form was submitted with the following data:');
       console.log(this.state);
       axios.post('https://heikenet-backend.herokuapp.com/api/v1/users/profiles',{
        wallet:this.state.wallet,
        rate:this.state.rate,
        currency:this.state.currency,
        info:this.state.info

        // need to add more data to send to the server
    })
        .then(function (res) {
            console.log('response');
            console.log(res.data);
            if(res.data.token){
                window.location = "/dashboard"
            }else{
                window.location = "/login"
              
            }
        
        })
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
                        <NavLink exact to="/create_freelancer" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Create Freelancer Account</NavLink>
                </div>
                 <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit} >
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="wallet_address">Wallet Address</label>
                                    <input type="text" id="wallet_address" className="FormField__Input" placeholder="Enter your Wallet Address" 
                                    name="wallet_address" value={this.state.wallet_address} onChange={this.handleChange}/>
                                </div>
                                
                                    <div className="FormField">
                                        <label className="FormField__Label" htmlFor="password">Rate</label>
                                        <input type="text" id="rate" className="FormField__Input Rate" placeholder="Enter your rate" name="rate" 
                                        value={this.state.rate} onChange={this.handleChange}/>
                                              <select className="rate">
                                                <option value="usd">USD</option>
                                                <option value="rmb">RMB</option>
                                                <option value="sgd">SGD</option>
                                                <option value="won">WON</option>
                                                <option value="rub">RUB</option>
                                            </select>
                                    </div>
                                    
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="profile">Profile</label>
                                    <input type="text" id="profile" className="FormField__Input" placeholder="Enter your profile link" 
                                    name="profile" value={this.state.profile} onChange={this.handleChange}/>
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

export default CreateFreelancer;