import React, { Component } from 'react';
import {DropdownButton,MenuItem} from 'react-bootstrap';
import  {Link,NavLink,Redirect} from 'react-router-dom';
import './CreateFreelancer.scss';
import {Image} from 'react-bootstrap';
import axios from 'axios';

class CreateFreelancer extends Component {
    constructor() {
        super();

        this.state = {
            email : '',
            password : '',
            rate :'',
            currency :'',
            wallet_address :'',
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

 
    handleSubmit(e) {
        e.preventDefault();
        
       console.log('The form was submitted with the following data:');
       console.log(this.state);
       axios.post('https://heike-net.herokuapp.com/api/v1/login',{
        name:this.state.email,
        password:this.state.password,
        // need to add more data to send to the server
        
    }).then(function (res) {
        console.log(res);
        
        if(res.data === 'ok'){
            console.log("signup success");
            
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log('unauthorized, logging out ...');
      });
       
   }

    render() {
        const { redirect } = this.state;

        if (redirect) {
          return <Redirect to='/dashboard'/>;
        }

        return (
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Form">
                <div className="FormTitle">
                        {/* <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or  */}
                        <NavLink exact to="/signup_freelancer" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Create Freelancer Account</NavLink>
                </div>
                 <div className="FormInput">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit} >
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Wallet Address</label>
                                    <input type="password" id="wallet_address" className="FormField__Input" placeholder="Enter your Wallet Address" 
                                    name="wallet_address" value={this.state.wallet_address} onChange={this.handleChange}/>
                                </div>
                                
                                    <div className="FormField">
                                        <label className="FormField__Label" htmlFor="password">Rate</label>
                                        <input type="text" id="rate" className="FormField__Input Rate" placeholder="Enter your rate" name="rate" 
                                        value={this.state.rate} onChange={this.handleChange}/>
                                    
                                            <DropdownButton 
                                                // bsStyle={title.toLowerCase()}
                                                // title={title}
                                                // key={i}
                                                // id={`dropdown-basic-${i}`}
                                                // onSelect={this.handlSelect}
                                                >
                                                <MenuItem eventKey="1" >USD $</MenuItem>
                                                <MenuItem eventKey="2" >RMB $</MenuItem>
                                                <MenuItem eventKey="3" >SGD $</MenuItem>
                                                <MenuItem eventKey="3" >WON $</MenuItem>
                                                <MenuItem eventKey="3" >RUB $</MenuItem>
                                                <MenuItem eventKey="4" active>
                                                    Active Item
                                                </MenuItem>
                                        
                                            </DropdownButton>
                                    </div>
                               <div>
                               <label className="FormField__Label" htmlFor="Profile">Profile</label>
                               <Link to="#" className=""><button className="FormField__Button profile_link">Coderbunker Profile</button></Link>
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