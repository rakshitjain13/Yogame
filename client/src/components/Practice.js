import { useEffect, useState, useMemo } from 'react';
import Loader from 'react-loader-spinner';
import keepit from '../images/keepit.png';
import Namaste from '../images/namaste.png';
import Running from '../images/WealthyNaiveHorseshoecrab-max-1mb.gif';
import StopRunning from '../images/Stop_running.png';
import './practice.css';
import Detection from './Detection';
import Clock from './Clock';
import { useSelector, useDispatch } from 'react-redux';
import { updateLevel } from '../redux/ActionCreator';

function Practice() {
  const [starting, Setstarting] = useState(false);
  const [modelloading, Setmodelloading] = useState(true);
  const [doingright, Setdoingright] = useState(false);
  const [classifying, Setclassifying] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const IntialCompleted = () => {
    Setclassifying(true);
  };
  const pause = () => {
    return !doingright;
  };
  const whatdoing = () => {
    return doingright;
  };
  const completed = () => {
    dispatch(updateLevel(state.auth.user.user_id, 3));
  };
  const Startbutton = () => {
    if (!starting && !classifying) {
      return (
        <div
          className='text-secondary-dark text-2xl text-jost bg-secondary px-4 py-2 rounded-full shadow-xl transition ease-in-out duration-150 hover:bg-secondary-dark hover:text-secondary cursor-pointer'
          onClick={() => Setstarting(true)}
        >
          START
        </div>
      );
    } else if (starting && !classifying) {
      return (
        <div>
          <span className='text-xl text-primary font-bold text-jost'>
            Starting in
          </span>
          <Clock total={5} pause={() => false} onComplete={IntialCompleted} />
        </div>
      );
    } else if (starting && classifying) {
      return (
        <div className=''>
          <span className='text-xl text-primary text-center font-bold text-jost'>
            {doingright ? 'Doing Great 😂' : 'Keep Trying 🐒'}
          </span>
          <Clock total={15} pause={pause} /*onComplete={completed}*/ />
        </div>
      );
    } else {
      return null;
    }
  };
  useEffect(() => {}, []);
  const Modelcheck = (val) => {
    Setdoingright(val);
  };
  const Classifying = () => {
    return classifying;
  };
  return (
    <div className='flex flex-col overflow-hidden'>
      {modelloading && (
        <div className='absolute w-full h-full bg-primary-light z-50 '>
          <div className='flex  justify-center items-center h-full'>
            <Loader
              type='Circles'
              color='#424874'
              height={100}
              width={100}
              //3 secs
            />
          </div>
        </div>
      )}
      <div className='bg-primary-light w-full h-full  lg:flex'>
        <div className='w-full lg:w-1/2 '>
          <Detection
            Setmodelloading={Setmodelloading}
            Setdoingright={Modelcheck}
            Classifying={Classifying}
            whatdoing={whatdoing}
          />
        </div>
        <div>
          <button onClick={completed}>click here</button>
        </div>
        <div className='w-full lg:w-1/2 h-full relative  '>
          <div className='text-3xl text-jost font-bold text-secondary-dark w-full flex justify-center mt-5'>
            Perform same as shown below
          </div>
          <div className='flex justify-center '>
            <img src={Namaste} alt='...' width='400' height='400' />
          </div>
          <img
            src={keepit}
            className='absolute bottom-0 right-0 keep_img'
            alt='..'
          />
          {starting && (
            <img
              src={doingright ? Running : StopRunning}
              className='absolute bottom-0 left-0 keep_img'
              alt='...'
            />
          )}
          <div className='flex justify-center '>
            <Startbutton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;
