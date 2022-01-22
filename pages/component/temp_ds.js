import {Icon, A, Button, Img, Input, Label, Text, Basket, Toggle, Box} from '../component/ui_ds4';

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
export const Group = ({children}) => {
	return <div className="space-x-2">{children}</div>;
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
			{/* <Box deco={decoData.box} /> */}
			<Box deco={decoData.box} className="!rounded-full" />
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

export const ButtonNormal = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		// <Button deco="basket-default" className={className} name={name} onClick={onClick} checked={checked} disabled={disabled}>
		<Button className="px-1 py-0.5 text-xs" name={name} onClick={onClick} checked={checked} disabled={disabled}>
			<Aaa {...props} />
		</Button>
	);
};

export const ToggleNormal = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Toggle deco="basket-default" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
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
