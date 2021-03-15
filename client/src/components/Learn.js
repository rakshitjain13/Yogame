import accessimg from '../images/Frame 2.png';
import posenetimg from '../images/Group 6.png';
import asanaimg from '../images/Group 7.png';
import classify from '../images/classify.jpg';
import './learn.css';
function Learn() {
  return (
		<body>
			<div className="container overflow-hidden">
				<div className="font-jost text-secondary-dark text-3xl lg:text-4xl font-semibold p-11 border-b border-gray-200 flex justify-center">
					<h2>All you need to do !</h2>
				</div>
				<div className="lg:grid lg:gap-x-14 lg:grid-cols-3 p-10 md:p-0 lg:ml-16">
					<div className="lg:flex lg:justify-center">
						<div className="flex flex-col items-center ">
							<span className="p-3 font-jost custom text-2xl lg:text-3xl font-semibold text-center">
								Step 1
							</span>
							{/* <span className='font-jost text-secondary-dark text-xl lg:text-2xl font-semibold text-center'>
                Allow access to webcam.
              </span> */}
							<img
								src={accessimg}
								className="mt-8 lg:h-auto lg:w-auto"
								alt="..."
							/>
						</div>
						{/* <div className='flex-shrink-0 mt-16 ml-10 invisible lg:visible'>
              <img
                className=''
                src='https://img.icons8.com/nolan/64/arrow.png'
                alt=""
              />
            </div> */}
					</div>
					<div className="lg:flex lg:justify-center">
						<div className="flex flex-col items-center">
							<span className=" p-3 font-jost custom text-2xl lg:text-3xl font-semibold text-center">
								Step 2
							</span>
							{/* <span className='font-jost text-secondary-dark text-xl lg:text-2xl font-semibold text-center'>
                Make yourself comfortable.
              </span> */}
							<img
								src={posenetimg}
								className="mt-12  lg:h-auto lg:w-auto"
								alt="..."
							/>
						</div>
						{/* <div className='flex-shrink-0 mt-16 ml-10 invisible lg:visible'>
              <img
                className=''
                src='https://img.icons8.com/nolan/64/arrow.png'
                alt=""
              />
            </div> */}
					</div>
					<div className="lg:flex lg:justify-center">
						<div className="flex flex-col items-center ">
							<span className="p-3 font-jost custom text-2xl lg:text-3xl font-semibold text-center">
								Step 3
							</span>
							{/* <span className='font-jost text-secondary-dark text-xl lg:text-2xl font-semibold text-center'>
                We show you an asana.
              </span> */}
							<img
								src={asanaimg}
								className="mt-12  lg:h-auto lg:w-auto "
								alt="..."
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="lg:grid lg:grid-cols-1">
					<div className="flex justify-center">
						<div className="flex flex-col p-10">
							<span className="p-3 font-jost custom text-xl lg:text-3xl font-semibold text-center">
								Step 4
							</span>
							<span className="font-jost text-secondary-dark text-xl lg:text-2xl font-semibold text-center">
								We classify whether or not you are in the correct posture (same
								as the the asana) .
							</span>
							<img src={classify} className="mt-12 h-auto w-auto" alt="..." />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<img
						className="h-16 w-16"
						src="https://img.icons8.com/nolan/50/down.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col items-center">
					<span className=" p-3 font-jost custom text-xl lg:text-3xl font-semibold text-center">
						There you go !
					</span>
					<span className="font-jost text-secondary-dark text-xl lg:text-2xl font-semibold text-center">
						Score high and rank on top of the leaderboard.
					</span>
					<a
						href="https://www.freeiconspng.com/img/13749"
						title="Image from freeiconspng.com"
					>
						<img
							src="https://www.freeiconspng.com/uploads/leaderboard-icon-9.png"
							alt="Leaderboard Hd Icon"
							className="h-72 w-72 lg:h-auto lg:w-auto"
						/>
					</a>
				</div>
			</div>
		</body>
	);
}

export default Learn;
