import {DateTime, Info} from 'luxon';

const DayItem = (props) => {
	const {number} = props;

	return <div>{number}</div>;
};

export const ToyCalendar = () => {
	const dt = DateTime.local(2022, 2);
	const dt3 = dt.endOf('month');
	const dt2 = dt.plus({hours: 3, minutes: 2});

	var f = {month: 'long', day: 'numeric'};

	return (
		<>
			<div>ToyCalendar</div>
			{/* <div>{dt.toString()}</div> */}
			<div>{dt.month}</div>
			<div>{dt.daysInMonth}</div>
			<div>{dt.setLocale('ko').toLocaleString(f)}</div>
			<div>{Info.months('long', {locale: 'ko'})}</div>
			<div>{Info.weekdays('long', {locale: 'ko'})}</div>
			<div>{Info.eras('long', {locale: 'ko'})}</div>
			<div>{dt.toLocaleString()}</div>
			<div>{dt.startOf('month').weekday}</div>
			<div>{dt.startOf('week').toISODate()}</div>
			{/* <div>{dt2.toString()}</div> */}
			<>
				{[...Array(dt.daysInMonth)].map((item, index) => (
					<DayItem key={index} number={index} />
				))}
			</>
		</>
	);
};

export default ToyCalendar;
