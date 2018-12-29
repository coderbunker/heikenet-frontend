import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { 
  Home, About, ChooseAccount, Dashboard, PageNotFound, SignIn, SignUp, 
  UserAccount, CreateProject, CreateFreelancer, Register, Profile
} from 'components'
import Navbar from '../components/common/CustomNavBar/CustomNavBar';
import SignedInRoute from '../components/common/SignedInRoute';

class App extends Component {
  render() {
    return (
     
      <Switch>
        <div>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <SignedInRoute exact path="/signIn" component={SignIn}/>
            <SignedInRoute exact path="/signup" component={SignUp}/>
            <SignedInRoute exact path="/register" component={Register}/>
            <SignedInRoute exact path="/choose_account" component={ChooseAccount}/>
            <SignedInRoute exact path="/dashboard" component={Dashboard}/>
            <SignedInRoute exact path="/create_freelancer" component={CreateFreelancer}/>
            <SignedInRoute exact path="/create_project" component={CreateProject}/>
            <SignedInRoute exact path="/user_account" component={UserAccount}/>
            <SignedInRoute exact path="/profile" component={Profile}/>
          </div>
          <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default App;
