import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,/*Grid,Row,Col,Image,*/Button} from 'react-bootstrap';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
        <Jumbotron>
            <h2>Welcome to the Internet of Work</h2>
            <h3><br></br>Heike network is a peer-to-peer workplace
            <br></br>where projects meet coders</h3>
            <Link to='/signup'>
             <Button bsStyle="primary" bsSize="large">Let's get Started</Button>
        </Link>
        </Jumbotron>
         

            </div> 
        ); 
    }
}

export default Home;


            // <div className="lower-div">

            // <Image src="assets/start.svg" className="function-pic"/> 

            // <Image src="assets/management.svg" className="function-pic"/> 
            // </div>
