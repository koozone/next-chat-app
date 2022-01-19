import Image from 'next/image';
import Link from 'next/link';
import {forwardRef} from 'react';

const getDefaultElement = (props) => {
	const {tag, disabled} = props;

	switch (tag) {
		case 'img':
			return <div className={``} />;

		case 'text':
			return <div className={`bg-transparent outline-none truncate peer-disabled:opacity-30 peer-disabled:pointer-events-none`} />;

		case 'box':
			return <div className={`peer-disabled:opacity-30 peer-disabled:pointer-events-none`} />;

		case 'formCheck':
			return <div className={`peer absolute top-0 left-0 appearance-none pointer-events-none`} />;

		case 'basket':
			return <div className={`inline-flex justify-center items-center relative`} />;

		case 'a':
		case 'button':
		case 'toggle':
			return disabled ? (
				<div className={`inline-flex justify-center items-center relative select-none`} />
			) : (
				<div className={`group inline-flex justify-center items-center relative cursor-pointer select-none`} />
			);

		case 'input':
			return disabled ? (
				<div className={`inline-flex justify-center items-center relative select-none`} />
			) : (
				<div className={`group inline-flex justify-center items-center relative cursor-text select-none`} />
			);

		default:
			return <div className={``} />;
	}
};

const getElement = (props) => {
	const {tag, myDeco, icon} = props;

	switch (myDeco) {
		case 'text-default':
			return <div className={`text-slate-800 peer-checked:text-white`} />;
		case 'text-primary':
			return <div className={`text-sky-800 group-focus-within:text-sky-400 peer-checked:text-white placeholder-slate-400`} />;
		case 'text-success':
			return <div className={`text-emerald-800 peer-checked:text-white`} />;
		case 'text-warning':
			return <div className={`text-amber-800 peer-checked:text-white`} />;
		case 'text-danger':
			return <div className={`text-rose-800 group-focus-within:text-rose-400 peer-checked:text-white`} />;
		case 'text-toggle':
			return <div className={`text-sky-800 peer-checked:underline`} />;
		case 'text-checkbox-dot':
			return <div className={`absolute text-lg text-white left-[7px] invisible peer-checked:visible`} />;

		case 'box-default':
			return (
				<div
					className={`absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-focus-within:ring-slate-400 group-focus-within:bg-white`}
				/>
			);
		case 'box-primary':
			return (
				<div
					className={`absolute w-full h-full -z-20 rounded ring-1 ring-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 group-focus-within:ring-sky-400 group-focus-within:bg-white`}
				/>
			);
		case 'box-success':
			return (
				<div
					className={`absolute w-full h-full -z-20 rounded ring-1 ring-emerald-400 bg-emerald-100 group-hover:bg-white peer-checked:bg-emerald-500 peer-checked:ring-emerald-700 group-hover:peer-checked:bg-emerald-600`}
				/>
			);
		case 'box-warning':
			return (
				<div
					className={`absolute w-full h-full -z-20 rounded ring-1 ring-amber-400 bg-amber-100 group-hover:bg-white peer-checked:bg-amber-500 peer-checked:ring-amber-700 group-hover:peer-checked:bg-amber-600`}
				/>
			);
		case 'box-danger':
			return (
				<div
					className={`absolute w-full h-full -z-20 rounded ring-1 ring-rose-400 bg-rose-100 group-hover:bg-white peer-checked:bg-rose-500 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600 group-focus-within:ring-rose-400 group-focus-within:bg-white`}
				/>
			);
		case 'box-round':
			return (
				<div
					className={`absolute w-full h-full -z-20 rounded-full ring-1 ring-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 group-focus-within:ring-sky-400 group-focus-within:bg-white`}
				/>
			);
		case 'box-trans':
			return <div className={`absolute w-full h-full -z-20 rounded bg-black/0 group-hover:bg-black/5`} />;
		case 'box-item':
			return (
				<div
					className={`absolute w-full h-full -z-20 ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-l-full group-last:rounded-r-full`}
				/>
			);
		case 'box-checkbox':
			return (
				<div
					className={`mr-2 w-4 h-4 -z-20 rounded-sm ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`}
				/>
			);
		case 'box-radio':
			return (
				<div
					className={`mr-2 w-4 h-4 -z-20 rounded-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`}
				/>
			);
		case 'box-radio-dot':
			return <div className={`absolute w-2 h-2 rounded-full ring-1 ring-slate-400 bg-white left-[12px] invisible peer-checked:visible`} />;
		case 'box-switch':
			return (
				<div
					className={`mr-2 w-7 h-4 -z-20 rounded-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`}
				/>
			);
		case 'box-switch-dot':
			return <div className={`absolute w-3 h-3 rounded-full ring-1 ring-slate-400 bg-white left-[11px] peer-checked:left-[22px]`} />;
		case 'box-list-col':
			return (
				<div
					className={`absolute w-full h-full -z-20 ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-t-lg group-last:rounded-b-lg`}
				/>
			);

		case 'basket-default':
			return <div className={`px-2 py-1 space-x-1 text-sm`} />;
		case 'basket-mini':
			return <div className={`px-1 py-0 space-x-1 text-xs`} />;

		case 'toggle-default':
			return <div className={`px-2 py-1 space-x-1 text-sm`} />;

		case 'a-default':
			return <div className={`px-1 py-0 space-x-1 text-sm`} />;
		case 'a-primary':
			return <div className={`px-1 py-0 space-x-1 text-sm text-rose-800 hover:underline`} />;

		case 'button-default':
			return <div className={`px-2 py-1 space-x-1 text-sm`} />;
		case 'button-primary':
			return <div className={`px-4 py-2 space-x-4 text-xl`} />;

		case 'input-default':
			return <div className={`px-2 py-1 space-x-1 text-sm`} />;
		case 'input-primary':
			return <div className={`px-4 py-2 space-x-4 text-xl`} />;

		default:
			return <div className={``} />;
	}
};

