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

			case '[text]':
				// return <div className={`inline-flex justify-center items-center`} />;
				return <div className={`inline-block`} />;

			case '[box]':
				// return <div className={`flex justify-center items-center`} />;
				return <div className={``} />;

			case '[type]':
				// return <div className={`peer absolute m-0 p-0 pointer-events-none`} />;
				return <div className={`peer absolute top-0 left-0 appearance-none pointer-events-none`} />;
			// return <div className={`peer h-4 w-4 float-left mr-2 appearance-none pointer-events-none`} />;
			// return (
			// 	<div
			// 		className={`peer appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
			// 	/>
			// );
			case '[type2]':
				// return <div className={`peer absolute m-0 p-0 pointer-events-none`} />;
				return <div className={`bg-transparent outline-none truncate peer-disabled:opacity-30 peer-disabled:pointer-events-none`} />;
			// case '[type3]':
			// 	return <div className={`peer absolute top-0 left-0 pointer-events-none`} />;

			case '[button]':
				return <div className={`inline-flex justify-center items-center relative cursor-pointer select-none`} />;

			case '[a]':
			case '[radio]':
			case '[checkbox]':
				return <div className={`group inline-flex justify-center items-center relative cursor-pointer select-none`} />;

			// case '[input]':
			// 	// return <div className={`px-2 py-1 rounded w-full truncate`} />;
			// 	return <div className={`peer truncate`} />;
			case '[input]':
				return <div className={`group inline-flex justify-center items-center relative`} />;

			default:
				return <div className={``} />;
		}
	})();

	const element = (() => {
		switch (`[${tag}]:${deco}`) {
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
				return <div className={`absolute left-2 top-1/2 -mt-2 text-black/50 group-focus-within:text-blue-500`} />;
			case '[i]:in-3':
				return <div className={`absolute left-2 top-1/2 -mt-2 text-black/50 group-focus-within:text-rose-500`} />;
			case '[i]:bu-9':
				return <div className={`text-black/50 text-lg group-hover:text-white/80`} />;
			case '[i]:ch-2:off':
				return <div className={`absolute top-1 left-1 text-2xl text-white visible peer-checked:invisible`} />;
			case '[i]:ch-2:on':
				return <div className={`absolute top-1 left-1 text-2xl text-blue-500 invisible peer-checked:visible`} />;
			case '[i]:ra-2:off':
				return <div className={`absolute top-2 left-2 text-base text-white visible peer-checked:invisible`} />;
			case '[i]:ra-2:on':
				return <div className={`absolute top-1 left-1 text-2xl text-neutral-500 invisible peer-checked:visible`} />;

			// text
			case '[text]:':
				// return <div className={`text-sm text-violet-500`} />;
				return <div className={``} />;
			case '[text]:la-1':
				return <div className={`text-2xl text-neutral-900 font-semibold`} />;
			case '[text]:l3':
				return <div className={`text-base text-neutral-900 font-medium`} />;
			case '[text]:la-3':
				return <div className={`text-sm text-neutral-900`} />;
			case '[text]:la-5':
				return <div className={`text-xs text-red-500 font-medium`} />;
			case '[box]:a-1':
				return (
					<div className={`underline decoration-transparent text-blue-500/80 hover:text-blue-500 hover:decoration-inherit peer-checked:text-white`} />
				);
			case '[box]:a-2':
				return (
					<div className={`underline decoration-transparent text-rose-500/80 hover:text-rose-500 hover:decoration-inherit peer-checked:text-white`} />
				);
			case '[box]:a-3':
				return (
					<div
						className={`px-2 text-sm underline decoration-transparent text-blue-500/80 hover:text-blue-500 hover:decoration-inherit peer-checked:text-white ring-1 ring-gray-500 rounded bg-orange-200`}
					/>
				);

			// box
			case '[box]:':
				return (
					<div
						// className={`text-sm text-violet-500 bg-white/50 hover:bg-white peer-checked:text-white peer-checked:bg-violet-500/50 peer-checked:hover:bg-violet-500`}
						className={``}
					/>
				);
			// case '[box]:a-1':
			// 	return (
			// 		<div
			// 			className={`text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
			// 		/>
			// 	);
			// case '[box]:a-2':
			// 	return (
			// 		<div
			// 			className={`text-sm text-white bg-neutral-500/80 ring-2 ring-neutral-500 hover:bg-neutral-500 peer-checked:text-neutral-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
			// 		/>
			// 	);
			// case '[box]:a-3':
			// 	return (
			// 		<div
			// 			className={`text-sm text-white bg-lime-500/80 ring-2 ring-lime-500 hover:bg-lime-500 peer-checked:text-lime-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
			// 		/>
			// 	);
			case '[box]:ch-1':
			case '[box]:ch-2':
				return (
					<div
						className={`pl-8 text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:ch-3':
				return (
					<div
						className={`text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:ra-1':
			case '[box]:ra-2':
				return (
					<div
						className={`pl-8 text-sm text-white bg-neutral-500/80 ring-2 ring-neutral-500 hover:bg-neutral-500 peer-checked:text-neutral-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);

			case '[box]:bu-1':
				return (
					<div
						className={`text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:bu-2':
				return (
					<div
						className={`text-sm text-white bg-neutral-500/80 ring-2 ring-neutral-500 hover:bg-neutral-500 peer-checked:text-neutral-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:bu-3':
				return (
					<div
						className={`text-sm text-white bg-lime-500/80 ring-2 ring-lime-500 hover:bg-lime-500 peer-checked:text-lime-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:bu-4':
				return (
					<div
						className={`text-sm text-white bg-rose-500/80 ring-2 ring-rose-500 hover:bg-rose-500 peer-checked:text-rose-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:bu-5':
				return (
					<div
						className={`text-sm text-white bg-amber-500/80 ring-2 ring-amber-500 hover:bg-amber-500 peer-checked:text-amber-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:bu-6':
				return (
					<div
						className={`text-sm text-white bg-cyan-500/80 ring-2 ring-cyan-500 hover:bg-cyan-500 peer-checked:text-cyan-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:bu-9':
				return <div className={`h-8 aspect-square ring-2 ring-white/50 !rounded-full`} />;

			// type
			case '[type]:':
			case '[type2]:':
				return <div className={``} />;
			case '[type]:a-1':
			case '[type]:a-2':
			case '[type]:a-3':
				return <div className={`appearance-none`} />;
			case '[type]:bu-1':
			case '[type]:bu-2':
			case '[type]:bu-3':
				return <div className={`appearance-none`} />;
			case '[type]:ch-1':
				return <div className={`accent-blue-500 opacity-100 top-0 left-2 w-4 h-full`} />;
			case '[type]:ch-2':
				return <div className={`appearance-none`} />;
			case '[type]:ch-3':
				return <div className={`appearance-none`} />;
			case '[type]:ra-1':
				return <div className={`accent-neutral-500 opacity-100 top-0 left-2 w-4 h-full`} />;
			case '[type]:ra-2':
				return <div className={`appearance-none`} />;

			// button
			case '[button]:':
				return <div className={``} />;

			// a
			case '[a]:':
				return <div className={``} />;
			// case '[a]:a-3':
			// 	return <div className={`px-2 text-sm ring-1 ring-gray-500 rounded bg-orange-200 text-green-500`} />;

			// radio
			case '[radio]:':
				return <div className={``} />;

			// checkbox
			case '[checkbox]:':
				return <div className={``} />;

			// input
			case '[input]:':
				// return <div className={`text-sm text-violet-500 bg-white/50 focus:bg-white placeholder-black/30`} />;
				return <div className={``} />;
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

			default:
				return <div className={``} />;
		}
	})();

	return `${defaultElement.props.className} | ${element.props.className}`;
};

const getContent = (props) => {
	const {deco = '', icon, iconL, iconR, name} = props;

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
		deco = '',
		className = '',
		href = '',
		onClick = (event) => {
			console.log(`${event.currentTarget.name} click!`);
		},
		onChange = (event) => {
			console.log(`${event.currentTarget.name} change!`);
		},
	} = props;

	const style = getStyle(props);
	const content = getContent(props);

	return {
		...props,
		children: children ? children : content,
		deco,
		style,
		className,
		href,
		onClick,
		onChange,
	};
};

export const Img = (props) => {
	const {deco, style, className, name, src} = getProps({...props, tag: 'img'});

	// return <Image className={`${style} | ${className}`} src={src} layout="fill" objectFit="cover" />;
	// return <Image className={`${style} | ${className}`} src={src} width={100} height={100} />;
	return <img className={`${style} | ${className}`} name={name} src={src} />;
};

export const I = (props) => {
	const {deco, style, className} = getProps({...props, tag: 'i'});

	return <i className={`${style} | ${className}`} />;
};

export const Type = (props) => {
	const {children, deco, style, className, name, id, href, type, onChange, checked, disabled} = getProps({...props, tag: 'type'});

	return <input type={type} className={style} id={id} name={name} onChange={onChange} checked={checked} disabled={disabled} />;
};
export const Type2 = forwardRef((props, ref) => {
	const {children, deco, style, className, name, id, href, type, value, placeholder, onChange, checked, disabled} = getProps({...props, tag: 'type2'});

	return <input type={type} className={style} id={id} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />
});

export const Label = (props) => {
	return Text(props);
};
export const Text = (props) => {
	const {children, deco, style, className, name} = getProps({...props, tag: 'text'});

	return <div className={`${style} | ${className}`}>{children}</div>;
};

export const Box = (props) => {
	const {children, deco, style, className, name} = getProps({...props, tag: 'box'});

	return <div className={`${style} | ${className}`}>{children}</div>;
};

// export const Button = (props) => {
// 	const {children, deco, style, className, name, href, onClick} = getProps({...props, tag: 'button'});

// 	return href ? (
// 		<Link href={href}>
// 			<label htmlFor={name} deco={deco} className={style}>
// 				<Type {...props} type="checkbox" />
// 				<Box {...props} />
// 			</label>
// 		</Link>
// 	) : (
// 		<button type="button" deco={deco} className={style} name={name} onClick={onClick}>
// 			{/* <Box {...props}>{children}</Box> */}
// 			<Box {...props} />
// 		</button>
// 	);
// 	return (
// 		<button type="button" deco={`[button]:${deco}`} className={style} name={name} onClick={onClick}>
// 			<label htmlFor={name} className={style}>
// 				<Type {...props} type="checkbox" disabled />
// 				<Box {...props} />
// 			</label>
// 		</button>
// 	);
// };
export const Button = (props) => {
	const {children, deco, style, className, name, href, onClick, checked=false} = getProps({...props, tag: 'button'});

	return (
		<button type="button" className="group" name={name} onClick={onClick}>
			<label htmlFor={name} className={`${style} | ${className}`}>
				<Type {...props} type="checkbox" checked={checked} />
				{children}
			</label>
		</button>
	);
};

export const A = (props) => {
	const {children, deco, style, className, name, href, onChange, checked=false, disabled} = getProps({...props, tag: 'a'});

	return (
		<Link href={href}>
			<label htmlFor={name} className={`${style} | ${className}`}>
				<Type {...props} type="checkbox" checked={checked} />
				{/* <Box {...props} /> */}
				{/* <a className="underline decoration-transparent text-blue-500/80 hover:text-blue-500 hover:decoration-inherit peer-checked:text-white">
					{children}
				</a> */}
				{children}
			</label>
		</Link>
	);
};

// export const Checkbox = (props) => {
// 	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

// 	return (
// 		<label htmlFor={name} deco={`[checkbox]:${deco}`} className={style}>
// 			<Type {...props} type="checkbox" />
// 			<Box {...props} />
// 		</label>
// 	);
// };
export const Checkbox = (props) => {
	const {children, deco, style, className, name, id, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="checkbox" />
			{children}
		</label>
	);
};
// export const Checkbox2 = (props) => {
// 	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

// 	return (
// 		<label htmlFor={name} className={style}>
// 			<Type {...props} type="checkbox" />
// 			<I deco={`${deco}:off`} icon="bxs-checkbox" />
// 			<I deco={`${deco}:on`} icon="bx-checkbox-checked" />
// 			<Box {...props} />
// 		</label>
// 	);
// };
// export const Checkbox3 = (props) => {
// 	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

// 	return (
// 		<label htmlFor={name} className={style}>
// 			<Type {...props} type="checkbox" />
// 			<Box {...props} />
// 		</label>
// 	);
// };

export const Radio = (props) => {
	const {children, deco, style, className, name, id, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="radio" />
			{children}
		</label>
	);
};
// export const Radio2 = (props) => {
// 	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

// 	return (
// 		<label htmlFor={name} className={style}>
// 			<Type {...props} type="radio" />
// 			<I deco={`${deco}:off`} icon="bxs-circle" />
// 			<I deco={`${deco}:on`} icon="bx-radio-circle-marked" />
// 			<Box {...props} />
// 		</label>
// 	);
// };

// export const Input = forwardRef((props, ref) => {
// 	const {children, deco, style, className, name, onChange, icon, type, value, placeholder, disabled} = getProps({
// 		...props,
// 		tag: 'input',
// 	});

// 	return (
// 		// <div deco={deco} className="group relative inline-block">
// 		// 	{icon ? <I deco={deco} icon={icon} /> : ''}
// 		// 	<input type={type} className={`${style} | ${className}`} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />
// 		// </div>
// 		<div className="group inline-block relative">
// 			<input type={type} className={`${style} | ${className}`} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} />
// 			{children}
// 		</div>
// 	);
// });
export const Input = forwardRef((props, ref) => {
	const {children, deco, style, className, name, id, onChange, icon, type, value, placeholder, disabled} = getProps({
		...props,
		tag: 'input',
	});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="button" />
			{children}
			<Type2 {...props} type={type} />
		</label>
	);
});
