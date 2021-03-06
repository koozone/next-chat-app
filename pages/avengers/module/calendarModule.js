import axios from 'axios';
import {DateTime} from 'luxon';
import {useCallback, useEffect, useState} from 'react';
import {Button, Toggle} from '../../component/ui_ds7';
import {SelectBox as SelectBox2} from '../antMan';
import ToyCalendar from '../../view/toyCalendar';
import {UseData} from '../vision';
import {UseCalendar} from '../../hook/useCalendar';

export const CalendarModule = () => {
	const [loading, setLoading] = useState(false);
	const useGoogleCalendar = UseCalendar();
	const calendarData = UseData({
		dateTime: DateTime.local(2022, 9, 3),
		// dateTime: DateTime.now(),
		doneYearList: [],
		publicdayList: [],
		privatedayList: [],
		useGoogleCalendar: useGoogleCalendar,
	});
	const optionData = UseData({
		viewWeekNumber: true,
		viewWeekString: true,
		weekStringShot: true,
		// viewSubDate: true,
		fullLunarDate: false,
		weekLocale: 'ko',
		startWeekDay: 7,
		weekEndRatio: 0.5,
		subDateKind: ['google', '01', '03', '04', '02', 'lunar'],
	});
	const [calendarState, runCalendarState] = calendarData;
	const [optionState, runOptionState] = optionData;

	const viewYear = calendarState.dateTime.year;
	const viewWeekNumber = optionState.viewWeekNumber;
	const viewWeekString = optionState.viewWeekString;
	const weekStringShot = optionState.weekStringShot;
	// const viewSubDate = optionState.viewSubDate;
	const weekLocale = optionState.weekLocale;
	const startWeekDay = optionState.startWeekDay;
	const weekEndRatio = optionState.weekEndRatio;
	const subDateKind = optionState.subDateKind;
	const fullLunarDate = optionState.fullLunarDate;

	const changeSubDateKind = useCallback(
		(event) => {
			const {name, checked} = event.currentTarget;

			if (checked) {
				runOptionState.change('subDateKind', subDateKind.concat(name));
			} else {
				runOptionState.change(
					'subDateKind',
					subDateKind.filter((item) => item != name)
				);
			}
		},
		[subDateKind]
	);

	// 구글 calendar 테스트
	// useEffect(async () => {
	// 	const newList = [...calendarState.privatedayList];

	// 	const googleKey = 'AIzaSyA7V880ZtU-8xnFehGKdMAYF0Y8zscEzJA';
	// 	// const calendarID = 'qduatr3seur835pk4aolok2900@group.calendar.google.com';
	// 	// const calendarID = 'ko.south_korea#holiday@group.v.calendar.google.com';
	// 	const calendarID = '3fube0lde5d7hahjim83l664so@group.calendar.google.com';
	// 	const minTime = `${viewYear}-01-01T00:00:00Z`;
	// 	const maxTime = `${viewYear}-12-31T23:59:59Z`;

	// 	const result = await axios.get(`/calendars/${encodeURIComponent(calendarID)}/events`, {
	// 		params: {
	// 			key: googleKey,
	// 			// timeMax: maxTime,
	// 			// timeMin: minTime,
	// 			// orderBy: 'startTime',
	// 			// singleEvents: 'true',
	// 		},
	// 	});
	// 	const jsonList = [].concat(result.data?.items || []);
	// 	console.log(`google ${viewYear} 결과`, jsonList);

	// 	newList = newList.concat(jsonList);
	// 	console.log(`privatedayList`, newList);

	// 	runCalendarState.change('privatedayList', newList);
	// }, []);

	// const gapi = window.gapi;

	// const CLIENT_ID = '7342048109-qrvboq0r7ac2uv7g3btugalg1casg6gc.apps.googleusercontent.com';
	// const API_KEY = 'AIzaSyA7V880ZtU-8xnFehGKdMAYF0Y8zscEzJA';
	// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
	// const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	// const listEvent = useCallback(async () => {
	// 	const gapi = await import('gapi-script').then((pack) => pack.gapi);
	// 	console.log('listEvent');
	// 	gapi.load('client:auth2', () => {
	// 		gapi.client.init({
	// 			apiKey: API_KEY,
	// 			clientId: CLIENT_ID,
	// 			discoveryDocs: DISCOVERY_DOCS,
	// 			scope: SCOPES,
	// 		});

	// 		gapi.client.load('calendar', 'v3', () => console.log('bam!'));

	// 		gapi.auth2
	// 			.getAuthInstance()
	// 			.signIn()
	// 			.then(() => {
	// 				const request = window.gapi.client.calendar.events.list({
	// 					calendarId: '3fube0lde5d7hahjim83l664so@group.calendar.google.com',
	// 					// resource: event,
	// 				});

	// 				request.execute((event) => {
	// 					console.log(event);

	// 					runCalendarState.change('privatedayList', event.items);
	// 				});
	// 			});
	// 	});
	// }, []);

	const [googleCalendar, runGoogleCalendar] = useGoogleCalendar;

	useEffect(() => {
		// listEvent();
		runGoogleCalendar.load();
	}, []);

	useEffect(async () => {
		runCalendarState.change('privatedayList', googleCalendar);
	}, [googleCalendar]);

	useEffect(async () => {
		// 데이터 호출을 시도했던 년도면
		if (calendarState.doneYearList.includes(viewYear)) return;
		runCalendarState.change('doneYearList', [...calendarState.doneYearList, viewYear]);

		const newList = [...calendarState.publicdayList];
		const apiKey = 'qw05m+7UYOhznr9HvHViWlahG8N7YCJnzY+uwSZueDRnjdW9g5rqpXjQ0S3vFki2K/3dZTczE07cwixOVpZH4A==';

		[
			{value: 'holiday', label: '공휴일 정보 조회'},
			{value: 'mamorialday', label: '기념일 정보 조회'},
			{value: 'seasonsday', label: '24절기 정보 조회'},
			{value: 'sundryday', label: '잡절 정보 조회'},
			// {value: 'getRestDeInfo', label: '공휴일 정보 조회'},
			// {value: 'getAnniversaryInfo', label: '기념일 정보 조회'},
			// {value: 'get24DivisionsInfo', label: '24절기 정보 조회'},
			// {value: 'getSundryDayInfo', label: '잡절 정보 조회'},
		].forEach(async ({value}) => {
			try {
				setLoading(true);

				console.log(`${value} ${viewYear} 시도`);
				const result = await axios.get(`/json/${value}/ko_${viewYear}.json`);
				// const result = await axios.get(`/SpcdeInfoService/${value}`, {
				// 	params: {
				// 		ServiceKey: apiKey,
				// 		solYear: viewYear,
				// 		numOfRows: 100,
				// 		_type: 'json',
				// 	},
				// });
				const jsonList = [].concat(result.data?.response?.body?.items?.item || []);
				console.log(`${value} ${viewYear} 결과`, jsonList);

				newList = newList.concat(jsonList);
				console.log(`publicdayList`, newList);

				runCalendarState.change('publicdayList', newList);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		});
	}, [viewYear]);

	// if (loading) return <div>로딩중..</div>;

	return (
		<div className="p-10">
			{loading && <div className="absolute left-0 top-0">로딩중..</div>}

			<div className="text-3xl">{`${viewYear} ${calendarState.dateTime.setLocale(weekLocale)[weekStringShot ? 'monthShort' : 'monthLong']}`}</div>
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
				<Toggle theme="default-IL-md-md-md::danger-IL-md-md-md" text="일정" name="google" checked={subDateKind.includes('google')} onChange={changeSubDateKind} />
				<Toggle theme="default-IL-md-md-md::danger-IL-md-md-md" text="공휴일" name="01" checked={subDateKind.includes('01')} onChange={changeSubDateKind} />
				<Toggle theme="default-IL-md-md-md::danger-IL-md-md-md" text="24절기" name="03" checked={subDateKind.includes('03')} onChange={changeSubDateKind} />
				<Toggle theme="default-IL-md-md-md::danger-IL-md-md-md" text="잡절" name="04" checked={subDateKind.includes('04')} onChange={changeSubDateKind} />
				<Toggle theme="default-IL-md-md-md::danger-IL-md-md-md" text="기념일" name="02" checked={subDateKind.includes('02')} onChange={changeSubDateKind} />
				<Toggle theme="default-IL-md-md-md::danger-IL-md-md-md" text="음력" name="lunar" checked={subDateKind.includes('lunar')} onChange={changeSubDateKind} />
				<Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={fullLunarDate}
					onChange={() => {
						runOptionState.change('fullLunarDate', !fullLunarDate);
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
				{/* <Toggle
					theme="default-IL-md-md-md::danger-IL-md-md-md"
					icon="bxs-chevrons-right::bx-leaf"
					checked={viewSubDate}
					onChange={() => {
						runOptionState.change('viewSubDate', !viewSubDate);
					}}
				/> */}
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
						{value: 7, label: '일요일'},
						{value: 1, label: '월요일'},
						{value: 2, label: '화요일'},
						{value: 3, label: '수요일'},
						{value: 4, label: '목요일'},
						{value: 5, label: '금요일'},
						{value: 6, label: '토요일'},
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
