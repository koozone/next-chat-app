import {useEffect, useRef, cloneElement} from 'react';
import {Fieldset, Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Label, Text, Toggle} from '../component/ui_ds7';
import {UseData} from '../hook/useData';

const OPTIONS = [
	{value: '', label: '초기화'},
	{value: 'apple', label: '사과'},
	{value: 'banana', label: '바나나'},
];
const OPTIONS2 = [
	{value: '', label: '초기화'},
	{value: 'apple', label: '사과'},
	{value: 'banana', label: '바나나'},
	{value: 'orange', label: '오렌지'},
	{value: 'melon', label: '멜론'},
	{value: 'lemon', label: '레몬'},
	{value: 'grape', label: '포도'},
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
const OPTIONS4 = [
	{value: '', label: '초기화'},
	{value: 'lemon', label: '레몬'},
	{value: 'baguette', label: '바게트'},
	{value: 'bowl-rice', label: '밥'},
	{value: 'bowl-hot', label: '국수'},
	{value: 'coffee', label: '커피'},
	{value: 'beer', label: '맥주'},
	{value: 'coffee-togo', label: '아메리카노'},
	{value: 'cake', label: '케이크'},
	{value: 'wine', label: '와인'},
];

const DefaultSelectItem = (props) => {
	const {value, label, checked = false} = props;

	return (
		<Toggle
			className="w-full"
			theme="primary-HI-md-md-xs::warning-IJ-md-md-xs"
			// icon={icon}
			// img="/image/bean.jpg"
			// bgR="/sheet/dropdown2.png"
			// text={label}
			// name={name}
			value={[...(value || [])].map((item) => item.label).join(', ')}
			// placeholder="SELECT"
			checked={checked}
		/>
	);
};
const SelectItem = (props) => {
	const {value, label, checked = false} = props;

	return (
		<Toggle
			className="w-full"
			theme="primary-HI-md-md-md::warning-IJ-md-md-md"
			// icon={icon}
			// img="/image/bean.jpg"
			bgR="/sheet/dropdown2.png"
			text={label}
			// name={name}
			value={[...(value || [])].map((item) => item.label).join(', ')}
			placeholder="SELECT"
			checked={checked}
		/>
	);
};
const SelectItem2 = (props) => {
	const {value, label, checked = false} = props;

	return (
		<Toggle
			className="w-full"
			theme="primary-HI-md-md-md::warning-IJ-md-md-md"
			// icon={`bx-${value[0].value}`}
			// img="/image/bean.jpg"
			bgR="/sheet/dropdown2.png"
			text={label}
			// name={name}
			value={[...(value || [])].map((item) => item.label).join(', ')}
			placeholder="SELECT"
			checked={checked}
		/>
	);
};
const DefaultBoxItem = (props) => {
	const {value, label, checked = false, onClick} = props;

	return <Button className="w-full" theme="default-BD-md-md-xs::primary-DE-md-lg-xs" value={label} name={value} checked={checked} onClick={onClick} />;
};
const BoxItem = (props) => {
	const {value, label, checked = false, onClick} = props;

	return <Button className="w-full" theme="default-BD-md-md-xs::primary-DE-md-lg-xs" text={`${label}: ${value}`} name={value} checked={checked} onClick={onClick} />;
};
const BoxItem2 = (props) => {
	const {value, label, checked = false, onClick} = props;

	return <Button className="w-full" theme="default-BD-md-md-xs::primary-DE-md-lg-xs" iconR={`bx-${value}`} text={label} name={value} checked={checked} onClick={onClick} />;
};

const SelectBox3 = (props) => {
	const {value, label, selectItem = <DefaultSelectItem />, boxItem = <DefaultBoxItem />, options, defaultValue, width = 'w-[200px]', maxHeight = 'max-h-[160px]', direction = true} = props;
	const [selectData, runSelectData] = props.data;
	const [openData, runOpenData] = UseData(false);

	useEffect(() => {
		// default value
		if (!selectData.hasOwnProperty(value) && defaultValue) {
			runSelectData.change(
				value,
				options.filter((item) => item.value == defaultValue)
			);
		}
	}, []);

	const clickBoxItem = (event) => {
		const {name} = event.currentTarget;

		runSelectData.change(value, name == '' ? [] : options.filter((item) => item.value == name));
		runOpenData.change(false);
	};

	const selectList = selectData[value] || [];
	const containerSize = openData ? `w-full h-screen ${maxHeight}` : 'w-0 h-0';
	const containerMotion = direction ? 'top-auto bottom-0 md:top-full md:bottom-auto' : 'top-auto bottom-0 md:top-auto md:bottom-full';
	const menuMotion = direction
		? 'top-full bottom-auto md:top-auto md:bottom-full translate-y-0 peer-checked:-translate-y-full md:translate-y-0 md:peer-checked:translate-y-full'
		: 'top-full bottom-auto md:top-full md:bottom-auto translate-y-0 peer-checked:-translate-y-full md:translate-y-0 md:peer-checked:-translate-y-full';

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
			{/* <SelectItem option={{label: '색상', value: selectList}} checked={openData} /> */}
			{cloneElement(selectItem, {value: selectList, label: label, checked: openData})}
			<div className={`${containerSize} ${containerMotion} z-10 peer-checked:z-20 fixed md:absolute left-0 overflow-hidden pointer-events-none`}>
				<input type="checkbox" className="peer sr-only" checked={openData} onChange={() => {}} />
				<div className={`${menuMotion} absolute transition-all duration-200 left-0 w-full max-h-full overflow-y-auto border-[1px] border-zinc-500 bg-white rounded-md pointer-events-auto`}>
					<div className="flex flex-col items-stretch divide-y divide-zinc-500">
						{options.map((item, index) =>
							// <BoxItem key={index} option={item} checked={selectList.map((i) => i.value).includes(item.value)} onClick={clickBoxItem} />
							cloneElement(boxItem, {key: index, ...item, checked: selectList.map((i) => i.value).includes(item.value), onClick: clickBoxItem})
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
const SelectBox = (props) => {
	const {title = '', value, label, options, icon, defaultValue, width = 'w-[200px]', maxHeight = 'max-h-[160px]', direction = true} = props;
	const [selectData, runSelectData] = props.data;
	const [openData, runOpenData] = UseData(false);
	const selectList = selectData[label] || [];

	useEffect(() => {
		// default value
		if (!selectData.hasOwnProperty(label) && defaultValue) {
			runSelectData.change(
				label,
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
				name={label}
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
								text={`${item.label}: ${item.value}::${item.label}-On`}
								checked={selectList.map((item) => item.value).includes(item.value)}
								onClick={() => {
									runSelectData.change(label, item.value == '' ? [] : [item]);
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

export default function SampleSelectbox() {
	const aaaData = UseData({
		drop: false,
		dropbox1Open: false,
		dropbox1: [],
	});

	return (
		<Fieldset title="Selectbox">
			<SelectBox value="aaa" data={aaaData} options={OPTIONS} />
			<SelectBox title="fruit" value="bbb" data={aaaData} options={OPTIONS2} defaultValue="banana" width="w-[230px]" direction={false} value={aaaData[0]['bbb']?.map((item) => `${item.value}`).join(', ')} />
			<SelectBox
				title="icon"
				value="icon"
				data={aaaData}
				options={[
					{value: 'bx-leaf', label: 'leaf'},
					{value: 'bx-lemon', label: 'lemon'},
					{value: 'bx-paste', label: 'paste'},
				]}
				width="w-[250px]"
				value={aaaData[0]['icon']?.map((item) => `${item.label}: ${item.value}`).join(', ')}
				icon={aaaData[0]['icon']?.map((item) => item.value).join(', ')}
			/>
			<SelectBox3 value="aaa" data={aaaData} options={OPTIONS4} />
			<SelectBox3 value="food" label="음식" data={aaaData} options={OPTIONS4} selectItem={<SelectItem2 />} boxItem={<BoxItem2 />} />
			<SelectItem />
			<BoxItem />
		</Fieldset>
	);
}
