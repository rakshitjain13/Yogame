import { useEffect, useRef, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import Webcam from "react-webcam";

export default function Test() {
	const webcamRef = useRef(null);
    const [pred, setpred] = useState([{className:"Model is Loading"}]);

	const objdetect = async () => {
		const model = await mobilenet.load();
		var intervalID=setInterval(async () => {
			if (
				typeof webcamRef.current !== "undefined" &&
				webcamRef.current !== null &&
				webcamRef.current.video.readyState === 4
			) {
                const img = webcamRef.current.video;
				const predictions = await model.classify(img);
				// console.log(predictions[0].className);
				setpred(predictions);
            }else{
                clearInterval(intervalID);
            }
           
           
        }, 1000);
	};
	useEffect(() => {
		objdetect();
    }, []);
    const gothrough=()=>{
        webcamRef.current=null;
    }
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

			{pred.map((row, i) => {
				return <h5>{row.className}</h5>;
			})}
			<div
				className="text-xl bg-yellow-400  rounded-xl border-none text-white px-2 inline-block cursor-pointer hover:text-black"
				onClick={gothrough}
			>
				Done
			</div>
		</div>
	);
}
