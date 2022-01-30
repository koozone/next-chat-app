import Image from 'next/image';
import Link from 'next/link';
import {forwardRef, Fragment} from 'react';

const dummyElement = () => {
	return (
		<>
			<div className={`font-normal font-semibold italic not-italic underline no-underline bg-transparent group-hover:font-normal group-hover:font-semibold group-hover:italic group-hover:not-italic group-hover:underline group-hover:no-underline group-hover:bg-transparent`} />;
			<div className={`text-slate-800 ring-slate-800 bg-slate-100 bg-slate-300 bg-slate-500 bg-slate-600 group-hover:text-slate-800 group-hover:ring-slate-800 group-hover:bg-slate-100 group-hover:bg-slate-300 group-hover:bg-slate-500 group-hover:bg-slate-600`} />;
			<div className={`text-sky-800 ring-sky-800 bg-sky-100 bg-sky-300 bg-sky-500 bg-sky-600 group-hover:text-sky-800 group-hover:ring-sky-800 group-hover:bg-sky-100 group-hover:bg-sky-300 group-hover:bg-sky-500 group-hover:bg-sky-600`} />;
			<div className={`text-emerald-800 ring-emerald-800 bg-emerald-100 bg-emerald-300 bg-emerald-500 bg-emerald-600 group-hover:text-emerald-800 group-hover:ring-emerald-800 group-hover:bg-emerald-100 group-hover:bg-emerald-300 group-hover:bg-emerald-500 group-hover:bg-emerald-600`} />;
			<div className={`text-amber-800 ring-amber-800 bg-amber-100 bg-amber-300 bg-amber-500 bg-amber-600 group-hover:text-amber-800 group-hover:ring-amber-800 group-hover:bg-amber-100 group-hover:bg-amber-300 group-hover:bg-amber-500 group-hover:bg-amber-600`} />;
			<div className={`text-rose-800 ring-rose-800 bg-rose-100 bg-rose-300 bg-rose-500 bg-rose-600 group-hover:text-rose-800 group-hover:ring-rose-800 group-hover:bg-rose-100 group-hover:bg-rose-300 group-hover:bg-rose-500 group-hover:bg-rose-600`} />;
		</>
	);
};

const mixDecoElement = (props) => {
	const {tag, useDeco = '', icon} = props;

	// box 타입 (ex> 'box-AB-default')
	const boxTypeReg = /^(box)-([A-Z])([A-Z])-(.*)$/;
	// font 타입 (ex> 'font-AB-default')
	const fontTypeReg = /^(font)-([A-Z])([A-Z])-(.*)$/;
	// font 모드 (ex> 'font-12-default')
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
	const {children, tag, disabled} = props;

	switch (tag) {
		case 'img':
			return <div className={``} />;

		case 'label':
			return <div className={`group relative inline-flex justify-center items-center`} />;

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
			return <div className={`relative file:inline-flex justify-center items-center`} />;

		case 'a':
			return <div className={`group relative inline-flex justify-center items-center`} />;

		case 'button':
		case 'toggle':
			return disabled ? <div className={`relative inline-flex justify-center items-center select-none`} /> : <div className={`group relative inline-flex justify-center items-center cursor-pointer select-none`} />;

		case 'input':
			return disabled ? <div className={`relative inline-flex justify-start items-center select-none`} /> : <div className={`group relative inline-flex justify-start items-center cursor-text select-none`} />;

		default:
			return <div className={``} />;
	}
};

const getDecoElement = (props) => {
	const {tag, useDeco = '', action, icon} = props;

	const stylecolor = useDeco?.split('-').pop();
	const tailcolor = {
		default: 'slate',
		primary: 'sky',
		success: 'emerald',
		warning: 'amber',
		danger: 'rose',
	}[stylecolor];

	const decoReg = new RegExp(`((font|box).*)-${stylecolor}`, 'gm');
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
		case 'font-E-*':
		case 'font-H-*':
		case 'font-I-*':
		case 'font-J-*':
			return <div className={`${action}text-${tailcolor}-800`} />;

		case 'font-F-*':
		case 'font-G-*':
		case 'font-K-*':
		case 'font-L-*':
			return <div className={`${action}text-white`} />;

		case 'font-toggle':
			return <div className={`text-sky-800 peer-checked:underline`} />;
		case 'font-checkbox-dot':
			return <div className={`absolute text-lg text-white top-[5px] left-[7px] invisible peer-checked:visible`} />;

		case 'box-*':
			return <div className={`absolute w-full h-full ring-1 ring-${tailcolor}-600 bg-white group-hover:bg-${tailcolor}-100 peer-checked:bg-${tailcolor}-400 peer-checked:ring-${tailcolor}-800 group-hover:peer-checked:bg-${tailcolor}-600`} />;

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

	const defaultElement = getDefaultElement(props);
	const decoElement = mixDecoElement({...props, useDeco});
	const style = `${defaultElement.props.className} | ${decoElement.props.className}`;

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
	const {children, theme, deco, style, className, icon, iconL, iconR, text, checked} = getProps({...props, tag: 'label'});

	const themeList = String(theme).split('-') || [];
	const typemode = themeList[0] || 'B1C1';
	const color = themeList[1] || 'default';
	const size = themeList[2] || 'md';
	const space = themeList[3] || 'md';
	const round = themeList[4] || 'md';

	const gap = {
		xs: {x: 1, y: 0},
		sm: {x: 1, y: 0.5},
		md: {x: 1, y: 1},
		lg: {x: 2, y: 2},
		xl: {x: 3, y: 3},
		'2xl': {x: 4, y: 4},
	}[space];

	const aaa = typemode.match(/([A-Z])([0-9]?)([A-Z])([0-9]?)/);
	const ttt = `${aaa[1]}${aaa[2] || '1'}${aaa[3]}${aaa[4] || '1'}`;

	// box, type 타입모드 (ex> 'box-A1B2-default', 'font-A1B2-primary')
	const regex = /^(.*)-([A-Z])([0-9]?)([A-Z])([0-9]?)-(.*)$/;
	const boxType = `box-${ttt}-${color}`.replace(regex, checked ? '$1-$4$2-$6' : '$1-$2$4-$6'); // 'box-AB-default'
	const fontType = `font-${ttt}-${color}`.replace(regex, checked ? '$1-$4$2-$6' : '$1-$2$4-$6'); // 'font-AB-primary'
	const fontMode = `font-${ttt}-${color}`.replace(regex, checked ? '$1-$5$3-$6' : '$1-$3$5-$6'); // 'font-12-primary'
	const fontModeClass = `${mixDecoElement({...props, useDeco: fontMode}).props.className}`;

	return (
		<div className={`${className} px-${gap.x} py-${gap.y} text-${size}`}>
			{/* <label htmlFor={forName} className={`${style} | ${className} px-${gap.x} py-${gap.y} text-${size}`}> */}
			{/* <FormCheck {...props} type={type} checked={checked} /> */}
			<Box deco={boxType} className={`rounded-${round}`} />
			<Icon deco={fontType} className={`mr-${gap.x} last:mr-0`}>
				{icon}
			</Icon>
			<Text deco={fontType} className={`mr-${gap.x} last:mr-0 px-${gap.x} ${fontModeClass}`}>
				{text}
			</Text>
			{children}
			<Icon deco={fontType}>{iconR}</Icon>
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
	const {style, className, name, href, target = '_self', checked = false, disabled} = newProps;

	const label = Label({...newProps});

	return (
		<Link href={href}>
			<a target={target} className={`${style} | ${className} | ${label.props.className}`}>
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
