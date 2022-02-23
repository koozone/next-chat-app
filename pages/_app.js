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
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&family=Poppins:wght@200;300;400&display=swap" rel="stylesheet" />
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
