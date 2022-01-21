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

export const ButtonPrimary = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Button deco="basket-default box-primary" className={className} name={name} onClick={onClick} checked={checked} disabled={disabled}>
			<Icon deco="font-default" className="text-lg mr-2 last:mr-0">
				{icon}
			</Icon>
			<Text deco="font-primary">{text}</Text>
			{children}
			<Icon deco="font-primary" className="text-lg ml-2 first:ml-0">
				{iconR}
			</Icon>
		</Button>
	);
};

export const ToggleSuccess = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Toggle deco="basket-default box-success" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
			<Icon deco="font-default" className="text-lg mr-2 last:mr-0">
				{icon}
			</Icon>
			<Text deco="font-success">{text}</Text>
			{children}
			<Icon deco="font-success" className="text-lg ml-2 first:ml-0">
				{iconR}
			</Icon>
		</Toggle>
	);
};

export const ToggleWarning = (props) => {
	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

	return (
		<Toggle deco="basket-default box-warning" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
			<Icon deco="font-default" className="text-lg mr-2 last:mr-0">
				{icon}
			</Icon>
			<Text deco="font-warning">{text}</Text>
			{children}
			<Icon deco="font-warning" className="text-lg ml-2 first:ml-0">
				{iconR}
			</Icon>
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
