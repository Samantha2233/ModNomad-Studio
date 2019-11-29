import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SocialPractice from './pages/SocialPractice/SocialPractice';
import Spaces from './pages/Spaces/Spaces';
import Editorial from './pages/Editorial/Editorial';

import Nav from './components/Nav/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/social-practice' component={SocialPractice} />
        <Route path='/spaces' component={Spaces} />
        <Route path='/editorial' component={Editorial} />
      </Switch>
    </div>
  );
}

export default App;
