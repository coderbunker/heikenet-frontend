import React, { Component } from 'react';
import 'styles/UserInfo.scss';
import {Image} from 'react-bootstrap';
import { Jumbotron, Button,Card, CardText, CardTitle,Row,Col,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import  {Link,NavLink} from 'react-router-dom';



class UserInfo extends Component {
    
    render() {
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
                        <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">User Account Info {this.props.email}</NavLink>  
                     </div>
                     <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <Breadcrumb >
                                    <BreadcrumbItem className="userinfo" active>robert.dan@heike.net</BreadcrumbItem>
                                  </Breadcrumb>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <button className="FormField__Button changepassword">Change Password</button>
                                </div>
                                
                                    <div className="FormField">
                                        <label className="FormField__Label" htmlFor="rate">Rate / Per Hour</label>
                                        <Breadcrumb>
                                        <BreadcrumbItem className="userinfo" active>500 RMB</BreadcrumbItem>
                                        </Breadcrumb>
                                     </div>
                                     
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="wallet_address">Wallet Address</label>
                                    <Breadcrumb>
                                    <BreadcrumbItem className="userinfo" active>0x20449e7d9598f6a965ed44d1d1495aa5f8aea649</BreadcrumbItem>
                                  </Breadcrumb>
                                </div>

                                <div className="FormField">
                                <label className="FormField__Label" htmlFor="wallet_address">Project List</label>
                                </div>
                                {/* <div>
                                    <Jumbotron fluid className="projectList">
                                    <Row className="projectList">
                                        <Col sm="6">
                                            <Card body className="projectList">
                                            <CardTitle>Project Name : Swoprs.IO</CardTitle>
                                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </CardText>
                                            <Button  className="FormField__Button projectList">Project Detail</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="6">
                                            <Card body className="projectList">
                                            <CardTitle>Project Name : Swoprs.IO</CardTitle>
                                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </CardText>
                                            <Button  className="FormField__Button projectList">Project Detail</Button>
                                            </Card>
                                        </Col>
                                        </Row>
                                        <Row className="projectList">
                                        <Col sm="6">
                                            <Card body className="projectList">
                                            <CardTitle>Project Name : Swoprs.IO</CardTitle>
                                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </CardText>
                                            <Button  className="FormField__Button projectList">Project Detail</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="6">
                                            <Card body className="projectList">
                                            <CardTitle>Project Name : Swoprs.IO</CardTitle>
                                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </CardText>
                                            <Button  className="FormField__Button projectList">Project Detail</Button>
                                            </Card>
                                        </Col>
                                        </Row>
                                    </Jumbotron>
                                </div> */}


                     {/* <div>
                         <button className="FormField__Button_Confirm"><Link to='/confirmpayment'>Confirm Payment</Link></button>
                     </div> */}
                   
                </div>
         
                </div>
           
        );
    }
}

export default UserInfo;