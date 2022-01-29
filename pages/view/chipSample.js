import {Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Text, Toggle} from '../component/ui_ds5';
import {UseData} from '../hook/useData';

export default function ChipSample() {
	const [data, runData] = UseData({
		checked: false,
	});
	const [{typeOut, modeOut, typeOver, modeOver, color, size, space, round, left, right, center, icon, iconR, text}, runChipData] = UseData({
		typeOut: ['G'],
		modeOut: ['1'],
		typeOver: ['L'],
		modeOver: ['1'],
		color: ['primary'],
		size: ['md'],
		space: ['md'],
		round: ['md'],
		left: ['icon'],
		right: ['none'],
		center: ['text'],
		icon: 'bx-leaf',
		iconR: 'bxs-x-circle',
		text: 'Next',
	});

	const changeChipRadio = (event) => {
		const {name} = event.currentTarget;
		const {team} = event.currentTarget.dataset;

		runChipData.change(team, [name]);
	};

	const chageChipInput = (event) => {
		const {name, value} = event.currentTarget;

		runChipData.change(name, value);
	};

	const clickButton = (event) => {
		alert('click button');
	};

	const changeToggle = (event) => {
		// alert('toggle change');
		const {name, checked} = event.currentTarget;

		runData.change('checked', checked);
	};

	return (
		<>
			{/* <Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				{['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2', 'F1', 'F2', 'G1', 'G2'].map((item, index) => (
					<Toggle
						key={index}
						name={item}
						href="/view/sample"
						onClick={() => {
							alert('click');
						}}
						onChange={changeToggle}
						theme={[item, color, size, space, round, underline].join('-')}
						icon={left[0] == 'icon' ? 'bx-leaf' : ''}
						iconR={right[0] == 'icon' ? 'bxs-x-circle' : ''}
						text={center[0] == 'text' ? text : ''}
						// checked={['2', '4', '6', '8'].includes(item)}
						checked={data[item]}
					/>
				))}
			</Group> */}
			<Group className="p-5 ring-2 ring-gray-500 rounded-lg">
				<Text deco="font-success" className="leading-8">
					{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
						<span key={index}>
							Reiciendis consectetur <A theme={[`${item}${modeOut}${typeOver}${modeOver}`, color, 'sm', 'xs', round].join('-')} icon={left[0] == 'icon' ? icon : ''} iconR={right[0] == 'icon' ? iconR : ''} text={text} /> adipisicing cumque?{` `}
						</span>
					))}
				</Text>
			</Group>
			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					<Toggle
						key={index}
						name={`${item}${modeOut}${typeOver}${modeOver}`}
						href="/view/sample"
						onClick={clickButton}
						onChange={changeToggle}
						theme={[`${item}${modeOut}${typeOver}${modeOver}`, color, size, space, round].join('-')}
						icon={left[0] == 'icon' ? icon : ''}
						iconR={right[0] == 'icon' ? iconR : ''}
						text={center[0] == 'text' ? text : ''}
						checked={data.checked}
						disabled={false}
					/>
				))}
			</Group>
			<Group>
				<Text deco="font-danger">typeOut : </Text>
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="typeOut" name={item} checked={typeOut.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">modeOut : </Text>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="modeOut" name={item} checked={modeOut.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">typeOver : </Text>
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="typeOver" name={item} checked={typeOver.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">modeOver : </Text>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="modeOver" name={item} checked={modeOver.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">color : </Text>
				{['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="color" name={item} checked={color.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">size : </Text>
				{['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="size" name={item} checked={size.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">space : </Text>
				{['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="space" name={item} checked={space.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">round : </Text>
				{['xs', 'sm', 'md', 'lg', 'xl', 'full'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="round" name={item} checked={round.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">left : </Text>
				<ToggleRadio text="none" team="left" name="none" checked={left.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="left" name="icon" checked={left.includes('icon')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="icon" value={icon} placeholder="icon 입력" onChange={chageChipInput} disabled={left != 'icon'} />
			</Group>
			<Group>
				<Text deco="font-danger">right : </Text>
				<ToggleRadio text="none" team="right" name="none" checked={right.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="right" name="icon" checked={right.includes('icon')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="iconR" value={iconR} placeholder="iconR 입력" onChange={chageChipInput} disabled={right != 'icon'} />
			</Group>
			<Group>
				<Text deco="font-danger">center : </Text>
				<ToggleRadio text="none" team="center" name="none" checked={center.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="text" team="center" name="text" checked={center.includes('text')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="text" value={text} placeholder="text 입력" onChange={chageChipInput} disabled={center != 'text'}>
					<Icon deco="font-danger">bx-user</Icon>
					<Text deco="font-primary" className="flex-none">
						TEXT :
					</Text>
				</Input>
			</Group>
			<Group>
				<Highlight className="html">
					{`
					<Toggle theme="${[`${typeOut}${modeOut}${typeOver}${modeOver}`, color, size, space, round].join('-')}"${left[0] == 'icon' ? ' icon="bx-leaf"' : ''}${right[0] == 'icon' ? ' iconR="bxs-chevron-right"' : ''}${center[0] == 'text' ? ' text="' + text + '"' : ''} />
					`}
				</Highlight>
			</Group>
		</>
	);
}
