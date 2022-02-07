// useState를 사용한 custom hook 구현
import {useState} from 'react';

export const UseData = (initData = {}) => {
	const [data, setData] = useState(initData);

	const change = (...option) => {
		if (option.length == 1) {
			const [value] = option;

			setData(value);
		} else {
			const [name, value] = option;

			setData((data) => ({...data, [name]: value}));
		}
	};
	const reset = (...option) => {
		if (option.length == 1) {
			const [name] = option;

			change(name, initData[name]);
		} else {
			setData(initData);
		}
	};

	return [data, {change, reset}];
};
