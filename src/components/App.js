import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home,About,ChooseAccount,Dashboard,PageNotFound,SignIn,SignUp,UserAccount,CreateProject,CreateFreelancer} from 'components'
import Navbar from '../components/common/CustomNavBar/CustomNavBar';





class App extends Component {
  render() {
    return (
     
      <Switch>
        <div>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/signIn" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/choose_account" component={ChooseAccount}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/create_freelancer" component={CreateFreelancer}/>
            <Route exact path="/create_project" component={CreateProject}/>
            <Route exact path="/user_account" component={UserAccount}/>
            
          </div>
          <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default App;
