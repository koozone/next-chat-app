import axios from 'axios';
import classNames from 'classnames';
import {DateTime, Info} from 'luxon';
import {Fragment, useCallback} from 'react';
import {UseData} from './../avengers/vision';

// const DayItem = (props) => {
// 	const {children, className} = props;

// 	return (
// 		// <div className={classNames(className, '-mr-px -mt-px border border-red-400')}>
// 		<div className={classNames(className, 'px-[2px] flex flex-col')}>{children}</div>
// 	);
// };

export const ToyCalendar = (props) => {
	const {width = 'w-full', height = 'h-[500px]', calendarData, optionData} = props;
	const [calendarState, runCalendarState] = calendarData || UseData({dateTime: DateTime.now()});
	const [optionState, runOptionState] = optionData || UseData({});

	const memorialdayList = calendarState.memorialdayList || [];
	const seasondayList = calendarState.seasondayList || [];
	const holidayList = calendarState.holidayList || [];
	let publicdayList = calendarState.publicdayList || [];
	let privatedayList = calendarState.privatedayList || [];
	const [googleCalendar, runGoogleCalendar] = calendarState.useGoogleCalendar;

	// const startWeekDay = 7; // 월요일(1), 화요일(2)...일요일(7)
	// const startWeekDay = optionState.startWeekDay?.map((val) => val.value)[0]; // 월요일(1), 화요일(2)...일요일(7)
	const startWeekDay = optionState.startWeekDay; // 월요일(1), 화요일(2)...일요일(7)
	const viewWeekNumber = optionState.viewWeekNumber;
	const viewWeekString = optionState.viewWeekString;
	const weekStringShot = optionState.weekStringShot;
	// const weekLocale = 'ja';
	// const weekLocale = optionState.weekLocale?.map((val) => val.value)[0];
	const weekLocale = optionState.weekLocale;
	const weekEndRatio = optionState.weekEndRatio;
	// 표기 우선순위 적용한 특일 값
	let subDateKind = [];
	if (optionState.subDateKind.includes('google')) subDateKind = subDateKind.concat('google');
	if (optionState.subDateKind.includes('01')) subDateKind = subDateKind.concat('01');
	if (optionState.subDateKind.includes('03')) subDateKind = subDateKind.concat('03');
	if (optionState.subDateKind.includes('04')) subDateKind = subDateKind.concat('04');
	if (optionState.subDateKind.includes('02')) subDateKind = subDateKind.concat('02');
	if (optionState.subDateKind.includes('lunar')) subDateKind = subDateKind.concat('lunar');
	// const viewSubDate = optionState.viewSubDate;
	const viewSubDate = subDateKind.length ? true : false;
	const fullLunarDate = optionState.fullLunarDate;
	const subDateLocale = 'chinese';
	const colList = ['30px', '1fr', '1fr', '1fr', '1fr', '1fr', `${weekEndRatio}fr`, `${weekEndRatio}fr`];
	const rowList = ['40px', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr'];

	const nowDateTime = DateTime.now();
	const viewDateTime = calendarState?.dateTime || nowDateTime;
	const startDateTime = viewDateTime.startOf('month');
	const endDateTime = viewDateTime.endOf('month');
	const firstDateTime = startDateTime.minus({days: (7 + startDateTime.weekday - startWeekDay) % 7});
	const weekLenght = Math.ceil(endDateTime.diff(firstDateTime, 'days').as('days') / 7);

	const getGridRows = useCallback(() => {
		const weekRowList = viewWeekString ? [rowList[0]] : [];
		const dayRowList = [...Array(weekLenght)].map((val, index) => {
			const addNumber = 1;
			const rowIndex = index + addNumber;

			return rowList[rowIndex];
		});

		return [...weekRowList, ...dayRowList].join(' ');
	}, [weekLenght, viewWeekString]);

	const getGridCols = useCallback(() => {
		const weekColList = viewWeekNumber ? [colList[0]] : [];
		const dayColList = [...Array(7)].map((val, index) => {
			const addNumber = 1;
			const colIndex = ((index + (startWeekDay - 1)) % 7) + addNumber;

			return colList[colIndex];
		});

		return [...weekColList, ...dayColList].join(' ');
	}, [startWeekDay, viewWeekNumber, weekEndRatio]);

	// // const gapi = window.gapi;
	// const CLIENT_ID = '7342048109-qrvboq0r7ac2uv7g3btugalg1casg6gc.apps.googleusercontent.com';
	// const API_KEY = 'AIzaSyA7V880ZtU-8xnFehGKdMAYF0Y8zscEzJA';
	// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
	// const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	// const insertEvent = async ({isoDate}) => {
	// 	const gapi = await import('gapi-script').then((pack) => pack.gapi);
	// 	console.log('insertEvent');
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
	// 				const event = {
	// 					summary: 'Very Awesome Event!', // 일정 제목
	// 					location: '800 Howard St., San Francisco, CA 94103', // 일정 장소
	// 					description: 'Really great refreshments', // 일정 설명
	// 					start: {
	// 						// 시작 날짜
	// 						date: DateTime.fromISO(isoDate).toISODate(),
	// 						// dateTime: `2022-03-03T00:00:00Z`,
	// 						// timeZone: 'Asia/Seoul',
	// 					},
	// 					end: {
	// 						// 종료 날짜
	// 						date: DateTime.fromISO(isoDate).toISODate(),
	// 						// dateTime: `2022-03-03T23:59:59Z`,
	// 						// timeZone: 'Asia/Seoul',
	// 					},
	// 					recurrence: ['RRULE:FREQ=DAILY;COUNT=2'], // 반복 지정 (일단위; 총 2번 반복)
	// 					attendees: [{email: 'lpage@example.com'}, {email: 'sbrin@example.com'}], // 참석자
	// 					reminders: {
	// 						// 알림 설정
	// 						useDefault: false,
	// 						overrides: [
	// 							{method: 'email', minutes: 24 * 60}, // 하루전 알림
	// 							{method: 'popup', minutes: 10}, // 10분전 알림
	// 						],
	// 					},
	// 				};

	// 				const request = window.gapi.client.calendar.events.insert({
	// 					// 캘린더 ID (기본 캘린더 사용시 'primary')
	// 					calendarId: '3fube0lde5d7hahjim83l664so@group.calendar.google.com',
	// 					resource: event,
	// 				});

	// 				request.execute((event) => {
	// 					console.log(event);
	// 					// window.open(event.htmlLink);
	// 				});
	// 			});
	// 	});
	// };

	return (
		<div className={classNames(width, height, 'grid gap-px rounded-lg ring-2 ring-slate-500 bg-slate-300 overflow-hidden')} style={{gridTemplateColumns: getGridCols(), gridTemplateRows: getGridRows()}}>
			{viewWeekString && (
				<Fragment>
					{viewWeekNumber && (
						<div className="bg-slate-100 flex justify-center items-center">
							<div className="text-slate-400 text-sm">CW</div>
						</div>
					)}
					{[...Array(7)].map((dayVal, k) => {
						const index = k;
						const weekIndex = (index + startWeekDay) % 7;
						const mainDateTime = firstDateTime.plus({days: index});
						const mainBgColor = classNames('bg-slate-100');
						const mainTextColor = classNames({
							'text-red-500': weekIndex == 0,
							'text-blue-500': weekIndex == 6,
							'text-slate-500': !(weekIndex == 6 || weekIndex == 0),
						});

						return (
							<div key={`weekString${index}`} className={classNames(mainBgColor, 'flex justify-center items-center')}>
								<div className={classNames(mainTextColor, 'text-md')}>{mainDateTime.setLocale(weekLocale)[weekStringShot ? 'weekdayShort' : 'weekdayLong']}</div>
							</div>
						);
					})}
				</Fragment>
			)}
			{[...Array(weekLenght)].map((weekVal, i) => {
				const weekDateTime = firstDateTime.plus({weeks: i, days: 1});

				return (
					<Fragment key={`weekNumber${i}`}>
						{viewWeekNumber && (
							<div className="bg-slate-100 flex justify-center items-center">
								<div className="text-slate-400 text-sm">{`${weekDateTime.weekNumber}`}</div>
							</div>
						)}
						{[...Array(7)].map((dayVal, k) => {
							const index = k + i * 7;
							const weekIndex = (index + startWeekDay) % 7;
							const mainDateTime = firstDateTime.plus({days: index});
							const mainFormat = mainDateTime.toFormat('yyyyLLdd');
							const subDateTime = mainDateTime.reconfigure({outputCalendar: subDateLocale});

							const dday = Math.floor(nowDateTime.diff(mainDateTime, 'days').as('days'));
							// // 공휴일
							// const holiday = publicdayList
							// 	.filter((item) => item.dateKind == '01' && item.locdate == mainFormat)
							// 	.map((item) => item.dateName)
							// 	.join(', ');
							// // 기념일
							// const memorialday = publicdayList
							// 	.filter((item) => item.dateKind == '02' && item.locdate == mainFormat)
							// 	.map((item) => item.dateName)
							// 	.join(', ');
							// // 24절기
							// const seasonday = publicdayList
							// 	.filter((item) => item.dateKind == '03' && item.locdate == mainFormat)
							// 	.map((item) => item.dateName)
							// 	.join(', ');
							// // 잡절
							// const sundryday = publicdayList
							// 	.filter((item) => item.dateKind == '04' && item.locdate == mainFormat)
							// 	.map((item) => item.dateName)
							// 	.join(', ');

							// 음력 정보 추가
							if (fullLunarDate || ['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d'))) {
								publicdayList = publicdayList.concat({dateKind: 'lunar', dateName: subDateTime.toFormat('L.d'), locdate: mainFormat});
							}

							const privateList = privatedayList.filter((item) => item.start?.dateTime?.indexOf(mainDateTime.toISODate()) > -1 || item.start?.date == mainDateTime.toFormat('yyyy-LL-dd'));
							// 해당일 모든 일정
							const publicList = publicdayList.filter((item) => item.locdate == mainFormat);
							// 해당일 표기 일정
							let viewList = [];
							// 특일 우선순위대로 정보 발췌
							subDateKind.forEach((element) => {
								if (!viewList.length) {
									viewList = viewList.concat(publicList.filter((item) => item.dateKind == element));
								}
							});

							// 오늘여부
							const isToday = mainDateTime.toISODate() == nowDateTime.toISODate();
							// 휴일여부
							const isMainHoliday = publicList.filter((item) => item.isHoliday == 'Y').length ? true : false;
							const isSubHoliday = viewList.filter((item) => item.isHoliday == 'Y').length ? true : false;
							const mainBgColor = classNames({
								'bg-red-50': weekIndex == 0,
								'bg-blue-50': weekIndex == 6,
								'bg-white': !(weekIndex == 6 || weekIndex == 0),
							});
							const mainTextColor = classNames({
								'ring-slate-500 bg-slate-500 text-white': isToday,
								'ring-transparent bg-transparent': !isToday,
								'text-red-500': !isToday && (weekIndex == 0 || isMainHoliday),
								'text-blue-500': !isToday && weekIndex == 6,
								'text-slate-500': !isToday && !(weekIndex == 6 || weekIndex == 0 || isMainHoliday),
								'-translate-y-2': viewSubDate,
								'translate-y-0': !viewSubDate,
							});
							const mainOpacity = classNames({
								// 'opacity-30': mainDateTime.month != viewDateTime.month,
								// 'opacity-100': mainDateTime.month == viewDateTime.month,
								'brightness-90': mainDateTime.month != viewDateTime.month,
								'brightness-100': mainDateTime.month == viewDateTime.month,
							});
							// const subVisible = classNames({
							// 	invisible: !(['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')) || memorialday),
							// 	visible: ['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')) || memorialday,
							// });
							const subTextColor = classNames({
								'text-red-400': isSubHoliday,
								'text-indigo-400': !isSubHoliday && viewList.filter((item) => item.dateKind == '01').length,
								'text-blue-400': !isSubHoliday && viewList.filter((item) => item.dateKind == '03').length,
								'text-sky-400': !isSubHoliday && viewList.filter((item) => item.dateKind == '04').length,
								'text-green-400': !isSubHoliday && viewList.filter((item) => item.dateKind == '02').length,
								'text-slate-400': !isSubHoliday,
							});

							return (
								<div key={`dayNumber${index}`} className={classNames(mainBgColor, mainOpacity, 'relative flex flex-col justify-center items-center')}>
									<div
										className={classNames(mainTextColor, 'absolute aspect-square w-9 ring-4 text-3xl text-center rounded-full')}
										onClick={(event) => {
											// insertEvent({isoDate: mainDateTime.toISODate()});
											runGoogleCalendar.add({isoDate: mainDateTime.toISODate()});
										}}
									>
										{mainDateTime.day}
									</div>
									{/* {viewSubDate && <div className={classNames(subVisible, 'text-xs text-slate-400')}>{memorialday || subDateTime.toFormat('L.d')}</div>} */}
									{/* {viewSubDate && (
										<div className={classNames(subTextColor, 'absolute left-1 right-1 top-1/2 translate-y-2 truncate whitespace-nowrap text-xs text-center')}>
											{viewList.map((item) => item.dateName).join(', ')}
										</div>
									)} */}
									{/* {viewSubDate && (
										<div className="absolute left-1 right-1 top-1/2 translate-y-2 list-disc list-inside -space-y-[5px] text-xs text-center">
											{privateList.map((item, index) => (
												<div
													key={`google${index}`}
													className="truncate whitespace-nowrap marker:text-sky-400 text-slate-400 before:content-['●_'] before:text-[0.5rem] before:text-red-500 before:align-middle"
													onClick={(event) => {
														runGoogleCalendar.remove({eventId: item.id});
													}}
												>
													{item.summary}
												</div>
											))}
										</div>
									)} */}
									{viewSubDate ? (
										privateList.length && subDateKind.includes('google') ? (
											<div className="absolute left-1 right-1 top-1/2 translate-y-2 list-disc list-inside -space-y-[5px] text-xs text-center">
												{privateList.map((item, index) => (
													<div
														key={`google${index}`}
														className="truncate whitespace-nowrap marker:text-sky-400 text-slate-400 before:content-['●_'] before:text-[0.5rem] before:text-red-500 before:align-middle"
														onClick={(event) => {
															runGoogleCalendar.remove({eventId: item.id});
														}}
													>
														{`${item.summary} (D${dday > 0 ? '+' : '-'}${Math.abs(dday)})`}
													</div>
												))}
											</div>
										) : (
											<div className={classNames(subTextColor, 'absolute left-1 right-1 top-1/2 translate-y-2 truncate whitespace-nowrap text-xs text-center')}>
												{/* {holiday || sundryday || seasonday || memorialday || (['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')) && subDateTime.toFormat('L.d'))} */}
												{viewList.map((item) => item.dateName).join(', ')}
											</div>
										)
									) : (
										<></>
									)}
								</div>
							);
						})}
					</Fragment>
				);
			})}
		</div>
	);
};

export default ToyCalendar;
