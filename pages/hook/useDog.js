import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const useDog = (props) => {
	const {count = 1} = props || {};
	const [data, setData] = useState([]);

	const refresh = async () => {
		const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`);
		console.log('res', res);
		const dataList = [].concat(res.data?.message || []);

		setData(dataList);
	};

	useEffect(() => {
		refresh();
	}, []);

	return [data, refresh];
};
