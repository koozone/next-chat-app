import {Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Label, Text, Toggle} from '../component/ui_ds6';
import {UseData} from '../hook/useData';

const LineGroup = (props) => {
	const {children, name, className = '', runFunc} = props;
	const clearVisible = ['outMode', 'overMode', 'roundMode', 'left', 'right', 'center'];

	const clickClearButton = (event) => {
		const {name} = event.currentTarget;

		runFunc.change(name, ['']);
	};

	return (
		<div className={`flex items-center space-x-2 ${className}`}>
			<Label className="w-32 justify-end" theme="default-A-md" icon="bx-leaf" text={`${name} : `} />
			<Button className={clearVisible.includes(name) ? 'opacity-100' : 'opacity-20'} theme={`danger-GH`} icon="bxs-x-circle" name={name} onClick={clickClearButton} disabled={!clearVisible.includes(name)} />
			{children}
		</div>
	);
};

export default function ChipSample() {
	const outChipData = UseData({
		outType: ['G'],
		outMode: [''],
		overType: ['L'],
		overMode: [''],
		color: ['primary'],
		size: ['md'],
		space: ['md'],
		round: ['md'],
		roundMode: [''],
		left: ['icon'],
		right: ['imageR'],
		center: ['text'],
		icon: 'bx-leaf',
		iconR: 'bxs-x-circle',
		image: '/bean.jpg',
		imageR: '/shell.jpg',
		bg: '/sheet_radio6-lg2.png',
		bgR: '/sheet_radio4.png',
		text: 'Next',
		checked: ['false'],
		disabled: ['false'],
	});

	const [chipData, runChipData] = outChipData;
	const {color, outType, outMode, overType, overMode, size, space, round, roundMode, left, right, center, image, imageR, bg, bgR, icon, iconR, text, checked, disabled} = chipData;

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

	const sampleTheme = [`${color}`, `${outType}${outMode}${overType}${overMode}`, `${size}`, `${space}`, `${round}${roundMode}`].join('-');
	const controlTheme = '-DE2/K2-sm-md-md';
	const controlBg = '/radio1.png';

	return (
		<>
			<Group className="p-5 ring-2 ring-gray-500 rounded-lg">
				<Label theme="primary-B1" className="leading-6">
					Lorem ipsum dolor <Label theme="danger-C2-md-xs-md">sit amet consectetur adipisicing</Label> elit. Voluptatem <Label theme="success-D-xl-xl-full" icon="bx-leaf" /> repellat itaque commodi magni? <Label theme="default-F7-xl-md-xs">Consequatur illo</Label> perspiciatis
					<Label theme="danger-A-md">non at aliquid</Label>itaque voluptatibus,{' '}
					<Label theme="primary-K2-sm-sm-full" icon="bx-leaf">
						한글 이야기
					</Label>{' '}
					maiores accusantium doloremque officia provident iusto? Ipsam, aut illum.
				</Label>
			</Group>
			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Toggle theme="primary-F1L1-xs-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-xs-sm-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-sm-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-xs-md-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-md-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-md-md-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-lg-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-lg-md-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-xl-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-xl-md-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-2xl-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-md-lg-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-3xl-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-xl-lg-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-4xl-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-2xl-lg-full" icon="bx-leaf" />
				<Toggle theme="primary-F1L1-5xl-xs-full" img="/bean.jpg" />
				<Toggle theme="primary-F1L1-2xl-xl-full" icon="bx-leaf" />
			</Group>
			<Group className="p-5 ring-2 ring-gray-500 rounded-lg">
				<Text deco="font-success" className="leading-8">
					{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
						<span key={index}>
							Reiciendis consectetur{' '}
							<A
								theme={[color, `${item}${outMode}${overType}${overMode}`, 'sm', 'sm', `${round}${roundMode}`].join('-')}
								icon={left == 'icon' ? icon : ''}
								iconR={right == 'iconR' ? iconR : ''}
								img={left == 'image' ? image : ''}
								imgR={right == 'imageR' ? imageR : ''}
								bg={left == 'bg' ? bg : ''}
								bgR={right == 'bgR' ? bgR : ''}
								text={center == 'text' ? text : ''}
								checked={checked == 'true'}
								disabled={disabled == 'true'}
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
						name={`${item}${outMode}${overType}${overMode}`}
						href="/view/sample"
						onClick={clickButton}
						onChange={changeToggle}
						// theme={`${[color, `${item}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')} ${['warning', `${item}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')}`}
						theme={[`${color}`, `${item}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')}
						icon={left == 'icon' ? icon : ''}
						iconR={right == 'iconR' ? iconR : ''}
						img={left == 'image' ? image : ''}
						imgR={right == 'imageR' ? imageR : ''}
						bg={left == 'bg' ? bg : ''}
						bgR={right == 'bgR' ? bgR : ''}
						text={center == 'text' ? text : ''}
						checked={checked == 'true'}
						disabled={disabled == 'true'}
					/>
				))}
			</Group>
			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Toggle
					name={`${outType}${outMode}${overType}${overMode}`}
					href="/view/sample"
					onClick={clickButton}
					onChange={changeToggle}
					// theme={`${[color, `${outType}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')} ${['warning', `${outType}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')}`}
					theme={sampleTheme}
					icon={left == 'icon' ? icon : ''}
					iconR={right == 'iconR' ? iconR : ''}
					img={left == 'image' ? image : ''}
					imgR={right == 'imageR' ? imageR : ''}
					bg={left == 'bg' ? bg : ''}
					bgR={right == 'bgR' ? bgR : ''}
					text={center == 'text' ? text : ''}
					checked={checked == 'true'}
					disabled={disabled == 'true'}
				/>
			</Group>
			<Group>
				<Highlight className="html">
					{`
					<Toggle theme="${sampleTheme}"${left == 'icon' ? ' icon="' + icon + '"' : ''}${left == 'image' ? ' img="' + image + '"' : ''}${left == 'bg' ? ' bg="' + bg + '"' : ''}${right == 'iconR' ? ' iconR="' + iconR + '"' : ''}${right == 'imageR' ? ' imgR="' + imageR + '"' : ''}${
						right == 'bgR' ? ' bgR="' + bgR + '"' : ''
					}${center == 'text' ? ' text="' + text + '"' : ''}${checked == 'true' ? ' checked' : ''}${disabled == 'true' ? ' disabled' : ''} />
					`}
				</Highlight>
			</Group>
			<LineGroup name="disabled" runFunc={runChipData}>
				{['false', 'true'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="disabled" name={item} checked={disabled.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`warning${controlTheme}`} bg={controlBg} text={item} team="disabled" name={item} checked={disabled.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="checked" runFunc={runChipData}>
				{['false', 'true'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="checked" name={item} checked={checked.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`warning${controlTheme}`} bg={controlBg} text={item} team="checked" name={item} checked={checked.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="color" runFunc={runChipData}>
				{['default', 'primary', 'success', 'info', 'warning', 'danger'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="color" name={item} checked={color.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`${item}${controlTheme}`} bg={controlBg} text={item} team="color" name={item} checked={color.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="outType" runFunc={runChipData}>
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="outType" name={item} checked={outType.includes(item)} onChange={changeChipRadio} />
					// <Toggle key={index} theme={`primary${controlTheme}`} bg={controlBg} text={item} team="outType" name={item} checked={outType.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`${color}-${item}${overType}2/${item}2${overType}2-sm-md-md`} bg={controlBg} text={item} team="outType" name={item} checked={outType.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="outMode" runFunc={runChipData}>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="outMode" name={item} checked={outMode.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`default${controlTheme}`} bg={controlBg} text={item} team="outMode" name={item} checked={outMode.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="overType" runFunc={runChipData}>
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="overType" name={item} checked={overType.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`${color}-${item}${outType}2/${item}2${outType}2-sm-md-md`} bg={controlBg} text={item} team="overType" name={item} checked={overType.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="overMode" runFunc={runChipData}>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="overMode" name={item} checked={overMode.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`default${controlTheme}`} bg={controlBg} text={item} team="overMode" name={item} checked={overMode.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="size" runFunc={runChipData}>
				{['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="size" name={item} checked={size.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`success${controlTheme}`} bg={controlBg} text={item} team="size" name={item} checked={size.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="space" runFunc={runChipData}>
				{/* {['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map((item, index) => ( */}
				{['xs', 'sm', 'md', 'lg', 'xl'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="space" name={item} checked={space.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`success${controlTheme}`} bg={controlBg} text={item} team="space" name={item} checked={space.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="round" runFunc={runChipData}>
				{/* {['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'].map((item, index) => ( */}
				{['xs', 'sm', 'md', 'lg', 'xl', 'full'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="round" name={item} checked={round.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`success${controlTheme}`} bg={controlBg} text={item} team="round" name={item} checked={round.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="roundMode" runFunc={runChipData}>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					// <ToggleRadio key={index} text={item || 'all'} team="roundMode" name={item} checked={roundMode.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`default${controlTheme}`} bg={controlBg} text={item} team="roundMode" name={item} checked={roundMode.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="left" runFunc={runChipData}>
				{/* <ToggleRadio text="none" team="left" name="none" checked={left.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="left" name="icon" checked={left.includes('icon')} onChange={changeChipRadio} />
				<ToggleRadio text="image" team="left" name="image" checked={left.includes('image')} onChange={changeChipRadio} />
				<ToggleRadio text="bg" team="left" name="bg" checked={left.includes('bg')} onChange={changeChipRadio} /> */}
				{['icon', 'image', 'bg'].map((item, index) => (
					<Toggle key={index} theme={`info${controlTheme}`} bg={controlBg} text={item} team="left" name={item} checked={left.includes(item)} onChange={changeChipRadio} />
				))}
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="left" value={chipData[left]} placeholder="left 입력" onChange={chageChipInput} disabled={left == ''} />
			</LineGroup>
			<LineGroup name="center" runFunc={runChipData}>
				{/* <ToggleRadio text="none" team="center" name="none" checked={center.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="text" team="center" name="text" checked={center.includes('text')} onChange={changeChipRadio} /> */}
				{['text'].map((item, index) => (
					<Toggle key={index} theme={`info${controlTheme}`} bg={controlBg} text={item} team="center" name={item} checked={center.includes(item)} onChange={changeChipRadio} />
				))}
				<Input type="text" deco="basket-default box-default font-default" className="w-[350px]" name="center" value={chipData[center]} placeholder="text 입력" onChange={chageChipInput} disabled={center == ''}>
					<Icon deco="font-danger">bx-user</Icon>
					<Text deco="font-primary" className="flex-none">
						TEXT :
					</Text>
				</Input>
			</LineGroup>
			<LineGroup name="right" runFunc={runChipData}>
				{/* <ToggleRadio text="none" team="right" name="none" checked={right.includes('none')} onChange={changeChipRadio} />
				<ToggleRadio text="icon" team="right" name="iconR" checked={right.includes('iconR')} onChange={changeChipRadio} />
				<ToggleRadio text="image" team="right" name="imageR" checked={right.includes('imageR')} onChange={changeChipRadio} />
				<ToggleRadio text="bg" team="right" name="bgR" checked={right.includes('bgR')} onChange={changeChipRadio} /> */}
				{['icon', 'image', 'bg'].map((item, index) => (
					<Toggle key={index} theme={`info${controlTheme}`} bg={controlBg} text={item} team="right" name={`${item}R`} checked={right.includes(`${item}R`)} onChange={changeChipRadio} />
				))}
				<Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="right" value={chipData[right]} placeholder="right 입력" onChange={chageChipInput} disabled={right == ''} />
			</LineGroup>
		</>
	);
}
