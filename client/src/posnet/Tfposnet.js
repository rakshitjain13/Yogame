import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
const posenet = require("@tensorflow-models/posenet");

function Tfposnet() {
	const [poses, Setposes] = useState([]);
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const detection = async () => {
		const net = await posenet.load({
			architecture: "MobileNetV1",
			outputStride: 16,
			inputResolution: { width: 640, height: 480 },
			multiplier: 0.75,
		});
		setInterval(async () => {
			if (
				typeof webcamRef.current !== "undefined" &&
				webcamRef.current !== null &&
				webcamRef.current.video.readyState === 4
			) {
				const pose = await net.estimateSinglePose(webcamRef.current.video, {
					flipHorizontal: false,
				});
                // Setposes(pose);
                console.log(pose);
			}
		}, 100);
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
