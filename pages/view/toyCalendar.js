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
	const {width = 'w-full', height = 'h-[500px]', data} = props;
	const [stateData, runStateData] = data || UseData({dateTime: DateTime.now()});

	// const startWeekDay = 7; // 월요일(1), 화요일(2)...일요일(7)
	const startWeekDay = stateData.startWeekDay?.map((val) => val.value)[0]; // 월요일(1), 화요일(2)...일요일(7)
	const viewWeekNumber = stateData.viewWeekNumber;
	const viewWeekString = stateData.viewWeekString;
	const weekStringShot = stateData.weekStringShot;
	// const weekLocale = 'ja';
	const weekLocale = stateData.weekLocale?.map((val) => val.value).join(', ');
	const viewSubDate = stateData.viewSubDate;
	const subDateLocale = 'chinese';
	const colList = ['30px', '1fr', '1fr', '1fr', '1fr', '1fr', '0.5fr', '0.5fr'];
	const rowList = ['40px', '1fr', '1fr', '1fr', '1fr', '1fr', '1fr'];

	const nowDateTime = stateData?.dateTime || DateTime.now();
	const startDateTime = nowDateTime.startOf('month');
	const endDateTime = nowDateTime.endOf('month');
	const viewDateTime = startDateTime.minus({days: (7 + startDateTime.weekday - startWeekDay) % 7});
	const weekLenght = Math.ceil(endDateTime.diff(viewDateTime, 'days').as('days') / 7);

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
	}, [startWeekDay, viewWeekNumber]);

	return (
		<div className={classNames(width, height, 'grid gap-px rounded-lg ring-2 ring-slate-500 bg-slate-300 overflow-hidden')} style={{gridTemplateColumns: getGridCols(), gridTemplateRows: getGridRows()}}>
			{viewWeekString && (
				<Fragment>
					{viewWeekNumber && <div className="bg-white"></div>}
					{[...Array(7)].map((dayVal, k) => {
						const index = k;
						const weekIndex = (index + startWeekDay) % 7;
						const mainDateTime = viewDateTime.plus({days: index});
						const mainBgColor = classNames('bg-slate-100');
						const mainTextColor = classNames({
							'text-slate-500': weekIndex != 0 && weekIndex != 6,
							'text-blue-500': weekIndex == 6,
							'text-red-500': weekIndex == 0,
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
				const weekDateTime = viewDateTime.plus({weeks: i});

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
							const mainDateTime = viewDateTime.plus({days: index});
							const subDateTime = mainDateTime.reconfigure({outputCalendar: subDateLocale});
							const mainBgColor = classNames({
								'bg-white': weekIndex != 0 && weekIndex != 6,
								'bg-blue-50': weekIndex == 6,
								'bg-red-50': weekIndex == 0,
							});
							const mainTextColor = classNames({
								'text-slate-500': weekIndex != 0 && weekIndex != 6,
								'text-blue-500': weekIndex == 6,
								'text-red-500': weekIndex == 0,
							});
							const mainOpacity = classNames({
								'opacity-30': mainDateTime.month != nowDateTime.month,
								'opacity-100': mainDateTime.month == nowDateTime.month,
							});
							const subVisible = classNames({
								invisible: !['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')),
								visible: ['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')),
							});

							return (
								<DayItem key={`dayNumber${index}`} className={classNames(mainBgColor, mainOpacity, 'justify-center items-center')}>
									<div className={classNames(mainTextColor, 'text-3xl')}>{mainDateTime.day}</div>
									{viewSubDate && <div className={classNames(subVisible, 'text-xs text-slate-400')}>{subDateTime.toFormat('L.d')}</div>}
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
