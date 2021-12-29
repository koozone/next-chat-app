// useState를 사용한 custom hook 구현
import {useState} from 'react';

export const useCount = (initData = {}) => {
	const [data, setData] = useState(initData);

	const change = ({name, value}) => {
		setData((data) => ({...data, [name]: Number.parseInt(value)}));
	};
	const increment = ({name}) => {
		setData((data) => ({...data, [name]: data[name] + 1}));
	};
	const decrement = ({name}) => {
		setData((data) => ({...data, [name]: data[name] - 1}));
	};
	const reset = ({name} = {}) => {
		if (name) {
			change({name, value: initData[name]});
		} else {
			setData(initData);
		}
	};

	return [data, {change, increment, decrement, reset}];
};
