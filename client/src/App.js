import './App.css';
import React from 'react';
import Login from './components/loginButton';
import { BrowserRouter } from 'react-router-dom';
import Trainedmodel from './posnet/Trainedmodel';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

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
        </div>
      </Provider>
    );
  }
}
export default App;
