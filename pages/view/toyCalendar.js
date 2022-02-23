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

const memorialdayList = [
	{value: '0228', label: '2.28민주운동 기념일'},
	{value: '0303', label: '납세자의 날'},
	{value: '0308', label: '3.8민주의거 기념일'},
	{value: '0315', label: '3.15의거 기념일'},
	{value: '0316', label: '상공의 날'},
	{value: '0325', label: '서해수호의 날'},
	{value: '0401', label: '예비군의 날'},
	{value: '0403', label: '4.3희생자 추념일'},
	{value: '0405', label: '식목일'},
	{value: '0407', label: '보건의 날'},
	{value: '0411', label: '도시농업의 날'},
	{value: '0411', label: '대한민국 임시정부 수립 기념일'},
	{value: '0419', label: '4.19혁명 기념일'},
	{value: '0420', label: '장애인의 날'},
	{value: '0421', label: '과학의 날'},
	{value: '0422', label: '정보통신의 날'},
	{value: '0425', label: '법의 날'},
	{value: '0428', label: '충무공 이순신 탄신일'},
	{value: '0501', label: '근로자의 날'},
	{value: '0505', label: '어린이 날'},
	{value: '0508', label: '어버이 날'},
	{value: '0510', label: '유권자의 날'},
	{value: '0511', label: '동학농민혁명 기념일'},
	{value: '0514', label: '식품안전의 날'},
	{value: '0515', label: '스승의 날'},
	{value: '0516', label: '성년의 날'},
	{value: '0518', label: '5.18민주화운동 기념일'},
	{value: '0519', label: '발명의 날'},
	{value: '0521', label: '부부의 날'},
	{value: '0531', label: '바다의 날'},
	{value: '0601', label: '의병의 날'},
	{value: '0605', label: '환경의 날'},
	{value: '0606', label: '현충일'},
	{value: '0609', label: '구강보건의 날'},
	{value: '0610', label: '6.10민주항쟁 기념일'},
	{value: '0610', label: '6.10만세운동 기념일'},
	{value: '0624', label: '전자정부의 날'},
	{value: '0625', label: '6.25전쟁일'},
	{value: '0626', label: '마약퇴치의 날'},
	{value: '0628', label: '철도의 날'},
	{value: '0711', label: '인구의 날'},
	{value: '0713', label: '정보보호의 날'},
	{value: '0808', label: '섬의 날'},
	{value: '0907', label: '푸른 하늘의 날'},
	{value: '0907', label: '사회복지의 날'},
	{value: '0907', label: '곤충의 날'},
	{value: '0910', label: '해양경찰의 날'},
	{value: '0917', label: '청년의 날'},
	{value: '1001', label: '국군의 날'},
	{value: '1002', label: '노인의 날'},
	{value: '1005', label: '세계 한인의 날'},
	{value: '1008', label: '재향군인의 날'},
	{value: '1010', label: '임산부의 날'},
	{value: '1010', label: '정신건강의 날'},
	{value: '1015', label: '체육의 날'},
	{value: '1015', label: '문화의 날'},
	{value: '1016', label: '부마민주항쟁 기념일'},
	{value: '1021', label: '경찰의 날'},
	{value: '1024', label: '국제연합일'},
	{value: '1025', label: '금융의 날'},
	{value: '1028', label: '교정의 날'},
	{value: '1029', label: '지방자치의 날'},
	{value: '1103', label: '학생독립운동 기념일'},
	{value: '1109', label: '소방의 날'},
	{value: '1111', label: '농업인의 날'},
	{value: '1117', label: '순국선열의 날'},
	{value: '1119', label: '아동학대예방의 날'},
	{value: '1203', label: '소비자의 날'},
	{value: '1205', label: '무역의 날'},
	{value: '1205', label: '자원봉사자의 날'},
	{value: '1227', label: '원자력 안전 및 진흥의 날'},
];

const holidayList = [
	{value: '0101', label: '1월 1일'},
	{value: '0131', label: '설날(연휴)'},
	{value: '0201', label: '설날(연휴)'},
	{value: '0202', label: '설날(연휴)'},
	{value: '0301', label: '3∙1절'},
	{value: '0309', label: '대통령선거'},
	{value: '0505', label: '어린이날'},
	{value: '0508', label: '부처님오신날'},
	{value: '0601', label: '전국동시지방선거'},
	{value: '0606', label: '현충일'},
	{value: '0717', label: '제헌절'},
	{value: '0815', label: '광복절'},
	{value: '0909', label: '추석(연휴)'},
	{value: '0910', label: '추석(연휴)'},
	{value: '0911', label: '추석(연휴)'},
	{value: '0912', label: '대체공휴일(추석)'},
	{value: '1003', label: '개천절'},
	{value: '1009', label: '한글날'},
	{value: '1010', label: '대체공휴일(한글날)'},
	{value: '1225', label: '기독탄신일'},
];

export const ToyCalendar = (props) => {
	const {width = 'w-full', height = 'h-[500px]', calendarData, optionData} = props;
	const [calendarState, runCalendarState] = calendarData || UseData({dateTime: DateTime.now()});
	const [optionState, runOptionState] = optionData || UseData({});

	// const startWeekDay = 7; // 월요일(1), 화요일(2)...일요일(7)
	const startWeekDay = optionState.startWeekDay?.map((val) => val.value)[0]; // 월요일(1), 화요일(2)...일요일(7)
	const viewWeekNumber = optionState.viewWeekNumber;
	const viewWeekString = optionState.viewWeekString;
	const weekStringShot = optionState.weekStringShot;
	// const weekLocale = 'ja';
	const weekLocale = optionState.weekLocale?.map((val) => val.value)[0];
	const viewSubDate = optionState.viewSubDate;
	const subDateLocale = 'chinese';
	const colList = ['30px', '1fr', '1fr', '1fr', '1fr', '1fr', '0.5fr', '0.5fr'];
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
	}, [startWeekDay, viewWeekNumber]);

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
							'text-slate-500': !(weekIndex == 6 || weekIndex == 0),
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
							const memorialday = memorialdayList
								.filter((item) => item.value == mainDateTime.toFormat('LLdd'))
								.map((item) => item.label)
								.join(', ');
							// 공휴일
							const holiday = holidayList
								.filter((item) => item.value == mainDateTime.toFormat('LLdd'))
								.map((item) => item.label)
								.join(', ');
							// 오늘
							const today = mainDateTime == nowDateTime;
							const mainBgColor = classNames({
								'bg-white': !(weekIndex == 6 || weekIndex == 0),
								'bg-blue-50': weekIndex == 6,
								'bg-red-50': weekIndex == 0,
							});
							const mainTextColor = classNames({
								'text-slate-500': !(weekIndex == 6 || weekIndex == 0 || holiday),
								'text-blue-500': weekIndex == 6,
								'text-red-500': weekIndex == 0 || holiday,
							});
							const mainOpacity = classNames({
								'opacity-30': mainDateTime.month != viewDateTime.month,
								'opacity-100': mainDateTime.month == viewDateTime.month,
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
								<DayItem key={`dayNumber${index}`} className={classNames(mainBgColor, mainOpacity, 'justify-center items-center')}>
									<div className={classNames(mainTextColor, 'text-3xl bg-green-400')}>{mainDateTime.day}</div>
									{/* {viewSubDate && <div className={classNames(subVisible, 'text-xs text-slate-400')}>{memorialday || subDateTime.toFormat('L.d')}</div>} */}
									{viewSubDate && <div className={classNames(subTextColor, 'text-xs')}>{holiday || memorialday || subDateTime.toFormat('L.d')}</div>}
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
