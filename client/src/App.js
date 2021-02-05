import Collect from "./posnet/Collect";
import Posnet from './posnet/Posnet';
import Axios from "axios";
import './App.css';
import Tfposnet from './posnet/Tfposnet';
import { testfunction } from './posnet/train';

import Trainedmodel from './posnet/Trainedmodel';
import { useEffect } from "react";
import Maincomponent from "./components/Maincomponent";


// testfunction();

function App() {


  return (
		<div className="">
			<Maincomponent />
		</div>
		// <div className="">
		// 	{/* <Collect/> */}
		// 	{/* <Tfposnet/> */}
		// 	{/* <Posnet/> */}
		// 	<Trainedmodel />

		// </div>
	);
}
export default App;
