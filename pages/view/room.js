import axios from 'axios';
import {useState, useEffect, useContext} from 'react';
// import Modal from 'react-modal';

import Box from '../component/box';
import BoxItem, {BoxItem2} from '../component/boxItem';
import Header, {Header2} from '../component/header';
import NavBar from '../component/navBar';
import Popup from '../component/popup';
import useModals from '../hook/useModals';
import MyModal from '../component/MyModal';
// import {SideMenuContext} from '../_app';
import {useSideMenu} from '../hook/useSideMenu';

// Modal.setAppElement('#__next');

export default function chat() {
	const [isModal, setIsModal] = useState(false);
	const [roomList, setRoomList] = useState([]);
	// console.log('isModal', isModal);

	const {openModal} = useModals();
	// const {openSideMenu} = useContext(SideMenuContext);
	const {isSideMenu, openSideMenu, closeSideMenu} = useSideMenu();

	const clickOpenModal = () => {
		console.log('clickOpenModal');
		openModal(MyModal, {
			onSubmit: () => {
				console.log('비지니스 로직 처리...');
			},
		});
	};

	const clickOpenSideMenu = () => {
		openSideMenu();
	};

	useEffect(() => {
		// axios('http://localhost:3000/roomList')
		axios('/api/room')
			.then((res) => {
				console.log(res.data);
				setRoomList(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="relative h-screen">
			<Header2 />
			{/* <NavBar /> */}
			<header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
				<div className="flex items-center justify-between">
					<h2 className="font-semibold text-gray-900">Projects</h2>
					<a href="/new" className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
						<i className="bx bx-plus-medical mr-2"></i>
						New
					</a>
				</div>
				<form className="group relative">
					<i className="bx bx-search-alt-2 text-2xl absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500"></i>
					<input
						className="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm"
						type="text"
						aria-label="Filter projects"
						placeholder="Filter projects..."
					/>
				</form>
			</header>
			<Box>
				{roomList.map((item, index) => (
					// <li key={item.roomId}>{item.roomName}</li>
					<li key={index}>
						<BoxItem item={item} />
					</li>
				))}
				<li className="flex">
					<BoxItem2></BoxItem2>
				</li>
			</Box>

			<footer className="p-4 absolute inset-x-0 bottom-0 grid grid-cols-2 gap-x-6">
				<button className="btn btn--secondary" onClick={clickOpenModal}>
					모달 열기
				</button>
				<button className="btn btn--secondary" onClick={clickOpenSideMenu}>
					메뉴 열기
				</button>
				<button className="btn btn--primary" onClick={() => setIsModal(true)}>
					Accept
				</button>
			</footer>

			<Popup isOpen={isModal} setIsOpen={setIsModal} />
		</div>
	);
}
