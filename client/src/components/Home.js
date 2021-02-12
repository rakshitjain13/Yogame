import Matimage from '../images/mat.png';
import Back from '../images/abstract-wallpaper_23-2148663179.jpg';
import './home.css';
import Pose from '../images/yoga-pose-estimation-removebg.png';
import Login from '../components/loginButton';
import { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='fixed w-full h-full'>
        <img src={Back} alt='' className='back' />
        <div className='mat'>
          <img src={Matimage} className='' alt='...' />
        </div>
        <div className='pose '>
          <img src={Pose} className='' alt='...' />
        </div>
        <div className='ml-5 lg:ml-10'>
          <div className='font-jost text-5xl  md:text-5xl  lg:text-7xl text-primary font-bold antialiased tracking-wider mt-48  '>
            Automated
          </div>
          <div className=' relative font-jost text-5xl  md:text-5xl lg:text-7xl text-secondary-dark font-bold antialiased tracking-wider mt-5 '>
            <div className='ellipse'></div> <div className='ellipse1'></div>
            <span className='z-50'>Yoga</span> Instructor
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
