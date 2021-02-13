import { useState } from "react";
import  ReactCountdownClock  from "react-countdown-clock";
import keepit from "../images/keepit.png";
import Namaste from "../images/namaste.png";
import Running from "../images/WealthyNaiveHorseshoecrab-max-1mb.gif";
import StopRunning from "../images/Stop_running.png";
import "./practice.css";
function Practice() {
	const [starting, Setstarting] = useState(false);
	const [doingright, Setdoingright] = useState(true);
	const [classifying, Setclassifying] = useState(false);
	const IntialCompleted=()=>{
		Setclassifying(true);
	}
	const Startbutton=()=>{
		if(!starting && !classifying){
			return <div className="text-secondary-dark text-2xl text-jost bg-secondary px-4 py-2 rounded-full shadow-xl transition ease-in-out duration-150 hover:bg-secondary-dark hover:text-secondary cursor-pointer" onClick={()=>Setstarting(true)} >
								START
							</div>;
		}else if(starting && !classifying){
			return <div>
							<span className="text-xl text-primary font-bold text-jost">
								Starting in
							</span>
								<ReactCountdownClock
									seconds={2}
									color="#424874"
									fontSize={'25px'}
									weight={5}
									alpha={1}
									size={100}
									onComplete={IntialCompleted}
								/>
							</div>;
		}else if(starting && classifying){
					return (
						<div>
							<span className="text-xl text-primary font-bold text-jost">
								Classifying 
							</span>
							<ReactCountdownClock
								seconds={15}
								color="#424874"
								fontSize={"25px"}
								weight={5}
								alpha={1}
								size={100}
								paused={!doingright}
							/>
						</div>
					);
		}else{
			return null;
		}
	}
	return (
		<div className="flex flex-col " style={{ height: "90vh" }}>
			<div className="bg-primary-light w-full h-full  lg:flex">
				<div className="w-full lg:w-1/2 ">
					<div className="">Hello</div>
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
					{starting && <img
						src={doingright ?Running:StopRunning}
						className="absolute bottom-0 left-0 keep_img"
						alt="..."
					/>}
					<div className="flex justify-center ">
						<Startbutton />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Practice;
