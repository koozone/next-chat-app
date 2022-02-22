import classNames from 'classnames';
import {DateTime, Info} from 'luxon';
import {Fragment} from 'react';

const DayItem = (props) => {
	const {children, className} = props;

	return (
		// <div className={classNames(className, '-mr-px -mt-px border border-red-400')}>
		<div className={classNames(className, 'px-[2px] flex flex-col')}>{children}</div>
	);
};

export const ToyCalendar = (props) => {
	const {width = 'w-full', height = 'h-[500px]', data} = props;
	const [stateData, runStateData] = data;

	const startWeekMonday = false;
	const viewWeekNumber = true;
	const viewWeekString = true;
	const weekStringShot = true;
	const weekLocale = 'en';
	const viewSubDate = true;
	const subDateLocale = 'chinese';
	const colList = ['0.5fr', '1fr', '1fr', '1fr', '1fr', '1fr', '0.5fr', '0.5fr'];
	const rowList = ['0.5fr', '1fr', '1fr', '1fr', '1fr', '1fr'];

	// const dateTime = DateTime.fromISO('2022-W02-1');
	// const nowDateTime = DateTime.local(2022, 9, 3);
	const nowDateTime = stateData?.dateTime || DateTime.now();
	const firstDateTime = nowDateTime.startOf('month');
	const startDateTime = firstDateTime.minus({days: firstDateTime.weekday - (startWeekMonday ? 1 : 0)});
	// const weekday = startDateTime.weekday;
	// const weekNumber = dateTime.startOf('month').weekNumber;
	// const startDateTime = DateTime.fromISO(`${dateTime.year}-W${String(weekNumber).padStart(2, '0')}-1`);
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
	const gridRows = rowList.join(' ');
	const gridCols = classNames(
		startWeekMonday
			? {
					[`${colList[0]} ${colList[1]} ${colList[2]} ${colList[3]} ${colList[4]} ${colList[5]} ${colList[6]} ${colList[7]}`]: viewWeekNumber,
					[`${colList[1]} ${colList[2]} ${colList[3]} ${colList[4]} ${colList[5]} ${colList[6]} ${colList[7]}`]: !viewWeekNumber,
			  }
			: {
					[`${colList[0]} ${colList[7]} ${colList[1]} ${colList[2]} ${colList[3]} ${colList[4]} ${colList[5]} ${colList[6]}`]: viewWeekNumber,
					[`${colList[7]} ${colList[1]} ${colList[2]} ${colList[3]} ${colList[4]} ${colList[5]} ${colList[6]}`]: !viewWeekNumber,
			  }
	);

	return (
		<div className={classNames(width, height, 'grid gap-px rounded-lg ring-2 ring-slate-500 bg-slate-300 overflow-hidden')} style={{gridTemplateColumns: gridCols, gridTemplateRows: gridRows}}>
			{viewWeekString && (
				<Fragment>
					{viewWeekNumber && <div className="bg-white"></div>}
					{[...Array(7)].map((dayVal, k) => {
						const index = k;
						const weekIndex = (index + (startWeekMonday ? 1 : 0)) % 7;
						const dateTime = startDateTime.plus({days: index});
						const bgColor = classNames('bg-slate-100');
						const textColor = classNames({
							'text-slate-500': weekIndex != 0 && weekIndex != 6,
							'text-blue-500': weekIndex == 6,
							'text-red-500': weekIndex == 0,
						});

						return (
							<DayItem key={`weekString${index}`} className={classNames(bgColor, 'justify-center items-center')}>
								<div className={classNames(textColor, 'text-md')}>{dateTime.setLocale(weekLocale)[weekStringShot ? 'weekdayShort' : 'weekdayLong']}</div>
							</DayItem>
						);
					})}
				</Fragment>
			)}
			{[...Array(5)].map((weekVal, i) => {
				const weekDateTime = startDateTime.plus({weeks: i});

				return (
					<Fragment key={`weekNumber${i}`}>
						{viewWeekNumber && (
							<DayItem className="bg-slate-100 justify-center items-center">
								<div className="text-slate-400 text-sm">{`W${weekDateTime.weekNumber}`}</div>
							</DayItem>
						)}
						{[...Array(7)].map((dayVal, k) => {
							const index = k + i * 7;
							const weekIndex = (index + (startWeekMonday ? 1 : 0)) % 7;
							const dateTime = startDateTime.plus({days: index});
							const subDateTime = dateTime.reconfigure({outputCalendar: subDateLocale});
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
								'opacity-30': dateTime.month != nowDateTime.month,
								'opacity-100': dateTime.month == nowDateTime.month,
							});

							return (
								<DayItem key={`dayNumber${index}`} className={classNames(bgColor, 'justify-center items-center')}>
									<div className={classNames(textColor, opacity, 'text-3xl')}>{dateTime.day}</div>
									{viewSubDate && <div className="text-xs text-slate-400">{subDateTime.toFormat('L.d')}</div>}
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
