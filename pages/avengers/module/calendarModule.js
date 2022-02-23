import {DateTime} from 'luxon';
import {Button, Toggle} from '../../component/ui_ds7';
import {SelectBox} from '../../view/sampleSelectbox2';
import ToyCalendar from '../../view/toyCalendar';
import PhotoItem, {PhotoRoundItem} from '../item/photoItem';
import PhotoList from '../list/photoList';
import PhotoSection from '../section/photoSection';
import {UseData} from '../vision';

export const CalendarModule = () => {
	const calendarData = UseData({
		dateTime: DateTime.local(2022, 9, 3),
		viewWeekNumber: true,
		viewWeekString: true,
		weekStringShot: true,
		viewSubDate: true,
		weekLocale: [{value: 'ko', label: '한글'}],
		startWeekDay: [{value: 7, label: '일'}],
	});
	const [calendarState, runCalendarState] = calendarData;

	return (
		<div className="p-10">
			<div className="text-3xl">{`${calendarState.dateTime.year} ${calendarState.dateTime.setLocale('ko')[false ? 'monthShort' : 'monthLong']}`}</div>
			<div className="inline-block w-1/2">
				<ToyCalendar height="h-[400px]" data={calendarData} />
			</div>
			{/* <div className="inline-block w-1/2">
				<ToyCalendar height="h-[400px]" data={calendarData} />
			</div> */}

			<div className="p-5 space-x-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Button
					theme="default-IL-md-md-md"
					icon="bxs-chevrons-left"
					// text=""
					onClick={() => {
						runCalendarState.change('dateTime', calendarState.dateTime.plus({years: -1}));
					}}
				/>
				<Button
					theme="default-IL-md-md-md"
					icon="bxs-chevron-left"
					text="Prev"
					onClick={() => {
						runCalendarState.change('dateTime', calendarState.dateTime.plus({months: -1}));
					}}
				/>
				<Button
					theme="default-IL-md-md-md"
					icon="bx-leaf"
					text="Today"
					onClick={() => {
						runCalendarState.change('dateTime', DateTime.now());
					}}
				/>
				<Button
					theme="default-IL-md-md-md"
					iconR="bxs-chevron-right"
					text="Next"
					onClick={() => {
						runCalendarState.change('dateTime', calendarState.dateTime.plus({months: 1}));
					}}
				/>
				<Button
					theme="default-IL-md-md-md"
					icon="bxs-chevrons-right"
					// text=""
					onClick={() => {
						runCalendarState.change('dateTime', calendarState.dateTime.plus({years: 1}));
					}}
				/>
			</div>
			<div className="p-5 space-x-3 flex justify-center items-center flex-wrap ring-2 ring-gray-500 rounded-lg">
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={calendarState.viewWeekNumber}
					onChange={() => {
						runCalendarState.change('viewWeekNumber', !calendarState.viewWeekNumber);
					}}
				/>
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={calendarState.viewWeekString}
					onChange={() => {
						runCalendarState.change('viewWeekString', !calendarState.viewWeekString);
					}}
				/>
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={calendarState.viewSubDate}
					onChange={() => {
						runCalendarState.change('viewSubDate', !calendarState.viewSubDate);
					}}
				/>
				<SelectBox
					value="startWeekDay"
					direction={false}
					data={calendarData}
					options={[
						{value: 7, label: '일'},
						{value: 1, label: '월'},
						{value: 2, label: '화'},
						{value: 3, label: '수'},
						{value: 4, label: '목'},
						{value: 5, label: '금'},
						{value: 6, label: '토'},
					]}
					width="w-[100px]"
				/>
				<SelectBox
					value="weekLocale"
					direction={false}
					data={calendarData}
					options={[
						{value: 'ko', label: '한글'},
						{value: 'en', label: '영어'},
						{value: 'ja', label: '한자'},
					]}
					width="w-[100px]"
				/>
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={calendarState.weekStringShot}
					onChange={() => {
						runCalendarState.change('weekStringShot', !calendarState.weekStringShot);
					}}
				/>
				<Button
					theme="default-IL-md-md-md"
					icon="bx-leaf"
					text="Reset"
					onClick={() => {
						runCalendarState.reset();
					}}
				/>
			</div>
		</div>
	);
};

export default CalendarModule;
