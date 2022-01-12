import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Text, Checkbox, Checkbox2, Checkbox3, Radio, Radio2, Box} from '../component/ui_ds';
import { UseData } from '../hook/useData';
import { UseModal } from '../hook/useModal';

export default function code() {
	const css_i = (<div className="p-2 ring-2 ring-white rounded-full text-xl text-blue-500 bg-yellow-500 group-hover:text-white peer-checked:text-red-500" />)
		.props.className;
	const css_text = (<div className="text-xs text-purple-500 group-hover:text-white peer-checked:text-blue-500" />).props.className;
	const text_icon = (<div className="mr-2 text-lg text-black/50 peer-checked:text-white last:mr-0" />).props.className;
	const text_checkbox = (<div className="text-sm text-slate-800 peer-disabled:opacity-30" />).props.className;
	const text_default = (<div className="text-sm text-slate-800 peer-checked:text-white" />).props.className;
	const text_primary = (<div className="text-sm text-sky-800 peer-checked:text-white" />).props.className;
	const text_success = (<div className="text-sm text-emerald-800 peer-checked:text-white" />).props.className;
	const text_warning = (<div className="text-sm text-amber-800 peer-checked:text-white" />).props.className;
	const text_danger = (<div className="text-sm text-rose-800 peer-checked:text-white" />).props.className;
	const css_box = (<div className="absolute bg-teal-200 w-full h-full -z-10 rounded group-hover:bg-black/50 peer-checked:bg-slate-400" />).props.className;
	const box_trans = (<div className="absolute w-full h-full -z-20 rounded bg-black/0 group-hover:bg-black/5" />).props.className;
	const box_input_dot = (
		<div className="absolute left-2 top-1/2 -mt-2 text-black/50 group-focus-within:text-blue-500 peer-disabled:opacity-30" />
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
		<div className="px-2 py-1 rounded w-full truncate | text-sm pl-8 text-black/80 bg-white/80 ring-1 ring-black/30 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none placeholder-black/30 disabled:opacity-30" />
	).props.className;
	const css_on = (<div className="absolute left-0 text-white text-3xl visible peer-checked:invisible" />).props.className;
	const css_off = (<div className="absolute left-0 text-white text-3xl invisible peer-checked:visible" />).props.className;

	const [value, runValue] = UseData(['left']);
	const [agreeValue, runAgreeValue] = UseData(true);
	const [data, runData] = UseData({
		id: 'koozone',
		password: '123',
	});
	const [modal, runModal] = UseModal();

	const changeCheckbox = (event) => {
		// const {name, checked} = event.currentTarget;

		// if (checked) {
		// 	runValue.change([...value, name]);
		// } else {
		// 	runValue.change(value.filter((item) => item != name));
		// }
		const {name, checked} = event.currentTarget;

		runValue.change([name]);
	};

	const clickButton = (event) => {};

	const chageInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};	

	return (
		<>
			<Header />

			<div className="p-3 space-x-2 space-y-2">
				I<br />
				<I icon="bx-leaf" className={css_text} />
				<I icon="bx-leaf" className={css_i} />
				<Text icon="bx-leaf" className={css_text}>
					<I icon="bx-leaf" />
					asdfasdf
				</Text>
				<Text icon="bx-leaf" className={css_i}>
					<I icon="bx-leaf" />
					asdfasdf
				</Text>
				<Button>
					<Text icon="bx-leaf" className={css_text}>
						<I icon="bx-leaf" />
						asdfasdf
					</Text>
				</Button>
				<Button>
					<Box icon="bx-leaf" className={css_text}>
						<I icon="bx-leaf" />
						asdfasdf
					</Box>
				</Button>
				<Button>
					<I icon="bx-leaf" className={css_i} />
					<Text icon="bx-leaf">asdfasdf</Text>
				</Button>
				<Checkbox className="p-2 w-[300px] space-x-2">
					<Box className={css_box} />
					<I icon="bx-leaf" className={css_i} />
					<Text className={css_text}>asdfasdf</Text>
				</Checkbox>
				<Checkbox className="p-2 w-[300px] space-x-2">
					<Box className={css_box} />
					<I icon="bxs-checkbox" className={css_on} />
					<I icon="bx-checkbox-checked" className={css_off} />
					<Text className={css_text}>asdfasdf</Text>
					<I icon="bxs-chevron-right" className={css_text} />
				</Checkbox>
				<Checkbox className="p-2 pl-8 space-x-2">
					<I icon="bxs-checkbox" className={css_on} />
					<I icon="bx-checkbox-checked" className={css_off} />
					<Text className={css_text}>asdfasdf</Text>
					<I icon="bxs-chevron-right" className={css_text} />
				</Checkbox>
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
				<div className="">
					<Checkbox className="p-1" name="left" checked={value.includes('left')} onChange={changeCheckbox}>
						<Box className={box_item} />
						<I icon="bx-align-left" className={text_icon} />
						<Text className={text_default}>Left</Text>
					</Checkbox>
					<Checkbox className="p-1" name="middle" checked={value.includes('middle')} onChange={changeCheckbox}>
						<Box className={box_item} />
						<I icon="bx-align-middle" className={text_icon} />
						<Text className={text_default}>Middle</Text>
					</Checkbox>
					<Checkbox className="p-1" name="right" checked={value.includes('right')} onChange={changeCheckbox}>
						<Box className={box_item} />
						<I icon="bx-align-right" className={text_icon} />
						<Text className={text_default}>Right</Text>
					</Checkbox>
					<Checkbox className="p-1" name="justify" checked={value.includes('justify')} onChange={changeCheckbox}>
						<Box className={box_item} />
						<I icon="bx-align-justify" className={text_icon} />
						<Text className={text_default}>Justify</Text>
					</Checkbox>
				</div>

				{JSON.stringify(value)}
			</div>

			<div className="p-3 space-x-2 space-y-2">
				<ul className="flex items-center divide-x divide-black/20 list-none">
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" name="share" checked={value.includes('share')} onClick={clickButton}>
							<Box className={box_trans} />
							<I icon="bx-user-plus" className={text_icon} />
							<Text className={text_default}>Share</Text>
						</Button>
					</li>
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" name="delete" checked={value.includes('delete')} onClick={clickButton}>
							<Box className={box_trans} />
							<I icon="bx-trash" className={text_icon} />
							<Text className={text_default}>Delete</Text>
						</Button>
					</li>
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" name="rename" checked={value.includes('rename')} onClick={clickButton}>
							<Box className={box_trans} />
							<I icon="bx-edit-alt" className={text_icon} />
							<Text className={text_default}>Rename</Text>
						</Button>
					</li>
					<li className="px-4 first:pl-0 last:pr-0">
						<Button className="p-1" name="move" checked={value.includes('move')} onClick={clickButton}>
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
				{/* <Input
					type="text"
					deco="in-1"
					value={data.id}
					name="id"
					icon="bx-user"
					placeholder="id 입력"
					onChange={onChageInput}
					className="w-[150px]"
					ref={idInput}
				/> */}
				<Input type="text" className={input_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput}>
					<I icon="bx-leaf" className={box_input_dot} />
				</Input>
				<Input type="text" className={input_default} value={data.id} placeholder="id 입력" disabled>
					<I icon="bx-leaf" className={box_input_dot} />
				</Input>
			</div>
		</>
	);
}
