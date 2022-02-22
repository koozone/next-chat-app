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

	const startWeekMonday = false;
	const viewWeekNumber = true;
	const viewWeekString = true;
	const weekStringShot = true;
	const weekLocale = 'en';
	const viewSubDate = true;
	const subDateLocale = 'chinese';
	const colList = ['0.25fr', '1fr', '1fr', '1fr', '1fr', '1fr', '0.5fr', '0.5fr'];
	const rowList = ['0.5fr', '1fr', '1fr', '1fr', '1fr', '1fr'];

	// const dateTime = DateTime.fromISO('2022-W02-1');
	// const nowDateTime = DateTime.local(2022, 9, 3);
	const nowDateTime = stateData?.dateTime || DateTime.now();
	const startFirstDateTime = nowDateTime.startOf('month');
	const startMondayDateTime = startFirstDateTime.minus({days: (startFirstDateTime.weekday - 1) % 7});
	const startViewDateTime = startMondayDateTime.minus({days: startWeekMonday ? 0 : 1});
	// const weekday = startViewDateTime.weekday;
	// const weekNumber = dateTime.startOf('month').weekNumber;
	// const startViewDateTime = DateTime.fromISO(`${dateTime.year}-W${String(weekNumber).padStart(2, '0')}-1`);
	// const dateTime3 = nowDateTime.endOf('month');
	// const dateTime2 = nowDateTime.plus({hours: 3, minutes: 2});
	// var f = {month: 'long', day: 'numeric'};

	// const gridCols = classNames(
	// 	startWeekMonday
	// 		? {
	// 				[`grid-cols-[40px_80px_80px_80px_80px_80px_40px_40px]`]: viewWeekNumber,
	// 				'grid-cols-[80px_80px_80px_80px_80px_40px_40px]': !viewWeekNumber,
	// 		  }
	// 		: {
	// 				'grid-cols-[40px_40px_80px_80px_80px_80px_80px_40px]': viewWeekNumber,
	// 				'grid-cols-[40px_80px_80px_80px_80px_80px_40px]': !viewWeekNumber,
	// 		  }
	// );
	const aaa = useCallback((valueList, indexList) => {
		return indexList.map((val) => valueList[val]).join(' ');
	}, []);

	const gridRows = aaa(rowList, [0, 1, 2, 3, 4, 5]);
	const gridCols = classNames(
		startWeekMonday
			? {
					[`${aaa(colList, [0, 1, 2, 3, 4, 5, 6, 7])}`]: viewWeekNumber,
					[`${aaa(colList, [1, 2, 3, 4, 5, 6, 7])}`]: !viewWeekNumber,
			  }
			: {
					[`${aaa(colList, [0, 7, 1, 2, 3, 4, 5, 6])}`]: viewWeekNumber,
					[`${aaa(colList, [7, 1, 2, 3, 4, 5, 6])}`]: !viewWeekNumber,
			  }
	);
	console.log('weekYear', DateTime.local(2022, 1, 3).weekYear, DateTime.local(2022, 1, 3).weekNumber, startMondayDateTime.toString());
	return (
		<div className={classNames(width, height, 'grid gap-px rounded-lg ring-2 ring-slate-500 bg-slate-300 overflow-hidden')} style={{gridTemplateColumns: gridCols, gridTemplateRows: gridRows}}>
			{viewWeekString && (
				<Fragment>
					{viewWeekNumber && <div className="bg-white"></div>}
					{[...Array(7)].map((dayVal, k) => {
						const index = k;
						const weekIndex = (index + (startWeekMonday ? 1 : 0)) % 7;
						const viewDateTime = startViewDateTime.plus({days: index});
						const bgColor = classNames('bg-slate-100');
						const textColor = classNames({
							'text-slate-500': weekIndex != 0 && weekIndex != 6,
							'text-blue-500': weekIndex == 6,
							'text-red-500': weekIndex == 0,
						});

						return (
							<DayItem key={`weekString${index}`} className={classNames(bgColor, 'justify-center items-center')}>
								<div className={classNames(textColor, 'text-md')}>{viewDateTime.setLocale(weekLocale)[weekStringShot ? 'weekdayShort' : 'weekdayLong']}</div>
							</DayItem>
						);
					})}
				</Fragment>
			)}
			{[...Array(5)].map((weekVal, i) => {
				// const weekDateTime = startViewDateTime.plus({weeks: i});
				const weekDateTime = startMondayDateTime.plus({weeks: i});

				return (
					<Fragment key={`weekNumber${i}`}>
						{viewWeekNumber && (
							<DayItem className="bg-slate-100 justify-center items-center">
								<div className="text-slate-400 text-sm">{`${weekDateTime.weekNumber}`}</div>
							</DayItem>
						)}
						{[...Array(7)].map((dayVal, k) => {
							const index = k + i * 7;
							const weekIndex = (index + (startWeekMonday ? 1 : 0)) % 7;
							const viewDateTime = startViewDateTime.plus({days: index});
							const subDateTime = viewDateTime.reconfigure({outputCalendar: subDateLocale});
							const bgColor = classNames({
								'bg-white': weekIndex != 0 && weekIndex != 6,
								'bg-blue-50': weekIndex == 6,
								'bg-red-50': weekIndex == 0,
							});
							const textColor = classNames({
								'text-slate-500': weekIndex != 0 && weekIndex != 6,
								'text-blue-500': weekIndex == 6,
								'text-red-500': weekIndex == 0,
							});
							const opacity = classNames({
								'opacity-30': viewDateTime.month != nowDateTime.month,
								'opacity-100': viewDateTime.month == nowDateTime.month,
							});
							const bbb = classNames({
								invisible: !['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')),
								visible: ['1', '5', '10', '15', '20', '25', '30'].includes(subDateTime.toFormat('d')),
							});

							return (
								<DayItem key={`dayNumber${index}`} className={classNames(bgColor, opacity, 'justify-center items-center')}>
									<div className={classNames(textColor, 'text-3xl')}>{viewDateTime.day}</div>
									{viewSubDate && <div className={classNames(bbb, 'text-xs text-slate-400')}>{subDateTime.toFormat('L.d')}</div>}
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
