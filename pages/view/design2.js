import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Text, Checkbox, Checkbox222, Radio, Box} from '../component/ui_ds2';
import { UseData } from '../hook/useData';
import { UseModal } from '../hook/useModal';
import { UseSideMenu } from '../hook/useSideMenu';

const Fieldset = ({children, title}) => {
	return (
		<fieldset className="m-3 p-3 space-y-2 border-[1px] border-slate-500 rounded-lg">
			<legend>
				<span className="p-2">{title}</span>
			</legend>
			{children}
		</fieldset>
	);
}
const Group = ({children}) => {
	return (
		<div className="space-x-2">
			{children}
		</div>
	);
}

export default function code() {
	// const a_default = (<div className="text-xs underline decoration-transparent text-blue-500/80 hover:text-blue-500 hover:decoration-inherit peer-checked:text-white" />).props.className;
	const a_default = (<div className="underline decoration-transparent hover:decoration-inherit" />).props.className;


	// icon (button)
	const icon_default = (
		<div className="mr-2 text-lg text-black/50 peer-checked:text-white peer-disabled:opacity-30" />
	).props.className;
	// icon (input)
	const icon_primary = (
		<div className="mr-2 last:mr-0 text-lg text-black/50 group-hover:text-sky-800 group-focus-within:text-sky-400 peer-disabled:opacity-30" />
	).props.className;
	const icon_danger = (
		<div className="mr-2 last:mr-0 text-lg text-black/50 group-hover:text-rose-800 group-focus-within:text-rose-400 peer-disabled:opacity-30" />
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


	const inputText_default = (
		<div className="p-1 text-sm text-slate-800 placeholder-slate-400 peer-disabled:opacity-30" />
	).props.className;

	const box_trans = (<div className="absolute w-full h-full -z-20 rounded bg-black/0 group-hover:bg-black/5" />).props.className;
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

	const changeCheckbox = (event) => {
		const {name, id, checked} = event.currentTarget;

		if (checked) {
			runData.change(name, [...data[name], id]);
		} else {
			runData.change(name, data[name].filter((item) => item != id));
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
					{Object.entries(data).map((item, index) => <div key={index}>{`${item[0]} : ${JSON.stringify(item[1])}`}</div>)}
				</Group>
			</Fieldset>

			<Fieldset title="icon">
				<Group>
					<I icon="bx-user-plus" className={icon_default} />
					<I icon="bx-leaf" className={icon_default} />
					<I icon="bx-align-middle" className={icon_default} />
					<I icon="bx-search-alt-2" className={icon_primary} />
				</Group>
			</Fieldset>

			<Fieldset title="text">
				<Group>
					<Text className={text_primary}>lorem story</Text>
					<Text className={text_default}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Text className={text_danger}>Aliquam sequi hic sint!</Text> Earum suscipit repellat officia quibusdam ipsum nisi optio, <Text className={text_warning}>omnis ut saepe,</Text> nihil voluptatibus commodi placeat iure fugit explicabo!</Text>
				</Group>
			</Fieldset>

			<Fieldset title="box">
				<Group>
					<div className='inline-block w-[100px] h-[30px] relative'>
						<Box className={box_default} />
					</div>
					<div className='inline-block w-[100px] h-[30px] relative'>
						<Box className={box_success} />
					</div>
					<div className='inline-block w-[100px] h-[30px] relative'>
						<Box className={box_danger} />
					</div>
				</Group>
			</Fieldset>

			<Fieldset title="badge">
				<Group>
					<Button className='inline-flex justify-center items-center p-1 h-4 relative' checked>
						<Box className={box_success} />
						<Text className={text_default}>3</Text>
					</Button>
					<Button className='inline-flex justify-center items-center p-1 h-4 relative' checked>
						<Box className={box_success} />
						<Text className={text_default}>134</Text>
					</Button>
					<Button className='inline-flex justify-center items-center p-1 h-4 relative' checked>
						<Box className={box_danger} />
						<Text className={text_default}>8798</Text>
					</Button>
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
						<Text className={a_default}>naver</Text>
					</A>
					<A href="http://www.naver.com" className="px-1 py-0">
						<Box className={box_warning} />
						<Text className={a_default}>naver</Text>
					</A>
				</Group>
			</Fieldset>

			<Fieldset title="button">
				<Group>
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
					<Button className="p-1" disabled>
						<Box className={box_danger} />
						<Text className={text_danger}>Danger</Text>
					</Button>
					<Button className="p-1" onClick={() => {runModal.open();}}>
						<Box className={box_default} />
						<Text className={text_default}>open modal</Text>
					</Button>
				</Group>
			
				<Group>
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
					<Button className="p-1" onClick={() => {runSideMenu.open();}} checked>
						<Box className={box_default} />
						<Text className={text_default}>show sidemonu</Text>
					</Button>
				</Group>
			
				<Group>
					<ul className="flex items-center divide-x divide-black/20 list-none">
						<li className="px-4 first:pl-0 last:pr-0">
							<Button className="p-1" >
								<Box className={box_trans} />
								<I icon="bx-user-plus" className={icon_default} />
								<Text className={text_default}>Share</Text>
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button className="p-1" >
								<Box className={box_trans} />
								<I icon="bx-trash" className={icon_default} />
								<Text className={text_default}>Delete</Text>
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button className="p-1" >
								<Box className={box_trans} />
								<I icon="bx-edit-alt" className={icon_default} />
								<Text className={text_default}>Rename</Text>
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button className="p-1" >
								<Box className={box_trans} />
								<I icon="bx-file" className={icon_default} />
								<Text className={text_default}>Move</Text>
							</Button>
						</li>
					</ul>
				</Group>

				<Group>
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
						<I icon="bx-leaf" className={icon_default} />
						{/* <Text className={text_primary}>Primary</Text> */}
					</Checkbox>
					<Checkbox className="p-1">
						<Box className={box_primary} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_primary}>다음단계</Text>
					</Checkbox>
					<Checkbox className="p-1">
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_success}>다음단계</Text>
						<I icon="bxs-chevron-right" className={text_success} />
					</Checkbox>
					<Checkbox className="p-1">
						<Box className={box_danger} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_danger}>다음단계</Text>
						<I icon="bxs-chevron-right" className={text_danger} />
					</Checkbox>
				</Group>
			</Fieldset>

			<Fieldset title="button group">
				<Group>
					<Text className={text_danger}>align : </Text>
					<span>
						<Checkbox className="p-1" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
							<Box className={box_item} />
							<I icon="bx-align-left" className={icon_default} />
							<Text className={text_default}>Left</Text>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
							<Box className={box_item} />
							<I icon="bx-align-middle" className={icon_default} />
							<Text className={text_default}>Middle</Text>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
							<Box className={box_item} />
							<I icon="bx-align-right" className={icon_default} />
							<Text className={text_default}>Right</Text>
						</Checkbox>
						<Checkbox className="p-1" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
							<Box className={box_item} />
							<I icon="bx-align-justify" className={icon_default} />
							<Text className={text_default}>Justify</Text>
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
				</Group>

				<Group>
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
				</Group>
				
				<Group>
					<Text className={text_danger}>fruite : </Text>
					<Checkbox className="p-1" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_success}>banana</Text>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_success}>apple</Text>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_success}>orange</Text>
					</Checkbox>
					<Checkbox className="p-1" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
						<Box className={box_success} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_success}>melon</Text>
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
				</Group>

				<Group>
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
				</Group>

				<Group>
					<Text className={text_warning}>color : </Text>
					<Checkbox className="p-1" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_warning}>red</Text>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_warning}>blue</Text>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_warning}>yellow</Text>
					</Checkbox>
					<Checkbox className="p-1" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
						<Box className={box_warning} />
						<I icon="bx-leaf" className={icon_default} />
						<Text className={text_warning}>green</Text>
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
				</Group>

				<Group>
					<Text className={text_danger}>animal : </Text>
					<Checkbox className="p-1" name="dog" checked={data.dog} onChange={changeSwitch}>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Text className={text_checkbox}>dog</Text>
					</Checkbox>
					<Checkbox className="p-1" name="cat" checked={data.cat} onChange={changeSwitch}>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Text className={text_checkbox}>cat</Text>
					</Checkbox>
					<Checkbox className="p-1" name="bird" checked={data.bird} onChange={changeSwitch}>
						<Box className={box_switch} />
						<Box className={box_switch_dot} />
						<Text className={text_checkbox}>bird</Text>
					</Checkbox>
				</Group>
			</Fieldset>

			<Fieldset title="input">
				<Group>
					<Text className={text_danger}>id : </Text>
					<Input type="text" className={inputText_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput}>
						<Box className={inputBox_default} />
						{/* <I icon="bx-user" className={icon_primary} /> */}
					</Input>
					<Input type="text" className={inputText_default} name="id" value={data.id} placeholder="id 입력" onChange={chageInput} disabled>
						<Box className={inputBox_default} />
						{/* <I icon="bx-user" className={icon_primary} /> */}
					</Input>
				</Group>

				<Group>
					<Text className={text_danger}>password : </Text>
					<Input type="password" className={inputText_default} name="password" value={data.password} placeholder="password 입력" onChange={chageInput}>
						<Box className={inputBox_danger} />
						<I icon="bx-key" className={icon_danger} />
					</Input>
					<Input type="text" className={inputText_default} name="password" value={data.password} placeholder="password 입력" onChange={chageInput} disabled>
						<Box className={inputBox_danger} />
						<I icon="bx-key" className={icon_danger} />
					</Input>
				</Group>

				<Group>
					<Text className={text_danger}>search : </Text>
					<Input type="text" className={inputText_default} name="search" value={data.search} placeholder="search 입력" onChange={chageInput}>
						<Box className={inputBox_round} />
						<I icon="bx-search-alt-2" className={icon_primary} />
					</Input>
					<Input type="text" className={inputText_default} name="search" value={data.search} placeholder="search 입력" onChange={chageInput} disabled>
						<Box className={inputBox_round} />
						<I icon="bx-search-alt-2" className={icon_primary} />
					</Input>
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
						<Checkbox222 className="p-1" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-left" className={icon_default} />
							<Text className={text_default}>Left</Text>
						</Checkbox222>
						<Checkbox222 className="p-1" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-middle" className={icon_default} />
							<Text className={text_default}>Middle</Text>
						</Checkbox222>
						<Checkbox222 className="p-1" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-right" className={icon_default} />
							<Text className={text_default}>Right</Text>
						</Checkbox222>
						<Checkbox222 className="p-1" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
							<Box className={box_list} />
							<I icon="bx-align-justify" className={icon_default} />
							<Text className={text_default}>Justify</Text>
						</Checkbox222>
					</span>
				</Group>
			</Fieldset>
		</>
	);
}
