import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Learn from './Learn';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClassifyAll from './ClassifyAll';
import Login from './loginButton';
import LeaderBoard from './Leaderboard';
import Collect from '../posnet/Collect';
function Maincomponent() {
  const state = useSelector((state) => state);

  const Playpage = () => {
    if (state.auth.isAuthenticated)
      return <ClassifyAll type='Notpractice' level={state.auth.level} />;
    else
      return (
        <div className=' w-full flex  justify-center items-center' style={{'marginTop':'40vh'}}>
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
        <Route exact path='/leaderboard' component={LeaderBoard} />
        <Route exact path='/train' component={Collect}></Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default Maincomponent;
