import Head from 'next/head';
import '../styles/globals.css';
import '../styles/style.css';
import 'boxicons/css/boxicons.min.css';
import ModalsProvider from './component/ModalsProvider';
import Modals from './component/Modals';

import SideMenuProvider from './hook/useSideMenu';
import ModalProvider from './hook/useModal';
import SideMenu from './component/sideMenu';
import Modal from './component/modal';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>Chat App</title>
				<meta name="description" content="koozone chat app" />
				<link rel="icon" href="/favicon.ico" />

				{/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> */}
			</Head>

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
		</>
	);
}

export default MyApp;
