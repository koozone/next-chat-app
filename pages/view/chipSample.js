import {useEffect, useRef} from 'react';
import {Fieldset, Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Label, Text, Toggle} from '../component/ui_ds6';
import {UseData} from '../hook/useData';

const OPTIONS = [
	{value: '', name: '초기화'},
	{value: 'apple', name: '사과'},
	{value: 'banana', name: '바나나'},
	{value: 'orange', name: '오렌지'},
];

const SelectBox = (props) => {
	const {options, defaultValue, name: key, keyOpen = `${props.name}Open`} = props;
	const [data, runData] = props.data;
	const itemList = data[key] || [];

	const focusDiv = useRef(null);

	useEffect(() => {
		// default value
		if (!data.hasOwnProperty(key) && defaultValue) {
			runData.change(
				key,
				options.filter((item) => item.value == defaultValue)
			);
		}
	}, []);

	useEffect(() => {
		if (focusDiv.current) focusDiv.current.focus();
	}, [focusDiv]);

	return (
		<div className="relative w-[200px]">
			<Toggle
				// type="password"
				theme="primary-HI-md-md-md::warning-IJ-md-md-md"
				// icon="bx-leaf"
				img="/image/bean.jpg"
				bgR="/sheet/dropdown2.png"
				text="test"
				className="w-full"
				name={key}
				value={itemList.map((i) => i.name).join(', ')}
				placeholder="SELECT"
				onChange={(event) => {
					// if (event.target.name == 'leftTest') {
					runData.change(keyOpen, !data[keyOpen]);
					// }
				}}
				onBlur={() => {
					// runData.change(keyOpen, false);
				}}
				checked={data[keyOpen]}
				disabled={false}
			/>
			<div
				className={`absolute z-10 left-0 top-full w-full h-[120px] min-h-fit overflow-y-auto border-2 border-orange-500 bg-white rounded-md ${data[keyOpen] ? 'block' : 'hidden'}`}
				ref={focusDiv}
				onFocus={() => {
					console.log('onFocus');
					// runData.change(keyOpen, true);
				}}
				onBlur={() => {
					console.log('onBlur');
					runData.change(keyOpen, false);
				}}
			>
				<div className="flex flex-col items-stretch divide-y divide-orange-300">
					{options.map((item, index) => (
						<Toggle
							key={index}
							className="w-full"
							theme="default-BD-sm-md-xs::primary-DE-md-lg-xs"
							bg={item.value == '' ? '' : '/sheet/radio1.png::/sheet/radio1.png'}
							iconR="bx-x-circle::bx-x"
							text={`${item.name}-Off::${item.name}-On`}
							checked={itemList.map((item) => item.value).includes(item.value)}
							onChange={() => {
								runData.change(key, item.value == '' ? [] : [item]);
								runData.change(keyOpen, false);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const LineGroup = (props) => {
	const {children, name, className = '', runFunc} = props;
	const visibleList = ['outMode', 'overMode', 'roundMode', 'left', 'right', 'center'];
	const warningList = ['disabled', 'checked'];
	const infoList = ['left', 'right', 'center'];

	const clickClearButton = (event) => {
		const {name} = event.currentTarget;

		runFunc.change(name, ['']);
	};

	return (
		<div className={`flex items-center space-x-2 ${className}`}>
			<Label className="w-36 justify-end" theme={warningList.includes(name) ? 'warning-A-md' : infoList.includes(name) ? 'info-A-md' : 'success-A-md'} icon="bx-leaf" text={`${name} : `} />
			<Button className={visibleList.includes(name) ? 'opacity-100' : 'opacity-20'} theme={`warning-HE`} icon="bx-x-circle" name={name} onClick={clickClearButton} disabled={!visibleList.includes(name)} />
			{children}
		</div>
	);
};

const getTheme = (props) => {
	const {color, outType, outMode, overType, overMode, size, space, round, roundMode, left, right, center, image, imageR, bg, bgR, icon, iconR, text} = props;

	return [`${color}`, `${outType}${outMode}${overType}${overMode}`, `${size}`, `${space}`, `${round}${roundMode}`].join('-');
};

export default function ChipSample() {
	const aaaData = UseData({
		drop: false,
		dropbox1Open: false,
		dropbox1: [],
	});
	const [testData, runTestData] = aaaData;

	const offChip = UseData({
		color: ['default'],
		outType: ['I'],
		outMode: [''],
		overType: ['L'],
		overMode: [''],
		size: ['md'],
		space: ['md'],
		round: ['md'],
		roundMode: [''],
		icon: 'bx-leaf',
		iconR: 'bx-x-circle',
		image: '/image/bean.jpg',
		imageR: '/image/shell.jpg',
		bg: '/sheet/switch1-lg.png',
		bgR: '/sheet/radio1.png',
		text: 'Off',
	});
	const onChip = UseData({
		color: ['success'],
		outType: ['I'],
		outMode: [''],
		overType: ['L'],
		overMode: [''],
		size: ['md'],
		space: ['md'],
		round: ['md'],
		roundMode: [''],
		icon: 'bx-lemon',
		iconR: 'bx-x',
		image: '/image/coffee.jpg',
		imageR: '/image/noodle.jpg',
		bg: '/sheet/switch1-lg.png',
		bgR: '/sheet/radio1.png',
		text: 'On',
	});

	const [elData, runElData] = UseData({
		left: ['icon'],
		center: ['text'],
		right: ['imageR'],
		checked: ['false'],
		disabled: ['false'],
	});
	const {left, right, center, checked, disabled} = elData;

	const [chipData, runChipData] = checked == 'true' ? onChip : offChip;
	// const [chipData, runChipData] = offChip;
	const {color, outType, outMode, overType, overMode, size, space, round, roundMode, icon, iconR, image, imageR, bg, bgR, text} = chipData;

	const changeChipRadio = (event) => {
		const {name} = event.currentTarget;
		const {team} = event.currentTarget.dataset;

		runChipData.change(team, [name]);
	};

	const changeElRadio = (event) => {
		const {name} = event.currentTarget;
		const {team} = event.currentTarget.dataset;

		runElData.change(team, [name]);
	};

	const chageChipInput = (event) => {
		const {name, value} = event.currentTarget;

		runChipData.change(elData[name][0], value);
	};

	const clickButton = (event) => {
		console.log(`[click button]`);
	};

	const changeToggle = (event) => {
		const {name, checked} = event.currentTarget;
		console.log(`[toggle change]: ${checked}`);

		runElData.change('checked', [`${checked}`]);
	};

	const sampleOffTheme = getTheme(offChip[0]);
	const sampleOnTheme = getTheme(onChip[0]);
	const sampleIcon = [offChip[0].icon, onChip[0].icon].join('::');
	const sampleIconR = [offChip[0].iconR, onChip[0].iconR].join('::');
	const sampleImage = [offChip[0].image, onChip[0].image].join('::');
	const sampleImageR = [offChip[0].imageR, onChip[0].imageR].join('::');
	const sampleBg = [offChip[0].bg, onChip[0].bg].join('::');
	const sampleBgR = [offChip[0].bgR, onChip[0].bgR].join('::');
	const sampleText = [offChip[0].text, onChip[0].text].join('::');
	const controlOffTheme = '-DE2-sm-md-md';
	const controlOnTheme = '-K2-sm-md-md';
	const controlBg = '/sheet/radio1.png';

	return (
		<Fieldset title="Chip">
			{/* <Group className="p-5 ring-2 ring-gray-500 rounded-lg">
				<Label theme="primary-B1" className="leading-6">
					Lorem ipsum dolor <Label theme="danger-C2-md-xs-md">sit amet consectetur adipisicing</Label> elit. Voluptatem <Label theme="success-D-xl-xl-full" icon="bx-leaf" /> repellat itaque commodi magni? <Label theme="default-F7-xl-md-xs">Consequatur illo</Label> perspiciatis
					<Label theme="danger-A-md">non at aliquid</Label>itaque voluptatibus,{' '}
					<Label theme="primary-K2-sm-sm-full" icon="bx-leaf">
						한글 이야기
					</Label>{' '}
					maiores accusantium doloremque officia provident iusto? Ipsam, aut illum.
				</Label>
			</Group> */}
			{/* <Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
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
			</Group> */}
			{/* <Group className="p-5 ring-2 ring-gray-500 rounded-lg">
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
			</Group> */}
			<LineGroup name="disabled" runFunc={runChipData}>
				{['false', 'true'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="disabled" name={item} checked={disabled.includes(item)} onChange={changeElRadio} />
					<Toggle key={index} theme={`warning${controlOffTheme} warning${controlOnTheme}`} bg={controlBg} text={item} team="disabled" name={item} checked={disabled.includes(item)} onChange={changeElRadio} />
				))}
			</LineGroup>
			<LineGroup name="checked" runFunc={runChipData}>
				{['false', 'true'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="checked" name={item} checked={checked.includes(item)} onChange={changeElRadio} />
					<Toggle key={index} theme={`warning${controlOffTheme} warning${controlOnTheme}`} bg={controlBg} text={item} team="checked" name={item} checked={checked.includes(item)} onChange={changeElRadio} />
				))}
				<Button
					theme={`default-HE`}
					icon="bx-paste"
					name="paste"
					onClick={() => {
						const valueList = ['color', 'outType', 'outMode', 'overType', 'overMode', 'size', 'space', 'round', 'roundMode'];
						const offObj = valueList.reduce(
							(acc, item) => {
								acc[item] = offChip[0][item];
								return acc;
							},
							{...onChip[0]}
						);
						const onObj = valueList.reduce(
							(acc, item) => {
								acc[item] = onChip[0][item];
								return acc;
							},
							{...offChip[0]}
						);

						runChipData.change(checked == 'true' ? offObj : onObj);
					}}
				/>
				<Button
					theme={`danger-HE`}
					icon="bx-reset"
					name="reset"
					onClick={() => {
						runChipData.reset();
					}}
				/>
			</LineGroup>
			<LineGroup name="color" runFunc={runChipData}>
				{['default', 'primary', 'success', 'info', 'warning', 'danger'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="color" name={item} checked={color.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`${item}${controlOffTheme} ${item}${controlOnTheme}`} bg={controlBg} text={item} team="color" name={item} checked={color.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="outType" runFunc={runChipData}>
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					// <Toggle key={index} theme={`${color}-${item}${overType}2/${item}2${overType}2-sm-md-md`} bg={controlBg} text={item} team="outType" name={item} checked={outType.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`${color}-${item}${overType}2-sm-md-md ${color}-${item}2${overType}2-sm-md-md`} bg={controlBg} text={item} team="outType" name={item} checked={outType.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="outMode" runFunc={runChipData}>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="outMode" name={item} checked={outMode.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`default${controlOffTheme} default${controlOnTheme}`} bg={controlBg} text={item} team="outMode" name={item} checked={outMode.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="overType" runFunc={runChipData}>
				{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((item, index) => (
					// <Toggle key={index} theme={`${color}-${item}${outType}2/${item}2${outType}2-sm-md-md`} bg={controlBg} text={item} team="overType" name={item} checked={overType.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`${color}-${item}${outType}2-sm-md-md ${color}-${item}2${outType}2-sm-md-md`} bg={controlBg} text={item} team="overType" name={item} checked={overType.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="overMode" runFunc={runChipData}>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="overMode" name={item} checked={overMode.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`default${controlOffTheme} default${controlOnTheme}`} bg={controlBg} text={item} team="overMode" name={item} checked={overMode.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="size" runFunc={runChipData}>
				{['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="size" name={item} checked={size.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`success${controlOffTheme} success${controlOnTheme}`} bg={controlBg} text={item} team="size" name={item} checked={size.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="space" runFunc={runChipData}>
				{/* {['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map((item, index) => ( */}
				{['xs', 'sm', 'md', 'lg', 'xl'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="space" name={item} checked={space.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`success${controlOffTheme} success${controlOnTheme}`} bg={controlBg} text={item} team="space" name={item} checked={space.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="round" runFunc={runChipData}>
				{/* {['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'].map((item, index) => ( */}
				{['xs', 'sm', 'md', 'lg', 'xl', 'full'].map((item, index) => (
					// <ToggleRadio key={index} text={item} team="round" name={item} checked={round.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`success${controlOffTheme} success${controlOnTheme}`} bg={controlBg} text={item} team="round" name={item} checked={round.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="roundMode" runFunc={runChipData}>
				{['1', '2', '3', '4', '5', '6', '7', '8'].map((item, index) => (
					// <ToggleRadio key={index} text={item || 'all'} team="roundMode" name={item} checked={roundMode.includes(item)} onChange={changeChipRadio} />
					<Toggle key={index} theme={`default${controlOffTheme} default${controlOnTheme}`} bg={controlBg} text={item} team="roundMode" name={item} checked={roundMode.includes(item)} onChange={changeChipRadio} />
				))}
			</LineGroup>
			<LineGroup name="left" runFunc={runElData}>
				{['icon', 'image', 'bg'].map((item, index) => (
					<Toggle key={index} theme={`info${controlOffTheme} info${controlOnTheme}`} bg={controlBg} text={item} team="left" name={item} checked={left.includes(item)} onChange={changeElRadio} />
				))}
				{/* <Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="left" value={chipData[left]} placeholder="left 입력" onChange={chageChipInput} disabled={left == ''} /> */}
				<Input
					type="text"
					theme="danger-HI-md-md-md"
					icon="bx-leaf"
					text={left}
					className="w-[300px]"
					name="left"
					value={left == '' ? '' : chipData[left]}
					placeholder={left == '' ? '선택' : `${left} 입력`}
					onChange={chageChipInput}
					disabled={left == ''}
					right={
						<Toggle
							theme="primary-A-sm-sm-xs::primary-A-sm-sm-xs"
							bg="/sheet/dropdown2.png"
							onChange={() => {
								runTestData.change('drop', !testData.drop);
							}}
							onBlur={() => {
								runTestData.change('drop', false);
							}}
							checked={testData.drop}
							disabled={left == ''}
						/>
					}
				/>
			</LineGroup>
			<LineGroup name="center" runFunc={runElData}>
				{['text'].map((item, index) => (
					<Toggle key={index} theme={`info${controlOffTheme} info${controlOnTheme}`} bg={controlBg} text={item} team="center" name={item} checked={center.includes(item)} onChange={changeElRadio} />
				))}
				{/* <Input type="text" deco="basket-default box-default font-default" className="w-[350px]" name="center" value={chipData[center]} placeholder="text 입력" onChange={chageChipInput} disabled={center == ''}>
					<Icon deco="font-danger">bx-user</Icon>
					<Text deco="font-primary" className="flex-none">
						TEXT :
					</Text>
				</Input> */}
				<Input type="password" theme="danger-HI-md-md-md" icon="bx-leaf" text={center} className="w-[450px]" name="center" value={center == '' ? '' : chipData[center]} placeholder={center == '' ? '선택' : `${center} 입력`} onChange={chageChipInput} disabled={center == ''} />
			</LineGroup>
			<LineGroup name="right" runFunc={runElData}>
				{['icon', 'image', 'bg'].map((item, index) => (
					<Toggle key={index} theme={`info${controlOffTheme} info${controlOnTheme}`} bg={controlBg} text={item} team="right" name={`${item}R`} checked={right.includes(`${item}R`)} onChange={changeElRadio} />
				))}
				{/* <Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="right" value={chipData[right]} placeholder="right 입력" onChange={chageChipInput} disabled={right == ''} /> */}
				<Input type="text" theme="danger-HI-md-md-md" icon="bx-leaf" text={right} className="w-[300px]" name="right" value={right == '' ? '' : chipData[right]} placeholder={right == '' ? '선택' : `${right} 입력`} onChange={chageChipInput} disabled={right == ''} />
			</LineGroup>

			<SelectBox name="aaa" options={OPTIONS} data={aaaData} defaultValue="apple" />
			<SelectBox name="bbb" options={OPTIONS} data={aaaData} defaultValue="banana" />

			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Button
					name={`${outType}${outMode}${overType}${overMode}`}
					href="/view/sample"
					onClick={clickButton}
					onChange={changeToggle}
					// theme={`${[color, `${outType}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')} ${['warning', `${outType}${outMode}${overType}${overMode}`, size, space, `${round}${roundMode}`].join('-')}`}
					theme={[sampleOffTheme, sampleOnTheme].join('::')}
					icon={left == 'icon' ? sampleIcon : ''}
					iconR={right == 'iconR' ? sampleIconR : ''}
					img={left == 'image' ? sampleImage : ''}
					imgR={right == 'imageR' ? sampleImageR : ''}
					bg={left == 'bg' ? sampleBg : ''}
					bgR={right == 'bgR' ? sampleBgR : ''}
					text={center == 'text' ? sampleText : ''}
					checked={checked == 'true'}
					disabled={disabled == 'true'}
				/>
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
						icon={left == 'icon' ? sampleIcon : ''}
						iconR={right == 'iconR' ? sampleIconR : ''}
						img={left == 'image' ? sampleImage : ''}
						imgR={right == 'imageR' ? sampleImageR : ''}
						bg={left == 'bg' ? sampleBg : ''}
						bgR={right == 'bgR' ? sampleBgR : ''}
						text={center == 'text' ? sampleText : ''}
						checked={checked == 'true'}
						disabled={disabled == 'true'}
					/>
				))}
			</Group>
			<Group>
				<Highlight className="html">
					{`
					<Toggle theme="${[sampleOffTheme, sampleOnTheme].join('::')}"${left == 'icon' ? ' icon="' + sampleIcon + '"' : ''}${left == 'image' ? ' img="' + sampleImage + '"' : ''}${left == 'bg' ? ' bg="' + sampleBg + '"' : ''}${right == 'iconR' ? ' iconR="' + sampleIconR + '"' : ''}${
						right == 'imageR' ? ' imgR="' + sampleImageR + '"' : ''
					}${right == 'bgR' ? ' bgR="' + sampleBgR + '"' : ''}${center == 'text' ? ' text="' + sampleText + '"' : ''}${checked == 'true' ? ' checked' : ''}${disabled == 'true' ? ' disabled' : ''} />
					`}
				</Highlight>
			</Group>
		</Fieldset>
	);
}
