import React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as ml5 from 'ml5';
import Webcam from 'react-webcam';
let options = {
  inputs: 34,
  outputs: ['label'],
  task: 'classification',
  debug: true,
};

const modelInfo = {
	model: "./model/model.json",
	metadata: "./model/model_meta.json",
	weights: "./model/model.weights.bin",
};
function Trainedmodel() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [poses, Setposes] = useState([]);
  const [swap, Setswap] = useState(true);
  const [facing, Setfacing] = useState(false);
  const [resultspose, Setresultspose] = useState([]);
  const brain = useRef(null);
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
    const poseNet = ml5.poseNet(webcamRef.current.video, () => {
      console.log('Modal Loaded');
      brain.current.load(modelInfo, () => {
        console.log('pose classification ready!');
      });

      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      poseNet.on('pose', (poses) => {
        if (poses.length > 0) {
          Setposes(poses);
          classifyPose(poses);
        }
      });
    });
  };
  useEffect(() => {
    brain.current = ml5.neuralNetwork(options);
    detection();
  }, []);
  const classifyPose = (poses) => {
    const pose = poses[0].pose;
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
      } else {
        Setresultspose(results);
        console.log(results[0].label, results[0].confidence);
      }
      //console.log(results[0].confidence);
    });
  };

  if (poses.length > 0) {
    // classifyPose(poses);
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    requestAnimationFrame(() => {
      drawRect(poses, ctx);
    });
  }
  const videoConstraints = {
    facingMode: facing ? { exact: 'environment' } : 'user',
  };
  // if (targetLabel != "") {
  // 			console.log(targetLabel);
  // 		}
  // console.log(collecting);
  return (
    <div>
      <div className='h-screen overflow-hidden'>
        <Webcam
          videoConstraints={videoConstraints}
          ref={webcamRef}
          src='youtube.com/watch?v=t4EFxQDhA8A'
          muted={true}
          style={{
            transform: swap && 'scaleX(-1)',
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            transform: swap && 'scaleX(-1)',
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
        {/* <input
					type="text"
					name="label"
					className=" border-black border-2"
					onChange={(e) => Setlabel(e.target.value)}
				/>

				<div
					className="inline-block px-3 py-2 rounded-xl cursor-pointer bg-yellow-400 text-lg text-black"
					onClick={() => savedata()}
				>
					Save
				</div>
				<div
					className="inline-block px-3 py-2 rounded-xl cursor-pointer bg-yellow-400 text-lg text-black"
					onClick={() => collecttrain()}
				>
					Train
				</div> */}
        {/* <div
						className="inline-block absolute bottom-0 right-0 px-3 py-2 rounded-xl cursor-pointer bg-yellow-400 text-lg text-black"
						onClick={() => Setfacing(!facing)}
					>
						{facing ? "Front" : "Back"}
					</div> */}
        {resultspose.length > 0 && (
          <div className='text-2xl text-black'>
            {resultspose[0].label}
            {resultspose[0].confidence}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trainedmodel;
