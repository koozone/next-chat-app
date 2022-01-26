import {useEffect} from 'react';
import {Icon, A, Button, Img, Input, Label, Text, Basket, Toggle, Box} from '../component/ui_ds4';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('js', javascript);

export const Fieldset = ({children, title}) => {
	return (
		<fieldset className="m-3 p-3 space-y-2 border-[1px] border-slate-400 rounded-lg bg-black/5">
			<legend>
				<span className="p-2 text-xl text-black/80 font-semibold">{title}</span>
			</legend>
			{children}
		</fieldset>
	);
};
export const Group = ({children, className = ''}) => {
	return <div className={`space-x-2 ${className}`}>{children}</div>;
};

export const Item2 = (props) => {
	const {value, data, changeRadio} = props;

	return (
		<Toggle deco="basket-default" team="align" name={value} checked={data.align.includes(value)} onChange={changeRadio}>
			<Box deco="box-item" />
			<Icon deco="font-warning">{`bx-align-${value}`}</Icon>
			<Text deco="font-default">{value}</Text>
		</Toggle>
	);
};

export const Item = (props) => {
	const {value, data, changeRadio} = props;

	return (
		<Toggle deco="basket-list-col" team="align" name={value} checked={data.align.includes(value)} onChange={changeRadio}>
			<Box deco="box-list-col" />
			<Icon deco="font-warning">{`bx-align-${value}`}</Icon>
			<Text deco="font-default">{value}</Text>
		</Toggle>
	);
};

const getDeco = (props) => {
	const {theme = 'default'} = props;

	return {
		default: {box: 'box-default', font: 'font-default'},
		primary: {box: 'box-primary', font: 'font-primary'},
		success: {box: 'box-success', font: 'font-success'},
		warning: {box: 'box-warning', font: 'font-warning'},
		danger: {box: 'box-danger', font: 'font-danger'},
	}[theme];
};

const Aaa = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;
	const decoData = getDeco(props);

	return (
		<>
			<Box deco={decoData.box} />
			{/* <Box deco={decoData.box} className="!rounded-full" /> */}
			<Icon deco={decoData.font} className="mr-1 last:mr-0">
				{icon}
			</Icon>
			<Text deco={decoData.font}>{text}</Text>
			{children}
			<Icon deco={decoData.font} className="ml-1 first:ml-0">
				{iconR}
			</Icon>
		</>
	);
};

export const Highlight = (props) => {
	const {children, className = ''} = props;

	const tabCount = children.match(/\t*$/g)[0].length;
	const tabReg = new RegExp(`^\t{${tabCount}}`, 'gm');
	const content = children.replace(/^\t*\n|\n\t*$/g, '').replace(tabReg, '');

	useEffect(() => {
		hljs.highlightAll();
	}, [content]);

	return (
		<pre className="grid">
			<code className={`rounded-lg ${className}`}>{content}</code>
		</pre>
	);
};

// export const Chip = (props) => {
// 	const {children, theme, className = '', icon, iconR, text, team, name, onClick, onChange, disabled} = props;

// 	const themeList = String(theme).split('-') || [];
// 	const mode = themeList[0] || '8';
// 	const color = themeList[1] || 'default';
// 	const size = themeList[2] || 'sm';
// 	const space = themeList[3] || 'md';
// 	const round = themeList[4] || 'sm';
// 	const underline = themeList[5] || '';

// 	const boxMode = ['1', '2'].includes(mode) ? '-underline' : ['3', '4'].includes(mode) ? '-trans' : ['5', '6'].includes(mode) ? '-outline' : ['7', '8'].includes(mode) ? '' : '';
// 	const fontMode = ['1', '2'].includes(mode) ? '-underline' : ['3', '4', '5', '6'].includes(mode) ? '-trans' : ['7', '8'].includes(mode) ? '' : '';
// 	const checked = ['2', '4', '6', '8'].includes(mode) ? true : false;
// 	const gap = {
// 		xs: {x: 1, y: 0},
// 		sm: {x: 1, y: 0.5},
// 		md: {x: 1, y: 1},
// 		lg: {x: 2, y: 2},
// 		xl: {x: 3, y: 3},
// 		'2xl': {x: 4, y: 4},
// 	}[space];

// 	return (
// 		<Basket className={`px-${gap.x} py-${gap.y} text-${size} ${className}`} name={name} onClick={onClick} checked={checked} disabled={disabled}>
// 			<Box deco={`box${boxMode}-${color}`} className={`rounded-${round}`} />
// 			<Icon deco={`font${fontMode}-${color}`} className={`mr-${gap.x} last:mr-0`}>
// 				{icon}
// 			</Icon>
// 			<Text deco={`font${fontMode}-${color}`} className={`mr-${gap.x} last:mr-0 px-${gap.x} underline-offset-1 group-hover:${underline == '_' ? 'underline' : 'no-underline'}`}>
// 				{text || children}
// 			</Text>
// 			<Icon deco={`font${fontMode}-${color}`}>{iconR}</Icon>
// 		</Basket>
// 	);
// };

export const ButtonNormal = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Button deco="basket-default" className={className} name={name} onClick={onClick} checked={checked} disabled={disabled}>
			{/* <Button className="px-1 py-0.5 text-xs" name={name} onClick={onClick} checked={checked} disabled={disabled}> */}
			<Aaa {...props} />
		</Button>
	);
};

export const ToggleNormal = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Toggle deco="basket-default" className={className} team={team} name={name} onChange={onChange} checked={checked} disabled={disabled}>
			<Aaa {...props} />
		</Toggle>
	);
};

export const ToggleCheckbox = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Toggle deco="basket-default" className={className} team={team} name={name} onChange={onChange} checked={checked} disabled={disabled}>
			<Box deco="box-checkbox" className="mr-2 last:mr-0" />
			<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
			<Text deco="font-toggle">{text}</Text>
			{children}
		</Toggle>
	);
};

export const ToggleRadio = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Toggle deco="basket-default" className={className} team={team} name={name} onChange={onChange} checked={checked} disabled={disabled}>
			<Box deco="box-radio" className="mr-2 last:mr-0" />
			<Box deco="box-radio-dot" />
			<Text deco="font-toggle">{text}</Text>
			{children}
		</Toggle>
	);
};

export const ToggleSwitch = (props) => {
	const {children, className, icon, iconR, text, team, name, onChange, onClick, checked, disabled} = props;

	return (
		<Toggle deco="basket-default" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
			<Box deco="box-switch" className="mr-2 last:mr-0" />
			<Box deco="box-switch-dot" />
			<Text deco="font-toggle">{text}</Text>
			{children}
		</Toggle>
	);
};
