import React, {useContext} from 'react';
import {ButtonA, LinkA, LinkB, ImageA} from './button';
import Nav from '../component/nav';
import NavItem from '../component/navItem';
import useModals from '../hook/useModals';
import MyModal from './MyModal';
// import {SideMenuContext} from '../_app';
import {useSideMenu} from '../hook/useSideMenu';
import {useModal} from '../hook/useModal';

const menuList = [
	{icon: 'bx-party', href: '/', content: 'Home'},
	{icon: 'bx-bowl-rice', href: '/view/room', content: 'Room'},
	{icon: 'bx-lemon', href: '/view/chat', content: 'Chat'},
	{icon: 'bx-lemon', href: '/view/sample', content: 'Sample'},
	{icon: 'bx-lemon', href: '/view/test', content: 'Test'},
	{icon: 'bx-lemon', href: '/view/layout', content: 'Layout'},
];

export function Header1() {
	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] md:h-20 h-12">
			<img
				className="w-1/4 h-full object-cover"
				src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
			/>
			<div className="hidden md:flex ml-6 space-x-3">
				<LinkB icon="bx-party" href="/">
					Home
				</LinkB>
				<LinkB icon="bx-bowl-rice" href="/view/room">
					Room
				</LinkB>
				<LinkB icon="bx-lemon" href="/view/chat">
					Chat
				</LinkB>
				<LinkB icon="bx-lemon" href="/view/sample">
					Sample
				</LinkB>
				<LinkB icon="bx-lemon" href="/view/test">
					Test
				</LinkB>
			</div>
		</div>
	);
}

export function Header3() {
	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] md:h-20 h-12">
			<img
				className="w-1/4 h-full object-cover"
				src="https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
			/>
			<div className="hidden md:block">
				<Nav>
					{menuList.map((item, index) => (
						<li key={index}>
							<NavItem item={item}>{item.content}</NavItem>
						</li>
					))}
				</Nav>
			</div>
			<div className="flex space-x-2">
				<ButtonA icon="bx-menu" className="inline-block md:hidden"></ButtonA>
			</div>
		</div>
	);
}

export function Header2() {
	const {openModals} = useModals();
	// const {isSideMenu, openSideMenu, closeSideMenu} = useContext(SideMenuContext);
	const {isSideMenu, openSideMenu, closeSideMenu} = useSideMenu();
	const {isModal, openModal, closeModal} = useModal();

	const clickMenu = () => {
		openSideMenu();
	};
	const clickLogin = () => {
		openModals(MyModal, {
			onSubmit: () => {
				console.log('비지니스 로직 처리...');
			},
		});
	};

	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] h-12">
			<img
				className="w-[200px] h-full object-cover"
				src="https://images.unsplash.com/photo-1627064719444-1985feb93f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80"
			/>
			<div className="hidden md:flex ml-6 space-x-3">
				<LinkA icon="bx-party" href="/">
					Home
				</LinkA>
				<LinkA icon="bx-bowl-rice" href="/view/room">
					Room
				</LinkA>
				<LinkA icon="bx-lemon" href="/view/chat">
					Chat
				</LinkA>
				<LinkA icon="bx-lemon" href="/view/sample">
					Sample
				</LinkA>
				<LinkA icon="bx-lemon" href="/view/test">
					Test
				</LinkA>
			</div>
			<div className="flex space-x-2">
				<ButtonA icon="bx-menu" className="inline-block md:hidden" onClick={clickMenu}></ButtonA>
				<ButtonA icon="bx-log-in" onClick={openModal}></ButtonA>
				<ImageA src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"></ImageA>
			</div>
		</div>
	);
}

export default Header1;
