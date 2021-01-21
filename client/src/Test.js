import  { useEffect, useRef, useState } from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import Webcam from 'react-webcam';

export default function Test() {
    const webcamRef = useRef(null);
    const [pred, setpred] = useState(["Model is Loading"]);

    const objdetect=async ()=>{
        const img=webcamRef.current.video;    
        const model = await mobilenet.load();
        setInterval(async () => {
            if(img){
            const predictions = await model.classify(img);
            // console.log(predictions[0].className);
            setpred(predictions);
            }
        }, 1000);
    }
    useEffect(() => {
        objdetect();
    }, [])
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
          
                {pred.map((row)=>{
                    return <h5>{row.className}</h5>;
                })}
		</div>
	);
}
