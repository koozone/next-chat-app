import React from 'react';
import {A, Img} from './button';

export const CardItem = (props) => {
	const {className} = props;

	return (
		<A
			{...props}
			type="linkB"
			className={`${className} flex flex-row gap-2 items-center !rounded-full`}
		>
			<Img {...props} type="imageA" className="h-[50px] border-0" />
			{props.name}
		</A>
	);
};

export default CardItem;
