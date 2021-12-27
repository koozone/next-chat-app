import Head from 'next/head';
import '../styles/globals.css';
import '../styles/style.css';
import 'boxicons/css/boxicons.min.css';
import ModalsProvider from './component/ModalsProvider';
import Modals from './component/Modals';
import {createContext, useState} from 'react';

// export const SideMenuContext = createContext({});
import SideMenuProvider from './hook/useSideMenu';
import ModalProvider from './hook/useModal';
import SideMenu from './component/sideMenu';
import Modal from './component/modal';

function MyApp({Component, pageProps}) {
	// const [isSideMenu, setIsSideMenu] = useState(false);

	// const openSideMenu = () => {
	// 	setIsSideMenu(true);
	// };
	// const closeSideMenu = () => {
	// 	setIsSideMenu(false);
	// };

	return (
		<>
			<Head>
				<title>Chat App</title>
				<meta name="description" content="koozone chat app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <SideMenuContext.Provider
				value={{
					isSideMenu,
					openSideMenu,
					closeSideMenu,
				}}
			> */}
			<ModalProvider>
				<SideMenuProvider>
					<ModalsProvider>
						<Component {...pageProps} />
						<SideMenu />
						<Modals />
						<Modal />
					</ModalsProvider>
				</SideMenuProvider>
			</ModalProvider>
			{/* </SideMenuContext.Provider> */}
		</>
	);
}

export default MyApp;
