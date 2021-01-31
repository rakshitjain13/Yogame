import './App.css';
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
      <Tfposnet/>
     {/* <Posnet/> */}
     {/* <Trainedmodel/> */}
    </div>
  );
}
export default App;
