import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Text, Checkbox, Radio, Box} from '../component/ui_ds';
import { UseData } from '../hook/useData';
import { UseModal } from '../hook/useModal';

export default function code() {
	// const css_i = (<div className="p-2 ring-2 ring-white rounded-full text-xl text-blue-500 bg-yellow-500 group-hover:text-white peer-checked:text-red-500" />)
	// 	.props.className;
	// const css_text = (<div className="text-xs text-purple-500 group-hover:text-white peer-checked:text-blue-500" />).props.className;
	const text_icon = (<div className="mr-2 text-lg text-black/50 peer-checked:text-white last:mr-0 peer-disabled:opacity-30" />).props.className;
	const text_checkbox = (<div className="text-sm text-slate-800 peer-disabled:opacity-30" />).props.className;
	const text_default = (<div className="text-sm text-slate-800 peer-checked:text-white" />).props.className;
	const text_primary = (<div className="text-sm text-sky-800 peer-checked:text-white" />).props.className;
	const text_success = (<div className="text-sm text-emerald-800 peer-checked:text-white" />).props.className;
	const text_warning = (<div className="text-sm text-amber-800 peer-checked:text-white" />).props.className;
	const text_danger = (<div className="text-sm text-rose-800 peer-checked:text-white" />).props.className;
	// const css_box = (<div className="absolute bg-teal-200 w-full h-full -z-10 rounded group-hover:bg-black/50 peer-checked:bg-slate-400" />).props.className;
	const box_trans = (<div className="absolute w-full h-full -z-20 rounded bg-black/0 group-hover:bg-black/5" />).props.className;
	const box_input_dot = (
		<div className="mr-2 text-lg text-black/50 group-focus-within:text-sky-400 peer-disabled:opacity-30" />
	).props.className;
	const box_checkbox = (
		<div className="mr-2 w-4 h-4 -z-20 rounded-sm ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 peer-disabled:opacity-30" />
	).props.className;
	const box_checkbox_dot = (
		<div className="absolute text-lg text-white left-[3px] invisible peer-checked:visible peer-disabled:opacity-30" />
	).props.className;
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
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-rose-400 bg-rose-100 group-hover:bg-white peer-checked:bg-rose-500 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600" />
	).props.className;
	const input_default = (
		<div className="p-1 text-sm pl-8 text-slate-800 bg-slate-100 ring-1 ring-slate-400 focus:ring-sky-400 focus:bg-white focus:outline-none placeholder-slate-400 disabled:opacity-30" />
	).props.className;
	const inputBox_default = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-focus-within:ring-sky-400 group-focus-within:bg-white peer-disabled:opacity-30" />
	).props.className;
	const inputBox_danger = (
		<div className="absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-focus-within:ring-rose-400 group-focus-within:bg-white peer-disabled:opacity-30" />
	).props.className;
	const inputText_default = (
		<div className="p-1 text-sm text-slate-800 placeholder-slate-400 peer-disabled:opacity-30" />
	).props.className;
	// const css_on = (<div className="absolute left-0 text-white text-3xl visible peer-checked:invisible" />).props.className;
	// const css_off = (<div className="absolute left-0 text-white text-3xl invisible peer-checked:visible" />).props.className;

	const [data, runData] = UseData({
		id: 'koozone',
		password: '123',
		fruite: ['orange', 'banana'],
		color: ['yellow'],
		align: [],
	});
	const [modal, runModal] = UseModal();

	const changeCheckbox = (event) => {
		const {name, id:value} = event.currentTarget;

		if (data[name].includes(value)) {
			runData.change(name, data[name].filter((item) => item != value));
		} else {
			runData.change(name, [...data[name], value]);
		}
	};

	const changeRadio = (event) => {
		const {name, id:value} = event.currentTarget;

		runData.change(name, [value]);
	};

	const chageInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};

	const clickButton = (event) => {};

	return (
		<>
			<Header />

			<div className="p-3 space-y-2">
				{Object.entries(data).map((item, index) => <div key={index}>{`${item[0]} : ${JSON.stringify(item[1])}`}</div>)}
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Button className="p-1">
					<Box className={box_default} />
					<Text className={text_default}>Default</Text>
				</Button>
				<Button className="p-1">
					<Box className={box_primary} />
					<Text className={text_primary}>Primary</Text>
				</Button>
				<Button className="p-1">
					<Box className={box_success} />
					<Text className={text_success}>Success</Text>
				</Button>
				<Button className="p-1">
					<Box className={box_warning} />
					<Text className={text_warning}>Warning</Text>
				</Button>
				<Button className="p-1">
					<Box className={box_danger} />
					<Text className={text_danger}>Danger</Text>
				</Button>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Button className="p-1" checked>
					<Box className={box_default} />
					<Text className={text_default}>Default</Text>
				</Button>
				<Button className="p-1" checked>
					<Box className={box_primary} />
					<Text className={text_primary}>Primary</Text>
				</Button>
				<Button className="p-1" checked>
					<Box className={box_success} />
					<Text className={text_success}>Success</Text>
				</Button>
				<Button className="p-1" checked>
					<Box className={box_warning} />
					<Text className={text_warning}>Warning</Text>
				</Button>
				<Button className="p-1" checked>
					<Box className={box_danger} />
					<Text className={text_danger}>Danger</Text>
				</Button>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<ul className="flex items-center divide-x divide-black/20 list-none">
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" >
							<Box className={box_trans} />
							<I icon="bx-user-plus" className={text_icon} />
							<Text className={text_default}>Share</Text>
						</Button>
					</li>
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" >
							<Box className={box_trans} />
							<I icon="bx-trash" className={text_icon} />
							<Text className={text_default}>Delete</Text>
						</Button>
					</li>
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" >
							<Box className={box_trans} />
							<I icon="bx-edit-alt" className={text_icon} />
							<Text className={text_default}>Rename</Text>
						</Button>
					</li>
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" >
							<Box className={box_trans} />
							<I icon="bx-file" className={text_icon} />
							<Text className={text_default}>Move</Text>
						</Button>
					</li>
				</ul>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Checkbox className="p-1">
					<Box className={box_default} />
					<Text className={text_default}>Default</Text>
				</Checkbox>
				<Checkbox className="p-1">
					<Box className={box_primary} />
					<Text className={text_primary}>Primary</Text>
				</Checkbox>
				<Checkbox className="p-1 ">
					<Box className={box_primary} />
					<I icon="bx-leaf" className={text_icon} />
					{/* <Text className={text_primary}>Primary</Text> */}
				</Checkbox>
				<Checkbox className="p-1">
					<Box className={box_primary} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_primary}>다음단계</Text>
				</Checkbox>
				<Checkbox className="p-1">
					<Box className={box_success} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_success}>다음단계</Text>
					<I icon="bxs-chevron-right" className={text_success} />
				</Checkbox>
				<Checkbox className="p-1">
					<Box className={box_danger} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_danger}>다음단계</Text>
					<I icon="bxs-chevron-right" className={text_danger} />
				</Checkbox>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Checkbox className="p-1">
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					{/* <I icon="bxs-checkbox" className={css_on} />
					<I icon="bx-checkbox-checked" className={css_off} /> */}
					<Text className={text_checkbox}>Checkbox</Text>
				</Checkbox>
				<Checkbox className="p-1" checked>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>Checked Checkbox</Text>
				</Checkbox>
				<Checkbox className="p-1" disabled>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>Disabled Checkbox</Text>
				</Checkbox>
				<Checkbox className="p-1" checked disabled>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>Disabled Checked Checkbox</Text>
				</Checkbox>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_danger}>fruite : </Text>
				<Checkbox className="p-1" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>banana</Text>
				</Checkbox>
				<Checkbox className="p-1" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>apple</Text>
				</Checkbox>
				<Checkbox className="p-1" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>orange</Text>
				</Checkbox>
				<Checkbox className="p-1" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
					<Box className={box_checkbox} />
					<I icon="bxs-chevron-down" className={box_checkbox_dot} />
					<Text className={text_checkbox}>melon</Text>
				</Checkbox>
			</div>
			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_danger}>fruite : </Text>
				<Checkbox className="p-1" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
					<Box className={box_success} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_success}>banana</Text>
				</Checkbox>
				<Checkbox className="p-1" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
					<Box className={box_success} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_success}>apple</Text>
				</Checkbox>
				<Checkbox className="p-1" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
					<Box className={box_success} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_success}>orange</Text>
				</Checkbox>
				<Checkbox className="p-1" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
					<Box className={box_success} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_success}>melon</Text>
				</Checkbox>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Radio className="p-1">
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					{/* <I icon="bxs-checkbox" className={css_on} />
					<I icon="bx-checkbox-checked" className={css_off} /> */}
					<Text className={text_checkbox}>Radio</Text>
				</Radio>
				<Radio className="p-1" checked>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>Checked Radio</Text>
				</Radio>
				<Radio className="p-1" disabled>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>Disabled Radio</Text>
				</Radio>
				<Radio className="p-1" checked disabled>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>Disabled Checked Radio</Text>
				</Radio>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_danger}>color : </Text>
				<Checkbox className="p-1" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>red</Text>
				</Checkbox>
				<Checkbox className="p-1" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>blue</Text>
				</Checkbox>
				<Checkbox className="p-1" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>yellow</Text>
				</Checkbox>
				<Checkbox className="p-1" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
					<Box className={box_radio} />
					<Box className={box_radio_dot} />
					<Text className={text_checkbox}>green</Text>
				</Checkbox>
			</div>
			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_warning}>color : </Text>
				<Checkbox className="p-1" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
					<Box className={box_warning} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_warning}>red</Text>
				</Checkbox>
				<Checkbox className="p-1" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
					<Box className={box_warning} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_warning}>blue</Text>
				</Checkbox>
				<Checkbox className="p-1" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
					<Box className={box_warning} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_warning}>yellow</Text>
				</Checkbox>
				<Checkbox className="p-1" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
					<Box className={box_warning} />
					<I icon="bx-leaf" className={text_icon} />
					<Text className={text_warning}>green</Text>
				</Checkbox>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_danger}>align : </Text>
				<span>
					<Checkbox className="p-1" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
						<Box className={box_item} />
						<I icon="bx-align-left" className={text_icon} />
						<Text className={text_default}>Left</Text>
					</Checkbox>
					<Checkbox className="p-1" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
						<Box className={box_item} />
						<I icon="bx-align-middle" className={text_icon} />
						<Text className={text_default}>Middle</Text>
					</Checkbox>
					<Checkbox className="p-1" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
						<Box className={box_item} />
						<I icon="bx-align-right" className={text_icon} />
						<Text className={text_default}>Right</Text>
					</Checkbox>
					<Checkbox className="p-1" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
						<Box className={box_item} />
						<I icon="bx-align-justify" className={text_icon} />
						<Text className={text_default}>Justify</Text>
					</Checkbox>
				</span>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Checkbox className="p-1">
					<Box className={box_switch} />
					<Box className={box_switch_dot} />
					{/* <I icon="bxs-checkbox" className={css_on} />
					<I icon="bx-checkbox-checked" className={css_off} /> */}
					<Text className={text_checkbox}>Switch</Text>
				</Checkbox>
				<Checkbox className="p-1" checked>
					<Box className={box_switch} />
					<Box className={box_switch_dot} />
					<Text className={text_checkbox}>Checked Switch</Text>
				</Checkbox>
				<Checkbox className="p-1" disabled>
					<Box className={box_switch} />
					<Box className={box_switch_dot} />
					<Text className={text_checkbox}>Disabled Switch</Text>
				</Checkbox>
				<Checkbox className="p-1" checked disabled>
					<Box className={box_switch} />
					<Box className={box_switch_dot} />
					<Text className={text_checkbox}>Disabled Checked Switch</Text>
				</Checkbox>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_danger}>id : </Text>
				<Input type="text" className={inputText_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput}>
					<Box className={inputBox_default} />
					<I icon="bx-user" className={box_input_dot} />
				</Input>
				<Input type="text" className={inputText_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput} disabled>
					<Box className={inputBox_default} />
					<I icon="bx-user" className={box_input_dot} />
				</Input>
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<Text className={text_danger}>password : </Text>
				<Input type="password" className={inputText_default} name="password" id="pw" value={data.password} placeholder="password 입력" onChange={chageInput}>
					<Box className={inputBox_danger} />
					<I icon="bx-key" className={box_input_dot} />
				</Input>
				<Input type="password" className={inputText_default} name="password" id="pw2" value={data.password} placeholder="password 입력" onChange={chageInput} disabled>
					<Box className={inputBox_default} />
					<I icon="bx-key" className={box_input_dot} />
				</Input>
			</div>
		</>
	);
}
