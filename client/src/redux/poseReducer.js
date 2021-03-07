import * as ActionTypes from "./ActionTypes";

export const Pose = (
	state = {
		doingright:false
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.DOING_RIGHT:
			return {
				...state,
                doingright:true
			};
		case ActionTypes.DOING_WRONG:
			return {
				...state,
				doingright: false,
			};
		default:
			return state;
	}
};
