import Link from 'next/link';

export function ButtonA({
	children,
	icon,
	onClick = () => {
		alert('click');
	},
	className,
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`w-10 h-10 text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50 space-x-1 ${className}`}
		>
			{icon ? <i className={`bx ${icon} bx-fw`} /> : ''}
			{/* <span>{children}</span> */}
		</button>
	);
}

export function LinkA({children, icon, href = '#'}) {
	return (
		<Link href={href}>
			<a className="px-2 py-2 text-gray-300 bg-black/20 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1">
				{icon ? <i className={`bx ${icon} bx-fw`} /> : ''}
				<span>{children}</span>
			</a>
		</Link>
	);
}
export function LinkB({children, icon, href = '#'}) {
	return (
		<Link href={href}>
			<a className="px-2 py-2 text-white/80 bg-black/10 border-white/80 border-2 rounded hover:text-black/60 hover:bg-white/60 inline-block transition relative active:top-0.5 space-x-1">
				{icon ? <i className={`bx ${icon} bx-fw`} /> : ''}
				<span>{children}</span>
			</a>
		</Link>
	);
}

export function ImageA({children, src, href = '#'}) {
	return (
		<Link href={href}>
			<img
				src={src}
				className="w-10 h-10 border-2 border-white/50 rounded-full object-cover"
			/>
		</Link>
	);
}
