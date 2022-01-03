import React, {useContext} from 'react';
import {Button, A, Img} from './ui';
import Nav from '../component/nav';
import NavItem from '../component/navItem';
import useModals from '../hook/useModals';
import MyModal from './MyModal';
// import {SideMenuContext} from '../_app';
import {useSideMenu} from '../hook/useSideMenu';
import {useModal} from '../hook/useModal';
import {useRouter} from 'next/router';

const menuList = [
	{name: 'Home', icon: 'bx-home', href: '/'},
	{name: 'Room', icon: 'bx-party', href: '/view/room'},
	{name: 'Chat', icon: 'bx-bowl-rice', href: '/view/chat'},
	{name: 'Sample', icon: 'bx-lemon', href: '/view/sample'},
	{name: 'Layout', icon: 'bx-lemon', href: '/view/layout'},
	{name: 'Code', icon: 'bx-lemon', href: '/view/code'},
	{name: 'Test', icon: 'bx-lemon', href: '/view/test'},
];

const getMenuList = () => {
	const router = useRouter();

	return menuList.map((item, index) => ({
		...item,
		selected: item.href == router.pathname,
	}));
};

export function Header1() {
	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] md:h-20 h-12">
			<img
				className="w-1/4 h-full object-cover"
				src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
			/>
			<div className="hidden md:flex ml-6 space-x-3">
				{getMenuList().map((item, index) => (
					<A key={index} {...{...item, deco: 'linkA'}} />
				))}
			</div>
		</div>
	);
}

export function Header2() {
	const {openModals} = useModals();
	// const {sideMenu, openSideMenu, closeSideMenu} = useContext(SideMenuContext);
	const [sideMenu, runSideMenu] = useSideMenu();
	const [modal, runModal] = useModal();

	const clickMenu = () => {
		runSideMenu.open();
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
				{getMenuList().map((item, index) => (
					<A key={index} {...{...item, deco: 'linkB'}} />
				))}
			</div>
			<div className="flex space-x-2">
				<Button deco="buttonA" icon="bx-menu" className="inline-block md:hidden" onClick={clickMenu}></Button>
				<Button deco="buttonA" icon="bx-log-in" onClick={runModal.open}></Button>
				<Img
					deco="imageA"
					src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
				></Img>
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
			<div className="hidden md:flex space-x-2">
				{getMenuList().map((item, index) => (
					<A key={index} {...{...item, deco: 'linkC'}} />
				))}
			</div>
			<div className="flex space-x-2">
				<Button icon="bx-menu" className="inline-block md:hidden"></Button>
			</div>
		</div>
	);
}

export default Header3;
