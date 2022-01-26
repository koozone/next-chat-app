import {Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Text, Toggle} from '../component/ui_ds4';
import {UseData} from '../hook/useData';

export default function ChipSample() {
	const [data, runData] = UseData({
		A1: false,
		A2: true,
		B1: false,
		B2: true,
		C1: false,
		C2: true,
		D1: false,
		D2: true,
		E1: false,
		E2: true,
		F1: false,
		F2: true,
		G1: false,
		G2: true,
	});
	const [{mode, color, size, space, round, underline, left, right, center, text}, runChipData] = UseData({
		color: ['primary'],
		size: ['sm'],
		space: ['md'],
		round: ['md'],
		underline: [''],
		left: ['icon'],
		right: ['none'],
		center: ['text'],
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

	const changeSwitch = (event) => {
		const {name, checked} = event.currentTarget;

		runData.change(name, checked);
	};

	return (
		<>
			{/* <Group>
					<Chip theme="primary-xs-full-1" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
					<Chip theme="primary-xs-full-2" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
					<Chip theme="primary-xs-full-3" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
					<Chip theme="primary-xs-full-4" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
				</Group> */}
			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				{['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2', 'F1', 'F2', 'G1', 'G2'].map((item, index) => (
					// <Chip key={index} theme={[item, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
					<Toggle
						key={index}
						name={item}
						href="/view/sample"
						onClick={() => {
							alert('click');
						}}
						onChange={changeSwitch}
						theme={[item.split('')[0], color, size, space, round, underline].join('-')}
						icon={left[0] == 'icon' ? 'bx-leaf' : ''}
						iconR={right[0] == 'icon' ? 'bxs-x-circle' : ''}
						text={center[0] == 'text' ? text : ''}
						// checked={['2', '4', '6', '8'].includes(item)}
						checked={data[item]}
					/>
				))}
				{/* <Chip theme={[1, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[2, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[3, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[4, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[5, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[6, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[7, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} />
				<Chip theme={[8, color, size, space, round, underline].join('-')} icon={left[0] == 'icon' ? 'bx-leaf' : ''} iconR={right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={center[0] == 'text' ? text : ''} /> */}
			</Group>
			{/* <Group>
					<Text deco="font-danger">mode : </Text>
					<ToggleRadio text="1" team="mode" name="1" checked={mode.includes('1')} onChange={changeChipRadio} />
					<ToggleRadio text="2" team="mode" name="2" checked={mode.includes('2')} onChange={changeChipRadio} />
					<ToggleRadio text="3" team="mode" name="3" checked={mode.includes('3')} onChange={changeChipRadio} />
					<ToggleRadio text="4" team="mode" name="4" checked={mode.includes('4')} onChange={changeChipRadio} />
				</Group> */}
			<Group>
				<Text deco="font-danger">color : </Text>
				<ToggleRadio text="default" team="color" name="default" checked={color.includes('default')} onChange={changeChipRadio} />
				<ToggleRadio text="primary" team="color" name="primary" checked={color.includes('primary')} onChange={changeChipRadio} />
				<ToggleRadio text="success" team="color" name="success" checked={color.includes('success')} onChange={changeChipRadio} />
				<ToggleRadio text="warning" team="color" name="warning" checked={color.includes('warning')} onChange={changeChipRadio} />
				<ToggleRadio text="danger" team="color" name="danger" checked={color.includes('danger')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">size : </Text>
				<ToggleRadio text="xs" team="size" name="xs" checked={size.includes('xs')} onChange={changeChipRadio} />
				<ToggleRadio text="sm" team="size" name="sm" checked={size.includes('sm')} onChange={changeChipRadio} />
				<ToggleRadio text="md" team="size" name="md" checked={size.includes('md')} onChange={changeChipRadio} />
				<ToggleRadio text="lg" team="size" name="lg" checked={size.includes('lg')} onChange={changeChipRadio} />
				<ToggleRadio text="xl" team="size" name="xl" checked={size.includes('xl')} onChange={changeChipRadio} />
				<ToggleRadio text="2xl" team="size" name="2xl" checked={size.includes('2xl')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">space : </Text>
				<ToggleRadio text="xs" team="space" name="xs" checked={space.includes('xs')} onChange={changeChipRadio} />
				<ToggleRadio text="sm" team="space" name="sm" checked={space.includes('sm')} onChange={changeChipRadio} />
				<ToggleRadio text="md" team="space" name="md" checked={space.includes('md')} onChange={changeChipRadio} />
				<ToggleRadio text="lg" team="space" name="lg" checked={space.includes('lg')} onChange={changeChipRadio} />
				<ToggleRadio text="xl" team="space" name="xl" checked={space.includes('xl')} onChange={changeChipRadio} />
				<ToggleRadio text="2xl" team="space" name="2xl" checked={space.includes('2xl')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">round : </Text>
				<ToggleRadio text="xs" team="round" name="xs" checked={round.includes('xs')} onChange={changeChipRadio} />
				<ToggleRadio text="sm" team="round" name="sm" checked={round.includes('sm')} onChange={changeChipRadio} />
				<ToggleRadio text="md" team="round" name="md" checked={round.includes('md')} onChange={changeChipRadio} />
				<ToggleRadio text="lg" team="round" name="lg" checked={round.includes('lg')} onChange={changeChipRadio} />
				<ToggleRadio text="xl" team="round" name="xl" checked={round.includes('xl')} onChange={changeChipRadio} />
				<ToggleRadio text="full" team="round" name="full" checked={round.includes('full')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">underline : </Text>
				<ToggleRadio text="none" team="underline" name="" checked={underline.includes('')} onChange={changeChipRadio} />
				<ToggleRadio text="underline" team="underline" name="_" checked={underline.includes('_')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">left : </Text>
				<ToggleRadio text="none" team="left" name="none" checked={left.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="left" name="icon" checked={left.includes('icon')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">right : </Text>
				<ToggleRadio text="none" team="right" name="none" checked={right.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="right" name="icon" checked={right.includes('icon')} onChange={changeChipRadio} />
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
						<{node} theme="${['A', color, size, space, round, underline].join('-')}"${left[0] == 'icon' ? ' icon="bx-leaf"' : ''}${right[0] == 'icon' ? ' iconR="bxs-chevron-right"' : ''}${center[0] == 'text' ? ' text="' + text + '"' : ''} />
						`}
				</Highlight>
			</Group>
		</>
	);
}
