import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const useUnsplash = (props) => {
	const {count = 1} = props || {};
	const [data, setData] = useState([]);

	const refresh = async () => {
		const res = await axios.get(`https://api.unsplash.com/photos/random`, {
			params: {
				client_id: 'lURuzNyySLSj5YOUsaZwcxObbTtWEqi8kPhV2SBkla8',
				query: 'face',
				count: {count},
			},
		});
		const dataList = [].concat(res.data || []);
		// console.log('dataList', dataList);

		setData(dataList.map((item) => ({src: item.urls.thumb})));
	};

	useEffect(() => {
		refresh();
	}, []);

	return [data, refresh];
};
