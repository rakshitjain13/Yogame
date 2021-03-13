import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Loader from "react-loader-spinner";
import keepit from "../images/keepit.png";
import Namaste from "../images/namaste.png";
import Running from "../images/WealthyNaiveHorseshoecrab-max-1mb.gif";
import StopRunning from "../images/Stop_running.png";
import "./practice.css";
import Detection from "./Detection";
import Clock from "./Clock";
import NextButton from "./NextButton";
import { updateLevel } from "../redux/ActionCreator";
import { useDispatch, useSelector } from "react-redux";
function ClassifyAll({type,level}) {
	const [starting, Setstarting] = useState(false);
	 const [modelloading, Setmodelloading] = useState(true);
	const [doingright, Setdoingright] = useState(false);
	const [classifying, Setclassifying] = useState(false);
	const [completed, Setcompleted] = useState(false);
	const [next, Setnext] = useState(false);
	 const dispatch = useDispatch();
	const state = useSelector((state) => state);


	const IntialCompleted=()=>{
		Setclassifying(true);
	}
	const pause=()=>{
		return !doingright;
	}
	const whatdoing =()=>{
		return doingright;
	}
	const Finished=()=>{
		Setcompleted(true);
		Setclassifying(false);
		 dispatch(updateLevel(state.auth.user));
	}

	const Startbutton=()=>{
		if(!starting && !classifying && !completed){
			return <div className="text-secondary-dark text-2xl text-jost bg-secondary px-4 py-2 rounded-full shadow-xl transition ease-in-out duration-150 hover:bg-secondary-dark hover:text-secondary cursor-pointer" onClick={()=>Setstarting(true)} >
								START
							</div>;
		}else if (starting && !classifying && !completed) {
			return (
				<div>
					<span className="text-xl text-primary font-bold text-jost">
						Starting in
					</span>
					<Clock total={5} pause={() => false} onComplete={IntialCompleted} />
				</div>
			);
		} else if (starting && classifying && !completed) {
			return (
				<div className="">
					<span className="text-xl text-primary text-center font-bold text-jost">
						{doingright ? "Doing Great 😂" : "Keep Trying 🐒"}
					</span>
					<Clock total={5} pause={pause} onComplete={Finished} />
				</div>
			);
		} else if (completed && !next) {
			console.log("Again");
			return (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
					numberOfPieces={100}
					recycle={false}
					onConfettiComplete={()=>(Setnext(true))}
				/>
			);
		}else if(next){
			return (
				<div>
					<NextButton type={type}  />
				</div>
			);
		} 
		else {
			return null;
		}
	}
	useEffect(() => {
	}, []);
	const Modelcheck = (val) => {
			Setdoingright(val);
	};
	const Classifying = () => {
		return classifying;
	};
	return (
		<div className="flex flex-col w-full h-full bg-primary-light">
			{modelloading && (
				<div className="absolute w-full h-full bg-primary-light z-50 overflow-hidden">
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
					/>
				</div>
				<div className="w-full lg:w-1/2 h-full relative  ">
					<div className="text-3xl text-jost font-bold text-secondary-dark w-full flex justify-center mt-5">
						Perform same as shown below
					</div>
					<div className="flex justify-center ">
						<img src={Namaste} alt="..." width="400" height="400" />
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
					<div className="flex justify-center ">
						<Startbutton />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClassifyAll;
