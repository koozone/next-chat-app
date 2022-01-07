import React from 'react';
import {A, Img} from './ui';

export const CardItem = (props) => {
	const {className} = props;

	return (
		<A {...props} deco="" className={`${className} flex flex-row gap-2 items-center !rounded-full`}>
			<Img {...props} deco="" className="h-[50px] border-0" />
			{props.name}
		</A>
	);
};

export default CardItem;
