import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home,About,SignIn,PageNotFound,ConfirmPayment,ChooseAccount,SignUpFormFreelancer,SignUpFormProject,UserInfo,UserInfo_pr, SignUpForm} from 'pages';
import Navbar from 'pages/CustomNavBar';





class App extends Component {
  render() {
    return (
     
      <Switch>
        <div>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/signIn" component={SignIn}/>
            <Route exact path="/confirmpayment" component={ConfirmPayment}/>
            <Route exact path="/signup_freelancer" component={SignUpFormFreelancer}/>
            <Route exact path="/signup_project" component={SignUpFormProject}/>
            <Route exact path="/signup_form" component={SignUpForm}/>
            <Route exact path="/userinfo" component={UserInfo}/>
            <Route exact path="/userinfo_pr" component={UserInfo_pr}/>
          </div>
          <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default App;
