import Image from 'next/image';
import Link from 'next/link';
import {forwardRef, Fragment} from 'react';

const dummyElement = () => {
	return (
		<>
			<div className={`px-0 px-0.5 px-1 px-2 px-3 px-4 px-5 px-6`} />
			<div className={`py-0 py-0.5 py-1 py-2 py-3 py-4 py-5 py-6`} />
			<div className={`mr-0 mr-0.5 mr-1 mr-2 mr-3 mr-4 mr-5 mr-6`} />
			<div className={`ml-0 ml-0.5 ml-1 ml-2 ml-3 ml-4 ml-5 ml-6`} />
			<div className={`w-2 w-2.5 w-3 w-3.5 w-4 w-4.5 w-5 w-6 w-7 w-8 w-9 w-10 w-12 w-14 w-16 w-18 w-20 w-24 w-28`} />
			<div className={`h-4 h-5 h-6 h-7 h-8 h-9 h-10 h-12 h-14`} />
			<div className={`bg-100% bg-200% bg-300%`} />
			<div className={`text-xs text-sm text-md text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl`} />
			<div className={`rounded-none rounded-sm rounded rounded-md rounded-lg rounded-xl rounded-2xl rounded-3xl rounded-full`} />
			<div className={`rounded-t-none rounded-t-sm rounded-t rounded-t-md rounded-t-lg rounded-t-xl rounded-t-2xl rounded-t-3xl rounded-t-full`} />
			<div className={`rounded-b-none rounded-b-sm rounded-b rounded-b-md rounded-b-lg rounded-b-xl rounded-b-2xl rounded-b-3xl rounded-b-full`} />
			<div className={`rounded-l-none rounded-l-sm rounded-l rounded-l-md rounded-l-lg rounded-l-xl rounded-l-2xl rounded-l-3xl rounded-l-full`} />
			<div className={`rounded-r-none rounded-r-sm rounded-r rounded-r-md rounded-r-lg rounded-r-xl rounded-r-2xl rounded-r-3xl rounded-r-full`} />
			<div className={`rounded-tl-none rounded-tl-sm rounded-tl rounded-tl-md rounded-tl-lg rounded-tl-xl rounded-tl-2xl rounded-tl-3xl rounded-tl-full`} />
			<div className={`rounded-tr-none rounded-tr-sm rounded-tr rounded-tr-md rounded-tr-lg rounded-tr-xl rounded-tr-2xl rounded-tr-3xl rounded-tr-full`} />
			<div className={`rounded-bl-none rounded-bl-sm rounded-bl rounded-bl-md rounded-bl-lg rounded-bl-xl rounded-bl-2xl rounded-bl-3xl rounded-bl-full`} />
			<div className={`rounded-br-none rounded-br-sm rounded-br rounded-br-md rounded-br-lg rounded-br-xl rounded-br-2xl rounded-br-3xl rounded-br-full`} />
			<div className={`font-normal font-semibold italic not-italic underline no-underline bg-transparent group-hover:font-normal group-hover:font-semibold group-hover:italic group-hover:not-italic group-hover:underline group-hover:no-underline group-hover:bg-transparent`} />
			<div className={`border-0 border group-hover:border-0 group-hover:border`} />
			<div className={`text-slate-800 border-slate-800 bg-slate-100 bg-slate-300 bg-slate-500 bg-slate-600 group-hover:text-slate-800 group-hover:border-slate-800 group-hover:bg-slate-100 group-hover:bg-slate-300 group-hover:bg-slate-500 group-hover:bg-slate-600`} />
			<div className={`text-sky-800 border-sky-800 bg-sky-100 bg-sky-300 bg-sky-500 bg-sky-600 group-hover:text-sky-800 group-hover:border-sky-800 group-hover:bg-sky-100 group-hover:bg-sky-300 group-hover:bg-sky-500 group-hover:bg-sky-600`} />
			<div className={`text-emerald-800 border-emerald-800 bg-emerald-100 bg-emerald-300 bg-emerald-500 bg-emerald-600 group-hover:text-emerald-800 group-hover:border-emerald-800 group-hover:bg-emerald-100 group-hover:bg-emerald-300 group-hover:bg-emerald-500 group-hover:bg-emerald-600`} />
			<div className={`text-indigo-800 border-indigo-800 bg-indigo-100 bg-indigo-300 bg-indigo-500 bg-indigo-600 group-hover:text-indigo-800 group-hover:border-indigo-800 group-hover:bg-indigo-100 group-hover:bg-indigo-300 group-hover:bg-indigo-500 group-hover:bg-indigo-600`} />
			<div className={`text-amber-800 border-amber-800 bg-amber-100 bg-amber-300 bg-amber-500 bg-amber-600 group-hover:text-amber-800 group-hover:border-amber-800 group-hover:bg-amber-100 group-hover:bg-amber-300 group-hover:bg-amber-500 group-hover:bg-amber-600`} />
			<div className={`text-rose-800 border-rose-800 bg-rose-100 bg-rose-300 bg-rose-500 bg-rose-600 group-hover:text-rose-800 group-hover:border-rose-800 group-hover:bg-rose-100 group-hover:bg-rose-300 group-hover:bg-rose-500 group-hover:bg-rose-600`} />;
		</>
	);
};

