import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Loader from 'react-loader-spinner';
import keepit from '../images/keepit.png';
import Running from '../images/WealthyNaiveHorseshoecrab-max-1mb.gif';
import StopRunning from '../images/Stop_running.png';
import './practice.css';
import Detection from './Detection';
import Clock from './Clock';
import NextButton from './NextButton';
import axios from 'axios';
import {  useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { ConfigureStore } from '../redux/configureStore';

function ClassifyAll({ type, level }) {
  const [starting, Setstarting] = useState(false);
  const [modelloading, Setmodelloading] = useState(true);
  const [doingright, Setdoingright] = useState(false);
  const [classifying, Setclassifying] = useState(false);
  const [completed, Setcompleted] = useState(false);
  const [next, Setnext] = useState(false);

  const state = useSelector((state) => state);
  const levelis = type !=='practice'? state.auth.level : 1;
  const levels = [
		"tadasana",
		"vrikshasana",
		"Kursiasana",
		"Virabhadrasana"
	];
  const youtubeUrl = [
		"https://youtu.be/2HTvZp5rPrg",
		"https://youtu.be/Dic293YNJI8",
		"https://youtu.be/4xyTmX_OMiM",
		"https://youtu.be/fiOXtyjQzY8",
	];
  const IntialCompleted = () => {
    Setclassifying(true);
  };
  const pause = () => {
    return !doingright;
  };
  const whatdoing = () => {
    return doingright;
  };
  const updatelevel = (user) => {
    const token = localStorage.getItem('token');
    return axios
      .post(
        baseUrl + 'updatelevel',
        { user },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        var newlevel = response.data.level;
        localStorage.setItem('level', newlevel);
        console.log(localStorage.getItem('level'));
        state.auth.level = newlevel;
        localStorage.setItem("creds", JSON.stringify(state.auth));
        console.log(JSON.parse(localStorage.getItem("creds")));


      })
      .catch((error) => console.log(error));
  };
  const Finished = () => {
     if(type!=="practice")
    updatelevel(state.auth);
    Setcompleted(true);
    Setclassifying(false);
  };

  const Startbutton = () => {
    if (!starting && !classifying && !completed) {
      return (
        <div
          className='text-secondary-dark text-2xl text-jost bg-secondary px-4 py-2 rounded-full shadow-xl transition ease-in-out duration-150 hover:bg-secondary-dark hover:text-secondary cursor-pointer'
          onClick={() => Setstarting(true)}
        >
          START
        </div>
      );
    } else if (starting && !classifying && !completed) {
      return (
        <div>
          <span className='text-xl text-primary font-bold text-jost'>
            Starting in
          </span>
          <Clock total={5} pause={() => false} onComplete={IntialCompleted} />
        </div>
      );
    } else if (starting && classifying && !completed) {
      return (
				<div className="flex-col justify-center ml-5">
					<Clock total={0} pause={pause} onComplete={Finished} />
					<span className="text-xl text-primary text-center font-bold text-jost">
						{doingright ? "Doing Great" : "Keep Trying"}
					</span>
				</div>
			);
    } else if (completed && !next) {
      return (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={50}
          recycle={false}
          onConfettiComplete={() => Setnext(true)}
        />
      );
    } else if (next) {
      return (
        <div>
          <NextButton type={type} />
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
		<div
			className="flex flex-col w-full h-full bg-primary-light overflow-hidden overflow-y-hidden"
			style={{ "min-height": "91vh" }}
		>
			{modelloading && (
				<div
					className="absolute w-full bg-primary-light z-50 overflow-hidden "
					style={{ height: "90vh" }}
				>
					<div className="flex flex-col justify-center items-center h-full">
						<Loader
							type="Circles"
							color="#424874"
							height={100}
							width={100}
							//3 secs
						/>
						<span className="text-base font-jost ">
							If taking more time than might be you have blocked the camera
							access!
						</span>
					</div>
				</div>
			)}
			<div className=" w-full h-full lg:flex">
				<div className="w-full  h-full lg:w-1/2 ">
					<Detection
						Setmodelloading={Setmodelloading}
						Setdoingright={Modelcheck}
						Classifying={Classifying}
						whatdoing={whatdoing}
						asana={levels[levelis - 1]}
					/>
				</div>
				<div className="w-full lg:w-1/2 h-full relative  ">
					<div className="text-2xl text-jost font-bold text-secondary-dark w-full flex justify-center ">
						Perform same as shown below
					</div>
					<div className="  flex justify-center items-center ">
						<a
							className="text-2xl font-jost text-secondary-dark font-bold uppercase mt-1 flex"
							href={youtubeUrl[levelis - 1]}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="https://img.icons8.com/doodle/32/000000/youtube-play--v2.png"
								alt="Youtube"
							/>
							{levels[levelis - 1]}
						</a>
					</div>
					<div className="  flex justify-center items-center ">
						<img
							src={`${baseUrl}data/images/${levels[levelis - 1]}.jpg`}
							alt="..."
						/>
					</div>

					<img
						src={keepit}
						className="absolute bottom-0 right-0 keep_img"
						alt=".."
					/>
					{starting && !completed && (
						<img
							src={doingright ? Running : StopRunning}
							className="absolute bottom-0 left-0 keep_img"
							alt="..."
						/>
					)}
					<div className="flex justify-center w-full">
						<Startbutton />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClassifyAll;
