import axios from 'axios';
import {DateTime} from 'luxon';
import {useCallback, useEffect, useState} from 'react';
import {Button, Toggle} from '../../component/ui_ds7';
import {SelectBox} from '../../view/sampleSelectbox2';
import {SelectBox as SelectBox2} from '../antMan';
import ToyCalendar from '../../view/toyCalendar';
import PhotoItem, {PhotoRoundItem} from '../item/photoItem';
import PhotoList from '../list/photoList';
import PhotoSection from '../section/photoSection';
import {UseData} from '../vision';

const seasondayList = [
	// {value: '0306', label: '경칩'}
];

const memorialdayList = [
	// {value: '0228', label: '2.28민주운동 기념일'},
	// {value: '0303', label: '납세자의 날'},
	// {value: '0308', label: '3.8민주의거 기념일'},
	// {value: '0315', label: '3.15의거 기념일'},
	// {value: '0316', label: '상공의 날'},
	// {value: '0325', label: '서해수호의 날'},
	// {value: '0401', label: '예비군의 날'},
	// {value: '0403', label: '4.3희생자 추념일'},
	// {value: '0405', label: '식목일'},
	// {value: '0407', label: '보건의 날'},
	// {value: '0411', label: '도시농업의 날'},
	// {value: '0411', label: '대한민국 임시정부 수립 기념일'},
	// {value: '0419', label: '4.19혁명 기념일'},
	// {value: '0420', label: '장애인의 날'},
	// {value: '0421', label: '과학의 날'},
	// {value: '0422', label: '정보통신의 날'},
	// {value: '0425', label: '법의 날'},
	// {value: '0428', label: '충무공 이순신 탄신일'},
	// {value: '0501', label: '근로자의 날'},
	// {value: '0505', label: '어린이 날'},
	// {value: '0508', label: '어버이 날'},
	// {value: '0510', label: '유권자의 날'},
	// {value: '0511', label: '동학농민혁명 기념일'},
	// {value: '0514', label: '식품안전의 날'},
	// {value: '0515', label: '스승의 날'},
	// {value: '0516', label: '성년의 날'},
	// {value: '0518', label: '5.18민주화운동 기념일'},
	// {value: '0519', label: '발명의 날'},
	// {value: '0521', label: '부부의 날'},
	// {value: '0531', label: '바다의 날'},
	// {value: '0601', label: '의병의 날'},
	// {value: '0605', label: '환경의 날'},
	// {value: '0606', label: '현충일'},
	// {value: '0609', label: '구강보건의 날'},
	// {value: '0610', label: '6.10민주항쟁 기념일'},
	// {value: '0610', label: '6.10만세운동 기념일'},
	// {value: '0624', label: '전자정부의 날'},
	// {value: '0625', label: '6.25전쟁일'},
	// {value: '0626', label: '마약퇴치의 날'},
	// {value: '0628', label: '철도의 날'},
	// {value: '0711', label: '인구의 날'},
	// {value: '0713', label: '정보보호의 날'},
	// {value: '0808', label: '섬의 날'},
	// {value: '0907', label: '푸른 하늘의 날'},
	// {value: '0907', label: '사회복지의 날'},
	// {value: '0907', label: '곤충의 날'},
	// {value: '0910', label: '해양경찰의 날'},
	// {value: '0917', label: '청년의 날'},
	// {value: '1001', label: '국군의 날'},
	// {value: '1002', label: '노인의 날'},
	// {value: '1005', label: '세계 한인의 날'},
	// {value: '1008', label: '재향군인의 날'},
	// {value: '1010', label: '임산부의 날'},
	// {value: '1010', label: '정신건강의 날'},
	// {value: '1015', label: '체육의 날'},
	// {value: '1015', label: '문화의 날'},
	// {value: '1016', label: '부마민주항쟁 기념일'},
	// {value: '1021', label: '경찰의 날'},
	// {value: '1024', label: '국제연합일'},
	// {value: '1025', label: '금융의 날'},
	// {value: '1028', label: '교정의 날'},
	// {value: '1029', label: '지방자치의 날'},
	// {value: '1103', label: '학생독립운동 기념일'},
	// {value: '1109', label: '소방의 날'},
	// {value: '1111', label: '농업인의 날'},
	// {value: '1117', label: '순국선열의 날'},
	// {value: '1119', label: '아동학대예방의 날'},
	// {value: '1203', label: '소비자의 날'},
	// {value: '1205', label: '무역의 날'},
	// {value: '1205', label: '자원봉사자의 날'},
	// {value: '1227', label: '원자력 안전 및 진흥의 날'},
];

