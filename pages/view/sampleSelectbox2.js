import {useEffect, useRef, cloneElement} from 'react';
import {Fieldset, Chip, Group, Highlight, ToggleRadio} from '../component/temp_ds';
import {A, Basket, Button, Icon, Input, Label, Text, Toggle} from '../component/ui_ds7';
import {UseData} from '../hook/useData';

const LineGroup = (props) => {
	const {children, name, className = ''} = props;

	return (
		<div className={`flex items-center space-x-2 ${className}`}>
			<Label className="w-36 justify-end" theme={'success-A-md'} icon="bx-leaf" text={`${name} : `} />
			{children}
		</div>
	);
};

const animalList = [
	{value: 'cat', label: '고양이'},
	{value: 'dog', label: '강아지'},
	{value: 'bird', label: '병아리'},
];
const fruitList = [
	{value: '', label: '초기화'},
	{value: 'apple', label: '사과'},
	{value: 'banana', label: '바나나'},
	{value: 'orange', label: '오렌지'},
	{value: 'melon', label: '멜론'},
	{value: 'lemon', label: '레몬'},
	{value: 'grape', label: '포도'},
];
const colorList = [
	{value: '', label: '초기화'},
	{value: 'blue', label: '파랑'},
	{value: 'red', label: '빨강'},
	{value: 'green', label: '초록'},
	{value: 'yellow', label: '노랑'},
	{value: 'white', label: '하양'},
	{value: 'black', label: '검정'},
];
const foodList = [
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
	const {value, label, checked = false, direction = true} = props;

	return (
		<Toggle
			className="w-full"
			theme="primary-HI-md-md-xs::warning-IJ-md-md-xs"
			iconR={direction ? 'bxs-chevron-left::bxs-chevron-down' : 'bxs-chevron-left::bxs-chevron-up'}
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

const SelectBox = (props) => {
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
			{cloneElement(selectItem, {value: selectList, label: label, checked: openData, direction})}
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

export default function SampleSelectbox() {
	const dataList = UseData({});
	const [sampleData, runSampleData] = dataList;

	return (
		<>
			<Fieldset title="Selectbox">
				<LineGroup name="animal">
					<SelectBox value="animal" data={dataList} options={animalList} />
				</LineGroup>

				<LineGroup name="fruit">
					{/* <SelectBox title="과일" value="fruit" data={dataList} options={fruitList} defaultValue="banana" width="w-[230px]" direction={false} value={dataList[0]['bbb']?.map((item) => `${item.value}`).join(', ')} /> */}
					<SelectBox title="과일" value="fruit" data={dataList} options={fruitList} width="w-[230px]" direction={false} />
				</LineGroup>

				<LineGroup name="icon">
					<SelectBox
						title="icon"
						value="icon"
						data={dataList}
						options={[
							{value: 'bx-leaf', label: 'leaf'},
							{value: 'bx-lemon', label: 'lemon'},
							{value: 'bx-paste', label: 'paste'},
						]}
						width="w-[250px]"
						// value={dataList[0]['icon']?.map((item) => `${item.label}: ${item.value}`).join(', ')}
						icon={dataList[0]['icon']?.map((item) => item.value).join(', ')}
					/>
				</LineGroup>

				<LineGroup name="color">
					<SelectBox value="color" data={dataList} options={colorList} />
				</LineGroup>

				<LineGroup name="food">
					<SelectBox value="food" label="음식" data={dataList} options={foodList} selectItem={<SelectItem2 />} boxItem={<BoxItem2 />} />
				</LineGroup>

				<Group className="p-5 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
					<Toggle
						theme="default-IL-md-md-md::success-IL-md-md-md"
						icon="bx-leaf::bx-lemon"
						text="change value"
						onChange={() => {
							runSampleData.change('food', [foodList[1], foodList[4], foodList[5]]);
						}}
					/>
					<Toggle
						theme="default-IL-md-md-md::success-IL-md-md-md"
						icon="bx-leaf::bx-lemon"
						text="clear value"
						onChange={() => {
							runSampleData.change({});
						}}
					/>
				</Group>
			</Fieldset>

			<Fieldset title="data">
				<Group>
					<Highlight className="json max-h-80">
						{`
						${JSON.stringify(sampleData, null, '\t')}
						`}
					</Highlight>
				</Group>
			</Fieldset>
		</>
	);
}
