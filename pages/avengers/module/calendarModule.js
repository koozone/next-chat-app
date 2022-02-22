import {DateTime} from 'luxon';
import {Button, Toggle} from '../../component/ui_ds7';
import ToyCalendar from '../../view/toyCalendar';
import PhotoItem, {PhotoRoundItem} from '../item/photoItem';
import PhotoList from '../list/photoList';
import PhotoSection from '../section/photoSection';
import {UseData} from '../vision';

export const CalendarModule = () => {
	const data = UseData({
		dateTime: DateTime.local(2022, 9, 3),
	});
	const [stateData, runStateData] = data;

	return (
		<div className="p-10">
			<span className="text-3xl">{`${stateData.dateTime.year} ${stateData.dateTime.setLocale('ko')[false ? 'monthShort' : 'monthLong']}`}</span>
			<ToyCalendar data={data} />

			<Button
				theme="default-IL-md-md-md"
				icon="bxs-chevrons-left"
				// text=""
				onClick={() => {
					runStateData.change('dateTime', stateData.dateTime.plus({years: -1}));
				}}
			/>
			<Button
				theme="default-IL-md-md-md"
				icon="bxs-chevron-left"
				text="Prev"
				onClick={() => {
					runStateData.change('dateTime', stateData.dateTime.plus({months: -1}));
				}}
			/>
			<Button
				theme="default-IL-md-md-md"
				icon="bx-leaf"
				text="Today"
				onClick={() => {
					runStateData.change('dateTime', DateTime.now());
				}}
			/>
			<Button
				theme="default-IL-md-md-md"
				icon="bx-leaf"
				text="Init"
				onClick={() => {
					runStateData.reset('dateTime');
				}}
			/>
			<Button
				theme="default-IL-md-md-md"
				iconR="bxs-chevron-right"
				text="Next"
				onClick={() => {
					runStateData.change('dateTime', stateData.dateTime.plus({months: 1}));
				}}
			/>
			<Button
				theme="default-IL-md-md-md"
				icon="bxs-chevrons-right"
				// text=""
				onClick={() => {
					runStateData.change('dateTime', stateData.dateTime.plus({years: 1}));
				}}
			/>
			<span>{stateData.dateTime.toString()}</span>
		</div>
	);
};

export default CalendarModule;
