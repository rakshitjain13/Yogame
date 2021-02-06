import './App.css';
import React from 'react';
import Login from './components/loginButton';
import { BrowserRouter } from 'react-router-dom';
import Trainedmodel from './posnet/Trainedmodel';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Collect from './posnet/Collect';
import Posnet from './posnet/Posnet';
import Axios from 'axios';
import './App.css';
import Tfposnet from './posnet/Tfposnet';
import { testfunction } from './posnet/train';

import Trainedmodel from './posnet/Trainedmodel';
import { useEffect } from 'react';
import Maincomponent from './components/Maincomponent';

const store = ConfigureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <div className=''>
          <Login />
          <Maincomponent />
        </div>
      </Provider>
    );
  }
}

export default App;
