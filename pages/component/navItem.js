import Link from 'next/link';

export const NavItem = ({children, item = {}}) => {
	const {href = '#', icon, name, isSelect = false} = item;
	const css = isSelect ? 'bg-sky-300 text-white' : 'bg-gray-50 hover:text-red-900';

	return (
		<Link href={href}>
			<a className={`block px-2 py-1 rounded-md ${css}`}>
				{icon ? <i className={`bx ${icon} bx-fw`} /> : ''}
				{children ?? name}
			</a>
		</Link>
	);
};

export default NavItem;
