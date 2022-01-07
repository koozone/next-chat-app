import Image from 'next/image';
import Link from 'next/link';
import {forwardRef} from 'react';

const getStyle = (props) => {
	const {tag, deco = '', icon} = props;

	const defaultElement = (() => {
		switch (`[${tag}]`) {
			case '[img]':
				return <div className={``} />;

			case '[i]':
				return <div className={`bx ${icon} pointer-events-none`} />;

			case '[label]':
				return <div className={`cursor-text space-x-1`} />;

			case '[box]':
				return <div className={`group px-2 py-1 flex justify-center items-center rounded space-x-1`} />;

			case '[type]':
				return <div className={`peer absolute m-0 p-0 pointer-events-none`} />;

			case '[button]':
				// return <div className={`inline-block text-center cursor-pointer group px-2 py-1 rounded space-x-1`} />;
				return <div className={``} />;

			case '[a]':
			case '[radio]':
			case '[checkbox]':
				// return <div className={`inline-block text-center cursor-pointer group px-2 py-1 rounded space-x-1`} />;
				return <div className={`inline-block relative cursor-pointer select-none`} />;

			case '[input]':
				return <div className={`px-2 py-1 rounded w-full truncate`} />;

			default:
				return <div className={``} />;
		}
	})();

	const element = (() => {
		switch (`[${tag}]:${deco}`) {
			// switch (`[${tag}]:`) {
			// img
			case '[img]:':
				return <div className={``} />;
			case '[img]:im-1':
				return <div className={`h-8 aspect-square ring-2 ring-white/50 rounded-full object-cover`} />;
			// case '[img]:imageA':
			// 	return <div className={`h-8 aspect-square border-2 border-white/50 rounded-full object-cover`} />;
			// case '[img]:imageB':
			// 	return <div className={`inline-block w-[200px] h-[200px] object-cover rounded-md`} />;

			// i
			case '[i]:':
				return <div className={``} />;
			case '[i]:in-1':
				return <div className={`text-black/50 group-focus-within:text-blue-500`} />;
			case '[i]:in-3':
				return <div className={`text-black/50 group-focus-within:text-rose-500`} />;
			case '[i]:bu-9':
				return <div className={`text-black/50 text-lg group-hover:text-white/80`} />;
			// case '[i]:button-primary':
			// 	return <div className={`text-white group-hover:text-blue-500 group-hover:animate-bounce`} />;
			// case '[i]:button-danger':
			// 	return <div className={`text-white group-hover:text-rose-500 group-hover:animate-bounce`} />;
			// case '[i]:input-primary':
			// 	return <div className={`text-gray-500 group-focus-within:text-blue-500 group-focus-within:animate-spin`} />;
			// case '[i]:input-danger':
			// 	return <div className={`text-gray-500 group-focus-within:text-rose-500 group-focus-within:animate-spin`} />;
			// case '[i]:label-test':
			// 	return <div className={`group-checked:text-white`} />;

			// label
			case '[label]:':
				return <div className={`text-sm text-violet-500`} />;
			case '[label]:la-1':
				return <div className={`text-2xl text-neutral-900 font-semibold`} />;
			case '[label]:la-2':
				return <div className={`text-base text-neutral-900 font-medium`} />;
			case '[label]:la-3':
				return <div className={`text-sm text-neutral-900`} />;
			case '[label]:la-5':
				return <div className={`text-xs text-red-500 font-medium`} />;
			// case '[label]:100':
			// 	return <div className={`text-xs`} />;
			// case '[label]:300':
			// 	return <div className={`text-base text-black font-normal`} />;
			// case '[label]:400':
			// 	return <div className={`text-2xl text-black/50 font-semibold`} />;
			// case '[label]:test':
			// 	return <div className={`text-red-500`} />;

			// box
			case '[box]:':
				return (
					<div
						className={`text-sm text-violet-500 bg-white/50 hover:bg-white peer-checked:text-white peer-checked:bg-violet-500/50 peer-checked:hover:bg-violet-500`}
					/>
				);
			case '[box]:a-1':
			case '[box]:bu-1':
				return (
					<div
						className={`text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:a-2':
			case '[box]:bu-2':
				return (
					<div
						className={`text-sm text-white bg-neutral-500/80 ring-2 ring-neutral-500 hover:bg-neutral-500 peer-checked:text-neutral-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:a-3':
			case '[box]:bu-3':
				return (
					<div
						className={`text-sm text-white bg-lime-500/80 ring-2 ring-lime-500 hover:bg-lime-500 peer-checked:text-lime-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:ch-1':
			case '[box]:ch-2':
				return (
					<div
						className={`pl-8 text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:ra-1':
			case '[box]:ra-2':
				return (
					<div
						className={`pl-8 text-sm text-white bg-neutral-500/80 ring-2 ring-neutral-500 hover:bg-neutral-500 peer-checked:text-neutral-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);

			case '[box]:bu-9':
				// return <div className={`h-8 aspect-square text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50`} />;
				return <div className={`h-8 aspect-square ring-2 ring-white/50 !rounded-full`} />;

			// type
			case '[type]:':
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;
			case '[type]:a-1':
			case '[type]:a-2':
			case '[type]:a-3':
			case '[type]:ch-2':
			case '[type]:ra-2':
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;
			case '[type]:ch-1':
				return <div className={`accent-blue-500 opacity-100 top-0 left-2 w-4 h-full`} />;
			case '[type]:ra-1':
				return <div className={`accent-neutral-500 opacity-100 top-0 left-2 w-4 h-full`} />;

			// button
			case '[button]:':
				return (
					<div
						// className={`text-sm text-violet-500 bg-white/50 hover:bg-white peer-checked:text-white peer-checked:bg-violet-500/50 peer-checked:hover:bg-violet-500`}
						className={``}
					/>
				);
			// case '[button]:checkbox':
			// 	return <div className={`text-white bg-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 peer-disabled:bg-gray-500`} />;
			// case '[button]:primary':
			// 	return (
			// 		<div
			// 			className={`text-white bg-blue-500 hover:bg-blue-50 hover:ring-blue-500 hover:text-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-600 peer-disabled:bg-gray-500`}
			// 		/>
			// 	);
			// case '[button]:secondary':
			// 	return <div className={`text-white bg-neutral-500 hover:bg-neutral-600`} />;
			// case '[button]:success':
			// 	return <div className={`text-white bg-lime-500 hover:bg-lime-600`} />;
			// case '[button]:danger':
			// 	return <div className={`text-white bg-rose-500 hover:bg-rose-50 hover:ring-rose-500 hover:text-rose-600`} />;
			// case '[button]:warning':
			// 	return <div className={`text-white bg-amber-500 hover:bg-amber-600`} />;
			// case '[button]:info':
			// 	return <div className={`text-white bg-cyan-500 hover:bg-cyan-600`} />;
			// case '[button]:bold':
			// 	return (
			// 		<div
			// 			className={`px-2 py-2 text-black/80 bg-white/20 font-semibold border-b-2 border-r-2 border-black/50 rounded-md hover:border-0 hover:border-t-2 hover:border-l-2 hover:border-black/50 hover:bg-black/10 hover:text-white peer-checked:bg-red-500`}
			// 		/>
			// 	);
			// case '[button]:normal':
			// 	return (
			// 		<div
			// 			className={`px-2 py-2 text-white ring-2 ring-white rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5`}
			// 		/>
			// 	);
			// case '[button]:buttonA':
			// 	return (
			// 		<div
			// 			className={`h-8 aspect-square text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50`}
			// 		/>
			// 	);
			// case '[button]:buttonB':
			// 	return (
			// 		<div
			// 			className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5`}
			// 		/>
			// 	);

			// area
			case '[a]:':
			case '[radio]:':
			case '[checkbox]:':
				return <div className={``} />;

			// // a
			// case '[a]:':
			// 	return (
			// 		<div
			// 			// className={`text-sm text-violet-500 bg-white/50 hover:bg-white peer-checked:text-white peer-checked:bg-violet-500/50 peer-checked:hover:bg-violet-500`}
			// 			className={``}
			// 		/>
			// 	);
			// case '[a]:linkA':
			// 	return (
			// 		<div
			// 			className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5`}
			// 		/>
			// 	);
			// case '[a]:linkB':
			// 	return (
			// 		<div
			// 			className={`px-2 py-2 text-white/80 border-white/80 border-2 rounded hover:text-black/60 hover:bg-white/60 inline-block transition relative active:top-0.5`}
			// 		/>
			// 	);
			// case '[a]:linkC':
			// 	return <div className={`block px-2 py-1 rounded-md`} />;

			// input
			case '[input]:':
				return <div className={`text-sm text-violet-500 bg-white/50 focus:bg-white placeholder-black/30`} />;
			case '[input]:in-1':
				return (
					<div
						className={`text-sm pl-8 text-black/80 bg-white/80 ring-1 ring-black/30 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none placeholder-black/30`}
					/>
				);
			case '[input]:in-3':
				return (
					<div
						className={`text-sm pl-8 text-black/80 bg-white/80 ring-1 ring-black/30 focus:ring-2 focus:ring-rose-500 focus:bg-white focus:outline-none placeholder-black/30`}
					/>
				);
			// case '[input]:primary':
			// 	return <div className={`focus:ring-blue-500 text-gray-900 placeholder-gray-300`} />;
			// case '[input]:danger':
			// 	return <div className={`focus:ring-rose-500 text-gray-900 placeholder-gray-300`} />;

			default:
				return <div className="" />;
		}
	})();

	return `${defaultElement.props.className} | ${element.props.className}`;
};

const getContent = (props) => {
	const {tag, deco = '', icon, iconL, iconR, name} = props;

	return (
		<>
			{icon || iconL ? <I deco={deco} icon={icon || iconL} /> : ''}
			{name ? <span>{name}</span> : ''}
			{iconR ? <I deco={deco} icon={iconR} /> : ''}
		</>
	);
};

const getProps = (props) => {
	const {
		children,
		tag,
		deco = '',
		className = '',
		href = '#',
		onClick = () => {
			console.log('click!');
		},
		onChange = () => {
			console.log('change!');
		},
	} = props;

	const style = getStyle(props);
	const content = getContent(props);

	return {
		...props,
		children: children ? children : content,
		deco,
		className: `${style} | ${className}`,
		href,
		onClick,
		onChange,
	};
};

export const Img = (props) => {
	const {deco, className, name, src} = getProps({...props, tag: 'img'});

	// return <Image deco={deco} className={className} name={name} src={src} layout="fill" objectFit="cover" />;
	return <img deco={deco} className={className} name={name} src={src} />;
};

export const I = (props) => {
	const {deco, className} = getProps({...props, tag: 'i'});

	return <i deco={deco} className={className} />;
};

export const Label = (props) => {
	const {children, deco, className} = getProps({...props, tag: 'label'});

	return (
		<label deco={deco} className={className}>
			{children}
		</label>
	);
};

export const Type = (props) => {
	const {children, deco, className, name, href, type, onChange, checked, disabled} = getProps({...props, tag: 'type'});

	return <input type={type} deco={deco} className={className} id={name} name={name} onChange={onChange} checked={checked} disabled={disabled} />;
};
export const Box = (props) => {
	const {children, deco, className, name} = getProps({...props, tag: 'box'});

	return (
		<div deco={deco} className={className} name={name}>
			{children}
		</div>
	);
};

export const Button = (props) => {
	const {children, deco, className, name, onClick} = getProps({...props, tag: 'button'});
	const css = 'button-' + deco;

	return (
		<button type="button" deco={deco} className={className} name={name} onClick={onClick}>
			<Box {...props}>{children}</Box>
		</button>
	);
};

// export const A2 = (props) => {
// 	const {children, deco, className, name, href, checked, disabled} = getProps({...props, tag: 'a'});

// 	return (
// 		<Link href={href}>
// 			<a deco={deco} className={className} name={name}>
// 				{children}
// 			</a>
// 		</Link>
// 	);
// };
export const A = (props) => {
	const {children, deco, className, name, href, onChange, checked, disabled} = getProps({...props, tag: 'a'});

	return (
		<Link href={href}>
			<label htmlFor={name} deco={deco} className={className}>
				<Type {...props} type="checkbox" />
				<Box {...props} />
			</label>
		</Link>
	);
};

export const Radio = (props) => {
	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

	return (
		<label htmlFor={name} deco={deco} className={className}>
			<Type {...props} type="radio" />
			<Box {...props} />
		</label>
	);
};
export const Radio2 = (props) => {
	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

	return (
		<label htmlFor={name} deco={deco} className={className}>
			<Type {...props} type="radio" />
			<I deco={deco} icon="bxs-circle" className="absolute top-2 left-2 text-base text-white visible peer-checked:invisible" />
			<I deco={deco} icon="bx-radio-circle-marked" className="absolute top-1 left-1 text-2xl text-neutral-500 invisible peer-checked:visible" />
			<Box {...props} />
		</label>
	);
};

export const Checkbox = (props) => {
	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={name} deco={deco} className={className}>
			<Type {...props} type="checkbox" />
			<Box {...props} />
		</label>
	);
};
export const Checkbox2 = (props) => {
	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={name} deco={deco} className={className}>
			<Type {...props} type="checkbox" />
			<I deco={deco} icon="bxs-checkbox" className="absolute top-1 left-1 text-2xl text-white visible peer-checked:invisible" />
			<I deco={deco} icon="bx-checkbox-checked" className="absolute top-1 left-1 text-2xl text-blue-500 invisible peer-checked:visible" />
			<Box {...props} />
		</label>
	);
};

export const Input = forwardRef((props, ref) => {
	const {deco, className, name, onChange, tag, icon, type, value, placeholder} = getProps({
		...props,
		tag: 'input',
	});

	return (
		<div deco={deco} className="group relative inline-block">
			{icon ? <I {...props} icon={icon} className="absolute left-2 top-1/2 -mt-2" /> : ''}
			<input type={type} className={className} name={name} ref={ref} onChange={onChange} placeholder={placeholder} value={value} />
		</div>
	);
});
