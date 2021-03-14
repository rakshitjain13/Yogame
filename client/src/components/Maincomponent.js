import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Learn from './Learn';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClassifyAll from './ClassifyAll';
import Login from './loginButton';
import Clock from './Clock';
import LeaderBoard from './Leaderboard';
import Collect from '../posnet/Collect';
function Maincomponent() {
  const state = useSelector((state) => state);

  const Playpage = () => {
    if (state.auth.isAuthenticated)
      return <ClassifyAll type='Notpractice' level={state.auth.level} />;
    else
      return (
        <div className='h-full w-full flex justify-center items-center'>
          <Login />
        </div>
      );
  };
  return (
    <div className='bg-primary-light  min-h-screen w-full '>
      <Header state={state} />
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/learn' component={() => <Learn />} />
        <Route
          exact
          path='/practice'
          component={() => <ClassifyAll type='practice' />}
        />
        <Route exact path='/play' component={Playpage} />
        <Route
          exact
          path='/clock'
          component={() => (
            <Clock total={20} onComplete={() => {}} pause={() => false} />
          )}
        />
        <Route exact path='/leaderboard' component={LeaderBoard} />
        <Route exact path='/train' component={Collect}></Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default Maincomponent;
