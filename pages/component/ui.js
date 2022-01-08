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
				return <div className={``} />;

			case '[a]':
			case '[radio]':
			case '[checkbox]':
				return <div className={`inline-block relative cursor-pointer select-none`} />;

			case '[input]':
				return <div className={`px-2 py-1 rounded w-full truncate`} />;

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

			// box
			case '[box]:':
				return (
					<div
						className={`text-sm text-violet-500 bg-white/50 hover:bg-white peer-checked:text-white peer-checked:bg-violet-500/50 peer-checked:hover:bg-violet-500`}
					/>
				);
			case '[box]:a-1':
				return (
					<div
						className={`text-sm text-white bg-blue-500/80 ring-2 ring-blue-500 hover:bg-blue-500 peer-checked:text-blue-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:a-2':
				return (
					<div
						className={`text-sm text-white bg-neutral-500/80 ring-2 ring-neutral-500 hover:bg-neutral-500 peer-checked:text-neutral-500 peer-checked:bg-white/80 peer-checked:hover:bg-white`}
					/>
				);
			case '[box]:a-3':
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
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;
			case '[type]:a-1':
			case '[type]:a-2':
			case '[type]:a-3':
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;
			case '[type]:ch-1':
				return <div className={`accent-blue-500 opacity-100 top-0 left-2 w-4 h-full`} />;
			case '[type]:ch-2':
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;
			case '[type]:ch-3':
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;
			case '[type]:ra-1':
				return <div className={`accent-neutral-500 opacity-100 top-0 left-2 w-4 h-full`} />;
			case '[type]:ra-2':
				return <div className={`opacity-50 top-0 left-0 w-0 h-0`} />;

			// button
			case '[button]:':
				return <div className={``} />;

			// area
			case '[a]:':
			case '[radio]:':
			case '[checkbox]:':
				return <div className={``} />;

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
		style,
		className,
		href,
		onClick,
		onChange,
	};
};

export const Img = (props) => {
	const {deco, style, className, name, src} = getProps({...props, tag: 'img'});

	// return <Image deco={deco} className={className} name={name} src={src} layout="fill" objectFit="cover" />;
	return <img deco={deco} className={`${style} | ${className}`} name={name} src={src} />;
};

export const I = (props) => {
	const {deco, style, className} = getProps({...props, tag: 'i'});

	return <i deco={deco} className={style} />;
};

export const Label = (props) => {
	const {children, deco, style, className} = getProps({...props, tag: 'label'});

	return (
		<label deco={deco} className={`${style} | ${className}`}>
			{children}
		</label>
	);
};

export const Type = (props) => {
	const {children, deco, style, className, name, href, type, onChange, checked, disabled} = getProps({...props, tag: 'type'});

	return <input type={type} deco={deco} className={style} id={name} name={name} onChange={onChange} checked={checked} disabled={disabled} />;
};
export const Box = (props) => {
	const {children, deco, style, className, name} = getProps({...props, tag: 'box'});

	return (
		<div deco={deco} className={`${style} | ${className}`} name={name}>
			{children}
		</div>
	);
};

export const Button = (props) => {
	const {children, deco, style, className, name, onClick} = getProps({...props, tag: 'button'});

	return (
		<button type="button" deco={deco} className={style} name={name} onClick={onClick}>
			<Box {...props}>{children}</Box>
		</button>
	);
};

export const A = (props) => {
	const {children, deco, style, className, name, href, onChange, checked, disabled} = getProps({...props, tag: 'a'});

	return (
		<Link href={href}>
			<label htmlFor={name} deco={deco} className={style}>
				<Type {...props} type="checkbox" />
				<Box {...props} />
			</label>
		</Link>
	);
};

export const Radio = (props) => {
	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

	return (
		<label htmlFor={name} deco={deco} className={style}>
			<Type {...props} type="radio" />
			<Box {...props} />
		</label>
	);
};
export const Radio2 = (props) => {
	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

	return (
		<label htmlFor={name} deco={deco} className={style}>
			<Type {...props} type="radio" />
			<I deco={`${deco}:off`} icon="bxs-circle" />
			<I deco={`${deco}:on`} icon="bx-radio-circle-marked" />
			<Box {...props} />
		</label>
	);
};

export const Checkbox = (props) => {
	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={name} deco={deco} className={style}>
			<Type {...props} type="checkbox" />
			<Box {...props} />
		</label>
	);
};
export const Checkbox2 = (props) => {
	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={name} deco={deco} className={style}>
			<Type {...props} type="checkbox" />
			<I deco={`${deco}:off`} icon="bxs-checkbox" />
			<I deco={`${deco}:on`} icon="bx-checkbox-checked" />
			<Box {...props} />
		</label>
	);
};
export const Checkbox3 = (props) => {
	const {children, deco, style, className, name, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={name} deco={deco} className={style}>
			<Type {...props} type="checkbox" />
			{children}
			<Box {...props} />
		</label>
	);
};

export const Input = forwardRef((props, ref) => {
	const {deco, style, className, name, onChange, icon, type, value, placeholder} = getProps({
		...props,
		tag: 'input',
	});

	return (
		<div deco={deco} className="group relative inline-block">
			{icon ? <I deco={deco} icon={icon} /> : ''}
			<input type={type} className={`${style} | ${className}`} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />
		</div>
	);
});
