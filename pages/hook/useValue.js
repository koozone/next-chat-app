// useState를 사용한 custom hook 구현
import {useState} from 'react';

export const useValue = (initData = {}) => {
	const [data, setData] = useState(initData);

	const change = ({name, value}) => {
		setData((data) => ({...data, [name]: value}));
	};
	const reset = ({name} = {}) => {
		if (name) {
			change({name, value: initData[name]});
		} else {
			setData(initData);
		}
	};

	return [data, {change, reset}];
};
