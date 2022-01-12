import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const UseDog = (props) => {
	const {count = 1} = props || {};
	const [data, setData] = useState([]);

	const refresh = async () => {
		const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`);
		const dataList = [].concat(res.data?.message || []);
		// console.log('dataList', dataList);

		setData(dataList.map((item) => ({src: item, name: item.split('/').pop()})));
	};

	useEffect(() => {
		refresh();
	}, []);

	return [data, refresh];
};
