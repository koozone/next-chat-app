import Head from 'next/head';
import '../styles/globals.css';
import '../styles/style.css';
import 'boxicons/css/boxicons.min.css';
import ModalsProvider from './component/ModalsProvider';
import Modals from './component/Modals';
import {createContext, useState} from 'react';
import SideMenu from './component/sideMenu';

// export const SideMenuContext = createContext({});
import SideMenuProvider from './hook/useSideMenu';

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
			<SideMenuProvider>
				<ModalsProvider>
					<Component {...pageProps} />
					<SideMenu />
					<Modals />
				</ModalsProvider>
			</SideMenuProvider>
			{/* </SideMenuContext.Provider> */}
		</>
	);
}

export default MyApp;
