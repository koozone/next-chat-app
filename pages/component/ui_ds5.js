import Image from 'next/image';
import Link from 'next/link';
import {forwardRef, Fragment} from 'react';

const getDefaultElement = (props) => {
	const {children, tag, disabled} = props;

	switch (tag) {
		case 'img':
			return <div className={``} />;

		case 'label':
			return <div className={`group inline-flex justify-center items-center relative`} />;

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

const getStyleElement = (props) => {
	const {useDeco, action} = props;
	const decoSlice = useDeco?.split('-');

	const tailcolor = {
		default: 'slate',
		primary: 'sky',
		success: 'emerald',
		warning: 'amber',
		danger: 'rose',
	}[decoSlice.pop()];

	switch ([...decoSlice, '*'].join('-')) {
		case 'font-F-*':
		case 'font-G-*':
		case 'font-K-*':
		case 'font-L-*':
			return <div className={`${action}text-white`} />;

		case 'font-A-*':
		case 'font-B-*':
		case 'font-C-*':
		case 'font-D-*':
		case 'font-E-*':
		case 'font-H-*':
		case 'font-I-*':
		case 'font-J-*':
			return <div className={`${action}text-${tailcolor}-800`} />;

		case 'font-1-*':
			return <div className={`${action}font-normal ${action}not-italic ${action}no-underline`} />;

		case 'font-2-*':
			return <div className={`${action}font-semibold ${action}not-italic ${action}no-underline`} />;

		case 'font-3-*':
			return <div className={`${action}font-normal ${action}italic ${action}no-underline`} />;

		case 'font-4-*':
			return <div className={`${action}font-normal ${action}not-italic ${action}underline`} />;

		case 'font-5-*':
			return <div className={`${action}font-semibold ${action}italic ${action}no-underline`} />;

		case 'font-6-*':
			return <div className={`${action}font-semibold ${action}not-italic ${action}underline`} />;

		case 'font-7-*':
			return <div className={`${action}font-normal ${action}italic ${action}underline`} />;

		case 'font-8-*':
			return <div className={`${action}font-semibold ${action}italic ${action}underline`} />;

		case 'box-A-*':
			return <div className={`${action}ring-0 ${action}bg-transparent`} />;

		case 'box-B-*':
			return <div className={`${action}ring-1 ${action}ring-${tailcolor}-800 ${action}bg-transparent`} />;

		case 'box-C-*':
			return <div className={`${action}ring-0 ${action}bg-white`} />;

		case 'box-D-*':
			return <div className={`${action}ring-0 ${action}bg-${tailcolor}-100`} />;

		case 'box-E-*':
			return <div className={`${action}ring-0 ${action}bg-${tailcolor}-300`} />;

		case 'box-F-*':
			return <div className={`${action}ring-0 ${action}bg-${tailcolor}-500`} />;

		case 'box-G-*':
			return <div className={`${action}ring-0 ${action}bg-${tailcolor}-600`} />;

		case 'box-H-*':
			return <div className={`${action}ring-1 ${action}ring-${tailcolor}-800 ${action}bg-white`} />;

		case 'box-I-*':
			return <div className={`${action}ring-1 ${action}ring-${tailcolor}-800 ${action}bg-${tailcolor}-100`} />;

		case 'box-J-*':
			return <div className={`${action}ring-1 ${action}ring-${tailcolor}-800 ${action}bg-${tailcolor}-300`} />;

		case 'box-K-*':
			return <div className={`${action}ring-1 ${action}ring-${tailcolor}-800 ${action}bg-${tailcolor}-500`} />;

		case 'box-L-*':
			return <div className={`${action}ring-1 ${action}ring-${tailcolor}-800 ${action}bg-${tailcolor}-600`} />;

		default:
			return <div className={``} />;
	}
};

const getElement = (props) => {
	const {tag, useDeco = '', icon} = props;

	const tailcolor = {
		default: 'slate',
		primary: 'sky',
		success: 'emerald',
		warning: 'amber',
		danger: 'rose',
	}[useDeco?.split('-').pop()];

	switch (useDeco) {
		case 'font-default':
		// return <div className={`text-slate-800 peer-checked:text-white`} />;
		case 'font-primary':
		// return <div className={`text-sky-800 peer-checked:text-white`} />;
		case 'font-success':
		// return <div className={`text-emerald-800 peer-checked:text-white`} />;
		case 'font-warning':
		// return <div className={`text-amber-800 peer-checked:text-white`} />;
		case 'font-danger':
			// return <div className={`text-rose-800 peer-checked:text-white`} />;
			return <div className={`text-${tailcolor}-800 peer-checked:text-white`} />;

		case 'font-high-default':
		case 'font-high-primary':
		case 'font-high-success':
		case 'font-high-warning':
		case 'font-high-danger':
			return <div className={`text-${tailcolor}-800`} />;

		case 'font-low-default':
		case 'font-low-primary':
		case 'font-low-success':
		case 'font-low-warning':
		case 'font-low-danger':
			return <div className={`text-white`} />;

		case 'font-high2low-default':
		case 'font-high2low-primary':
		case 'font-high2low-success':
		case 'font-high2low-warning':
		case 'font-high2low-danger':
			return <div className={`text-${tailcolor}-800 group-hover:text-white`} />;

		case 'font-toggle':
			return <div className={`text-sky-800 peer-checked:underline`} />;
		case 'font-checkbox-dot':
			return <div className={`absolute text-lg text-white top-[5px] left-[7px] invisible peer-checked:visible`} />;

		case 'box-default':
		// return <div className={`absolute w-full h-full ring-1 ring-slate-600 bg-white group-hover:bg-slate-100 peer-checked:bg-slate-400 peer-checked:ring-slate-800 group-hover:peer-checked:bg-slate-600`} />;
		case 'box-primary':
		// return <div className={`absolute w-full h-full ring-1 ring-sky-600 bg-white group-hover:bg-sky-100 peer-checked:bg-sky-400 peer-checked:ring-sky-800 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-success':
		// return <div className={`absolute w-full h-full ring-1 ring-emerald-600 bg-white group-hover:bg-emerald-100 peer-checked:bg-emerald-400 peer-checked:ring-emerald-800 group-hover:peer-checked:bg-emerald-600`} />;
		case 'box-warning':
		// return <div className={`absolute w-full h-full ring-1 ring-amber-600 bg-white group-hover:bg-amber-100 peer-checked:bg-amber-400 peer-checked:ring-amber-800 group-hover:peer-checked:bg-amber-600`} />;
		case 'box-danger':
			// return <div className={`absolute w-full h-full ring-1 ring-rose-600 bg-white group-hover:bg-rose-100 peer-checked:bg-rose-400 peer-checked:ring-rose-800 group-hover:peer-checked:bg-rose-600`} />;
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-600 bg-white group-hover:bg-${tailcolor}-100 peer-checked:bg-${tailcolor}-400 peer-checked:ring-${tailcolor}-800 group-hover:peer-checked:bg-${tailcolor}-600`} />;

		case 'box-low:xx2xx-default':
		case 'box-low:xx2xx-primary':
		case 'box-low:xx2xx-success':
		case 'box-low:xx2xx-warning':
		case 'box-low:xx2xx-danger':
			return <div className={`absolute w-full h-full`} />;

		case 'box-low:xx2lx-default':
		case 'box-low:xx2lx-primary':
		case 'box-low:xx2lx-success':
		case 'box-low:xx2lx-warning':
		case 'box-low:xx2lx-danger':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-${tailcolor}-800`} />;

		case 'box-low:xx2xf-default':
		case 'box-low:xx2xf-primary':
		case 'box-low:xx2xf-success':
		case 'box-low:xx2xf-warning':
		case 'box-low:xx2xf-danger':
			return <div className={`absolute w-full h-full group-hover:bg-${tailcolor}-100`} />;

		case 'box-high:xx2xf-default':
		case 'box-high:xx2xf-primary':
		case 'box-high:xx2xf-success':
		case 'box-high:xx2xf-warning':
		case 'box-high:xx2xf-danger':
			return <div className={`absolute w-full h-full group-hover:bg-${tailcolor}-600`} />;

		case 'box-low:xx2lf-default':
		case 'box-low:xx2lf-primary':
		case 'box-low:xx2lf-success':
		case 'box-low:xx2lf-warning':
		case 'box-low:xx2lf-danger':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-${tailcolor}-800 group-hover:bg-${tailcolor}-100`} />;

		case 'box-high:xx2lf-default':
		case 'box-high:xx2lf-primary':
		case 'box-high:xx2lf-success':
		case 'box-high:xx2lf-warning':
		case 'box-high:xx2lf-danger':
			return <div className={`absolute w-full h-full group-hover:ring-1 group-hover:ring-${tailcolor}-800 group-hover:bg-${tailcolor}-600`} />;

		case 'box-low:lx2xf-default':
		case 'box-low:lx2xf-primary':
		case 'box-low:lx2xf-success':
		case 'box-low:lx2xf-warning':
		case 'box-low:lx2xf-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 group-hover:ring-0 group-hover:bg-${tailcolor}-100`} />;

		case 'box-high:lx2xf-default':
		case 'box-high:lx2xf-primary':
		case 'box-high:lx2xf-success':
		case 'box-high:lx2xf-warning':
		case 'box-high:lx2xf-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 group-hover:ring-0 group-hover:bg-${tailcolor}-600`} />;

		case 'box-low:lx2lf-default':
		case 'box-low:lx2lf-primary':
		case 'box-low:lx2lf-success':
		case 'box-low:lx2lf-warning':
		case 'box-low:lx2lf-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 group-hover:bg-${tailcolor}-100`} />;

		case 'box-high:lx2lf-default':
		case 'box-high:lx2lf-primary':
		case 'box-high:lx2lf-success':
		case 'box-high:lx2lf-warning':
		case 'box-high:lx2lf-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 group-hover:bg-${tailcolor}-600`} />;

		case 'box-low:xf2lf-default':
		case 'box-low:xf2lf-primary':
		case 'box-low:xf2lf-success':
		case 'box-low:xf2lf-warning':
		case 'box-low:xf2lf-danger':
			return <div className={`absolute w-full h-full bg-white group-hover:ring-1 group-hover:ring-${tailcolor}-800 group-hover:bg-${tailcolor}-100`} />;

		case 'box-low:xf10-default':
		case 'box-low:xf10-primary':
		case 'box-low:xf10-success':
		case 'box-low:xf10-warning':
		case 'box-low:xf10-danger':
			return <div className={`absolute w-full h-full bg-${tailcolor}-100`} />;

		case 'box-high:xf2lf-default':
		case 'box-high:xf2lf-primary':
		case 'box-high:xf2lf-success':
		case 'box-high:xf2lf-warning':
		case 'box-high:xf2lf-danger':
			return <div className={`absolute w-full h-full bg-${tailcolor}-400 group-hover:ring-1 group-hover:ring-${tailcolor}-800 group-hover:bg-${tailcolor}-600`} />;

		case 'box-low:xf20-default':
		case 'box-low:xf20-primary':
		case 'box-low:xf20-success':
		case 'box-low:xf20-warning':
		case 'box-low:xf20-danger':
			return <div className={`absolute w-full h-full bg-${tailcolor}-600`} />;

		case 'box-low:lf2lf-default':
		case 'box-low:lf2lf-primary':
		case 'box-low:lf2lf-success':
		case 'box-low:lf2lf-warning':
		case 'box-low:lf2lf-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-white group-hover:bg-${tailcolor}-100`} />;

		case 'box-low:lf20-default':
		case 'box-low:lf20-primary':
		case 'box-low:lf20-success':
		case 'box-low:lf20-warning':
		case 'box-low:lf20-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-${tailcolor}-100`} />;

		case 'box-high:lf2lf-default':
		case 'box-high:lf2lf-primary':
		case 'box-high:lf2lf-success':
		case 'box-high:lf2lf-warning':
		case 'box-high:lf2lf-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-${tailcolor}-400 group-hover:bg-${tailcolor}-600`} />;

		case 'box-high:lf20-default':
		case 'box-high:lf20-primary':
		case 'box-high:lf20-success':
		case 'box-high:lf20-warning':
		case 'box-high:lf20-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-${tailcolor}-600`} />;

		case 'box-A-default':
		case 'box-A-primary':
		case 'box-A-success':
		case 'box-A-warning':
		case 'box-A-danger':
			return <div className={`absolute w-full h-full`} />;

		case 'box-B-default':
		case 'box-B-primary':
		case 'box-B-success':
		case 'box-B-warning':
		case 'box-B-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800`} />;

		case 'box-C-default':
		case 'box-C-primary':
		case 'box-C-success':
		case 'box-C-warning':
		case 'box-C-danger':
			return <div className={`absolute w-full h-full bg-white`} />;

		case 'box-D-default':
		case 'box-D-primary':
		case 'box-D-success':
		case 'box-D-warning':
		case 'box-D-danger':
			return <div className={`absolute w-full h-full bg-${tailcolor}-100`} />;

		case 'box-E-default':
		case 'box-E-primary':
		case 'box-E-success':
		case 'box-E-warning':
		case 'box-E-danger':
			return <div className={`absolute w-full h-full bg-${tailcolor}-400`} />;

		case 'box-F-default':
		case 'box-F-primary':
		case 'box-F-success':
		case 'box-F-warning':
		case 'box-F-danger':
			return <div className={`absolute w-full h-full bg-${tailcolor}-600`} />;

		case 'box-G-default':
		case 'box-G-primary':
		case 'box-G-success':
		case 'box-G-warning':
		case 'box-G-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-white`} />;

		case 'box-H-default':
		case 'box-H-primary':
		case 'box-H-success':
		case 'box-H-warning':
		case 'box-H-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-${tailcolor}-100`} />;

		case 'box-I-default':
		case 'box-I-primary':
		case 'box-I-success':
		case 'box-I-warning':
		case 'box-I-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-${tailcolor}-400`} />;

		case 'box-J-default':
		case 'box-J-primary':
		case 'box-J-success':
		case 'box-J-warning':
		case 'box-J-danger':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-800 bg-${tailcolor}-600`} />;

		case useDeco.match(/font-[A-Z][0-9]?[A-Z][0-9]?-.*/)?.input:
			const fontNormal = useDeco.replace(/(font-)([A-Z])[0-9]?[A-Z][0-9]?(-.*)/, '$1$2$3');
			const fontHover = useDeco.replace(/(font-)[A-Z][0-9]?([A-Z])[0-9]?(-.*)/, '$1$2$3');
			const classFontNormal = `${getStyleElement({useDeco: fontNormal, action: ''}).props.className}`;
			const classFontHover = `${getStyleElement({useDeco: fontHover, action: 'group-hover:'}).props.className}`;

			return <div className={`${classFontNormal} ${classFontHover}`} />;

		case useDeco.match(/box-[A-Z][0-9]?[A-Z][0-9]?-.*/)?.input:
			const boxNormal = useDeco.replace(/(box-)([A-Z])[0-9]?[A-Z][0-9]?(-.*)/, '$1$2$3');
			const boxHover = useDeco.replace(/(box-)[A-Z][0-9]?([A-Z])[0-9]?(-.*)/, '$1$2$3');
			const classBoxNormal = `${getStyleElement({useDeco: boxNormal, action: ''}).props.className}`;
			const classBoxHover = `${getStyleElement({useDeco: boxHover, action: 'group-hover:'}).props.className}`;

			return <div className={`absolute w-full h-full ${classBoxNormal} ${classBoxHover}`} />;

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
		href = '#',
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

const LabelTheme = (props) => {
	// const newProps = props.tag ? props : getProps({...props, type: 'checkbox', tag: 'basket'});
	// // const {children, theme, className = '', icon, iconR, text, team, name, onClick, onChange, disabled} = newProps;
	// const {children, theme, deco, style, className, icon, iconL, iconR, team = '', name, text, type, onChange, checked = false, disabled} = newProps;
	const {children, theme, deco, style, className, icon, iconL, iconR, text} = getProps({...props, tag: 'label'});

	// // 특정 ui의 change 이벤트 발생을 방지하기 위한 코드
	// const forName = ['toggle', 'input'].includes(props.tag) ? (name ? [team, name].join('-') : null) : '';

	const themeList = String(theme).split('-') || [];
	const tyde = themeList[0] || 'B1C1';
	const color = themeList[1] || 'default';
	const size = themeList[2] || 'md';
	const space = themeList[3] || 'md';
	const round = themeList[4] || 'md';

	const boxTyde = ['A1'].includes(tyde)
		? '-low:xx2xx'
		: ['A2'].includes(tyde)
		? '-low:xx2lx'
		: ['B1'].includes(tyde)
		? '-low:xx2xf'
		: ['B2'].includes(tyde)
		? '-high:xx2xf'
		: ['C1'].includes(tyde)
		? '-low:xx2lf'
		: ['C2'].includes(tyde)
		? '-high:xx2lf'
		: ['D1'].includes(tyde)
		? '-low:lx2xf'
		: ['D2'].includes(tyde)
		? '-high:lx2xf'
		: ['E1'].includes(tyde)
		? '-low:lx2lf'
		: ['E2'].includes(tyde)
		? '-high:lx2lf'
		: ['F1'].includes(tyde)
		? '-low:xf2lf'
		: ['F10'].includes(tyde)
		? '-low:xf10'
		: ['F2'].includes(tyde)
		? '-high:xf2lf'
		: ['F20'].includes(tyde)
		? '-low:xf20'
		: ['G1'].includes(tyde)
		? '-low:lf2lf'
		: ['G10'].includes(tyde)
		? '-low:lf20'
		: ['G2'].includes(tyde)
		? '-high:lf2lf'
		: ['G20'].includes(tyde)
		? '-high:lf20'
		: ['A'].includes(tyde)
		? '-A'
		: ['B'].includes(tyde)
		? '-B'
		: ['C'].includes(tyde)
		? '-C'
		: ['D'].includes(tyde)
		? '-D'
		: ['E'].includes(tyde)
		? '-E'
		: ['F'].includes(tyde)
		? '-F'
		: ['G'].includes(tyde)
		? '-G'
		: ['H'].includes(tyde)
		? '-H'
		: ['I'].includes(tyde)
		? '-I'
		: ['J'].includes(tyde)
		? '-J'
		: /[A-Z][0-9]?[A-Z][0-9]?/.test(tyde)
		? `-${tyde}`
		: '';
	const fontTyde = ['A1', 'A2', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'A', 'B', 'C', 'D', 'E', 'H', 'I', 'J'].includes(tyde)
		? '-high'
		: ['B2', 'C2', 'D2', 'E2'].includes(tyde)
		? '-high2low'
		: ['F2', 'G2', 'F20', 'G20', 'F', 'G', 'K', 'L'].includes(tyde)
		? '-low'
		: /[A-Z][0-9]?[A-Z][0-9]?/.test(tyde)
		? `-${tyde}`
		: '';
	const gap = {
		xs: {x: 1, y: 0},
		sm: {x: 1, y: 0.5},
		md: {x: 1, y: 1},
		lg: {x: 2, y: 2},
		xl: {x: 3, y: 3},
		'2xl': {x: 4, y: 4},
	}[space];

	const boxDeco = `box${boxTyde}-${color}`;
	const fontDeco = `font${fontTyde}-${color}`;

	const fontNormal = fontDeco.replace(/(font-)[A-Z]([0-9]?)[A-Z][0-9]?(-.*)/, '$1$2$3');
	const fontHover = fontDeco.replace(/(font-)[A-Z][0-9]?[A-Z]([0-9]?)(-.*)/, '$1$2$3');
	const classFontNormal = `${getStyleElement({useDeco: fontNormal, action: ''}).props.className}`;
	const classFontHover = `${getStyleElement({useDeco: fontHover, action: 'group-hover:'}).props.className}`;

	return (
		<div className={`${className} px-${gap.x} py-${gap.y} text-${size}`}>
			{/* <label htmlFor={forName} className={`${style} | ${className} px-${gap.x} py-${gap.y} text-${size}`}> */}
			{/* <FormCheck {...props} type={type} checked={checked} /> */}
			<Box deco={boxDeco} className={`rounded-${round}`} />
			<Icon deco={fontDeco} className={`mr-${gap.x} last:mr-0`}>
				{icon}
			</Icon>
			<Text deco={fontDeco} className={`mr-${gap.x} last:mr-0 px-${gap.x} underline-offset-1 ${classFontNormal} ${classFontHover}`}>
				{text}
			</Text>
			{children}
			<Icon deco={fontDeco}>{iconR}</Icon>
			{/* </label> */}
		</div>
	);
};

const LabelReal = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, text} = getProps({...props, tag: 'label'});

	return (
		<div className={`${style} | ${className}`}>
			<Box deco={deco} />
			<Icon deco={deco}>{icon || iconL}</Icon>
			<Text deco={deco}>{text}</Text>
			{children}
			<Icon deco={deco}>{iconR}</Icon>
		</div>
	);
};

export const Label = (props) => {
	return props.theme ? LabelTheme(props) : LabelReal(props);
};

export const Basket = (props) => {
	const newProps = props.tag ? props : getProps({...props, type: 'checkbox', tag: 'basket'});
	const {children, deco, style, className, icon, iconL, iconR, team = '', name, text, type, onChange, checked = false, disabled} = newProps;

	// 특정 ui의 change 이벤트 발생을 방지하기 위한 코드
	const forName = ['toggle', 'input'].includes(props.tag) ? (name ? [team, name].join('-') : null) : '';

	const label = Label({...newProps});

	return (
		<label htmlFor={forName} className={`${style} | ${className} | ${label.props.className}`}>
			<FormCheck {...props} type={type} checked={checked} />
			{/* <Box deco={deco} /> */}
			{/* <Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} /> */}
			{/* <Label {...newProps} /> */}
			{label.props.children}
			{/* {children} */}
		</label>
	);
};

export const Toggle = (props) => {
	const newProps = getProps({...props, tag: 'toggle'});

	return <Basket {...newProps} type="checkbox" />;
};

export const A = (props) => {
	const newProps = getProps({...props, tag: 'a'});
	const {name, href, target = '_self', checked = false, disabled} = newProps;

	const label = Label({...newProps});

	return (
		<Link href={href}>
			<a target={target} className={`group relative | ${label.props.className}`} disabled={disabled}>
				{/* <Basket {...newProps} type="checkbox" checked={checked} /> */}
				{/* <Label {...newProps} /> */}
				{label.props.children}
				{/* {children} */}
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
