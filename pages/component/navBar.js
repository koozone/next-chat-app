import Link from 'next/link';

const BtnBox = ({children, href}) => {
	return (
		<Link href={href}>
			<a className="px-2 py-2 text-gray-500 bg-black/10 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-1">
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

export default function NavBar() {
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
						<div className="btn-primary">Css Primary</div>
						<div className="btn-second">Css Second</div>
					</div>
					<div className="hidden sm:block">
						<BtnCircle
							onClick={() => {
								alert('test');
							}}
						>
							<i className="bx bx-log-in bx-fw" />
						</BtnCircle>
					</div>
					<a
						href="/new"
						className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							className="mr-2"
							aria-hidden="true"
						>
							<path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
						</svg>
						New
					</a>
					<a
						href="/new"
						className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-900 font-medium py-3"
					>
						<svg
							className="group-hover:text-blue-500 mb-1 text-gray-400"
							width="20"
							height="20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
						</svg>
						New project
					</a>
					<div className="sm:hidden block">
						<BtnCircle>
							<i className="bx bx-menu bx-fw" />
						</BtnCircle>
					</div>
				</div>
			</div>
		</nav>
	);
}
