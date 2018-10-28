import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {Home,About,SignIn,PageNotFound,ConfirmPayment} from 'pages';
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
            <Route exact path="/ConfirmPayment" component={ConfirmPayment}/>
          </div>
          <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default App;
