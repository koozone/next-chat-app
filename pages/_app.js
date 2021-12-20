import Head from 'next/head';
import '../styles/globals.css';
import 'boxicons/css/boxicons.min.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Head>
				<title>Chat App</title>
				<meta name="description" content="koozone chat app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
