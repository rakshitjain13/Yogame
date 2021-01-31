<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react';
import * as ml5 from 'ml5';
import Webcam from 'react-webcam';

function Posnet() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [poses, Setposes] = useState([]);
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
  const detection = () => {
    // if (
    // 	typeof webcamRef.current !== "undefined" &&
    // 	webcamRef.current !== null &&
    // 	webcamRef.current.video.readyState === 4
    // )

    const poseNet = ml5.poseNet(
      webcamRef.current.video,
      { flipHorizontal: true },
      () => {
        console.log('Modal Loaded');

        if (
          typeof webcamRef.current !== 'undefined' &&
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
          poseNet.on('pose', (poses) => {
            if (poses.length > 0) {
              // console.log(poses);
              // const ctx = canvasRef.current.getContext("2d");

              // requestAnimationFrame(() => {
              // 	drawRect(poses, ctx);
              // });
              Setposes(poses);
            }
          });
        }
      }
    );
  };
  useEffect(() => {
    detection();
  }, []);
  if (poses.length > 0) {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    requestAnimationFrame(() => {
      drawRect(poses, ctx);
    });
  }
  return (
    <div>
      <Webcam
        ref={webcamRef}
        muted={true}
        style={{
          transform: 'scaleX(-1)',
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
=======
import  { useCallback, useEffect, useRef, useState } from "react";
import * as ml5 from "ml5";
import Webcam from "react-webcam";

function Posnet() {
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const [poses,Setposes]=useState([]);
	const [swap,Setswap]=useState(false);
	const [facing,Setfacing]=useState(false);
	const [deviceId, setDeviceId] = useState({});
	const [devices, setDevices] =useState([]);

	const handleDevices = useCallback(
		(mediaDevices) =>
			setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
		[setDevices]
	);

	const drawRect = (poses, ctx) => {
        // ctx.drawImage(webcamRef.current.video, 0, 0);
		const pose = poses[0].pose;
		const skeleton = poses[0].skeleton;
		for (let i = 0; i < pose.keypoints.length; i++) {
			let x = pose.keypoints[i].position.x;
			let y = pose.keypoints[i].position.y;
			ctx.fillStyle = " #39ff14";
			ctx.beginPath();
			ctx.arc(x, y, 6, 0, 2 * Math.PI);
			ctx.fill();
			ctx.fillStyle="#fff";
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
			ctx.strokeStyle = " #39ff14";

			ctx.stroke();
	
		}
		// ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	};
	const detection = () => {
		// if (
		// 	typeof webcamRef.current !== "undefined" &&
		// 	webcamRef.current !== null &&
		// 	webcamRef.current.video.readyState === 4
		// )

		const poseNet = ml5.poseNet(
			webcamRef.current.video,
			() => {
				console.log("Modal Loaded");

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
					poseNet.on("pose", (poses) => {
						if (poses.length > 0) {
							// console.log(poses);
							// const ctx = canvasRef.current.getContext("2d");

							// requestAnimationFrame(() => {
							// 	drawRect(poses, ctx);
							// });
							Setposes(poses);
							
						}
					});
				}
			}
		);
	};
	useEffect(() => {
		navigator.mediaDevices.enumerateDevices().then(handleDevices);
	}, [handleDevices]);
	if(poses.length>0){
		const ctx = canvasRef.current.getContext("2d");
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		requestAnimationFrame(() => {
			drawRect(poses, ctx);
		});
	}
	// const videoConstraints = {
	// 	facingMode: facing? { exact: "environment" } : "user"
	// };

	return (
		<div className=" ">
			{devices.map((device, key) => (
				<div>
					<Webcam
						audio={false}
						videoConstraints={{ deviceId: device.deviceId }}
					/>
					{device.label || `Device ${key + 1}`}
				</div>
			))}
			{/* <Webcam
				videoConstraints={videoConstraints}
				ref={webcamRef}
				muted={true}
				style={{
					transform: swap && "scaleX(-1)",
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
					transform: swap && "scaleX(-1)",
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
			<div
				className="inline-block bottom-0 absolute px-3 py-2 rounded-xl cursor-pointer bg-yellow-400 text-lg text-black"
				onClick={() => Setswap(!swap)}
			>
				swap
			</div>
			<div
				className="inline-block absolute bottom-0 right-0 px-3 py-2 rounded-xl cursor-pointer bg-yellow-400 text-lg text-black"
				onClick={() => Setfacing(!facing)}
			>
				{facing ? "Front" : "Back"}
			</div> */}
		</div>
	);
>>>>>>> 0bf21a919f2c04bbab3f2da5113c5041ddb60f55
}

export default Posnet;
