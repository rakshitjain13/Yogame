import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {LevelUpdated }from '../redux/ActionCreator';

function NextButton({type}) {
      const dispatch = useDispatch();

    const nextlevel=()=>{
			 dispatch(LevelUpdated());
		}
    if(type==="practice"){
    return (
			<Link to='/play' className="bg-primary relative p-2 mb-8 rounded-lg shadow-xl  font-jost text-lg cursor-pointer hover:bg-secondary-dark hover:text-primary transition antialiased tracking-wide ease-in-out duration-100" >
				<div className="absolute h-6 w-6 rounded-full bg-secondary-dark -top-2 -left-2 animate-bounce"></div>
				Go to Play section for real game play!
			</Link>
		);
    }else{
        return(
            <div  className="bg-primary relative p-2 mb-8 rounded-lg shadow-xl  font-jost text-lg cursor-pointer hover:bg-secondary-dark hover:text-primary transition antialiased tracking-wide ease-in-out duration-100 " onClick={nextlevel}>
				<div className="absolute h-6 w-6 rounded-full bg-secondary-dark -top-2 -left-2 animate-bounce"></div>
				Next Level
			</div>
        
        );
    }
}

export default NextButton
