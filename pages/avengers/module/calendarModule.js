import axios from 'axios';
import {DateTime} from 'luxon';
import {useCallback, useEffect, useState} from 'react';
import {Button, Toggle} from '../../component/ui_ds7';
import {SelectBox as SelectBox2} from '../antMan';
import ToyCalendar from '../../view/toyCalendar';
import {UseData} from '../vision';

export const CalendarModule = () => {
	const [loading, setLoading] = useState(false);
	const calendarData = UseData({
		dateTime: DateTime.local(2022, 9, 3),
		// dateTime: DateTime.now(),
		doneYearList: [],
		publicdayList: [],
	});
	const optionData = UseData({
		viewWeekNumber: true,
		viewWeekString: true,
		weekStringShot: true,
		viewSubDate: true,
		weekLocale: 'ko',
		startWeekDay: 7,
		weekEndRatio: 0.5,
	});
	const [calendarState, runCalendarState] = calendarData;
	const [optionState, runOptionState] = optionData;

	const thisYear = calendarState.dateTime.year;
	const viewWeekNumber = optionState.viewWeekNumber;
	const viewWeekString = optionState.viewWeekString;
	const weekStringShot = optionState.weekStringShot;
	const viewSubDate = optionState.viewSubDate;
	const weekLocale = optionState.weekLocale;
	const startWeekDay = optionState.startWeekDay;
	const weekEndRatio = optionState.weekEndRatio;

	useEffect(() => {
		// 데이터 호출을 시도했던 년도면
		if (calendarState.doneYearList.includes(thisYear)) return;
		runCalendarState.change('doneYearList', [...calendarState.doneYearList, thisYear]);

		const newList = [...calendarState.publicdayList];
		const apiKey = 'qw05m+7UYOhznr9HvHViWlahG8N7YCJnzY+uwSZueDRnjdW9g5rqpXjQ0S3vFki2K/3dZTczE07cwixOVpZH4A==';

		[
			// {value: 'holiday', label: '공휴일 정보 조회'},
			// {value: 'seasonsday', label: '24절기 정보 조회'},
			{value: 'getRestDeInfo', label: '공휴일 정보 조회'},
			{value: 'getAnniversaryInfo', label: '기념일 정보 조회'},
			{value: 'get24DivisionsInfo', label: '24절기 정보 조회'},
			{value: 'getSundryDayInfo', label: '잡절 정보 조회'},
		].forEach(async ({value}) => {
			try {
				setLoading(true);

				console.log(`${value} ${thisYear} 시도`);
				// const result = await axios.get(`/json/${value}/ko_${thisYear}.json`);
				const result = await axios.get(`/SpcdeInfoService/${value}`, {
					params: {
						ServiceKey: apiKey,
						solYear: thisYear,
						numOfRows: 100,
						_type: 'json',
					},
				});
				const jsonList = [].concat(result.data?.response?.body?.items?.item || []);
				console.log(`${value} ${thisYear} 결과`, jsonList);

				newList = newList.concat(jsonList);
				console.log(`publicdayList`, newList);

				runCalendarState.change('publicdayList', newList);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		});
	}, [thisYear]);

	if (loading) return <div>로딩중..</div>;

	return (
		<div className="p-10">
			<div className="text-3xl">{`${thisYear} ${calendarState.dateTime.setLocale(weekLocale)[weekStringShot ? 'monthShort' : 'monthLong']}`}</div>
			<div className="inline-block w-full">
				<ToyCalendar height="h-[400px]" calendarData={calendarData} optionData={optionData} />
			</div>

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
					checked={viewWeekNumber}
					onChange={() => {
						runOptionState.change('viewWeekNumber', !viewWeekNumber);
					}}
				/>
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={viewWeekString}
					onChange={() => {
						runOptionState.change('viewWeekString', !viewWeekString);
					}}
				/>
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={viewSubDate}
					onChange={() => {
						runOptionState.change('viewSubDate', !viewSubDate);
					}}
				/>
				<SelectBox2
					width="w-[100px]"
					direction={false}
					value={weekEndRatio}
					options={[
						{value: 0.5, label: '0.5'},
						{value: 1, label: '1'},
						{value: 1.5, label: '1.5'},
					]}
					onChange={(event) => {
						const {name} = event.currentTarget;

						runOptionState.change('weekEndRatio', Number(name));
					}}
				/>
				<SelectBox2
					width="w-[100px]"
					direction={false}
					value={startWeekDay}
					options={[
						{value: 7, label: '일'},
						{value: 1, label: '월'},
						{value: 2, label: '화'},
						{value: 3, label: '수'},
						{value: 4, label: '목'},
						{value: 5, label: '금'},
						{value: 6, label: '토'},
					]}
					onChange={(event) => {
						const {name} = event.currentTarget;

						runOptionState.change('startWeekDay', Number(name));
					}}
				/>
				<SelectBox2
					width="w-[100px]"
					direction={false}
					value={weekLocale}
					options={[
						{value: 'ko', label: '한글'},
						{value: 'en', label: '영어'},
						{value: 'ja', label: '한자'},
					]}
					onChange={(event) => {
						const {name} = event.currentTarget;

						runOptionState.change('weekLocale', name);
					}}
				/>
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={weekStringShot}
					onChange={() => {
						runOptionState.change('weekStringShot', !weekStringShot);
					}}
				/>
				<Button
					theme="default-IL-md-md-md"
					icon="bx-leaf"
					text="Reset"
					onClick={() => {
						runOptionState.reset();
					}}
				/>
			</div>
		</div>
	);
};

export default CalendarModule;
