import Collect from "./posnet/Collect";
import Posnet from './posnet/Posnet';
import Axios from "axios";
import Tfposnet from './posnet/Tfposnet';
import { testfunction } from './posnet/train';

import Trainedmodel from './posnet/Trainedmodel';
import { useEffect } from "react";


// testfunction();

function App() {
//   useEffect(() => {
// 		Axios.get("http://localhost:5000/good")
// 			.then((req) => console.log(req.data))
// 			.catch((err) => console.log(err));
// 	}, []);
// 	const testfunction = (ev) => {
// 		// ev.preventDefault();
// 		// window.open("http://localhost:5000/google", "_self");
// 		Axios.get("http://localhost:5000/google")
// 			.then((resp) => {
// 				console.log(resp);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};
  return (
		<div className="">
			{/* <Collect/> */}
			{/* <Tfposnet/> */}
			{/* <Posnet/> */}
			<Trainedmodel />
			{/* <div onClick={(e) => testfunction(e)}>press here</div> */}
		</div>
	);
}
export default App;