const mixDecoElement = (props) => {
	const {tag, useDeco = '', icon} = props;

	// box ?????? (ex> 'box-AB-default')
	const boxTypeReg = /^(box)-([A-Z])([A-Z])-(.*)$/;
	// font ?????? (ex> 'font-AB-default')
	const fontTypeReg = /^(font)-([A-Z])([A-Z])-(.*)$/;
	// font ?????? (ex> 'font-12-default')
	const fontModeReg = /^(font)-([0-9])([0-9])-(.*)$/;

	switch (useDeco) {
		case useDeco.match(boxTypeReg)?.input:
			const boxTypeNormal = useDeco.replace(boxTypeReg, '$1-$2-$4'); // 'box-A-default'
			const boxTypeHover = useDeco.replace(boxTypeReg, '$1-$3-$4'); // 'box-B-default'
			const boxTypeClassNormal = `${getDecoElement({useDeco: boxTypeNormal, action: ''}).props.className}`;
			const boxTypeClassHover = `${getDecoElement({useDeco: boxTypeHover, action: 'group-hover:'}).props.className}`;

			return <div className={`absolute w-full h-full transition ${boxTypeClassNormal} ${boxTypeClassHover}`} />;

		case useDeco.match(fontTypeReg)?.input:
			const fontTypeNormal = useDeco.replace(fontTypeReg, '$1-$2-$4'); // 'font-A-default'
			const fontTypeHover = useDeco.replace(fontTypeReg, '$1-$3-$4'); // 'font-B-default'
			const fontTypeClassNormal = `${getDecoElement({useDeco: fontTypeNormal, action: ''}).props.className}`;
			const fontTypeClassHover = `${getDecoElement({useDeco: fontTypeHover, action: 'group-hover:'}).props.className}`;

			return <div className={`transition ${fontTypeClassNormal} ${fontTypeClassHover}`} />;

		case useDeco.match(fontModeReg)?.input:
			const fontModeNormal = useDeco.replace(fontModeReg, '$1-$2-$4'); // 'font-1-default'
			const fontModeHover = useDeco.replace(fontModeReg, '$1-$3-$4'); // 'font-2-default'
			const fontModeClassNormal = `${getDecoElement({useDeco: fontModeNormal, action: ''}).props.className}`;
			const fontModeClassHover = `${getDecoElement({useDeco: fontModeHover, action: 'group-hover:'}).props.className}`;

			return <div className={`transition underline-offset-1 ${fontModeClassNormal} ${fontModeClassHover}`} />;

		default:
			return getDecoElement(props);
	}
};

