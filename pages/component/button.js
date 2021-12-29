import Link from 'next/link';

const getContent = (item) => {
	const {icon, name} = item;

	return (
		<>
			{icon ? <i className={`bx ${icon} bx-fw`} /> : ''}
			{name ? <span>{name}</span> : ''}
		</>
	);
};

// const ButtonItem = (props) => {
// 	const {
// 		children,
// 		className = '',
// 		css = '',
// 		onClick = () => {
// 			console.log('onClick');
// 		},
// 	} = props;
// 	const content = children ? children : getContent(props);

// 	return (
// 		<button className={`${css} ${className}`} onClick={onClick}>
// 			{content}
// 		</button>
// 	);
// };

const LinkItem = (props) => {
	const {children, className = '', css = '', href = '#'} = props;
	const content = children ? children : getContent(props);

	return (
		<Link href={href}>
			<a className={`${css} ${className}`}>{content}</a>
		</Link>
	);
};

const ImageItem = (props) => {
	const {className = '', css = '', src = ''} = props;

	return <img className={`${css} ${className}`} src={src} />;
};

export function Button(props) {
	const {
		children,
		type,
		selected,
		className = '',
		onClick = () => {
			console.log('onClick');
		},
	} = props;
	const content = children ? children : getContent(props);

	return (
		<button
			onClick={onClick}
			className={`${className} ${(() => {
				switch (type) {
					case 'bold':
						return `px-2 py-2 text-black/80 bg-white/20 font-semibold border-b-2 border-r-2 border-black/50 rounded-md hover:border-0 hover:border-t-2 hover:border-l-2 hover:border-black/50 hover:bg-black/10 hover:text-white space-x-1 ${
							selected ? '' : ''
						}`;
					case 'normal':
						return `px-2 py-2 text-white ring-2 ring-white rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`;
					case 'primary':
						return `px-2 py-2 text-orange-500 ring-2 ring-white rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`;
					case 'buttonA':
						return `h-10 aspect-square text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50 space-x-1 ${selected ? 'bg-white/20' : 'bg-black/20'}`;
					case 'buttonB':
						return `px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`;
					default:
						return '';
				}
			})()}`}
		>
			{content}
		</button>
	);
}

export function ButtonA(props) {
	return (
		<Button
			{...{
				...props,
				type: 'buttonA',
			}}
		/>
	);
}

export function ButtonB(props) {
	return (
		<Button
			{...{
				...props,
				type: 'buttonB',
			}}
		/>
	);
}

export function LinkA(props) {
	return (
		<LinkItem
			{...{
				...props,
				css: `px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
					props.isSelect ? 'bg-white/20' : 'bg-black/20'
				}`,
			}}
		/>
	);
}

export function LinkB(props) {
	return (
		<LinkItem
			{...{
				...props,
				css: `px-2 py-2 text-white/80 border-white/80 border-2 rounded hover:text-black/60 hover:bg-white/60 inline-block transition relative active:top-0.5 space-x-1 ${
					props.isSelect ? 'bg-white/20' : 'bg-black/20'
				}`,
			}}
		/>
	);
}

export function LinkC(props) {
	return (
		<LinkItem
			{...{
				...props,
				css: `block px-2 py-1 rounded-md ${props.isSelect ? 'bg-sky-300 text-white' : 'bg-gray-50 hover:text-red-900'}`,
			}}
		/>
	);
}

export function ImageA(props) {
	return (
		<ImageItem
			{...{
				...props,
				css: `h-10 aspect-square border-2 border-white/50 rounded-full object-cover ${props.isSelect ? '' : ''}`,
			}}
		/>
	);
}

export function ImageB(props) {
	return (
		<ImageItem
			{...{
				...props,
				css: `inline-block w-[200px] h-[200px] object-cover rounded-md ${props.isSelect ? '' : ''}`,
			}}
		/>
	);
}

export function KKK(props) {
	return (
		<ButtonB {...props}>
			<ImageB {...props} />
			{props.name}
		</ButtonB>
	);
}
