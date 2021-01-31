import './App.css';
import Posnet from './posnet/Posnet';
import Axios from 'axios';

function App() {
  const testfunction = () => {
    Axios.get('http://localhost:5000/google')
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=''>
      <div onClick={() => testfunction()}>press here</div>
    </div>
  );
}

import Collect from './posnet/Collect';
import Posnet from './posnet/Posnet';
import Tfposnet from './posnet/Tfposnet';
import { testfunction } from './posnet/train';

import Trainedmodel from './posnet/Trainedmodel';


// testfunction();

function App() {
  
  return (
    <div className="">
      {/* <Collect/> */}
      {/* <Tfposnet/> */}
     {/* <Posnet/> */}
     <Trainedmodel/>
    </div>
  );
}
export default App;
