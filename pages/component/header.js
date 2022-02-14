import React, {useContext, useState} from 'react';
import {Button, A, Img, Label} from './ui';
import Nav from '../component/nav';
import NavItem from '../component/navItem';
import UseModals from '../hook/useModals';
import MyModal from './MyModal';
// import {SideMenuContext} from '../_app';
import {UseSideMenu} from '../hook/useSideMenu';
import {UseModal} from '../hook/useModal';
import {useRouter} from 'next/router';

const menuList = [
	{name: 'Home', icon: 'bx-home', href: '/'},
	{name: 'Room', icon: 'bx-party', href: '/view/room'},
	{name: 'Chat', icon: 'bx-bowl-rice', href: '/view/chat'},
	{name: 'Sample', icon: 'bx-lemon', href: '/view/sample'},
	{name: 'Layout', icon: 'bx-lemon', href: '/view/layout'},
	{name: 'Code', icon: 'bx-lemon', href: '/view/code'},
	{name: 'Design', icon: 'bx-lemon', href: '/view/design7'},
	{name: 'Test', icon: 'bx-lemon', href: '/view/test2'},
];

// const getMenuList = () => {
// 	const router = useRouter();

// 	return menuList.map((item, index) => ({
// 		...item,
// 		selected: item.href == router.pathname,
// 	}));
// };

export function Header1() {
	const router = useRouter();
	const [pathList, setPathList] = useState([router.pathname]);

	const gotoHref = ({href}) => {
		router.push(href);
	};

	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] md:h-20 h-12">
			<img className="w-1/4 h-full object-cover" src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
			<div className="hidden md:flex ml-6 space-x-3">
				{menuList.map((item, index) => (
					// <A key={index} {...item} deco="linkA" />
					<Button
						key={index}
						{...item}
						deco="bu-1"
						checked={pathList.includes(item.href)}
						onClick={(event) => {
							gotoHref(item);
						}}
					/>
				))}
			</div>
		</div>
	);
}

export function Header2() {
	const router = useRouter();
	const [pathList, setPathList] = useState([router.pathname]);

	const {openModals} = UseModals();
	// const {sideMenu, openSideMenu, closeSideMenu} = useContext(SideMenuContext);
	const [sideMenu, runSideMenu] = UseSideMenu();
	const [modal, runModal] = UseModal();

	const gotoHref = ({href}) => {
		router.push(href);
	};
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
			<img className="w-[200px] h-full object-cover" src="https://images.unsplash.com/photo-1627064719444-1985feb93f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80" />
			<div className="hidden md:flex ml-6 space-x-3">
				{menuList.map((item, index) => {
					// <A key={index} {...item} deco="linkB" />
					return (
						<Button
							key={index}
							{...item}
							deco="bu-2"
							checked={pathList.includes(item.href)}
							onClick={(event) => {
								gotoHref(item);
							}}
						/>
					);
				})}
			</div>
			<div className="flex space-x-2">
				<Button deco="bu-9" icon="bx-menu" className="inline-block md:hidden" onClick={clickMenu}></Button>
				<Button deco="bu-9" icon="bx-log-in" onClick={runModal.open}></Button>
				<Img deco="im-1" src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"></Img>
			</div>
		</div>
	);
}

export function Header3() {
	const router = useRouter();
	const [pathList, setPathList] = useState([router.pathname]);

	return (
		<div className="sticky top-0 flex justify-between items-center bg-[#300b3f85] md:h-20 h-12 z-10">
			<img className="w-1/4 h-full object-cover" src="https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80" />
			<div className="hidden md:flex space-x-2">
				{menuList.map((item, index) => (
					// <A key={index} {...item} deco='linkC' />
					<A key={index} {...item} deco="a-2" checked={pathList.includes(item.href)} />
				))}
			</div>
			<div className="flex space-x-2">
				<Button deco="bu-9" icon="bx-menu" className="inline-block md:hidden"></Button>
			</div>
		</div>
	);
}

export default Header2;
