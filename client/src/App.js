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

export default App;
