import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
            <Jumbotron>
            <h2>Welcome to HeikeNet</h2>
            <h3>It's decentralized freelancer place</h3>
            <Link to='/signup'>
             <Button bsStyle="primary" bsSize="large">Let's get Started</Button>
        </Link>
        </Jumbotron>
           <Grid>
              
               <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="function-wrapper">
                        <Image src="assets/crypto.svg" className="function-pic"/>
                        <h3>HeikeNet</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                    </Col> 
                    <Col xs={12} sm={4} className="function-wrapper">
                        <Image src="assets/crypto.svg" className="function-pic"/>
                        <h3>HeikeNet</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                    </Col> 
                    <Col xs={12} sm={4} className="function-wrapper">
                        <Image src="assets/crypto.svg" className="function-pic"/>
                        <h3>HeikeNet</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                    </Col> 
               </Row>
           </Grid>
           </div>
        ); 
    }
}

export default Home;