import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, ButtonEx, Img, Input, InputEx, Label, Text, Checkbox, CheckboxEx, Checkbox222, Radio, Box, BoxEx} from '../component/ui_ds3';
import {UseData} from '../hook/useData';
import {UseModal} from '../hook/useModal';
import {UseSideMenu} from '../hook/useSideMenu';

const Fieldset = ({children, title}) => {
	return (
		<fieldset className="m-3 p-3 space-y-2 border-[1px] border-slate-500 rounded-lg">
			<legend>
				<span className="p-2 text-xl font-semibold">{title}</span>
			</legend>
			{children}
		</fieldset>
	);
};
const Group = ({children}) => {
	return <div className="space-x-2">{children}</div>;
};

export default function code() {
	// const a_default = (<div className="text-xs underline decoration-transparent text-blue-500/80 hover:text-blue-500 hover:decoration-inherit peer-checked:text-white" />).props.className;
	const a_default = (<div className="underline decoration-transparent hover:decoration-inherit" />).props.className;

	// icon (button)
	const icon_default = (<div className="mr-2 text-lg text-black/50 peer-checked:text-white peer-disabled:opacity-30" />).props.className;
	// icon (input)
	const icon_primary = (
		<div className="mr-2 last:mr-0 text-lg text-black/50 group-focus-within:text-sky-400 peer-disabled:opacity-30" />
	).props.className;
	const icon_danger = (
		<div className="mr-2 last:mr-0 text-lg text-black/50 group-focus-within:text-rose-400 peer-disabled:opacity-30" />
	).props.className;

	// text
	const text_default = (<div className="text-sm text-slate-800 peer-checked:text-white peer-disabled:opacity-30" />).props.className;
	const text_primary = (<div className="text-sm text-sky-800 peer-checked:text-white peer-disabled:opacity-30" />).props.className;
	const text_success = (<div className="text-sm text-emerald-800 peer-checked:text-white peer-disabled:opacity-30" />).props.className;
	const text_warning = (<div className="text-sm text-amber-800 peer-checked:text-white peer-disabled:opacity-30" />).props.className;
	const text_danger = (<div className="text-sm text-rose-800 peer-checked:text-white peer-disabled:opacity-30" />).props.className;
	// text (checkbox, radio, switch)
	const text_checkbox = (<div className="text-sm text-slate-800 peer-disabled:opacity-30" />).props.className;

	// box
	const box_default = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600" />
	).props.className;
	const box_primary = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600" />
	).props.className;
	const box_success = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-emerald-400 bg-emerald-100 group-hover:bg-white peer-checked:bg-emerald-500 peer-checked:ring-emerald-700 group-hover:peer-checked:bg-emerald-600" />
	).props.className;
	const box_warning = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-amber-400 bg-amber-100 group-hover:bg-white peer-checked:bg-amber-500 peer-checked:ring-amber-700 group-hover:peer-checked:bg-amber-600" />
	).props.className;
	const box_danger = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-rose-400 bg-rose-100 group-hover:bg-white peer-checked:bg-rose-500 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600 peer-disabled:opacity-30" />
	).props.className;
	// box (input)
	const inputBox_default = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-focus-within:ring-sky-400 group-focus-within:bg-white peer-disabled:opacity-30" />
	).props.className;
	const inputBox_danger = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-focus-within:ring-rose-400 group-focus-within:bg-white peer-disabled:opacity-30" />
	).props.className;
	const inputBox_round = (
		<div className="absolute w-full h-full -z-20 rounded-full ring-1 ring-slate-400 bg-slate-100 group-focus-within:ring-sky-400 group-focus-within:bg-white peer-disabled:opacity-30" />
	).props.className;

	const inputText_default = (<div className="p-1 text-sm text-slate-800 placeholder-slate-400 peer-disabled:opacity-30" />).props.className;

	const box_trans = (<div className="absolute w-full h-full -z-20 rounded bg-black/0 group-hover:bg-black/5" />).props.className;
	const box_checkbox = (
		<div className="mr-2 w-4 h-4 -z-20 rounded-sm ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 peer-disabled:opacity-30" />
	).props.className;
	const box_checkbox_dot = (<div className="absolute text-lg text-white left-[3px] invisible peer-checked:visible peer-disabled:opacity-30" />).props
		.className;
	const box_radio = (
		<div className="mr-2 w-4 h-4 -z-20 rounded-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 peer-disabled:opacity-30" />
	).props.className;
	const box_radio_dot = (
		<div className="absolute w-2 h-2 rounded-full ring-1 ring-slate-400 bg-white left-2 invisible peer-checked:visible peer-disabled:opacity-30" />
	).props.className;
	const box_switch = (
		<div className="mr-2 w-7 h-4 -z-20 rounded-full ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 peer-disabled:opacity-30" />
	).props.className;
	const box_switch_dot = (
		<div className="absolute w-3 h-3 rounded-full ring-1 ring-slate-400 bg-white left-[7px] peer-checked:left-[18px] peer-disabled:opacity-30" />
	).props.className;
	const box_item = (
		<div className="absolute w-full h-full -z-20 ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-l-full group-last:rounded-r-full" />
	).props.className;
	const box_list = (
		<div className="absolute w-full h-full -z-20 ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-t-lg group-last:rounded-b-lg" />
	).props.className;

	const [data, runData] = UseData({
		id: 'koozone',
		password: '123',
		search: '',
		fruite: ['orange', 'banana'],
		color: ['yellow'],
		align: [],
		dog: false,
		cat: true,
		bird: false,
	});
	const [modal, runModal] = UseModal();
	const [sideMenu, runSideMenu] = UseSideMenu();

	const clickButton = (event) => {
		const {name} = event.currentTarget;

		if (name == 'openModal') {
			runModal.open();
		}
		else if (name == 'showSidemenu') {
			runSideMenu.open();
		}
	}

	const changeCheckbox = (event) => {
		const {name, id, checked} = event.currentTarget;

		if (checked) {
			runData.change(name, [...data[name], id]);
		} else {
			runData.change(
				name,
				data[name].filter((item) => item != id)
			);
		}
	};

	const changeRadio = (event) => {
		const {name, id} = event.currentTarget;

		runData.change(name, [id]);
	};

	const changeSwitch = (event) => {
		const {name, checked} = event.currentTarget;

		runData.change(name, checked);
	};

	const chageInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};

	return (
		<>
			<Header />

			<Fieldset title="data">
				<Group>
					{Object.entries(data).map((item, index) => (
						<div key={index}>{`${item[0]} : ${JSON.stringify(item[1])}`}</div>
					))}
				</Group>
			</Fieldset>

			<Fieldset title="icon">
				<Group>
					<I icon="bx-user-plus" deco="text-default" />
					<I icon="bx-leaf" deco="text-default" />
					<I icon="bx-align-middle" deco="text-danger" />
					<I icon="bx-search-alt-2" deco="text-primary" />
				</Group>
			</Fieldset>

			<Fieldset title="text">
				<Group>
					<Text deco="text-primary">lorem story</Text>
					<Text deco="text-default">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <Text deco="text-danger" className="underline"><I icon="bx-leaf" />Aliquam sequi hic sint!</Text> Earum suscipit
						repellat officia quibusdam ipsum nisi optio, <Text deco="text-success">omnis ut saepe,</Text> nihil voluptatibus commodi placeat
						iure fugit explicabo!
					</Text>
				</Group>
			</Fieldset>

			<Fieldset title="label">
				<Group>
					<Label deco="text-primary" text="Start">lorem story</Label>
					<Label deco="label-default text-primary" icon="bx-leaf" text="leaf" />
					<Label deco="text-primary" text="asdas" />
					<Label deco="text-danger" text="Sample" />
				</Group>
			</Fieldset>

			<Fieldset title="basket">
				<Group>
					<CheckboxEx deco="button-default label-default box-primary text-danger" icon="bx-user-plus" text="KOOZone" />
					<CheckboxEx deco="ccc-default box-danger" text="..." checked>
						<BoxEx deco="box-default" />
					</CheckboxEx>
					<CheckboxEx deco="ccc-default" className="w-[200px] h-[50px]">
						<BoxEx deco="box-primary" />
					</CheckboxEx>
					<CheckboxEx deco="ccc-default box-danger" className="w-[100px] h-[30px]" checked>
						{/* <BoxEx deco="box-danger" /> */}
					</CheckboxEx>
				</Group>

				<Group>
					<CheckboxEx deco="ccc-default" checked>
						<BoxEx deco="box-round" />
						<Label deco="text-default" text="3" />
					</CheckboxEx>
					<CheckboxEx deco="ccc-default">
						<BoxEx deco="box-round" />
						<Label deco="text-default" text="134" />
					</CheckboxEx>
					<CheckboxEx deco="ccc-default box-danger" checked>
						{/* <BoxEx deco="box-danger" /> */}
						<Label deco="text-default" text="8798" />
					</CheckboxEx>
					<CheckboxEx deco="ccc-default box-round text-danger" text="234" checked></CheckboxEx>
				</Group>
			</Fieldset>

			<Fieldset title="a">
				<Group>
					<A href="/view/sample" className={a_default}>
						<I icon="bx-user-plus" className={icon_default} />
					</A>
					<A href="/view/room" className={a_default}>
						<I icon="bx-search-alt-2" className={icon_primary} />
					</A>
					<A href="http://www.naver.com" className={a_default}>
						naver
					</A>
					<A href="http://www.naver.com">
						<Label className={a_default}>naver</Label>
					</A>
					<A href="http://www.naver.com" className="px-1 py-0">
						<BoxEx className={box_warning} />
						<Label className={a_default}>naver</Label>
					</A>
				</Group>
			</Fieldset>

			<Fieldset title="button">
				<Group>
					<ButtonEx deco="button-default box-primary">
						{/* <Box deco="box-primary" /> */}
						<Label deco="text-primary" className="text-xl">
							BG
						</Label>
						<I deco="text-primary" icon="bxs-chevron-left" />
						<Label deco="text-danger">Sample</Label>
					</ButtonEx>
					<ButtonEx deco="button-default box-danger text-danger">asdfasd</ButtonEx>
					<ButtonEx deco="button-default label-default box-primary text-danger" icon="bx-user-plus" text="KOOZone" />
					<ButtonEx deco="button-default box-primary text-danger" icon="bx-user-plus" iconR="bxs-chevron-right" text="...">
						<I deco="text-primary" icon="bxs-chevron-left" />
						<Text deco="text-primary">asdas</Text>
					</ButtonEx>
					<ButtonEx deco="button-default box-danger" checked>
						{/* <Box deco="box-danger" /> */}
						<Text deco="text-danger">Sample</Text>
					</ButtonEx>
				</Group>

				<Group>
					<ButtonEx className="p-1">
						<BoxEx deco="box-default" />
						<Label deco="text-default" text="Default" />
					</ButtonEx>
					<ButtonEx className="p-1">
						<BoxEx deco="box-primary" />
						<Label deco="text-primary" text="Primary" />
					</ButtonEx>
					<ButtonEx className="p-1">
						<BoxEx deco="box-success" />
						<Label deco="text-success" text="Success" />
					</ButtonEx>
					<ButtonEx className="p-1">
						<BoxEx deco="box-warning" />
						<Label deco="text-warning" text="Warning" />
					</ButtonEx>
					<ButtonEx className="p-1" disabled>
						<BoxEx deco="box-danger" />
						<Label deco="text-danger" text="Danger" />
					</ButtonEx>
					<ButtonEx className="p-1" name="openModal" onClick={clickButton}>
						<BoxEx deco="box-default" />
						<Label deco="text-default" text="open modal" />
					</ButtonEx>
				</Group>

				<Group>
					<ButtonEx className="p-1" checked>
						<BoxEx deco="box-default" />
						<Label deco="text-default" text="Default" />
					</ButtonEx>
					<ButtonEx className="p-1" checked>
						<BoxEx deco="box-primary" />
						<Label deco="text-primary" text="Primary" />
					</ButtonEx>
					<ButtonEx className="p-1" checked>
						<BoxEx deco="box-success" />
						<Label deco="text-success" text="Success" />
					</ButtonEx>
					<ButtonEx className="p-1" checked>
						<BoxEx deco="box-warning" />
						<Label deco="text-warning" text="Warning" />
					</ButtonEx>
					<ButtonEx className="p-1" checked>
						<BoxEx deco="box-danger" />
						<Label deco="text-danger" text="Danger" />
					</ButtonEx>
					<ButtonEx className="p-1" name="showSidemenu" onClick={clickButton} checked>
						<BoxEx deco="box-default" />
						<Label deco="text-default" text="show sidemonu" />
					</ButtonEx>
				</Group>

				<Group>
					<ul className="flex items-center divide-x divide-black/20 list-none">
						<li className="px-4 first:pl-0 last:pr-0">
							<ButtonEx className="p-1">
								<Box deco="box-trans" />
								<I icon="bx-user-plus" deco="text-default" />
								<Label deco="text-default" text="Share" />
							</ButtonEx>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<ButtonEx className="p-1">
								<Box deco="box-trans" />
								<I icon="bx-trash" deco="text-default" />
								<Label deco="text-default" text="Delete" />
							</ButtonEx>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<ButtonEx className="p-1">
								<Box deco="box-trans" />
								<I icon="bx-edit-alt" deco="text-default" />
								<Label deco="text-default" text="Rename" />
							</ButtonEx>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<ButtonEx className="p-1">
								<Box deco="box-trans" />
								<I icon="bx-file" deco="text-default" />
								<Label deco="text-default" text="Move" />
							</ButtonEx>
						</li>
					</ul>
				</Group>
			</Fieldset>

			<Fieldset title="toggle">
				<Group>
					<Checkbox className="p-1">
						<BoxEx deco="box-default" />
						<Text deco="text-default">Default</Text>
					</Checkbox>
					<Checkbox className="p-1">
						<BoxEx deco="box-primary" />
						<Text deco="text-primary">Primary</Text>
					</Checkbox>
					<Checkbox className="p-1 ">
						<BoxEx deco="box-primary" />
						<I icon="bx-leaf" deco="text-default" />
						{/* <Text deco="text-primary">Primary</Text> */}
					</Checkbox>
					<Checkbox className="p-1">
						<BoxEx deco="box-primary" />
						<I icon="bx-leaf" deco="text-danger" />
						<Text deco="text-primary">다음단계</Text>
					</Checkbox>
					<Checkbox className="p-1">
						<BoxEx deco="box-success" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-success">다음단계</Text>
						<I icon="bxs-chevron-right" deco="text-success" />
					</Checkbox>
					<Checkbox className="p-1">
						<BoxEx deco="box-danger" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-danger">다음단계</Text>
						<I icon="bxs-chevron-right" deco="text-danger" />
					</Checkbox>
				</Group>
			</Fieldset>

			<Fieldset title="button group">
				<Group>
					<Text deco="text-danger">align : </Text>
					<span>
						<Checkbox className="p-1" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
							<BoxEx deco="box-item" />
							<I icon="bx-align-left" deco="text-default" />
							<Text deco="text-default">Left</Text>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
							<BoxEx deco="box-item" />
							<I icon="bx-align-middle" deco="text-default" />
							<Text deco="text-default">Middle</Text>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
							<BoxEx deco="box-item" />
							<I icon="bx-align-right" deco="text-default" />
							<Text deco="text-default">Right</Text>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
							<BoxEx deco="box-item" />
							<I icon="bx-align-justify" deco="text-default" />
							<Text deco="text-default">Justify</Text>
						</Checkbox>
					</span>
				</Group>
			</Fieldset>

			<Fieldset title="checkbox">
				<Group>
					<Checkbox className="p-1">
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Label className={text_checkbox}>Checkbox</Label>
					</Checkbox>
					<Checkbox className="p-1" checked>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>Checked Checkbox</Label>
					</Checkbox>
					<Checkbox className="p-1" disabled>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>Disabled Checkbox</Label>
					</Checkbox>
					<Checkbox className="p-1" checked disabled>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>Disabled Checked Checkbox</Label>
					</Checkbox>
				</Group>

				<Group>
					<Text deco="text-danger">fruite : </Text>
					<Checkbox className="p-1" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>banana</Label>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>apple</Label>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>orange</Label>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
						<Box className={box_checkbox} />
						<I icon="bxs-chevron-down" className={box_checkbox_dot} />
						<Label className={text_checkbox}>melon</Label>
					</Checkbox>
				</Group>

				<Group>
					<Text deco="text-danger">fruite : </Text>
					<Checkbox className="p-1" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_success}>banana</Label>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_success}>apple</Label>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_success}>orange</Label>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_success}>melon</Label>
					</Checkbox>
				</Group>
			</Fieldset>

			<Fieldset title="radio">
				<Group>
					<Radio className="p-1">
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Label className={text_checkbox}>Radio</Label>
					</Radio>
					<Radio className="p-1" checked>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>Checked Radio</Label>
					</Radio>
					<Radio className="p-1" disabled>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>Disabled Radio</Label>
					</Radio>
					<Radio className="p-1" checked disabled>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>Disabled Checked Radio</Label>
					</Radio>
				</Group>

				<Group>
					<Text deco="text-danger">color : </Text>
					<Checkbox className="p-1" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>red</Label>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>blue</Label>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>yellow</Label>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
						<Box className={box_radio} />
						<Box className={box_radio_dot} />
						<Label className={text_checkbox}>green</Label>
					</Checkbox>
				</Group>

				<Group>
					<Text deco="text-success">color : </Text>
					<Checkbox className="p-1" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_warning}>red</Label>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_warning}>blue</Label>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_warning}>yellow</Label>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Label className={text_warning}>green</Label>
					</Checkbox>
				</Group>
			</Fieldset>

			<Fieldset title="switch">
				<Group>
					<Checkbox className="p-1">
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Label className={text_checkbox}>Switch</Label>
					</Checkbox>
					<Checkbox className="p-1" checked>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Label className={text_checkbox}>Checked Switch</Label>
					</Checkbox>
					<Checkbox className="p-1" disabled>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Label className={text_checkbox}>Disabled Switch</Label>
					</Checkbox>
					<Checkbox className="p-1" checked disabled>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Label className={text_checkbox}>Disabled Checked Switch</Label>
					</Checkbox>
				</Group>

				<Group>
					<Text deco="text-danger">animal : </Text>
					<Checkbox className="p-1" name="dog" checked={data.dog} onChange={changeSwitch}>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Label className={text_checkbox}>dog</Label>
					</Checkbox>
					<Checkbox className="p-1" name="cat" checked={data.cat} onChange={changeSwitch}>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Label className={text_checkbox}>cat</Label>
					</Checkbox>
					<Checkbox className="p-1" name="bird" checked={data.bird} onChange={changeSwitch}>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Label className={text_checkbox}>bird</Label>
					</Checkbox>
				</Group>
			</Fieldset>

			<Fieldset title="input">
				<Group>
					<Text deco="text-danger">id : </Text>
					<Input type="text" className={inputText_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput}>
						<Box className={inputBox_default} />
						{/* <I icon="bx-user" className={icon_primary} /> */}
					</Input>
					<Input type="text" className={inputText_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput} disabled>
						<Box className={inputBox_default} />
						{/* <I icon="bx-user" className={icon_primary} /> */}
					</Input>
					<InputEx type="text" deco="input-default box-input-round type2-default" name="id" value={data.id} placeholder="id 입력" onChange={chageInput}>
						{/* <Box className={inputBox_round} /> */}
						{/* <I icon="bx-search-alt-2" deco="text-primary" /> */}
					</InputEx>
				</Group>

				<Group>
					<Text deco="text-danger">password : </Text>
					<Input
						type="password"
						className={inputText_default}
						name="password"
						value={data.password}
						placeholder="password 입력"
						onChange={chageInput}
					>
						<Box className={inputBox_danger} />
						<I icon="bx-key" className={icon_danger} />
					</Input>
					<Input
						type="text"
						className={inputText_default}
						name="password"
						value={data.password}
						placeholder="password 입력"
						onChange={chageInput}
						disabled
					>
						<Box className={inputBox_danger} />
						<I icon="bx-key" className={icon_danger} />
					</Input>
				</Group>

				<Group>
					<Text deco="text-danger">search : </Text>
					<Input type="text" className={inputText_default} name="search" value={data.search} placeholder="search 입력" onChange={chageInput}>
						<Box className={inputBox_round} />
						<I icon="bx-search-alt-2" className={icon_primary} />
					</Input>
					<Input type="text" className={inputText_default} name="search" value={data.search} placeholder="search 입력" onChange={chageInput} disabled>
						<Box className={inputBox_round} />
						<I icon="bx-search-alt-2" className={icon_primary} />
					</Input>
					<InputEx type="text" deco="input-default box-input-round type2-default" className="w-[100px]" name="search" value={data.search} placeholder="search 입력" onChange={chageInput}>
						{/* <Box className={inputBox_round} /> */}
						<I icon="bx-search-alt-2" deco="text-primary" />
					</InputEx>
				</Group>
			</Fieldset>

			<Fieldset title="list group">
				<Group>
					{/* <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
						<li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">An item</li>
						<li class="px-6 py-2 border-b border-gray-200 w-full">A second item</li>
						<li class="px-6 py-2 border-b border-gray-200 w-full">A third item</li>
						<li class="px-6 py-2 border-b border-gray-200 w-full">A fourth item</li>
						<li class="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
					</ul> */}
					<span>
						<Checkbox className="p-1" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-left" className={icon_default} />
							<Label className={text_default}>Left</Label>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-middle" className={icon_default} />
							<Label className={text_default}>Middle</Label>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-right" className={icon_default} />
							<Label className={text_default}>Right</Label>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-justify" className={icon_default} />
							<Label className={text_default}>Justify</Label>
						</Checkbox>
					</span>
				</Group>
			</Fieldset>
		</>
	);
}
