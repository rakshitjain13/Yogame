import './App.css';
import React from 'react';
// import Login from './components/loginButton';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import './App.css';

import Maincomponent from './components/Maincomponent';

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      // <>
      /*<div>
        <Collect />
      </div>*/
      //<Trainedmodel />
      // </>
      <BrowserRouter>
        <Provider store={store}>
          <div className=''>
            <Maincomponent />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
