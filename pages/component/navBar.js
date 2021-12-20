import Link from 'next/link';

const BtnBox = ({children, href}) => {
	return (
		<Link href={href}>
			<a className="px-2 py-2 text-gray-500 bg-black/10 rounded-md hover:text-white hover:bg-black/50">
				{children}
			</a>
		</Link>
	);
};

const BtnCircle = ({children, onClick}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="px-2 py-2 text-center text-gray-500 bg-black/10 rounded-full hover:text-white hover:bg-black/50"
		>
			{children}
		</button>
	);
};

export default function navBar() {
	return (
		<nav className="bg-gray-100">
			<div className="max-w-6xl mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<div>
						<BtnBox href="/">
							<i className="bx bx-lemon bx-fw mr-1" />
							Home
						</BtnBox>
					</div>
					<div className="hidden sm:flex justify-between space-x-2">
						<BtnBox href="/view/chat">Chat</BtnBox>
						<BtnBox href="/view/room">Room</BtnBox>
					</div>
					<div className="hidden sm:block">
						<BtnCircle href="/">
							<i class="bx bx-log-in bx-fw" />
						</BtnCircle>
					</div>
					<div className="sm:hidden block">
						<BtnCircle
							onClick={() => {
								alert('test');
							}}
						>
							<i class="bx bx-menu bx-fw" />
						</BtnCircle>
					</div>
				</div>
			</div>
		</nav>
	);
}
