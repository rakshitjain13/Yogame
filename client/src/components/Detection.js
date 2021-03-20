import { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as ml5 from 'ml5';
import { baseUrl } from '../shared/baseUrl';
import './detection.css';

function Detection({
	Setmodelloading,
	Setdoingright,
	Classifying,
	whatdoing,
	asana,
}) {
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const poseNet = useRef(null);
	const brain = useRef(null);

	let options = {
		inputs: 34,
		outputs: ["label"],
		task: "classification",
		debug: true,
	};

	const modelInfo = {
		model: `${baseUrl}data/models/finalmodel.json`,
		metadata: `${baseUrl}data/models/finalmodel_meta.json`,
		weights: `${baseUrl}data/models/finalmodel.weights.bin`,
	};
	const detect = () => {
		poseNet.current = ml5.poseNet(webcamRef.current.video, () => {
			console.log("Modal Loaded");
			brain.current.load(modelInfo, () => {
				console.log("pose classification ready!");
			});
			Setmodelloading(false);

			const videoWidth = webcamRef.current.video.videoWidth;
			const videoHeight = webcamRef.current.video.videoHeight;

			// Set video width
			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;
			poseNet.current.on("pose", (poses) => {
				if (poses.length > 0) {
					if (Classifying()) classifyPose(poses[0].pose);
					if (canvasRef.current) {
						const ctx = canvasRef.current.getContext("2d");
						ctx.clearRect(
							0,
							0,
							canvasRef.current.width,
							canvasRef.current.height
						);
						requestAnimationFrame(() => {
							drawRect(poses, ctx);
						});
					}
				}
			});
		});
	};
	const classifyPose = (pose) => {
		let inputs = [];
		for (let i = 0; i < pose.keypoints.length; i++) {
			let x = pose.keypoints[i].position.x;
			let y = pose.keypoints[i].position.y;
			inputs.push(x);
			inputs.push(y);
		}
		brain.current.classify(inputs, (error, results) => {
			// console.log(results[0]);
			if (error) {
				console.log(error);
				if (whatdoing()) Setdoingright(false);
			} else if (results[0].label === asana && results[0].confidence > 0.8) {
				if (!whatdoing()) Setdoingright(true);
				// console.log(results[0].label, results[0].confidence);
			} else {
				if (whatdoing) Setdoingright(false);
			}
			//console.log(results[0].confidence);
		});
	};
		useEffect(() => {
			brain.current = ml5.neuralNetwork(options);
		},[]);
	useEffect(() => {
		detect();
		return () => {
			poseNet.current.removeListener("pose", (err) => {
				console.log("Removed");
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Classifying()]);
	return (
		<>
			<div className=" h-full w-full flex justify-items-center   p-10">
				<div className="relative">
					<Webcam ref={webcamRef} muted={true} className="webcam" />
					<canvas ref={canvasRef} className="canvas" />
				</div>
			</div>
		</>
	);
}

const drawRect = (poses, ctx) => {
  // ctx.drawImage(webcamRef.current.video, 0, 0);
  const pose = poses[0].pose;
  const skeleton = poses[0].skeleton;
  for (let i = 0; i < pose.keypoints.length; i++) {
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    ctx.fillStyle = ' #39ff14';
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  }
  for (let j = 0; j < poses[0].skeleton.length; j++) {
    let partA = skeleton[j][0];
    let partB = skeleton[j][1];
    ctx.beginPath();
    ctx.moveTo(partA.position.x, partA.position.y);
    ctx.lineTo(partB.position.x, partB.position.y);
    ctx.strokeStyle = ' #39ff14';

    ctx.stroke();
  }
  // ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
};

export default Detection;
