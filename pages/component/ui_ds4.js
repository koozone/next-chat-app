import Image from 'next/image';
import Link from 'next/link';
import {forwardRef, Fragment} from 'react';

const getDefaultElement = (props) => {
	const {children, tag, disabled} = props;

	switch (tag) {
		case 'img':
			return <div className={``} />;

		case 'label':
			return <div className={``} />;

		case 'icon':
			return <div className={`bx ${children} pointer-events-none peer-disabled:opacity-50 peer-disabled:pointer-events-none`} />;

		case 'font':
			return <div className={`peer-disabled:opacity-50 peer-disabled:pointer-events-none`} />;

		case 'box':
			return <div className={`-z-20 top-0 left-0 peer-disabled:opacity-50 peer-disabled:pointer-events-none`} />;

		case 'formCheck':
			// return <div className={`peer absolute top-0 left-0 w-0 h-0 appearance-none pointer-events-none hidden`} />;
			return <div className={`peer sr-only`} />;

		case 'formInput':
			return <div className={`flex-auto truncate outline-none bg-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none`} />;

		case 'basket':
			return <div className={`inline-flex justify-center items-center relative`} />;

		case 'a':
		case 'button':
		case 'toggle':
			return disabled ? <div className={`inline-flex justify-center items-center relative select-none`} /> : <div className={`group inline-flex justify-center items-center relative cursor-pointer select-none`} />;

		case 'input':
			return disabled ? <div className={`inline-flex justify-start items-center relative select-none`} /> : <div className={`group inline-flex justify-start items-center relative cursor-text select-none`} />;

		default:
			return <div className={``} />;
	}
};

