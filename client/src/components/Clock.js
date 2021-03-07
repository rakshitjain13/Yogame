import { useEffect,memo } from "react";
import { useState } from "react";
import "./clock.css";

const Clock = ({ total, pause, onComplete }) => {
	const [time, Settime] = useState(total);
	useEffect(() => {
		if (time === 0) {
            onComplete();
            return;
        };
		if (pause()) return;
		let timer = setInterval(() => {
			Settime(time - 1);
			setCircleDasharray();
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [time, pause()]);
	function setCircleDasharray() {
		const circleDasharray = `${(calculateTimeFraction() * 283).toFixed(0)} 283`;
		document
			.getElementById("base-timer-path-remaining")
			.setAttribute("stroke-dasharray", circleDasharray);
	}
	function calculateTimeFraction() {
		const TIME_LIMIT = total;
		let rawTimeFraction;
		if (time > 1) rawTimeFraction = (time - 1) / TIME_LIMIT;
		else rawTimeFraction = time / TIME_LIMIT;
		return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
	}
	return (
		<div>
			<div class="base-timer">
				<svg
					class="base-timer__svg"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g class="base-timer__circle">
						<circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
						<path
							id="base-timer-path-remaining"
							stroke-dasharray="283"
							class="base-timer__path-remaining #fefefe"
							d="
                                    M 50, 50
                                    m -45, 0
                                    a 45,45 0 1,0 90,0
                                    a 45,45 0 1,0 -90,0
                                    "
						></path>
					</g>
				</svg>
				<span className="base-timer__label">{time}</span>
			</div>
		</div>
	);
};

export default memo(Clock);
