import {cloneElement, useEffect} from 'react';
import {Button, Toggle} from '../component/ui_ds7';
import {UseData} from './vision';

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
			// value={[...(value || [])].map((item) => item.label).join(', ')}
			value={value}
			// placeholder="SELECT"
			checked={checked}
		/>
	);
};

const DefaultBoxItem = (props) => {
	const {value, label, checked = false, onClick} = props;

	return <Button className="w-full" theme="default-BD-md-md-xs::primary-DE-md-lg-xs" value={label} name={value} checked={checked} onClick={onClick} />;
};

export const SelectBox = (props) => {
	const {name, value, label, selectItem = <DefaultSelectItem />, boxItem = <DefaultBoxItem />, options, defaultValue, width = 'w-[200px]', maxHeight = 'max-h-[160px]', onChange = () => {}, direction = true} = props;
	// const [selectData, runSelectData] = props.data;
	const [selectData, runSelectData] = UseData();
	const [openData, runOpenData] = UseData(false);

	useEffect(() => {
		// // default value
		// if (!selectData.hasOwnProperty(name) && defaultValue) {
		// 	runSelectData.change(options.filter((item) => item.value == defaultValue));
		// }
		runSelectData.change(value);
	}, [value]);

	const clickBoxItem = (event) => {
		// const {name} = event.currentTarget;

		// runSelectData.change(name == '' ? [] : options.filter((item) => item.value == name).map((item) => item.value));
		runOpenData.change(false);

		onChange(event);
	};

	const selectList = [].concat(selectData || []);
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
			{cloneElement(selectItem, {
				value: options
					.filter((item) => selectList.includes(item.value))
					.map((item) => item.label)
					.join(', '),
				label: label,
				checked: openData,
				direction,
			})}
			<div className={`${containerSize} ${containerMotion} z-10 peer-checked:z-20 fixed md:absolute left-0 overflow-hidden pointer-events-none`}>
				<input type="checkbox" className="peer sr-only" checked={openData} onChange={() => {}} />
				<div className={`${menuMotion} absolute transition-all duration-200 left-0 w-full max-h-full overflow-y-auto border-[1px] border-zinc-500 bg-white rounded-md pointer-events-auto`}>
					<div className="flex flex-col items-stretch divide-y divide-zinc-500">
						{options.map((item, index) =>
							// <BoxItem key={index} option={item} checked={selectList.map((i) => i.value).includes(item.value)} onClick={clickBoxItem} />
							cloneElement(boxItem, {key: index, ...item, checked: selectList.includes(item.value), onClick: clickBoxItem})
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
