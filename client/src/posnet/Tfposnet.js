import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
const posenet = require("@tensorflow-models/posenet");

function Tfposnet() {
	const [poses, Setposes] = useState([]);
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const drawRect = (pose, ctx) => {
		// ctx.drawImage(webcamRef.current.video, 0, 0);
		// const skeleton = poses[0].skeleton;
		for (let i = 0; i < pose.keypoints.length; i++) {
			let x = pose.keypoints[i].position.x;
			let y = pose.keypoints[i].position.y;
			ctx.fillStyle = " #39ff14";
			ctx.beginPath();
			ctx.arc(x, y, 6, 0, 2 * Math.PI);
			ctx.fill();
			ctx.fillStyle = "#fff";
			ctx.beginPath();
			ctx.arc(x, y, 4, 0, 2 * Math.PI);
			ctx.fill();
		}
		// for (let j = 0; j < poses[0].skeleton.length; j++) {
		// 	let partA = skeleton[j][0];
		// 	let partB = skeleton[j][1];
		// 	ctx.beginPath();
		// 	ctx.moveTo(partA.position.x, partA.position.y);
		// 	ctx.lineTo(partB.position.x, partB.position.y);
		// 	ctx.strokeStyle = " #39ff14";

		// 	ctx.stroke();
		// }
		// ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	};
	const detection = async () => {
		const net = await posenet.load();
		const ctx = canvasRef.current.getContext("2d");


		setInterval(async () => {
			if (
				typeof webcamRef.current !== "undefined" &&
				webcamRef.current !== null &&
				webcamRef.current.video.readyState === 4
			) {
				const videoWidth = webcamRef.current.video.videoWidth;
					const videoHeight = webcamRef.current.video.videoHeight;

					// Set video width
					webcamRef.current.video.width = videoWidth;
					webcamRef.current.video.height = videoHeight;
					canvasRef.current.width = videoWidth;
					canvasRef.current.height = videoHeight;
				const pose = await net.estimateSinglePose(webcamRef.current.video, {
					flipHorizontal: false,
				});
                // Setposes(pose);
				console.log(pose);
				ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		requestAnimationFrame(() => {
			drawRect(pose, ctx);
		});
			}
		}, 500);
	};

	useEffect(() => {
		detection();
	}, []);

	return (
		<div>
			<Webcam
				ref={webcamRef}
				muted={true}
				style={{
					transform:"scaleX(-1)",
					position: "absolute",
					marginLeft: "auto",
					marginRight: "auto",
					left: 0,
					right: 0,
					textAlign: "center",
					zindex: 9,
					width: 640,
					height: 480,
				}}
			/>
			<canvas
				ref={canvasRef}
				style={{
					transform:"scaleX(-1)",
					position: "absolute",
					marginLeft: "auto",
					marginRight: "auto",
					left: 0,
					right: 0,
					textAlign: "center",
					zindex: 9,
					width: 640,
					height: 480,
				}}
			/>
		</div>
	);
}

export default Tfposnet;
