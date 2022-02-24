import classNames from 'classnames';
import {DateTime, Info} from 'luxon';
import {Fragment, useCallback} from 'react';
import {UseData} from './../avengers/vision';

const DayItem = (props) => {
	const {children, className} = props;

	return (
		// <div className={classNames(className, '-mr-px -mt-px border border-red-400')}>
		<div className={classNames(className, 'px-[2px] flex flex-col')}>{children}</div>
	);
};

export const ToyCalendar = (props) => {
	const {width = 'w-full', height = 'h-[500px]', calendarData, optionData} = props;
	const [calendarState, runCalendarState] = calendarData || UseData({dateTime: DateTime.now()});
	const [optionState, runOptionState] = optionData || UseData({});

	const memorialdayList = calendarState.memorialdayList || [];
	const seasondayList = calendarState.seasondayList || [];
	const holidayList = calendarState.holidayList || [];
	const publicdayList = calendarState.publicdayList || [];
	// const startWeekDay = 7; // 월요일(1), 화요일(2)...일요일(7)
	// const startWeekDay = optionState.startWeekDay?.map((val) => val.value)[0]; // 월요일(1), 화요일(2)...일요일(7)
	const startWeekDay = optionState.startWeekDay; // 월요일(1), 화요일(2)...일요일(7)
	const viewWeekNumber = optionState.viewWeekNumber;
	const viewWeekString = optionState.viewWeekString;
	const weekStringShot = optionState.weekStringShot;
	// const weekLocale = 'ja';
	// const weekLocale = optionState.weekLocale?.map((val) => val.value)[0];
	const weekLocale = optionState.weekLocale;
	const viewSubDate = optionState.viewSubDate;
	const weekEndRatio = optionState.weekEndRatio;
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

	return (
		<div className={classNames(width, height, 'grid gap-px rounded-lg ring-2 ring-slate-500 bg-slate-300 overflow-hidden')} style={{gridTemplateColumns: getGridCols(), gridTemplateRows: getGridRows()}}>
			{viewWeekString && (
				<Fragment>
					{viewWeekNumber && <div className="bg-white"></div>}
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
							<DayItem key={`weekString${index}`} className={classNames(mainBgColor, 'justify-center items-center')}>
								<div className={classNames(mainTextColor, 'text-md')}>{mainDateTime.setLocale(weekLocale)[weekStringShot ? 'weekdayShort' : 'weekdayLong']}</div>
							</DayItem>
						);
					})}
				</Fragment>
			)}
			{[...Array(weekLenght)].map((weekVal, i) => {
				const weekDateTime = firstDateTime.plus({weeks: i});

				return (
					<Fragment key={`weekNumber${i}`}>
						{viewWeekNumber && (
							<DayItem className="bg-slate-100 justify-center items-center">
								<div className="text-slate-400 text-sm">{`${weekDateTime.weekNumber}`}</div>
							</DayItem>
						)}
						{[...Array(7)].map((dayVal, k) => {
							const index = k + i * 7;
							const weekIndex = (index + startWeekDay) % 7;
							const mainDateTime = firstDateTime.plus({days: index});
							const subDateTime = mainDateTime.reconfigure({outputCalendar: subDateLocale});
							// 기념일
							const memorialday = '';
							// const memorialday = memorialdayList
							// 	.filter((item) => item.value == mainDateTime.toFormat('LLdd'))
							// 	.map((item) => item.label)
							// 	.join(', ');
							// 절기
							// const seasonday = seasondayList
							// 	.filter((item) => item.value == mainDateTime.toFormat('yyyyLLdd'))
							// 	.map((item) => item.label)
							// 	.join(', ');
							const seasonday = publicdayList
								.filter((item) => item.dateKind == '03' && item.locdate == mainDateTime.toFormat('yyyyLLdd'))
								.map((item) => item.dateName)
								.join(', ');
							// 공휴일
							const holiday = publicdayList
								.filter((item) => item.dateKind == '01' && item.locdate == mainDateTime.toFormat('yyyyLLdd'))
								.map((item) => item.dateName)
								.join(', ');
							// const holiday = holidayList
							// 	.filter((item) => item.value == mainDateTime.toFormat('yyyyLLdd'))
							// 	.map((item) => item.label)
							// 	.join(', ');
							// 오늘
							const today = mainDateTime.toISODate() == nowDateTime.toISODate();
							const mainBgColor = classNames({
								'bg-red-50': weekIndex == 0,
								'bg-blue-50': weekIndex == 6,
								'bg-white': !(weekIndex == 6 || weekIndex == 0),
							});
							const mainTextColor = classNames({
								'ring-slate-500 bg-slate-500 text-white': today,
								'ring-transparent bg-transparent': !today,
								'text-red-500': !today && (weekIndex == 0 || holiday),
								'text-blue-500': !today && weekIndex == 6,
								'text-slate-500': !today && !(weekIndex == 6 || weekIndex == 0 || holiday),
								'-translate-y-2': viewSubDate,
								'translate-y-0': !viewSubDate,
							});
							const mainOpacity = classNames({
								// 'opacity-30': mainDateTime.month != viewDateTime.month,
								// 'opacity-100': mainDateTime.month == viewDateTime.month,
								'brightness-90': mainDateTime.month != viewDateTime.month,
								'brightness-100': mainDateTime.month == viewDateTime.month,
							});
							const subVisible = classNames({
								invisible: !(['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')) || memorialday),
								visible: ['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')) || memorialday,
							});
							const subTextColor = classNames({
								'text-slate-400': !holiday,
								'text-red-400': holiday,
							});

							return (
								<DayItem key={`dayNumber${index}`} className={classNames(mainBgColor, mainOpacity, 'relative justify-center items-center')}>
									<div className={classNames(mainTextColor, 'absolute aspect-square w-9 ring-4 text-3xl text-center rounded-full')}>{mainDateTime.day}</div>
									{/* {viewSubDate && <div className={classNames(subVisible, 'text-xs text-slate-400')}>{memorialday || subDateTime.toFormat('L.d')}</div>} */}
									{viewSubDate && <div className={classNames(subTextColor, 'absolute left-1 right-1 translate-y-4 truncate whitespace-nowrap text-xs text-center')}>{holiday || seasonday || memorialday || subDateTime.toFormat('L.d')}</div>}
								</DayItem>
							);
						})}
					</Fragment>
				);
			})}
		</div>
	);
};

export default ToyCalendar;
