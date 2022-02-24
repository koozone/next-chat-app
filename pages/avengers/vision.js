// useState를 사용한 custom hook 구현
import {useState} from 'react';

export const UseData = (initData) => {
	const [state, setState] = useState(initData);

	const change = (...option) => {
		if (option.length == 1) {
			setState(option[0]);
		} else {
			setState((state) => ({...state, [option[0]]: option[1]}));
		}
	};
	const reset = (...option) => {
		if (option.length == 1) {
			change(option[0], initData[option[0]]);
		} else {
			setState(initData);
		}
	};

	return [state, {change, reset}];
};
