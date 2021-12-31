import Link from 'next/link';
import {useFiled} from '../hook/useFiled';

const getStyle = (props) => {
	const {tag, css, icon, selected} = props;

	const buttonStyle = (<div className={`px-2 py-1 ring-1 ring-black/10 text-sm leading-6 font-medium rounded-md space-x-1 ${selected ? '' : ''}`} />).props.className;
	const inputStyle = (<div className={`px-2 py-1 ring-1 ring-black/10 text-sm leading-6 font-medium rounded-md space-x-1 ${icon ? 'pl-9' : ''} ${selected ? '' : ''}`} />).props.className;

	const element = (() => {
		switch (`[${tag}] ${css}`) {
			case '[button] primary':
				return <div className={`text-white bg-blue-500 hover:bg-blue-600 ${selected ? '' : ''} ${buttonStyle}`} />;
			case '[button] secondary':
				return <div className={`text-white bg-neutral-400 hover:bg-neutral-500 ${selected ? '' : ''} ${buttonStyle}`} />;
			case '[button] success':
				return <div className={`text-white bg-lime-500 hover:bg-lime-600 ${selected ? '' : ''} ${buttonStyle}`} />;
			case '[button] danger':
				return <div className={`text-white bg-rose-500 hover:bg-rose-600 ${selected ? '' : ''} ${buttonStyle}`} />;
			case '[button] warning':
				return <div className={`text-white bg-amber-500 hover:bg-amber-600 ${selected ? '' : ''} ${buttonStyle}`} />;
			case '[button] info':
				return <div className={`text-white bg-cyan-500 hover:bg-cyan-600 ${selected ? '' : ''} ${buttonStyle}`} />;
			case '[button] bold':
				return (
					<div
						className={`px-2 py-2 text-black/80 bg-white/20 font-semibold border-b-2 border-r-2 border-black/50 rounded-md hover:border-0 hover:border-t-2 hover:border-l-2 hover:border-black/50 hover:bg-black/10 hover:text-white space-x-1 ${
							selected ? 'bg-red-500' : ''
						}`}
					/>
				);
			case '[button] normal':
				return (
					<div
						className={`px-2 py-2 text-white ring-2 ring-white rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[button] buttonA':
				return (
					<div className={`h-10 aspect-square text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50 space-x-1 ${selected ? 'bg-white/20' : 'bg-black/20'}`} />
				);
			case '[button] buttonB':
				return (
					<div
						className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[a] linkA':
				return (
					<div
						className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[a] linkB':
				return (
					<div
						className={`px-2 py-2 text-white/80 border-white/80 border-2 rounded hover:text-black/60 hover:bg-white/60 inline-block transition relative active:top-0.5 space-x-1 ${
							selected ? 'bg-white/20' : 'bg-black/20'
						}`}
					/>
				);
			case '[a] linkC':
				return <div className={`block px-2 py-1 rounded-md ${selected ? 'bg-sky-300 text-white' : 'bg-gray-50 hover:text-red-900'}`} />;
			case '[img] imageA':
				return <div className={`h-10 aspect-square border-2 border-white/50 rounded-full object-cover ${selected ? '' : ''}`} />;
			case '[img] imageB':
				return <div className={`inline-block w-[200px] h-[200px] object-cover rounded-md ${selected ? '' : ''}`} />;
			case '[input] primary':
				return <div className={`focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-gray-900 placeholder-gray-300 ${selected ? '' : ''}  ${inputStyle}`} />;
			case '[input] secondary':
				return <div className={`focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-gray-900 placeholder-gray-300 ${selected ? '' : ''}  ${inputStyle}`} />;
			default:
				return <div className="" />;
		}
	})();

	return element.props.className;
};

const getContent = ({icon, iconL, iconR, name}) => {
	return (
		<>
			{icon || iconL ? <i className={`bx ${icon || iconL} bx-fw`} /> : ''}
			{name ? <span>{name}</span> : ''}
			{iconR ? <i className={`bx ${iconR} bx-fw`} /> : ''}
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

export const A = (props) => {
	// const {children, href, name, className} = aaa({...props, tag: 'a'});
	const option = aaa({...props, tag: 'a'});

	return (
		<Link href={option.href}>
			<a name={option.name} className={option.className}>
				{option.children}
			</a>
		</Link>
	);
};

export const Img = (props) => {
	// const {src, name, className} = aaa({...props, tag: 'img'});
	const option = aaa({...props, tag: 'img'});

	return <img src={option.src} name={option.name} className={option.className} />;
};

export const Button = (props) => {
	// const {children, onClick, name, className} = aaa({...props, tag: 'button'});
	const option = aaa({...props, tag: 'button'});

	return (
		<button type="button" onClick={option.onClick} name={option.name} className={option.className}>
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
			{/* <i className={`bx bx-user text-lg absolute left-3 top-1/2 -mt-2 text-gray-400 pointer-events-none group-focus-within:text-blue-500`}></i> */}
			{option.icon ? <i className={`bx ${option.icon} text-lg absolute left-2 top-1/2 -mt-2 pointer-events-none text-gray-500 group-focus-within:text-blue-500`} /> : ''}
			<input
				type={option.type}
				// className="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm"
				placeholder={option.placeholder}
				value={option.value}
				name={option.name}
				onChange={option.onChange}
				className={option.className}
			/>
		</div>
	);
};
