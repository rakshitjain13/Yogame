import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Learn from './Learn';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClassifyAll from './ClassifyAll';
import Login from './loginButton';
import Clock from './Clock';



function Maincomponent() {
	const state= useSelector((state) => state);
	const Playpage=()=>{
		if(state.auth.isAuthenticated)
		 return <ClassifyAll type="Notpractice" level={1}/>;
		else
		 return(
			 <div className="h-full w-full flex justify-center items-center">
				 <Login/>
			</div>
		 );
	}
  return (
		<div className="bg-primary-light  min-h-screen w-full ">
			<Header state={state}/>
			<Switch>
				<Route exact path="/" component={() => <Home />} />
				<Route exact path="/learn" component={() => <Learn />} />
				<Route exact path="/practice" component={() => <ClassifyAll type="practice"/>} />
				<Route exact path="/play" component={Playpage} />
				<Route exact path="/clock" component={() => <Clock total={20} onComplete={()=>{}} pause={()=>false}/>} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default Maincomponent;
