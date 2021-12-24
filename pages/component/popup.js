import Modal from 'react-modal';

Modal.setAppElement('#__next');

export const Popup = ({isOpen = false, setIsOpen}) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setIsOpen(false)}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				},
				content: {
					position: 'absolute',
					top: '200px',
					left: '200px',
					right: '200px',
					bottom: '200px',
					border: '1px solid #ccc',
					background: '#fff',
					overflow: 'auto',
					WebkitOverflowScrolling: 'touch',
					borderRadius: '12px',
					outline: 'none',
					padding: '20px',
				},
			}}
			closeTimeoutMS={200}
			contentLabel="Post modal"
		>
			{/* <div
				// className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80')]"
				className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
			> */}
			{/* <div className="absolute bg-black opacity-50 inset-0 z-0"></div> */}
			<div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
				{/* <!--content--> */}
				<div className="">
					{/* <!--body--> */}
					<div className="text-center p-5 flex-auto justify-center">
						<h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
						<p className="text-sm text-gray-500 px-8">Do you really want to delete your account? This process cannot be undone</p>
					</div>
					{/* <!--footer--> */}
					<div className="p-3 mt-2 text-center space-x-4 md:block">
						<button
							className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
							onClick={() => setIsOpen(false)}
						>
							Cancel
						</button>
						<button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
							Delete
						</button>
					</div>
				</div>
			</div>
			{/* </div> */}
		</Modal>
	);
};

export default Popup;
