import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const useUnsplash = () => {
	const [data, setData] = useState();

	const refresh = async (param = {}) => {
		const res = await axios.get(`https://api.unsplash.com/photos/random`, {
			params: {
				client_id: 'lURuzNyySLSj5YOUsaZwcxObbTtWEqi8kPhV2SBkla8',
				...param,
			},
		});

		setData([].concat(res.data));
	};

	useEffect(() => {
		refresh();
	}, []);

	return [data, refresh];
};
