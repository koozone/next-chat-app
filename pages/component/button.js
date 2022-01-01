import Link from 'next/link';
import {useFiled} from '../hook/useFiled';

const getStyle = ({tag, css, icon, selected}) => {
	const baseElement = {
		i: <div className={`bx ${icon} pointer-events-none`} />,
		a: <div className="group space-x-1" />,
		img: <div className="" />,
		button: (
			<div className={`group px-2 py-1 ring-1 ring-black/30 hover:ring-2 text-sm leading-6 font-medium rounded-md space-x-1 ${selected ? '' : ''}`} />
		),
		input: (
			<div
				className={`px-2 py-1 ring-1 ring-black/30 text-sm leading-6 font-medium rounded-md focus:ring-2 focus:outline-none w-full truncate ${
					icon ? 'pl-9' : ''
				} ${selected ? '' : ''}`}
			/>
		),
	};
	console.log(css);
	const element = (() => {
		switch (`[${tag}]:${css}`) {
			case '[i]:a-linkA':
			case '[i]:a-linkC':
			case '[i]:button-primary':
				return <div className={`text-white group-hover:text-blue-500 group-hover:animate-bounce ${selected ? '' : ''}`} />;
			case '[i]:button-danger':
				return <div className={`text-white group-hover:text-rose-500 group-hover:animate-bounce ${selected ? '' : ''}`} />;
			case '[i]:input-primary':
				return <div className={`text-gray-500 group-focus-within:text-blue-500 group-focus-within:animate-spin ${selected ? '' : ''}`} />;
			case '[i]:input-danger':
				return <div className={`text-gray-500 group-focus-within:text-rose-500 group-focus-within:animate-spin ${selected ? '' : ''}`} />;
			case '[i]:':
				return <div className={`text-yellow-500 group-hover:text-red-500 ${selected ? '' : ''}`} />;
			case '[input]:primary':
				return <div className={`focus:ring-blue-500 text-gray-900 placeholder-gray-300  ${selected ? '' : ''}`} />;
			case '[input]:danger':
				return <div className={`focus:ring-rose-500 text-gray-900 placeholder-gray-300 ${selected ? '' : ''}`} />;
			case '[button]:primary':
				return <div className={`text-white bg-blue-500 hover:bg-blue-50 hover:ring-blue-500 hover:text-blue-600 ${selected ? '' : ''}`} />;
			case '[button]:secondary':
				return <div className={`text-white bg-neutral-500 hover:bg-neutral-600 ${selected ? '' : ''}`} />;
			case '[button]:success':
				return <div className={`text-white bg-lime-500 hover:bg-lime-600 ${selected ? '' : ''}`} />;
			case '[button]:danger':
				return <div className={`text-white bg-rose-500 hover:bg-rose-50 hover:ring-rose-500 hover:text-rose-600 ${selected ? '' : ''}`} />;
			case '[button]:warning':
				return <div className={`text-white bg-amber-500 hover:bg-amber-600 ${selected ? '' : ''}`} />;
			case '[button]:info':
				return <div className={`text-white bg-cyan-500 hover:bg-cyan-600 ${selected ? '' : ''}`} />;
			case '[button]:bold':
				return (
					<div
						className={`px-2 py-2 text-black/80 bg-white/20 font-semibold border-b-2 border-r-2 border-black/50 rounded-md hover:border-0 hover:border-t-2 hover:border-l-2 hover:border-black/50 hover:bg-black/10 hover:text-white ${
							selected ? 'bg-red-500' : ''
						}`}
					/>
				);
			case '[button]:normal':
				return (
					<div
						className={`px-2 py-2 text-white ring-2 ring-white rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[button]:buttonA':
				return (
					<div
						className={`h-10 aspect-square text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[button]:buttonB':
				return (
					<div
						className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[a]:linkA':
				return (
					<div
						className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[a]:linkB':
				return (
					<div
						className={`px-2 py-2 text-white/80 border-white/80 border-2 rounded hover:text-black/60 hover:bg-white/60 inline-block transition relative active:top-0.5 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[a]:linkC':
				return <div className={`block px-2 py-1 rounded-md ${selected ? 'bg-sky-300 text-white' : 'bg-gray-50 hover:text-red-900'}`} />;
			case '[img]:imageA':
				return <div className={`h-10 aspect-square border-2 border-white/50 rounded-full object-cover ${selected ? '' : ''}`} />;
			case '[img]:imageB':
				return <div className={`inline-block w-[200px] h-[200px] object-cover rounded-md ${selected ? '' : ''}`} />;

			default:
				return <div className="" />;
		}
	})();

	return `${baseElement[tag].props.className} ${element.props.className}`;
};

const getContent = ({tag, css, icon, iconL, iconR, name}) => {
	return (
		<>
			{icon || iconL ? <I css={tag + '-' + css} icon={icon || iconL} /> : ''}
			{name ? <span>{name}</span> : ''}
			{iconR ? <I icon={iconR} /> : ''}
		</>
	);
};

function aaa(props) {
	const {
		children,
		className = '',
		// src,
		// name,
		href = '#',
		// type = '',
		// selected = false,
		// placeholder = '',
		onClick = () => {
			console.log('onClick');
		},
	} = props;

	const style = getStyle(props);
	const content = getContent(props);

	return {
		...props,
		children: children ? children : content,
		className: `${className} | ${style}`,
		// src,
		// name,
		href,
		// type,
		// selected,
		onClick,
	};
}

export const I = (props) => {
	// const {children, onClick, name, className} = aaa({...props, tag: 'button'});
	const option = aaa({...props, tag: 'i'});

	return <i css={option.css} className={option.className} />;
};

export const A = (props) => {
	// const {children, href, name, className} = aaa({...props, tag: 'a'});
	const option = aaa({...props, tag: 'a'});

	return (
		<Link href={option.href}>
			<a name={option.name} css={option.css} className={option.className}>
				{option.children}
			</a>
		</Link>
	);
};

export const Img = (props) => {
	// const {src, name, className} = aaa({...props, tag: 'img'});
	const option = aaa({...props, tag: 'img'});

	return <img src={option.src} name={option.name} css={option.css} className={option.className} />;
};

export const Button = (props) => {
	// const {children, onClick, name, className} = aaa({...props, tag: 'button'});
	const option = aaa({...props, tag: 'button'});

	return (
		<button type="button" onClick={option.onClick} name={option.name} css={option.css} className={option.className}>
			{option.children}
		</button>
	);
};

export const Input = (props) => {
	const option = aaa({
		...props,
		tag: 'input',
	});

	return (
		<div className="group relative inline-block">
			{option.icon ? <I css={option.tag + '-' + option.css} icon={option.icon} className="text-lg absolute left-2 top-1/2 -mt-2" /> : ''}
			<input
				type={option.type}
				placeholder={option.placeholder}
				value={option.value}
				name={option.name}
				onChange={option.onChange}
				css={option.css}
				className={option.className}
			/>
		</div>
	);
};