const getDefaultElement = (props) => {
	const {children, tag, checked, disabled} = props;

	const peerDisabled = 'peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-disabled:cursor-default';

	switch (tag) {
		case 'img':
			return <div className={`object-cover ${peerDisabled}`} />;

		case 'bg':
			return <div className={`bg-no-repeat bg-left-top group-hover:bg-right-top peer-checked:bg-left-bottom group-hover:peer-checked:bg-right-bottom ${peerDisabled}`} />;

		case 'icon':
			return <div className={`pointer-events-none ${peerDisabled}`} />;

		case 'font':
			return <div className={`${peerDisabled}`} />;

		case 'box':
			return <div className={`top-0 left-0 -z-10 ${peerDisabled}`} />;

		case 'label':
			return <div className={`relative flex items-center`} />;

		case 'formCheck':
			// return <div className={`peer absolute top-0 left-0 w-0 h-0 appearance-none pointer-events-none hidden`} />;
			return <div className={`peer sr-only`} />;

		case 'formInput':
			return <div className={`flex-1 truncate outline-none bg-transparent ${peerDisabled}`} />;

		case 'basket':
			// return <div className={`relative inline-flex justify-center items-center`} />;
			return <div className={`pointer-events-none`} />;

		case 'a':
			// return <div className={`group relative inline-flex justify-center items-center`} />;
			return <div className={`group`} />;

		case 'button':
		case 'toggle':
			// return disabled ? <div className={`relative inline-flex justify-center items-center select-none`} /> : <div className={`group relative inline-flex justify-center items-center cursor-pointer select-none`} />;
			return disabled ? <div className={`select-none`} /> : <div className={`group cursor-pointer select-none`} />;

		case 'input':
			// return disabled ? <div className={`relative inline-flex justify-start items-center select-none`} /> : <div className={`group relative inline-flex justify-start items-center cursor-text select-none`} />;
			return disabled ? <div className={`select-none`} /> : <div className={`cursor-text select-none`} />;

		default:
			return <div className={``} />;
	}
};

