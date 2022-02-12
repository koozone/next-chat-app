import {useEffect, useRef} from 'react';
import {Fieldset, Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Label, Text, Toggle} from '../component/ui_ds7';
import {UseData} from '../hook/useData';

const OPTIONS = [
	{value: '', name: '초기화'},
	{value: 'apple', name: '사과'},
	{value: 'banana', name: '바나나'},
];
const OPTIONS2 = [
	{value: '', name: '초기화'},
	{value: 'apple', name: '사과'},
	{value: 'banana', name: '바나나'},
	{value: 'orange', name: '오렌지'},
	{value: 'melon', name: '멜론'},
	{value: 'lemon', name: '레몬'},
	{value: 'grape', name: '포도'},
];
const OPTIONS3 = [
	{value: '', label: '초기화'},
	{value: 'blue', label: '파랑'},
	{value: 'red', label: '빨강'},
	{value: 'green', label: '초록'},
	{value: 'yellow', label: '노랑'},
	{value: 'white', label: '하양'},
	{value: 'black', label: '검정'},
];

const SelectItem = (props) => {
	const {option, checked} = props;

	return (
		<Toggle
			className="w-full"
			theme="primary-HI-md-md-md::warning-IJ-md-md-md"
			// icon={icon}
			// img="/image/bean.jpg"
			bgR="/sheet/dropdown2.png"
			text={option.label}
			// name={option.name}
			value={[...option.value].map((item) => item.label).join(', ')}
			placeholder="SELECT"
			checked={checked}
		/>
	);
};
const BoxItem = (props) => {
	const {option, checked, onClick} = props;

	return <Button className="w-full" theme="default-BD-md-md-xs::primary-DE-md-lg-xs" text={`${option.label}: ${option.value}`} name={option.value} checked={checked} onClick={onClick} />;
};

