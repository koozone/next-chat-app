// useState를 사용한 custom hook 구현
import {DateTime} from 'luxon';
import {useCallback, useState} from 'react';

export const UseCalendar = (initData) => {
	const [state, setState] = useState(initData);

	const CLIENT_ID = '7342048109-qrvboq0r7ac2uv7g3btugalg1casg6gc.apps.googleusercontent.com';
	const API_KEY = 'AIzaSyA7V880ZtU-8xnFehGKdMAYF0Y8zscEzJA';
	const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
	const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	const action = useCallback(async (props) => {
		const gapi = await import('gapi-script').then((pack) => pack.gapi);
		const {method, option = {}, callback} = props;

		const process = () => {
			const request = window.gapi.client.calendar.events[method]({
				// 캘린더 ID (기본 캘린더 사용시 'primary')
				calendarId: '3fube0lde5d7hahjim83l664so@group.calendar.google.com',
				...option,
			});

			request.execute(callback);
		};

		if (!gapi.client) {
			gapi.load('client:auth2', () => {
				gapi.client.init({
					apiKey: API_KEY,
					clientId: CLIENT_ID,
					discoveryDocs: DISCOVERY_DOCS,
					scope: SCOPES,
				});

				gapi.client.load('calendar', 'v3', () => console.log('bam!'));

				gapi.auth2.getAuthInstance().signIn().then(process);
			});
		} else {
			process();
		}
	}, []);

	const load = (props) => {
		const {eventId} = props || {};

		action(
			eventId
				? {
						method: 'get',
						option: {
							eventId: eventId,
						},
						callback: (event) => {
							console.log(event);

							setState([].concat(event));
						},
				  }
				: {
						method: 'list',
						option: {},
						callback: (event) => {
							console.log(event);

							setState([].concat(event.items));
						},
				  }
		);
	};

	const add = (props) => {
		const {isoDate} = props;
		const eventDateTime = DateTime.fromISO(isoDate);
		const diffDay = DateTime.now().diff(eventDateTime, 'days');
		const dday = Math.floor(diffDay.as('days'));
		console.log('eventDateTime', dday);
		action({
			method: 'insert',
			option: {
				resource: {
					summary: `Event! (D${dday}})`, // 일정 제목
					location: '800 Howard St., San Francisco, CA 94103', // 일정 장소
					description: 'Really great refreshments', // 일정 설명
					start: {
						// 시작 날짜
						date: eventDateTime.toISODate(),
						// dateTime: `2022-03-03T00:00:00Z`,
						// timeZone: 'Asia/Seoul',
					},
					end: {
						// 종료 날짜
						date: eventDateTime.toISODate(),
						// dateTime: `2022-03-03T23:59:59Z`,
						// timeZone: 'Asia/Seoul',
					},
					recurrence: ['RRULE:FREQ=DAILY;COUNT=2'], // 반복 지정 (일단위; 총 2번 반복)
					attendees: [{email: 'lpage@example.com'}, {email: 'sbrin@example.com'}], // 참석자
					reminders: {
						// 알림 설정
						useDefault: false,
						overrides: [
							{method: 'email', minutes: 24 * 60}, // 하루전 알림
							{method: 'popup', minutes: 10}, // 10분전 알림
						],
					},
				},
			},
			callback: (event) => {
				console.log(event);

				load();
			},
		});
	};

	const remove = (props) => {
		const {eventId} = props;

		action({
			method: 'delete',
			option: {
				eventId: eventId,
				resource: {},
			},
			callback: (event) => {
				console.log(event);

				load();
			},
		});
	};

	const update = (props) => {
		const {eventId} = props;

		action({
			method: 'update',
			option: {
				eventId: eventId,
				resource: {
					summary: 'Very Awesome Event!', // 일정 제목
				},
			},
			callback: (event) => {
				console.log(event);

				load();
			},
		});
	};

	return [state, {load, add, remove, update}];
};