const getProps = (props) => {
	const {
		children = '',
		tag = '',
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

	const myDeco = String(deco)
		.replace(/\s+/gm, '##')
		.split('##')
		.filter((item) => item.split('-')[0] == tag)[0];

	// const style = getStyle({...props, myDeco});
	const style = `${getDefaultElement(props).props.className} | ${getElement({...props, myDeco}).props.className}`;

	return {
		...props,
		children,
		deco,
		myDeco,
		style,
		className,
		href,
		onClick,
		onChange,
	};
};

const FormCheck = (props) => {
	const {children, deco, style, className, team, name, href, type, onChange, checked, disabled} = getProps({...props, tag: 'formCheck'});

	return props.tag == 'input' ? (
		<input type={type} className={`${style} | ${className}`} disabled={disabled} />
	) : (
		<input
			type={type}
			className={`${style} | ${className}`}
			id={name}
			name={name}
			data-team={team}
			onChange={onChange}
			checked={checked}
			disabled={disabled}
		/>
	);
};
const FormInput = forwardRef((props, ref) => {
	const {children, deco, style, className, name, href, type, value, placeholder, onChange, checked, disabled} = getProps({...props, tag: 'text'});

	return disabled ? (
		<input type={type} className={`${style} | ${className}`} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />
	) : (
		<input type={type} className={`${style} | ${className}`} id={name} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />
	);
});

export const Img = (props) => {
	const {deco, style, className, name, src} = getProps({...props, tag: 'img'});

	return <img className={`${`${style} | ${className}`} | ${className}`} name={name} src={src} />;
};

export const I = (props) => {
	const {deco, style, className, icon} = getProps({...props, tag: 'text'});

	return icon ? <i className={`bx ${icon} pointer-events-none ${style} | ${className}`} /> : <></>;
};
export const Icon = (props) => {
	const {children, deco, style, className, icon} = getProps({...props, tag: 'text'});

	return children ? <i className={`bx ${children} pointer-events-none ${style} | ${className}`} /> : <></>;
};

export const Text = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name} = getProps({...props, tag: 'text'});

	return children ? <span className={`${style} | ${className}`}>{children}</span> : <></>;
};

export const Box = (props) => {
	const {children, deco, myDeco, style, className, name} = getProps({...props, tag: 'box'});

	return myDeco ? <div className={`${style} | ${className}`}></div> : <></>;
};

export const Label = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, text} = getProps({...props, tag: 'label'});

	return (
		<>
			<I deco={deco} icon={icon || iconL} />
			<Text deco={deco}>{text}</Text>
			{children}
			<I deco={deco} icon={iconR} />
		</>
	);
};

export const Basket = (props) => {
	const newProps = props.tag ? props : getProps({...props, type: 'checkbox', tag: 'basket'});
	const {children, deco, style, className, icon, iconL, iconR, name, text, type, onChange, checked = false, disabled} = newProps;

	return (
		<label htmlFor={name} className={`${style} | ${className}`}>
			<FormCheck {...props} type={type} checked={checked} />
			<Box deco={deco} />
			<Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} />
			{children}
		</label>
	);
};

export const Toggle = (props) => {
	const newProps = getProps({...props, tag: 'toggle'});

	return <Basket {...newProps} type="checkbox" />;
};

export const A = (props) => {
	const newProps = getProps({...props, tag: 'a'});
	const {name, href, target = '_self', checked = false} = newProps;

	return (
		<Link href={href}>
			<a target={target}>
				<Basket {...newProps} type="button" checked={checked} />
			</a>
		</Link>
	);
};

export const Button = (props) => {
	const newProps = getProps({...props, tag: 'button'});
	const {children, name, onClick, checked = false, disabled} = newProps;

	return (
		<button type="button" name={name} onClick={onClick}>
			<Basket {...newProps} type="checkbox" checked={checked} />
		</button>
	);
};

export const Input = forwardRef((props, ref) => {
	const newProps = getProps({...props, tag: 'input'});
	const {children, name, onClick, type} = newProps;

	return (
		<Basket {...newProps} type="button">
			{children}
			<FormInput {...props} ref={ref} />
		</Basket>
	);
});
