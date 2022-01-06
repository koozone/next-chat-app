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
				return <div className={`group px-2 py-1 rounded space-x-1`} />;

			case '[button]':
				// return <div className={`inline-block text-center cursor-pointer group px-2 py-1 rounded space-x-1`} />;
				return <div className={``} />;

			case '[a]':
				// return <div className={`group px-2 py-1 rounded space-x-1`} />;
				return <div className={``} />;

			case '[input]':
				return <div className={`px-2 py-1 rounded w-full truncate ${icon ? 'pl-8' : ''}`} />;

			default:
				return <div className={``} />;
		}
	})();

	const element = (() => {
		// switch (`[${tag}]:${deco}`) {
		switch (`[${tag}]:`) {
			// img
			case '[img]:':
				return <div className={`h-10 aspect-square border-2 border-white/50 rounded-full object-cover`} />;
			// case '[img]:imageA':
			// 	return <div className={`h-10 aspect-square border-2 border-white/50 rounded-full object-cover`} />;
			// case '[img]:imageB':
			// 	return <div className={`inline-block w-[200px] h-[200px] object-cover rounded-md`} />;

			// i
			case '[i]:':
				return <div className={``} />;
			case '[i]:input-':
				return <div className={`text-violet-500`} />;
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
			// 			className={`h-10 aspect-square text-center text-gray-900 bg-black/10 rounded-full hover:text-white hover:bg-black/50`}
			// 		/>
			// 	);
			// case '[button]:buttonB':
			// 	return (
			// 		<div
			// 			className={`px-2 py-2 text-gray-300 rounded-md hover:text-white hover:bg-black/50 inline-block transition relative active:top-0.5`}
			// 		/>
			// 	);

			// a
			case '[a]:':
				return (
					<div
						// className={`text-sm text-violet-500 bg-white/50 hover:bg-white peer-checked:text-white peer-checked:bg-violet-500/50 peer-checked:hover:bg-violet-500`}
						className={``}
					/>
				);
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
			{icon || iconL ? <I deco={tag + '-' + deco} icon={icon || iconL} className="align-middle" /> : ''}
			{name ? <span className="align-middle">{name}</span> : ''}
			{iconR ? <I deco={tag + '-' + deco} icon={iconR} className="align-middle" /> : ''}
		</>
	);
};

const getProps = (props) => {
	const {
		children,
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

	return (
		<button type="button" deco={deco} className={className} name={name} onClick={onClick}>
			<Box {...props}>{children}</Box>
		</button>
		// <div deco={deco} className={className} name={name} onClick={onClick}>
		// 	{children}
		// </div>
	);
};

export const In = (props) => {
	const {children, deco, className, name, href, type, onChange, checked, disabled} = getProps({...props, tag: 'input'});

	return (
		<input
			type={type}
			className="peer absolute opacity-50 top-0 left-2 w-4 h-full m-0 p-0 pointer-events-none z-10"
			id={name}
			name={name}
			onChange={onChange}
			checked={checked}
			disabled={disabled}
		/>
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
	const {children, deco, className, name, href, onChange, checked, disabled} = getProps({...props, tag: 'button'});

	return (
		<Link href={href}>
			<label htmlFor={name} deco={deco} className="inline-block relative cursor-pointer">
				{/* <input
					type="checkbox"
					className="peer absolute opacity-50 top-0 left-2 w-4 h-full m-0 p-0 pointer-events-none z-10"
					id={name}
					name={name}
					onChange={onChange}
					checked={checked}
					disabled={disabled}
				/> */}
				<In {...props} type="checkbox" />
				{/* <div className={className + ' pl-8'} name={name}>
					{children}
				</div> */}
				<Box {...props} />
			</label>
		</Link>
	);
};

export const Radio = (props) => {
	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'button'});

	return (
		<label htmlFor={name} deco={deco} className="inline-block relative cursor-pointer">
			{/* <input
				type="radio"
				className="peer absolute opacity-50 top-0 left-2 w-4 h-full m-0 p-0 pointer-events-none z-10"
				id={name}
				name={name}
				onChange={onChange}
				checked={checked}
				disabled={disabled}
			/> */}
			<In {...props} type="radio" />
			{/* <div className={className + ' pl-8'} name={name}>
				{children}
			</div> */}
			<Box {...props} />
		</label>
	);
};

export const Checkbox = (props) => {
	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'button'});

	return (
		<label htmlFor={name} deco={deco} className="inline-block relative cursor-pointer">
			{/* <input
				type="checkbox"
				className="peer absolute opacity-50 top-0 left-2 w-4 h-full m-0 p-0 pointer-events-none z-10"
				id={name}
				name={name}
				onChange={onChange}
				checked={checked}
				disabled={disabled}
			/> */}
			<In {...props} type="checkbox" />
			{/* <div className={className + ' pl-8'} name={name}>
				{children}
			</div> */}
			<Box {...props} />
		</label>
	);
};
// export const Checkbox2 = (props) => {
// 	const {children, deco, className, name, onChange, checked, disabled} = getProps({...props, tag: 'button'});

// 	return (
// 		<label htmlFor={name} deco={deco} className="inline-block relative cursor-pointer">
// 			<input
// 				type="checkbox"
// 				className="peer absolute opacity-50 top-0 left-0 w-0 h-0 m-0 p-0 pointer-events-none z-10"
// 				id={name}
// 				name={name}
// 				onChange={onChange}
// 				checked={checked}
// 				disabled={disabled}
// 			/>
// 			<div className={className} name={name}>
// 				{children}
// 			</div>
// 		</label>
// 	);
// };

export const Input = forwardRef((props, ref) => {
	const {deco, className, name, onChange, tag, icon, type, value, placeholder} = getProps({
		...props,
		tag: 'input',
	});

	return (
		<div deco={deco} className="group relative inline-block">
			{icon ? <I deco={tag + '-' + deco} className="absolute left-2 top-1/2 -mt-2" icon={icon} /> : ''}
			<input type={type} deco={deco} className={className} name={name} ref={ref} onChange={onChange} placeholder={placeholder} value={value} />
		</div>
	);
});
