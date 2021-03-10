import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Learn from './Learn';
import { Redirect, Route, Switch } from 'react-router-dom';
import Practice from './Practice';
import Clock from './Clock';
import LeaderBoard from './Leaderboard';
function Maincomponent() {
  return (
    <div className='bg-primary-light  h-full w-full'>
      <Header />
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/learn' component={() => <Learn />} />
        <Route exact path='/practice' component={() => <Practice />} />
        <Route
          exact
          path='/clock'
          component={() => (
            <Clock total={20} onComplete={() => {}} pause={() => false} />
          )}
        />
        <Route exact path='/leaderboard' component={() => <LeaderBoard />} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default Maincomponent;
