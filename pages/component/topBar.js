import Link from 'next/link';

import styles from './topBar.module.css';

export default function topBar() {
	return (
		<div className={styles.topBarContainer}>
			<div className={styles.menuContainer}>
				<ul className={styles.menu}>
					<li className={styles.item}>
						<Link href="/">
							<a>main</a>
						</Link>
					</li>
					<li>
						<Link href="/view/chat">
							<a>chat</a>
						</Link>
					</li>
					<li>
						<Link href="/view/room">
							<a>room</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
