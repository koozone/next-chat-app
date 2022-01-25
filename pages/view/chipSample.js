import {Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {Icon, Input, Text} from '../component/ui_ds4';
import {UseData} from '../hook/useData';

export default function ChipSample() {
	const [chipData, runChipData] = UseData({
		mode: ['6'],
		color: ['primary'],
		size: ['sm'],
		space: ['md'],
		round: ['md'],
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

	return (
		<>
			{/* <Group>
					<Chip theme="primary-xs-full-1" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
					<Chip theme="primary-xs-full-2" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
					<Chip theme="primary-xs-full-3" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
					<Chip theme="primary-xs-full-4" icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
				</Group> */}
			<Group className="flex justify-center">
				<Chip theme={[7, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[8, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[1, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[2, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[3, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[4, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[5, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
				<Chip theme={[6, chipData.color, chipData.size, chipData.space, chipData.round].join('-')} icon={chipData.left[0] == 'icon' ? 'bx-leaf' : ''} iconR={chipData.right[0] == 'icon' ? 'bxs-chevron-right' : ''} text={chipData.center[0] == 'text' ? chipData.text : ''} />
			</Group>
			{/* <Group>
					<Text deco="font-danger">mode : </Text>
					<ToggleRadio text="1" team="mode" name="1" checked={chipData.mode.includes('1')} onChange={changeChipRadio} />
					<ToggleRadio text="2" team="mode" name="2" checked={chipData.mode.includes('2')} onChange={changeChipRadio} />
					<ToggleRadio text="3" team="mode" name="3" checked={chipData.mode.includes('3')} onChange={changeChipRadio} />
					<ToggleRadio text="4" team="mode" name="4" checked={chipData.mode.includes('4')} onChange={changeChipRadio} />
				</Group> */}
			<Group>
				<Text deco="font-danger">color : </Text>
				<ToggleRadio text="default" team="color" name="default" checked={chipData.color.includes('default')} onChange={changeChipRadio} />
				<ToggleRadio text="primary" team="color" name="primary" checked={chipData.color.includes('primary')} onChange={changeChipRadio} />
				<ToggleRadio text="success" team="color" name="success" checked={chipData.color.includes('success')} onChange={changeChipRadio} />
				<ToggleRadio text="warning" team="color" name="warning" checked={chipData.color.includes('warning')} onChange={changeChipRadio} />
				<ToggleRadio text="danger" team="color" name="danger" checked={chipData.color.includes('danger')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">size : </Text>
				<ToggleRadio text="xs" team="size" name="xs" checked={chipData.size.includes('xs')} onChange={changeChipRadio} />
				<ToggleRadio text="sm" team="size" name="sm" checked={chipData.size.includes('sm')} onChange={changeChipRadio} />
				<ToggleRadio text="md" team="size" name="md" checked={chipData.size.includes('md')} onChange={changeChipRadio} />
				<ToggleRadio text="lg" team="size" name="lg" checked={chipData.size.includes('lg')} onChange={changeChipRadio} />
				<ToggleRadio text="xl" team="size" name="xl" checked={chipData.size.includes('xl')} onChange={changeChipRadio} />
				<ToggleRadio text="2xl" team="size" name="2xl" checked={chipData.size.includes('2xl')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">space : </Text>
				<ToggleRadio text="xs" team="space" name="xs" checked={chipData.space.includes('xs')} onChange={changeChipRadio} />
				<ToggleRadio text="sm" team="space" name="sm" checked={chipData.space.includes('sm')} onChange={changeChipRadio} />
				<ToggleRadio text="md" team="space" name="md" checked={chipData.space.includes('md')} onChange={changeChipRadio} />
				<ToggleRadio text="lg" team="space" name="lg" checked={chipData.space.includes('lg')} onChange={changeChipRadio} />
				<ToggleRadio text="xl" team="space" name="xl" checked={chipData.space.includes('xl')} onChange={changeChipRadio} />
				<ToggleRadio text="2xl" team="space" name="2xl" checked={chipData.space.includes('2xl')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">round : </Text>
				<ToggleRadio text="xs" team="round" name="xs" checked={chipData.round.includes('xs')} onChange={changeChipRadio} />
				<ToggleRadio text="sm" team="round" name="sm" checked={chipData.round.includes('sm')} onChange={changeChipRadio} />
				<ToggleRadio text="md" team="round" name="md" checked={chipData.round.includes('md')} onChange={changeChipRadio} />
				<ToggleRadio text="lg" team="round" name="lg" checked={chipData.round.includes('lg')} onChange={changeChipRadio} />
				<ToggleRadio text="xl" team="round" name="xl" checked={chipData.round.includes('xl')} onChange={changeChipRadio} />
				<ToggleRadio text="full" team="round" name="full" checked={chipData.round.includes('full')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">left : </Text>
				<ToggleRadio text="none" team="left" name="none" checked={chipData.left.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="left" name="icon" checked={chipData.left.includes('icon')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">right : </Text>
				<ToggleRadio text="none" team="right" name="none" checked={chipData.right.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="right" name="icon" checked={chipData.right.includes('icon')} onChange={changeChipRadio} />
			</Group>
			<Group>
				<Text deco="font-danger">center : </Text>
				<ToggleRadio text="none" team="center" name="none" checked={chipData.center.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="text" team="center" name="text" checked={chipData.center.includes('text')} onChange={changeChipRadio} />
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="text" value={chipData.text} placeholder="text 입력" onChange={chageChipInput} disabled={chipData.center != 'text'}>
					<Icon deco="font-danger">bx-user</Icon>
					<Text deco="font-primary" className="flex-none">
						TEXT :
					</Text>
				</Input>
			</Group>
			<Group>
				<Highlight className="html">
					{`
						<Chip theme="${[chipData.mode, chipData.color, chipData.size, chipData.space, chipData.round].join('-')}"${chipData.left[0] == 'icon' ? ' icon="bx-leaf"' : ''}${chipData.right[0] == 'icon' ? ' iconR="bxs-chevron-right"' : ''}${chipData.center[0] == 'text' ? ' text="' + chipData.text + '"' : ''} />
						`}
				</Highlight>
			</Group>
		</>
	);
}
