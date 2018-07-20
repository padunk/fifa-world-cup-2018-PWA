import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import { NavBar } from './components/NavBar/navbar';
import { Home } from './components/Home/home';
import { Groups } from './components/Group/groups';
//import { GroupDetail } from './components/Group/group_detail';
import { Matches } from './components/Matches/matches';
import { Live } from './components/Live/live';
import { About } from './components/About/about';
import { NotFound } from './components/notfound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Redirect from='/index.html' to='/'/>
          <Route exact path = '/' component = { <Home />} />
          <Route exact path = '/groups' component = { <Groups />} />
          {/*<Route exact path = '/group/:group_id' component = {() => <GroupDetail />} />*/}
          <Route exact path = '/matches' component = { <Matches />} />
          <Route exact path = '/live match' component = { <Live />} />
          <Route exact path = '/about' component = { <About />} />
          <Route component = { NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
