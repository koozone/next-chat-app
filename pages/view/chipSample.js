import {Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Text, Toggle} from '../component/ui_ds5';
import {UseData} from '../hook/useData';

export default function ChipSample() {
	const [{typeOut, modeOut, typeOver, modeOver, color, size, space, round, left, right, center, icon, iconR, text, checked, disabled}, runChipData] = UseData({
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
		checked: ['false'],
		disabled: ['false'],
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
		console.log(`[click button]`);
	};

	const changeToggle = (event) => {
		const {name, checked} = event.currentTarget;
		console.log(`[toggle change]: ${checked}`);

		runChipData.change('checked', [`${checked}`]);
	};

	return (
		<>
			<Group className="p-5 ring-2 ring-gray-500 rounded-lg">
				<Text deco="font-success" className="leading-8">
					{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
						<span key={index}>
							Reiciendis consectetur{' '}
							<A
								theme={[`${item}${modeOut}${typeOver}${modeOver}`, color, 'sm', 'xs', round].join('-')}
								icon={left[0] == 'icon' ? icon : ''}
								iconR={right[0] == 'icon' ? iconR : ''}
								text={center[0] == 'text' ? text : ''}
								checked={checked[0] == 'true'}
								disabled={disabled[0] == 'true'}
							/>{' '}
							adipisicing cumque?{` `}
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
						checked={checked[0] == 'true'}
						disabled={disabled[0] == 'true'}
					/>
				))}
			</Group>
			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Toggle
					name={`${typeOut}${modeOut}${typeOver}${modeOver}`}
					href="/view/sample"
					onClick={clickButton}
					onChange={changeToggle}
					theme={[`${typeOut}${modeOut}${typeOver}${modeOver}`, color, size, space, round].join('-')}
					icon={left[0] == 'icon' ? icon : ''}
					iconR={right[0] == 'icon' ? iconR : ''}
					text={center[0] == 'text' ? text : ''}
					checked={checked[0] == 'true'}
					disabled={disabled[0] == 'true'}
				/>
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
				<Text deco="font-danger">checked : </Text>
				{['false', 'true'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="checked" name={item} checked={checked.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">disabled : </Text>
				{['false', 'true'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="disabled" name={item} checked={disabled.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Highlight className="html">
					{`
					<Toggle theme="${[`${typeOut}${modeOut}${typeOver}${modeOver}`, color, size, space, round].join('-')}"${left[0] == 'icon' ? ' icon="' + icon + '"' : ''}${right[0] == 'icon' ? ' iconR="' + iconR + '"' : ''}${center[0] == 'text' ? ' text="' + text + '"' : ''}${checked[0] == 'true' ? ' checked' : ''}${
						disabled[0] == 'true' ? ' disabled' : ''
					} />
					`}
				</Highlight>
			</Group>
		</>
	);
}
