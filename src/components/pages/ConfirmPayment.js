import React, { Component } from 'react';
import 'styles/SignIn.scss';
import  {NavLink} from 'react-router-dom';
import {Image} from 'react-bootstrap';


class ConfirmPayment extends Component {
    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        return (
            
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Form signin">
                    <div className="FormTitle">
                        <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Confirm Your Payment</NavLink> 
                     </div>
                     <div className="FormInput_Confirm">
                        <div className="FormCenter">
                            <form className="FormField" onSubmit={this.handleSubmit}>
                                <div className="FormField">
                                    <label className="FormField__Label_Confirm" htmlFor="email">Project Name</label>
                                    <p>Sworps.io</p>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label_Confirm" htmlFor="password">Developer Name</label>
                                    <p>Arsenii K, Denis T, Joy M</p>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label_Confirm" htmlFor="password">Task Done</label>
                                    <p>Node Setup, IPFS, Blockchain Cloud,</p>
                                    <p>Escrow Function, Smart Contract Audit</p>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label_Confirm" htmlFor="password">Total Amount(Hours)</label>
                                    <p>$30,000 (18hours)</p>
                                </div>
                            </form>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button_Confirm mr-20">Confirm</button>
                            <button className="FormField__Button_Confirm mr-20">Cancel</button>
                            
                    </div>
                </div>
         
                </div>
            </div>
           
        );
    }
}

export default ConfirmPayment;