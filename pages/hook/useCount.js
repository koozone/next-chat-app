// useReducer를 사용한 custom hook 구현
import {useReducer} from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {...state, [action.name]: Number.parseInt(action.value)};

		case 'INCREMENT':
			return {...state, [action.name]: state[action.name] + 1};

		case 'DECREMENT':
			return {...state, [action.name]: state[action.name] - 1};

		case 'RESET':
			return action.data;

		default:
			throw new Error();
	}
};

export const UseCount = (initData = {}) => {
	const [data, dispatch] = useReducer(reducer, initData);

	const change = ({name, value}) => {
		dispatch({type: 'CHANGE', name, value});
	};
	const increment = ({name}) => {
		dispatch({type: 'INCREMENT', name});
	};
	const decrement = ({name}) => {
		dispatch({type: 'DECREMENT', name});
	};
	const reset = ({name} = {}) => {
		if (name) {
			dispatch({type: 'CHANGE', name, value: initData[name]});
		} else {
			dispatch({type: 'RESET', data: initData});
		}
	};

	return [data, {change, increment, decrement, reset}];
};
