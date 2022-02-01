import {Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Label, Text, Toggle} from '../component/ui_ds5';
import {UseData} from '../hook/useData';

export default function ChipSample() {
	const [chipData, runChipData] = UseData({
		typeOut: ['G'],
		modeOut: ['1'],
		typeOver: ['L'],
		modeOver: ['1'],
		color: ['primary'],
		size: ['md'],
		space: ['md'],
		round: ['md'],
		left: ['icon'],
		right: ['imageR'],
		center: ['text'],
		icon: 'bx-leaf',
		iconR: 'bxs-x-circle',
		image: '/coffee.jpg',
		imageR: '/bean.jpg',
		text: 'Next',
		checked: ['false'],
		disabled: ['false'],
	});

	const {typeOut, modeOut, typeOver, modeOver, color, size, space, round, left, right, center, image, imageR, icon, iconR, text, checked, disabled} = chipData;

	const changeChipRadio = (event) => {
		const {name} = event.currentTarget;
		const {team} = event.currentTarget.dataset;

		runChipData.change(team, [name]);
	};

	const chageChipInput = (event) => {
		const {name, value} = event.currentTarget;

		runChipData.change(chipData[name][0], value);
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
				<Label theme="B1-primary" className="leading-6">
					Lorem ipsum dolor <Label theme="D2-danger-md-xs-md">sit amet consectetur adipisicing</Label> elit. Voluptatem <Label theme="E-success-xl-xl-full" icon="bx-leaf" /> repellat itaque commodi magni? <Label theme="G7-default-xl-md-xs">Consequatur illo</Label> perspiciatis
					<Label theme="A-danger-md">non at aliquid</Label>itaque voluptatibus,{' '}
					<Label theme="K2-primary-sm-sm-full" icon="bx-leaf">
						한글 이야기
					</Label>{' '}
					maiores accusantium doloremque officia provident iusto? Ipsam, aut illum.
				</Label>
			</Group>
			<Group className="p-5 ring-2 ring-gray-500 rounded-lg">
				<Text deco="font-success" className="leading-8">
					{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
						<span key={index}>
							Reiciendis consectetur{' '}
							<A
								theme={[`${item}${modeOut}${typeOver}${modeOver}`, color, 'sm', 'xs', round].join('-')}
								icon={left[0] == 'icon' ? icon : ''}
								iconR={right[0] == 'iconR' ? iconR : ''}
								img={left[0] == 'image' ? image : ''}
								imgR={right[0] == 'imageR' ? imageR : ''}
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
						iconR={right[0] == 'iconR' ? iconR : ''}
						img={left[0] == 'image' ? image : ''}
						imgR={right[0] == 'imageR' ? imageR : ''}
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
					iconR={right[0] == 'iconR' ? iconR : ''}
					img={left[0] == 'image' ? image : ''}
					imgR={right[0] == 'imageR' ? imageR : ''}
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
				{['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="space" name={item} checked={space.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">round : </Text>
				{['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'].map((item, index) => (
					<ToggleRadio key={index} text={item} team="round" name={item} checked={round.includes(item)} onChange={changeChipRadio} />
				))}
			</Group>
			<Group>
				<Text deco="font-danger">left : </Text>
				<ToggleRadio text="none" team="left" name="none" checked={left.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="left" name="icon" checked={left.includes('icon')} onChange={changeChipRadio} />
				<ToggleRadio text="image" team="left" name="image" checked={left.includes('image')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="left" value={chipData[left]} placeholder="left 입력" onChange={chageChipInput} disabled={left == 'none'} />
			</Group>
			<Group>
				<Text deco="font-danger">right : </Text>
				<ToggleRadio text="none" team="right" name="none" checked={right.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="right" name="iconR" checked={right.includes('iconR')} onChange={changeChipRadio} />
				<ToggleRadio text="image" team="right" name="imageR" checked={right.includes('imageR')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="right" value={chipData[right]} placeholder="right 입력" onChange={chageChipInput} disabled={right == 'none'} />
			</Group>
			<Group>
				<Text deco="font-danger">center : </Text>
				<ToggleRadio text="none" team="center" name="none" checked={center.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="text" team="center" name="text" checked={center.includes('text')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="center" value={chipData[center]} placeholder="text 입력" onChange={chageChipInput} disabled={center == 'none'}>
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
					<Toggle theme="${[`${typeOut}${modeOut}${typeOver}${modeOver}`, color, size, space, round].join('-')}"${left[0] == 'icon' ? ' icon="' + icon + '"' : ''}${left[0] == 'image' ? ' image="' + image + '"' : ''}${right[0] == 'iconR' ? ' iconR="' + iconR + '"' : ''}${
						right[0] == 'imageR' ? ' imageR="' + imageR + '"' : ''
					}${center[0] == 'text' ? ' text="' + text + '"' : ''}${checked[0] == 'true' ? ' checked' : ''}${disabled[0] == 'true' ? ' disabled' : ''} />
					`}
				</Highlight>
			</Group>
		</>
	);
}
