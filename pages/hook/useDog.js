import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const useDog = () => {
	const [data, setData] = useState();

	const refresh = async () => {
		const res = await axios.get('https://dog.ceo/api/breeds/image/random');

		setData(res.data);
	};

	useEffect(() => {
		refresh();
	}, []);

	return [data, refresh];
};
