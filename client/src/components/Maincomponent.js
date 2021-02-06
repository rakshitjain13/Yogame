import Header from './Header';
import Home from './Home';
import Learn from './Learn';
import { Route, Switch } from 'react-router-dom';
function Maincomponent() {
  return (
    <div className='bg-primary-light  h-full w-full'>
      <Header />
      <Route exact path='/' component={() => <Home />} />
      <Route exact path='/learn' component={() => <Learn />} />
    </div>
  );
}

export default Maincomponent;