const getElement = (props) => {
	const {tag, useDeco, icon} = props;

	const color = {
		default: 'slate',
		primary: 'sky',
		success: 'emerald',
		warning: 'amber',
		danger: 'rose',
	}[useDeco?.split('-').pop()];

	switch (useDeco) {
		case 'font-default':
			return <div className={`text-slate-800 peer-checked:text-white group-focus-within:text-slate-400 placeholder-slate-400`} />;
		case 'font-primary':
			return <div className={`text-sky-800 peer-checked:text-white group-focus-within:text-sky-400 placeholder-slate-400`} />;
		case 'font-success':
			return <div className={`text-emerald-800 peer-checked:text-white group-focus-within:text-emerald-400 placeholder-slate-400`} />;
		case 'font-warning':
			return <div className={`text-amber-800 peer-checked:text-white group-focus-within:text-amber-400 placeholder-slate-400`} />;
		case 'font-danger':
			return <div className={`text-rose-800 peer-checked:text-white group-focus-within:text-rose-400 placeholder-slate-400`} />;
		// return <div className={`text-${color}-800 peer-checked:text-white group-focus-within:text-${color}-400 placeholder-slate-400`} />;

		case 'font-trans-default':
			return <div className={`text-white group-hover:text-slate-800 peer-checked:text-slate-800 group-hover:peer-checked:text-white group-focus-within:text-slate-400 placeholder-slate-400`} />;
		case 'font-trans-primary':
			return <div className={`text-white group-hover:text-sky-800 peer-checked:text-sky-800 group-hover:peer-checked:text-white group-focus-within:text-sky-400 placeholder-slate-400`} />;
		case 'font-trans-success':
			return <div className={`text-white group-hover:text-emerald-800 peer-checked:text-emerald-800 group-hover:peer-checked:text-white group-focus-within:text-emerald-400 placeholder-slate-400`} />;
		case 'font-trans-warning':
			return <div className={`text-white group-hover:text-amber-800 peer-checked:text-amber-800 group-hover:peer-checked:text-white group-focus-within:text-amber-400 placeholder-slate-400`} />;
		case 'font-trans-danger':
			return <div className={`text-white group-hover:text-rose-800 peer-checked:text-rose-800 group-hover:peer-checked:text-white group-focus-within:text-rose-400 placeholder-slate-400`} />;
		// return <div className={`text-white group-hover:text-${color}-800 peer-checked:text-${color}-800 group-hover:peer-checked:text-white group-focus-within:text-${color}-400 placeholder-slate-400`} />;

		case 'font-underline-default':
			return <div className={`text-slate-800 group-hover:underline group-hover:peer-checked:no-underline`} />;
		case 'font-underline-primary':
			return <div className={`text-sky-800 group-hover:underline group-hover:peer-checked:no-underline`} />;
		case 'font-underline-success':
			return <div className={`text-emerald-800 group-hover:underline group-hover:peer-checked:no-underline`} />;
		case 'font-underline-warning':
			return <div className={`text-amber-800 group-hover:underline group-hover:peer-checked:no-underline`} />;
		case 'font-underline-danger':
			return <div className={`text-rose-800 group-hover:underline group-hover:peer-checked:no-underline`} />;
		// return <div className={`text-${color}-800 group-hover:underline group-hover:peer-checked:no-underline`} />;

		case 'font-toggle':
			return <div className={`text-sky-800 peer-checked:underline`} />;
		case 'font-checkbox-dot':
			return <div className={`absolute text-lg text-white top-[5px] left-[7px] invisible peer-checked:visible`} />;

		case 'box-default':
			return <div className={`absolute w-full h-full ring-1 ring-slate-600 bg-white group-hover:bg-slate-50 peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-focus-within:bg-white`} />;
		case 'box-primary':
			return <div className={`absolute w-full h-full ring-1 ring-sky-600 bg-white group-hover:bg-sky-50 peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 group-focus-within:bg-white`} />;
		case 'box-success':
			return <div className={`absolute w-full h-full ring-1 ring-emerald-600 bg-white group-hover:bg-emerald-50 peer-checked:bg-emerald-500 peer-checked:ring-emerald-700 group-hover:peer-checked:bg-emerald-600 group-focus-within:bg-white`} />;
		case 'box-warning':
			return <div className={`absolute w-full h-full ring-1 ring-amber-600 bg-white group-hover:bg-amber-50 peer-checked:bg-amber-500 peer-checked:ring-amber-700 group-hover:peer-checked:bg-amber-600 group-focus-within:bg-white`} />;
		case 'box-danger':
			return <div className={`absolute w-full h-full ring-1 ring-rose-600 bg-white group-hover:bg-rose-50 peer-checked:bg-rose-500 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600 group-focus-within:bg-white`} />;
		// return <div className={`absolute w-full h-full ring-1 ring-${color}-600 bg-white group-hover:bg-${color}-50 peer-checked:bg-${color}-500 peer-checked:ring-${color}-700 group-hover:peer-checked:bg-${color}-600 group-focus-within:bg-white`} />;

		case 'box-outline-default':
			return <div className={`absolute w-full h-full ring-1 ring-slate-600 group-hover:bg-slate-50 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600`} />;
		case 'box-outline-primary':
			return <div className={`absolute w-full h-full ring-1 ring-sky-600 group-hover:bg-sky-50 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-outline-success':
			return <div className={`absolute w-full h-full ring-1 ring-emerald-600 group-hover:bg-emerald-50 peer-checked:ring-emerald-700 group-hover:peer-checked:bg-emerald-600`} />;
		case 'box-outline-warning':
			return <div className={`absolute w-full h-full ring-1 ring-amber-600 group-hover:bg-amber-50 peer-checked:ring-amber-700 group-hover:peer-checked:bg-amber-600`} />;
		case 'box-outline-danger':
			return <div className={`absolute w-full h-full ring-1 ring-rose-600 group-hover:bg-rose-50 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600`} />;
		// return <div className={`absolute w-full h-full ring-1 ring-${color}-600 group-hover:bg-${color}-50 peer-checked:ring-${color}-700 group-hover:peer-checked:bg-${color}-600`} />;

		case 'box-trans-default':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-slate-700 group-hover:bg-slate-50 group-hover:peer-checked:bg-slate-600`} />;
		case 'box-trans-primary':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-sky-700 group-hover:bg-sky-50 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-trans-success':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-emerald-700 group-hover:bg-emerald-50 group-hover:peer-checked:bg-emerald-600`} />;
		case 'box-trans-warning':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-amber-700 group-hover:bg-amber-50 group-hover:peer-checked:bg-amber-600`} />;
		case 'box-trans-danger':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-rose-700 group-hover:bg-rose-50 group-hover:peer-checked:bg-rose-600`} />;
		// return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-${color}-700 group-hover:bg-${color}-50 group-hover:peer-checked:bg-${color}-600`} />;

		case 'box-underline-default':
			return <div className={`absolute w-full h-full group-hover:peer-checked:ring-1 peer-checked:ring-slate-700`} />;
		case 'box-underline-primary':
			return <div className={`absolute w-full h-full group-hover:peer-checked:ring-1 peer-checked:ring-sky-700`} />;
		case 'box-underline-success':
			return <div className={`absolute w-full h-full group-hover:peer-checked:ring-1 peer-checked:ring-emerald-700`} />;
		case 'box-underline-warning':
			return <div className={`absolute w-full h-full group-hover:peer-checked:ring-1 peer-checked:ring-amber-700`} />;
		case 'box-underline-danger':
			return <div className={`absolute w-full h-full group-hover:peer-checked:ring-1 peer-checked:ring-rose-700`} />;
		// return <div className={`absolute w-full h-full group-hover:peer-checked:ring-1 peer-checked:ring-${color}-700`} />;

		case 'box-round':
			return <div className={`absolute w-full h-full rounded-full ring-1 ring-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 group-focus-within:ring-sky-400`} />;
		case 'box-trans':
			return <div className={`absolute w-full h-full bg-black/0 group-hover:bg-black/5`} />;
		case 'box-item':
			return <div className={`absolute w-full h-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-l-full group-last:rounded-r-full`} />;
		case 'box-checkbox':
			return <div className={`w-4 h-4 rounded-sm ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-radio':
			return <div className={`w-4 h-4 rounded-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-radio-dot':
			return <div className={`absolute w-2 h-2 rounded-full ring-1 ring-slate-400 bg-white top-[10px] left-[12px] invisible peer-checked:visible`} />;
		case 'box-switch':
			return <div className={`w-7 h-4 rounded-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-switch-dot':
			return <div className={`absolute w-3 h-3 rounded-full ring-1 ring-slate-400 bg-white top-1/2 transform -translate-y-1/2 left-[11px] peer-checked:left-[22px]`} />;
		case 'box-list-col':
			return <div className={`absolute w-full h-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-t-lg group-last:rounded-b-lg`} />;

		case 'basket-default':
			return <div className={`px-2 py-1 text-sm`} />;
		case 'basket-primary':
			return <div className={`px-4 py-2 text-xl`} />;
		case 'basket-mini':
			return <div className={`px-1 py-0 text-xs`} />;
		case 'basket-a-default':
			return <div className={`px-1 py-0 text-sm`} />;
		case 'basket-a-primary':
			return <div className={`px-1 py-0 text-sm decoration-rose-500 hover:underline`} />;
		case 'basket-list-col':
			return <div className={`px-5 py-1 text-sm !justify-start`} />;

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
			console.log(`${event.currentTarget.name || '{noname}'} click!`);
		},
		onChange = (event) => {
			console.log(`${event.currentTarget.name || '{noname}'} change!`);
		},
	} = props;

	const useTag = {
		font: 'font',
		icon: 'font',
		formInput: 'font',
		box: 'box',
		basket: 'basket',
		a: 'basket',
		button: 'basket',
		toggle: 'basket',
		input: 'basket',
	}[tag];
	const useDeco = String(deco)
		.replace(/\s+/gm, '##')
		.split('##')
		.filter((item) => item.split('-')[0] == useTag)[0];

	// const style = getStyle({...props, useDeco});
	const style = `${getDefaultElement(props).props.className} | ${getElement({...props, useDeco}).props.className}`;

	return {
		...props,
		children,
		deco,
		useDeco,
		style,
		className,
		href,
		onClick,
		onChange,
	};
};

const FormCheck = (props) => {
	const {children, deco, style, className, team = '', name, href, type, onChange, checked, disabled} = getProps({...props, tag: 'formCheck'});

	return props.tag == 'toggle' ? (
		<input type={type} className={`${style} | `} id={[team, name].join('-')} name={name} data-team={team} checked={checked} disabled={disabled} onChange={onChange} />
	) : (
		<input type={type} className={`${style} | `} checked={checked} disabled={disabled} onChange={onChange} />
	);
};
const FormInput = forwardRef((props, ref) => {
	const {children, deco, style, className, name, href, type, value, placeholder, onChange, checked, disabled} = getProps({...props, tag: 'formInput'});

	return disabled ? <input type={type} className={`${style} | `} ref={ref} placeholder={placeholder} value={value} onChange={onChange} /> : <input type={type} className={`${style} | `} id={name} name={name} ref={ref} placeholder={placeholder} value={value} onChange={onChange} />;
});

export const Img = (props) => {
	const {deco, style, className, name, src} = getProps({...props, tag: 'img'});

	return <img className={`${`${style} | ${className}`} | ${className}`} name={name} src={src} />;
};

export const Icon = (props) => {
	const {children, deco, style, className, icon} = getProps({...props, tag: 'icon'});

	return children ? <i className={`${style} | ${className}`} /> : <></>;
};

export const Text = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name} = getProps({...props, tag: 'font'});

	return children ? <span className={`${style} | ${className}`}>{children}</span> : <></>;
};

export const Box = (props) => {
	const {children, deco, useDeco, style, className, name} = getProps({...props, tag: 'box'});

	return useDeco ? <div className={`${style} | ${className}`}></div> : <></>;
};

export const Label = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, text} = getProps({...props, tag: 'label'});

	return (
		<>
			<Icon deco={deco}>{icon || iconL}</Icon>
			<Text deco={deco}>{text}</Text>
			{children}
			<Icon deco={deco}>{iconR}</Icon>
		</>
	);
};

export const Basket = (props) => {
	const newProps = props.tag ? props : getProps({...props, type: 'checkbox', tag: 'basket'});
	const {children, deco, style, className, icon, iconL, iconR, team = '', name, text, type, onChange, checked = false, disabled} = newProps;

	// 특정 ui의 change 이벤트 발생을 방지하기 위한 코드
	const forName = ['toggle', 'input'].includes(props.tag) ? (name ? [team, name].join('-') : null) : '';

	return (
		<label htmlFor={forName} className={`${style} | ${className}`}>
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
				<Basket {...newProps} type="checkbox" checked={checked} />
			</a>
		</Link>
	);
};

export const Button = (props) => {
	const newProps = getProps({...props, tag: 'button'});
	const {children, name, onClick, checked = false, disabled} = newProps;

	// disabled 상태일때를 위한 코드
	const clickHandler = disabled ? () => {} : onClick;

	return (
		<button type="button" name={name} onClick={clickHandler}>
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