const getDecoElement = (props) => {
	const {tag, useDeco = '', action = '', icon} = props;

	const decocolor = useDeco?.split('-').pop();
	const tailcolor = {
		default: 'slate',
		primary: 'sky',
		success: 'emerald',
		info: 'indigo',
		warning: 'amber',
		danger: 'rose',
	}[decocolor];

	const decoReg = new RegExp(`((font|box).*)-${decocolor}`, 'gm');
	const shotDeco = tailcolor ? useDeco.replace(decoReg, '$1-*') : useDeco;

	switch (shotDeco) {
		case 'font-*':
			return <div className={`text-${tailcolor}-800 peer-checked:text-white`} />;

		case 'font-1-*':
			return <div className={`${action}no-underline ${action}not-italic ${action}font-normal`} />;

		case 'font-2-*':
			return <div className={`${action}underline ${action}not-italic ${action}font-normal`} />;

		case 'font-3-*':
			return <div className={`${action}no-underline ${action}italic ${action}font-normal`} />;

		case 'font-4-*':
			return <div className={`${action}no-underline ${action}not-italic ${action}font-semibold`} />;

		case 'font-5-*':
			return <div className={`${action}underline ${action}italic ${action}font-normal`} />;

		case 'font-6-*':
			return <div className={`${action}underline ${action}not-italic ${action}font-semibold`} />;

		case 'font-7-*':
			return <div className={`${action}no-underline ${action}italic ${action}font-semibold`} />;

		case 'font-8-*':
			return <div className={`${action}underline ${action}italic ${action}font-semibold`} />;

		case 'font-A-*':
		case 'font-B-*':
		case 'font-C-*':
		case 'font-D-*':
		case 'font-G-*':
		case 'font-H-*':
		case 'font-I-*':
		case 'font-J-*':
			return <div className={`${action}text-${tailcolor}-800`} />;

		case 'font-E-*':
		case 'font-F-*':
		case 'font-K-*':
		case 'font-L-*':
			return <div className={`${action}text-white`} />;

		case 'font-toggle':
			return <div className={`text-sky-800 peer-checked:underline`} />;
		case 'font-checkbox-dot':
			return <div className={`absolute text-lg text-white top-[5px] left-[7px] invisible peer-checked:visible`} />;

		case 'box-*':
			return <div className={`absolute w-full h-full border border-${tailcolor}-600 bg-white group-hover:bg-${tailcolor}-100 peer-checked:bg-${tailcolor}-400 peer-checked:border-${tailcolor}-800 group-hover:peer-checked:bg-${tailcolor}-600`} />;

		case 'box-A-*':
			return <div className={`${action}border-0 ${action}bg-transparent`} />;

		case 'box-B-*':
			return <div className={`${action}border-0 ${action}bg-white`} />;

		case 'box-C-*':
			return <div className={`${action}border-0 ${action}bg-${tailcolor}-100`} />;

		case 'box-D-*':
			return <div className={`${action}border-0 ${action}bg-${tailcolor}-300`} />;

		case 'box-E-*':
			return <div className={`${action}border-0 ${action}bg-${tailcolor}-500`} />;

		case 'box-F-*':
			return <div className={`${action}border-0 ${action}bg-${tailcolor}-600`} />;

		case 'box-G-*':
			return <div className={`${action}border ${action}border-${tailcolor}-800 ${action}bg-transparent`} />;

		case 'box-H-*':
			return <div className={`${action}border ${action}border-${tailcolor}-800 ${action}bg-white`} />;

		case 'box-I-*':
			return <div className={`${action}border ${action}border-${tailcolor}-800 ${action}bg-${tailcolor}-100`} />;

		case 'box-J-*':
			return <div className={`${action}border ${action}border-${tailcolor}-800 ${action}bg-${tailcolor}-300`} />;

		case 'box-K-*':
			return <div className={`${action}border ${action}border-${tailcolor}-800 ${action}bg-${tailcolor}-500`} />;

		case 'box-L-*':
			return <div className={`${action}border ${action}border-${tailcolor}-800 ${action}bg-${tailcolor}-600`} />;

		case 'box-round':
			return <div className={`absolute w-full h-full rounded-full border border-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:border-sky-700 group-hover:peer-checked:bg-sky-600 group-focus-within:border-sky-400`} />;
		case 'box-trans':
			return <div className={`absolute w-full h-full bg-black/0 group-hover:bg-black/5`} />;
		case 'box-item':
			return <div className={`absolute w-full h-full border border-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:border-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-l-full group-last:rounded-r-full`} />;
		case 'box-checkbox':
			return <div className={`w-4 h-4 rounded-sm border border-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:border-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-radio':
			return <div className={`w-4 h-4 rounded-full border border-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:border-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-radio-dot':
			return <div className={`absolute w-2 h-2 rounded-full border border-slate-400 bg-white top-[10px] left-[12px] invisible peer-checked:visible`} />;
		case 'box-switch':
			return <div className={`w-7 h-4 rounded-full border border-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:border-sky-700 group-hover:peer-checked:bg-sky-600`} />;
		case 'box-switch-dot':
			return <div className={`absolute w-3 h-3 rounded-full border border-slate-400 bg-white left-[11px] top-1/2 transform -translate-y-1/2 peer-checked:left-[22px]`} />;
		case 'box-list-col':
			return <div className={`absolute w-full h-full border border-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:border-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-t-lg group-last:rounded-b-lg`} />;

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

const getThemeProps = (props) => {
	const {theme, checked} = props;

	// const tttList = theme.split('::');
	// const ttt = checked ? tttList[1] || tttList[0] : tttList[0];

	// const themeList = String(ttt).split('-') || [];
	// const color = themeList[0] || 'default';
	// let tyde = themeList[1] || 'A1A1';
	// const size = themeList[2] || 'sm';
	// const space = themeList[3] || 'sm';
	// const round = themeList[4] || 'sm';
	// const themeList = String(theme).split('-') || [];
	// const color = checked ? themeList[0]?.split('/')[1] || themeList[0]?.split('/')[0] || 'default' : themeList[0]?.split('/')[0] || 'default';
	// let tyde = checked ? themeList[1]?.split('/')[1] || themeList[1]?.split('/')[0] || 'I' : themeList[1]?.split('/')[0] || 'I';
	// const size = checked ? themeList[2]?.split('/')[1] || themeList[2]?.split('/')[0] || 'md' : themeList[2]?.split('/')[0] || 'md';
	// const space = checked ? themeList[3]?.split('/')[1] || themeList[3]?.split('/')[0] || 'md' : themeList[3]?.split('/')[0] || 'md';
	// const round = checked ? themeList[4]?.split('/')[1] || themeList[4]?.split('/')[0] || 'md' : themeList[4]?.split('/')[0] || 'md';
	const themeArr = String(theme).split('::') || [];
	const offTheme = themeArr[0];
	const onTheme = themeArr[1];
	const themeValue = checked ? onTheme || offTheme : offTheme;

	const themeList = String(themeValue).split('-') || [];
	const color = themeList[0] || 'default';
	let tyde = themeList[1] || 'I';
	const size = themeList[2] || 'md';
	const space = themeList[3] || 'md';
	const round = themeList[4] || 'md';

	const roundReg = /(none|xs|sm|md|lg|xl|2xl|3xl|full)([0-9]?)/;
	const roundMatch = round.match(roundReg);

	const tydeReg = /([A-Z]?)([0-9]?)([A-Z]?)([0-9]?)/;
	const tydeMatch = tyde.match(tydeReg);
	tyde = (tydeMatch[1] || 'A') + (tydeMatch[2] || '1') + (tydeMatch[3] || tydeMatch[1] || 'A') + (tydeMatch[4] || tydeMatch[2] || '1');

	// const typeDeco = `${tyde.replace(tydeReg, checked ? '$3$1' : '$1$3')}-${color}`; // 'AB-default'
	// const modeDeco = `${tyde.replace(tydeReg, checked ? '$4$2' : '$2$4')}-${color}`; // '12-default'
	const typeDeco = `${tyde.replace(tydeReg, '$1$3')}-${color}`; // 'AB-default'
	const modeDeco = `${tyde.replace(tydeReg, '$2$4')}-${color}`; // '12-default'

	const padding = {
		// none: {x: 0, y: 0},
		// xs: {x: 0.5, y: 0.5},
		// sm: {x: 1, y: 1},
		// md: {x: 2, y: 2},
		// lg: {x: 3, y: 3},
		// xl: {x: 4, y: 4},
		// '2xl': {x: 5, y: 5},
		// '3xl': {x: 6, y: 6},
		xs: {x: 0, y: 0},
		sm: {x: 0.5, y: 0.5},
		md: {x: 1, y: 1},
		lg: {x: 2, y: 2},
		xl: {x: 3, y: 3},
	}[space];

	const margin = {
		xs: {x: 0.5, y: 0},
		sm: {x: 0.5, y: 0},
		md: {x: 0.5, y: 0},
		lg: {x: 1, y: 0},
		xl: {x: 1, y: 0},
		'2xl': {x: 1, y: 0},
		'3xl': {x: 2, y: 0},
		'4xl': {x: 2, y: 0},
		'5xl': {x: 2, y: 0},
		'6xl': {x: 3, y: 0},
	}[size];

	const height = {
		xs: 4,
		sm: 5,
		md: 6,
		lg: 7,
		xl: 7,
		'2xl': 8,
		'3xl': 9,
		'4xl': 10,
		'5xl': 12,
		'6xl': 14,
	}[size];

	const rounded = [
		'rounded',
		{
			none: '',
			1: 't',
			2: 'r',
			3: 'b',
			4: 'l',
			5: 'tl',
			6: 'tr',
			7: 'br',
			8: 'bl',
		}[roundMatch[2] || 'none'],
		{
			// none: 'none',
			// xs: 'sm',
			// sm: '',
			// md: 'md',
			// lg: 'lg',
			// xl: 'xl',
			// '2xl': '2xl',
			// '3xl': '3xl',
			// full: 'full',
			xs: 'none',
			sm: '',
			md: 'lg',
			lg: 'xl',
			xl: '2xl',
			full: 'full',
		}[roundMatch[1]],
	]
		.filter((item) => item)
		.join('-');

	return {
		padding,
		margin,
		size,
		rounded,
		height,
		typeDeco,
		modeDeco,
	};
};

const getNewProps = (props) => {
	const {
		children = '',
		tag = '',
		theme = '',
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

	const styleName = `${getDefaultElement(props).props.className} | ${mixDecoElement({...props, useDeco}).props.className}`;
	const themeProps = props.themeProps ? props.themeProps : theme ? getThemeProps(props) : {};

	return {
		...props,
		children,
		deco,
		useDeco,
		styleName,
		className,
		href,
		onClick,
		onChange,
		themeProps,
	};
};

const FormCheck = (props) => {
	const {children, deco, styleName, className, team = '', name, href, type, onChange, checked, disabled} = getNewProps({...props, tag: 'formCheck'});

	return props.tag == 'toggle' ? (
		<input type={type} className={`${styleName} | `} id={[team, name].join('-')} name={name} data-team={team} checked={checked} disabled={disabled} onChange={onChange} />
	) : (
		<input type={type} className={`${styleName} | `} checked={checked} disabled={disabled} onChange={onChange} />
	);
};
const FormInput = forwardRef((props, ref) => {
	const {children, deco, styleName, className, name, href, type, value, placeholder, onChange, checked, disabled, readOnly} = getNewProps({...props, tag: 'formInput'});

	return disabled ? (
		<input type={type} className={`${styleName} | ${className}`} ref={ref} placeholder={placeholder} value={value} onChange={onChange} readOnly={readOnly} />
	) : (
		<input type={type} className={`${styleName} | ${className}`} id={name} name={name} ref={ref} placeholder={placeholder} value={value} onChange={onChange} readOnly={readOnly} />
	);
});

export const Icon = (props) => {
	const {children, deco, styleName, className, icon} = getNewProps({...props, tag: 'icon'});

	return children ? <i className={`bx ${children} ${styleName} | ${className}`} /> : <></>;
};

export const Img = (props) => {
	const {deco, styleName, className, name, src, alt} = getNewProps({...props, tag: 'img'});

	return <img className={`${styleName} | ${className}`} src={src} alt={alt} />;
};

export const Bg = (props) => {
	const {children, deco, useDeco, styleName, className, bg, height, name} = getNewProps({...props, tag: 'bg'});

	const fileReg = /.*-(xs|sm|md|lg|xl)([0-9]?)\..*/;
	const match = bg.match(fileReg);

	const ratio = {
		sm: 0.5,
		md: 1,
		lg: 2,
	}[match?.[1] || 'md'];

	const scale = {
		1: '100%',
		2: '200%',
		3: '300%',
	}[match?.[2] || 1];

	const active = match?.[2] == '2' ? '' : 'group-active:bg-center-top group-active:peer-checked:bg-center-bottom';

	return bg ? <div className={`${styleName} | ${className} w-${height * ratio} h-${height} bg-${scale} ${active}`} style={{backgroundImage: `url(${bg})`}}></div> : <></>;
};

const TextTheme = (props) => {
	const {
		children,
		theme,
		deco,
		styleName,
		className,
		icon,
		iconL,
		iconR,
		name,
		checked,
		themeProps: {padding, margin, size, rounded, height, typeDeco, modeDeco},
	} = getNewProps({...props, tag: 'font'});
	// const {padding, margin, size, rounded, height, typeDeco, modeDeco} = getThemeProps(props);

	const typeClass = `${mixDecoElement({...props, useDeco: `font-${typeDeco}`}).props.className}`;
	const modeClass = `${mixDecoElement({...props, useDeco: `font-${modeDeco}`}).props.className}`;

	// ???????????? children ????????? ?????? ??????????????? ?????? ???????????? ???????????? ???????????? ????????? ???????????? ?????? ??????
	const childrenContent = [].concat(children).join('');

	return childrenContent ? <span className={`${styleName} | ${className} ${typeClass} ${modeClass} text-${size}`}>{children}</span> : <></>;
};

const TextReal = (props) => {
	const {children, deco, styleName, className, icon, iconL, iconR, name} = getNewProps({...props, tag: 'font'});

	return children ? <span className={`${styleName} | ${className}`}>{children}</span> : <></>;
};

export const Text = (props) => {
	return props.theme ? TextTheme(props) : TextReal(props);
};

export const Box = (props) => {
	const {children, deco, useDeco, styleName, className, name} = getNewProps({...props, tag: 'box'});

	return useDeco ? <div className={`${styleName} | ${className}`}></div> : <></>;
};

const LabelTheme = (props) => {
	const newProps = getNewProps({...props, tag: 'label'});
	const {
		children,
		theme,
		deco,
		styleName,
		className,
		img = '',
		imgR = '',
		bg = '',
		bgR = '',
		icon = '',
		iconL = '',
		iconR = '',
		text = '',
		left,
		right,
		center,
		checked,
		themeProps: {padding, margin, size, rounded, height, typeDeco, modeDeco},
	} = newProps;
	// const {padding, margin, size, rounded, height, typeDeco, modeDeco} = getThemeProps(props);

	const iconArr = String(icon).split('::') || [];
	const offIcon = iconArr[0];
	const onIcon = iconArr.length == 2 ? iconArr[1] : iconArr[1] || iconArr[0];
	const iconValue = checked ? onIcon : offIcon;

	const iconRArr = String(iconR).split('::') || [];
	const offIconR = iconRArr[0];
	const onIconR = iconRArr.length == 2 ? iconRArr[1] : iconRArr[1] || iconRArr[0];
	const iconRValue = checked ? onIconR : offIconR;

	const imageArr = String(img).split('::') || [];
	const offImage = imageArr[0];
	const onImage = imageArr.length == 2 ? imageArr[1] : imageArr[1] || imageArr[0];
	const imageValue = checked ? onImage : offImage;

	const imageRArr = String(imgR).split('::') || [];
	const offImageR = imageRArr[0];
	const onImageR = imageRArr.length == 2 ? imageRArr[1] : imageRArr[1] || imageRArr[0];
	const imageRValue = checked ? onImageR : offImageR;

	const bgArr = String(bg).split('::') || [];
	const offBg = bgArr[0];
	const onBg = bgArr.length == 2 ? bgArr[1] : bgArr[1] || bgArr[0];
	const bgValue = checked ? onBg : offBg;

	const bgRArr = String(bgR).split('::') || [];
	const offBgR = bgRArr[0];
	const onBgR = bgRArr.length == 2 ? bgRArr[1] : bgRArr[1] || bgRArr[0];
	const bgRValue = checked ? onBgR : offBgR;

	const textArr = String(text).split('::') || [];
	const offText = textArr[0];
	const onText = textArr.length == 2 ? textArr[1] : textArr[1] || textArr[0];
	const textValue = checked ? onText : offText;

	return (
		<div className={`${styleName} | ${className} px-${padding.x} py-${padding.y} text-${size}`}>
			<Box deco={`box-${typeDeco}`} className={`${rounded}`} />
			{left ? (
				left
			) : imageValue ? (
				<Img src={imageValue} className={`mr-${margin.x} last:mr-0 w-${height} h-${height} ${rounded}`} />
			) : bgValue ? (
				// <div className={`ml-${margin.x} last:ml-0 h-${height} aspect-square ${rounded} border-0 bg-origin-border bg-cover bg-[left_top] group-hover:saturate-200 peer-checked:bg-[right_bottom] group-hover:peer-checked:saturate-200`} style={{backgroundImage: `url(${img})`}} />
				<Bg bg={bgValue} height={height} className={`mr-${margin.x} last:mr-0 ${rounded}`} />
			) : iconValue ? (
				<Icon deco={`font-${typeDeco}`} className={`ml-${margin.x} last:ml-0`}>
					{iconValue}
				</Icon>
			) : (
				<></>
			)}
			{center ? (
				center
			) : textValue || children ? (
				<Text {...newProps} className={`ml-${margin.x * 2} mr-${margin.x * 2}`}>
					{textValue}
					{children}
				</Text>
			) : (
				<></>
			)}
			{newProps.hasOwnProperty('value') ? <FormInput {...newProps} className={`ml-${margin.x * 2} mr-${margin.x * 2} ${props.tag != 'input' ? 'pointer-events-none' : 'pointer-events-auto'}`} readOnly={props.tag != 'input'} /> : <></>}
			{right ? (
				right
			) : imageRValue ? (
				<Img src={imageRValue} className={`ml-${margin.x} w-${height} h-${height} ${rounded}`} />
			) : bgRValue ? (
				<Bg bg={bgRValue} height={height} className={`ml-${margin.x} ${rounded}`} />
			) : iconRValue ? (
				<Icon deco={`font-${typeDeco}`} className={`mr-${margin.x}`}>
					{iconRValue}
				</Icon>
			) : (
				<></>
			)}
		</div>
	);
};

const LabelReal = (props) => {
	const {children, deco, styleName, className, icon, iconL, iconR, text} = getNewProps({...props, tag: 'label'});

	return (
		<div className={`${styleName} | ${className}`}>
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

export const A = (props) => {
	const newProps = getNewProps({...props, tag: 'a'});
	const {styleName, className, name, href, target = '_self', checked = false, disabled} = newProps;

	const label = Label({...newProps});
	const labelName = `${label.props.className} justify-center`;

	return (
		<Link href={href}>
			<a target={target} className={`${styleName} | ${labelName}`}>
				{/* <Basket {...newProps} type="checkbox" checked={checked} /> */}
				{/* <Label {...newProps} /> */}
				{label.props.children}
				{/* {children} */}
			</a>
		</Link>
	);
};

export const Basket = (props) => {
	const newProps = props.tag ? props : getNewProps({...props, tag: 'basket'});
	const {children, deco, styleName, className, icon, iconL, iconR, team = '', name, text, type, onChange, checked = false, disabled} = newProps;

	// ?????? ui??? change ????????? ????????? ???????????? ?????? ??????
	const forName = ['toggle', 'input'].includes(props.tag) ? (name ? [team, name].join('-') : null) : '';

	const label = Label({...newProps});
	const labelName = `${label.props.className} justify-center`;

	return (
		<label htmlFor={forName} className={`${styleName} | ${labelName}`}>
			<FormCheck {...props} type="checkbox" checked={checked} />
			{/* <Box deco={deco} /> */}
			{/* <Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} /> */}
			{/* <Label {...newProps} /> */}
			{label.props.children}
			{/* {children} */}
		</label>
	);
};

export const Toggle = (props) => {
	const newProps = getNewProps({...props, tag: 'toggle'});

	return <Basket {...newProps} />;
};

export const Button = (props) => {
	const newProps = getNewProps({...props, tag: 'button'});
	const {children, name, onClick, checked = false, disabled} = newProps;

	// disabled ??????????????? ?????? ??????
	const clickHandler = disabled ? () => {} : onClick;

	return (
		<button type="button" name={name} onClick={clickHandler}>
			<Basket {...newProps} checked={checked} />
		</button>
	);
};

export const Input = forwardRef((props, ref) => {
	const newProps = getNewProps({...props, tag: 'input'});
	const {children, name, onClick, type} = newProps;

	return (
		<Basket {...newProps}>
			{/* {children}
			<FormInput {...props} ref={ref} /> */}
		</Basket>
	);
});