const SelectBox3 = (props) => {
	const {name, options, icon, value, defaultValue, width = 'w-[200px]', maxHeight = 'max-h-[160px]', direction = true} = props;
	const [selectData, runSelectData] = props.data;
	const [openData, runOpenData] = UseData(false);
	const selectList = selectData[name] || [];

	useEffect(() => {
		// default value
		if (!selectData.hasOwnProperty(name) && defaultValue) {
			runSelectData.change(
				name,
				options.filter((item) => item.value == defaultValue)
			);
		}
	}, []);

	const containerSize = openData ? `w-full h-screen ${maxHeight}` : 'w-0 h-0';
	const containerMotion = direction ? 'top-auto bottom-0 md:top-full md:bottom-auto' : 'top-auto bottom-0 md:top-auto md:bottom-full';
	const menuMotion = direction
		? 'top-full bottom-auto md:top-auto md:bottom-full translate-y-0 peer-checked:-translate-y-full md:translate-y-0 md:peer-checked:translate-y-full'
		: 'top-full bottom-auto md:top-full md:bottom-auto translate-y-0 peer-checked:-translate-y-full md:translate-y-0 md:peer-checked:-translate-y-full';

	const clickBoxItem = (event) => {
		const {name: itemName} = event.currentTarget;

		runSelectData.change(name, itemName == '' ? [] : options.filter((item) => item.value == itemName));
		runOpenData.change(false);
	};

	return (
		<div
			className={`inline-block md:relative ${width}`}
			onFocus={() => {
				runOpenData.change(true);
			}}
			onBlur={() => {
				runOpenData.change(false);
			}}
		>
			<SelectItem option={{label: '색상', value: selectList}} checked={openData} />
			<div className={`${containerSize} ${containerMotion} z-10 peer-checked:z-20 fixed md:absolute left-0 overflow-hidden pointer-events-none`}>
				<input type="checkbox" className="peer sr-only" checked={openData} onChange={() => {}} />
				<div className={`${menuMotion} absolute transition-all duration-200 left-0 w-full max-h-full overflow-y-auto border-[1px] border-zinc-500 bg-white rounded-md pointer-events-auto`}>
					<div className="flex flex-col items-stretch divide-y divide-zinc-500">
						{options.map((item, index) => (
							<BoxItem key={index} option={item} checked={selectList.map((i) => i.value).includes(item.value)} onClick={clickBoxItem} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
const SelectBox = (props) => {
	const {title = '', name, options, icon, value, defaultValue, width = 'w-[200px]', maxHeight = 'max-h-[160px]', direction = true} = props;
	const [selectData, runSelectData] = props.data;
	const [openData, runOpenData] = UseData(false);
	const selectList = selectData[name] || [];

	useEffect(() => {
		// default value
		if (!selectData.hasOwnProperty(name) && defaultValue) {
			runSelectData.change(
				name,
				options.filter((item) => item.value == defaultValue)
			);
		}
	}, []);

	const containerSize = openData ? `w-full h-screen ${maxHeight}` : 'w-0 h-0';
	const containerMotion = direction ? 'top-auto bottom-0 md:top-full md:bottom-auto' : 'top-auto bottom-0 md:top-auto md:bottom-full';
	const menuMotion = direction
		? 'top-full bottom-auto md:top-auto md:bottom-full translate-y-0 peer-checked:-translate-y-full md:translate-y-0 md:peer-checked:translate-y-full'
		: 'top-full bottom-auto md:top-full md:bottom-auto translate-y-0 peer-checked:-translate-y-full md:translate-y-0 md:peer-checked:-translate-y-full';

	const clickBoxItem = (event) => {};

	return (
		<div
			className={`inline-block md:relative ${width}`}
			onFocus={() => {
				runOpenData.change(true);
			}}
			onBlur={() => {
				runOpenData.change(false);
			}}
		>
			<Toggle
				// type="password"
				theme="primary-HI-md-md-md::warning-IJ-md-md-md"
				icon={icon}
				// img="/image/bean.jpg"
				bgR="/sheet/dropdown2.png"
				text={title}
				className="w-full"
				name={name}
				// value={selectList.map((i) => i.name).join(', ')}
				value={value || selectList.map((i) => i.name).join(', ')}
				placeholder="SELECT"
				checked={openData}
				disabled={false}
			/>
			<div className={`${containerSize} ${containerMotion} z-10 peer-checked:z-20 fixed md:absolute left-0 overflow-hidden pointer-events-none`}>
				<input type="checkbox" className="peer sr-only" checked={openData} onChange={() => {}} />
				<div className={`${menuMotion} absolute transition-all duration-200 left-0 w-full max-h-full overflow-y-auto border-[1px] border-zinc-500 bg-white rounded-md pointer-events-auto`}>
					<div className="flex flex-col items-stretch divide-y divide-zinc-500">
						{options.map((item, index) => (
							<Button
								key={index}
								className="w-full"
								theme="default-BD-md-md-xs::primary-DE-md-lg-xs"
								bg={item.value == '' ? '' : '/sheet/radio1.png::/sheet/radio1.png'}
								iconR="bx-x-circle::bx-x"
								text={`${item.name}: ${item.value}::${item.name}-On`}
								checked={selectList.map((item) => item.value).includes(item.value)}
								onClick={() => {
									runSelectData.change(name, item.value == '' ? [] : [item]);
									runOpenData.change(false);
								}}
							/>
						))}
					</div>
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
					<Toggle
						key={index}
						theme={`info${controlOffTheme} info${controlOnTheme}`}
						bg={controlBg}
						iconR={item == 'icon' ? chipData['icon'] : ''}
						imgR={item == 'image' ? chipData['image'] : ''}
						bgR={item == 'bg' ? chipData['bg'] : ''}
						text={item}
						team="left"
						name={item}
						checked={left.includes(item)}
						onChange={changeElRadio}
					/>
				))}
				{/* <Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="left" value={chipData[left]} placeholder="left 입력" onChange={chageChipInput} disabled={left == ''} /> */}
				<Input
					type="text"
					theme="danger-HI-md-md-md"
					// icon="bx-leaf"
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
				<Input type="text" theme="danger-HI-md-md-md" text={center} className="w-[450px]" name="center" value={center == '' ? '' : chipData[center]} placeholder={center == '' ? '선택' : `${center} 입력`} onChange={chageChipInput} disabled={center == ''} />
			</LineGroup>
			<LineGroup name="right" runFunc={runElData}>
				{['icon', 'image', 'bg'].map((item, index) => (
					<Toggle
						key={index}
						theme={`info${controlOffTheme} info${controlOnTheme}`}
						bg={controlBg}
						iconR={item == 'icon' ? chipData['iconR'] : ''}
						imgR={item == 'image' ? chipData['imageR'] : ''}
						bgR={item == 'bg' ? chipData['bgR'] : ''}
						text={item}
						team="right"
						name={`${item}R`}
						checked={right.includes(`${item}R`)}
						onChange={changeElRadio}
					/>
				))}
				{/* <Input type="text" deco="basket-default box-default font-default" className="w-[200px]" name="right" value={chipData[right]} placeholder="right 입력" onChange={chageChipInput} disabled={right == ''} /> */}
				<Input type="text" theme="danger-HI-md-md-md" text={right} className="w-[300px]" name="right" value={right == '' ? '' : chipData[right]} placeholder={right == '' ? '선택' : `${right} 입력`} onChange={chageChipInput} disabled={right == ''} />
			</LineGroup>

			<SelectBox name="aaa" data={aaaData} options={OPTIONS} />
			<SelectBox title="fruit" name="bbb" data={aaaData} options={OPTIONS2} defaultValue="banana" width="w-[230px]" direction={false} value={aaaData[0]['bbb']?.map((item) => `${item.value}`).join(', ')} />
			<SelectBox
				title="icon"
				name="icon"
				data={aaaData}
				options={[
					{value: 'bx-leaf', name: 'leaf'},
					{value: 'bx-lemon', name: 'lemon'},
					{value: 'bx-paste', name: 'paste'},
				]}
				width="w-[250px]"
				value={aaaData[0]['icon']?.map((item) => `${item.name}: ${item.value}`).join(', ')}
				icon={aaaData[0]['icon']?.map((item) => item.value).join(', ')}
			/>
			<SelectBox3 title="이메일" name="email" data={aaaData} options={OPTIONS3} />

			<Group className="p-5 space-y-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Toggle
					name={`${outType}${outMode}${overType}${overMode}`}
					href="/view/sample"
					onClick={clickButton}
					onChange={() => {
						aaaData[1].change('aaa', [OPTIONS[1]]);
						aaaData[1].change('bbb', [OPTIONS2[1], OPTIONS2[4], OPTIONS2[5]]);
					}}
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
