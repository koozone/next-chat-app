import React from 'react';
import {ButtonA, LinkA, LinkB, ImageA} from './button';

export function Header1() {
	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] sm:h-20 h-12">
			<img
				className="w-1/4 h-full object-cover"
				src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
			/>
			<div className="sm:flex ml-6 space-x-3 hidden">
				<LinkB icon="bx-party" href="/">
					List
				</LinkB>
				<LinkB icon="bx-bowl-rice" href="/view/test">
					Ticket
				</LinkB>
				<LinkB icon="bx-lemon" href="/view/chat">
					Search
				</LinkB>
			</div>
		</div>
	);
}

export function Header2() {
	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] h-12">
			<img
				className="w-[200px] h-full object-cover"
				src="https://images.unsplash.com/photo-1627064719444-1985feb93f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80"
			/>
			<div className="sm:flex ml-6 space-x-3 hidden">
				<LinkA icon="bx-party" href="/">
					List
				</LinkA>
				<LinkA icon="bx-bowl-rice" href="/view/test">
					Ticket
				</LinkA>
				<LinkA icon="bx-lemon" href="/view/chat">
					Search
				</LinkA>
			</div>
			<div className="flex space-x-2">
				<ButtonA
					icon="bx-menu"
					className="inline-block sm:hidden"
				></ButtonA>
				<ButtonA icon="bx-log-in"></ButtonA>
				<ImageA src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"></ImageA>
			</div>
		</div>
	);
}

export default Header2;