const holidayList = [
	// {value: '0101', label: '1월 1일'},
	// {value: '0131', label: '설날(연휴)'},
	// {value: '0201', label: '설날(연휴)'},
	// {value: '0202', label: '설날(연휴)'},
	// {value: '0301', label: '3∙1절'},
	// {value: '0309', label: '대통령선거'},
	// {value: '0505', label: '어린이날'},
	// {value: '0508', label: '부처님오신날'},
	// {value: '0601', label: '전국동시지방선거'},
	// {value: '0606', label: '현충일'},
	// {value: '0717', label: '제헌절'},
	// {value: '0815', label: '광복절'},
	// {value: '0909', label: '추석(연휴)'},
	// {value: '0910', label: '추석(연휴)'},
	// {value: '0911', label: '추석(연휴)'},
	// {value: '0912', label: '대체공휴일(추석)'},
	// {value: '1003', label: '개천절'},
	// {value: '1009', label: '한글날'},
	// {value: '1010', label: '대체공휴일(한글날)'},
	// {value: '1225', label: '기독탄신일'},
];

export const CalendarModule = () => {
	const [loading, setLoading] = useState(false);
	const calendarData = UseData({
		dateTime: DateTime.local(2022, 9, 3),
		// dateTime: DateTime.now(),
		memorialdayList: memorialdayList,
		holidayList: holidayList,
		seasondayList: seasondayList,
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

	// useEffect(async () => {
	// 	// 데이터 호출을 시도한 년도면
	// 	if (calendarState.doneYearList.includes(thisYear)) return;
	// 	runCalendarState.change('doneYearList', [...calendarState.doneYearList, thisYear]);

	// 	const apiKey = 'qw05m+7UYOhznr9HvHViWlahG8N7YCJnzY+uwSZueDRnjdW9g5rqpXjQ0S3vFki2K/3dZTczE07cwixOVpZH4A==';

	// 	console.log('startList');
	// 	const res = await axios.get('/SpcdeInfoService/get24DivisionsInfo', {
	// 		params: {
	// 			ServiceKey: apiKey,
	// 			solYear: thisYear,
	// 			//solMonth:09,
	// 			//kst:0120,
	// 			//sunHardness:285,
	// 			numOfRows: 24,
	// 			//pageNo:1,
	// 			totalCount: 100,
	// 		},
	// 	});
	// 	const resultList = [].concat(res.data?.response?.body?.items?.item || []);
	// 	console.log('resultList', resultList);

	// 	// runCalendarState.change(
	// 	// 	'seasondayList',
	// 	// 	calendarState.seasondayList.concat(
	// 	// 		resultList.map((item) => ({
	// 	// 			value: item.locdate,
	// 	// 			label: item.dateName,
	// 	// 		}))
	// 	// 	)
	// 	// );
	// 	runCalendarState.change('publicdayList', calendarState.publicdayList.concat(resultList));

	// 	console.log('startList2');
	// 	const res2 = await axios.get('/SpcdeInfoService/getRestDeInfo', {
	// 		params: {
	// 			ServiceKey: apiKey,
	// 			solYear: thisYear,
	// 			// solMonth:09,
	// 			numOfRows: 24,
	// 		},
	// 	});
	// 	const resultList2 = [].concat(res2.data?.response?.body?.items?.item || []);
	// 	console.log('resultList2', resultList2);

	// 	// runCalendarState.change(
	// 	// 	'holidayList',
	// 	// 	calendarState.holidayList.concat(
	// 	// 		resultList2.map((item) => ({
	// 	// 			value: item.locdate,
	// 	// 			label: item.dateName,
	// 	// 		}))
	// 	// 	)
	// 	// );
	// 	// runCalendarState.change('publicdayList', calendarState.publicdayList.concat(resultList2));

	// 	console.log('calendarState.publicdayList', calendarState.publicdayList);
	// }, [thisYear]);

	const aaa = useCallback(
		async ({kind, year}) => {
			try {
				let result;
				let jsonList;
				const newList = [...calendarState.publicdayList];

				setLoading(true);
				console.log(`seasonsday ${year} api start`);
				result = await axios.get(`/json/seasonsday/ko_${year}.json`);
				jsonList = [].concat(result.data?.response?.body?.items?.item || []);
				console.log(`seasonsday ${year} api end`, jsonList);
				newList = newList.concat(jsonList);

				console.log(`holiday ${year} api start`);
				result = await axios.get(`/json/holiday/ko_${year}.json`);
				jsonList = [].concat(result.data?.response?.body?.items?.item || []);
				console.log(`holiday ${year} api end`, jsonList);
				newList = newList.concat(jsonList);

				runCalendarState.change('publicdayList', newList);

				console.log(`publicdayList 결과`, newList);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		},
		[calendarState.publicdayList]
	);

	useEffect(async () => {
		// 데이터 호출을 시도했던 년도면
		if (calendarState.doneYearList.includes(thisYear)) return;
		runCalendarState.change('doneYearList', [...calendarState.doneYearList, thisYear]);

		// try {
		// 	console.log(`${thisYear} api start`);
		// 	const result = await axios.get(`/json/seasonsday/ko_${thisYear}.json`);
		// 	const jsonList = [].concat(result.data?.response?.body?.items?.item || []);
		// 	console.log(`${thisYear} api end`, jsonList);

		// 	runCalendarState.change('publicdayList', calendarState.publicdayList.concat(jsonList));
		// } catch (error) {
		// 	console.log(error);
		// }
		await aaa({kind: 'seasonsday', year: thisYear});
		// await aaa({kind: 'holiday', year: thisYear});
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
