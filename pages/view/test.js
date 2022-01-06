import Header from '../component/header';
import {Input, Label, Button, Checkbox, A} from '../component/ui';
import {useData} from '../hook/useData';
import {useRef, useEffect} from 'react';
import uid from 'tiny-uid';

const initData = {name: 'koozone', email: ''};
const initUserList = [
	{id: uid(), name: 'hiroo', email: 'hiroo@gmail.com', active: true},
	{id: uid(), name: 'happy', email: 'happy@gmail.com', active: false},
];

export default function test() {
	const nameInput = useRef(null);
	const [data, runData] = useData(initData);
	const [userList, runUserList] = useData([]);
	const [checkList, runCheckList] = useData([]);

	useEffect(() => {
		runUserList.change(initUserList);
	}, []);

	useEffect(() => {
		runCheckList.change(userList.filter((item) => item.active).map((item) => item.id));
	}, [userList]);

	const changeInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};

	const clickModify = (event) => {
		const {name: id} = event.currentTarget;

		runData.change(userList.find((item) => item.id == id));
	};

	const clickReset = (event) => {
		const {name, value} = event.currentTarget;

		runData.reset(name);
	};

	const clickResetAll = (event) => {
		const {name, value} = event.currentTarget;

		runData.reset();
	};

	const clickSave = (event) => {
		// 수정
		if (userList.find((item) => item.id == data.id)) {
			runUserList.change(userList.map((item) => (item.id == data.id ? {...data, id: item.id} : item)));
		}
		// 추가
		else {
			runUserList.change([...userList, {id: uid(), ...data, active: false}]);
		}

		runData.change({name: '', email: ''});
		nameInput.current.focus();
	};

	const clickRemove = (event) => {
		const {name: id} = event.currentTarget;

		runUserList.change(userList.filter((item) => item.id != id));
	};

	const changeItem = (event) => {
		const {name: id} = event.currentTarget;

		runUserList.change(userList.map((item) => (item.id == id ? {...item, active: !item.active} : item)));
	};

	return (
		<div>
			<Header />

			<section className="m-2 p-2 space-y-2">
				<div>{JSON.stringify(data)}</div>

				<div className="space-x-2">
					<span className="space-x-1">
						<Label>name : </Label>
						<Input type="text" name="name" value={data.name} onChange={changeInput} ref={nameInput} />
						<Button name="name" onClick={clickReset}>
							리셋
						</Button>
					</span>
					<span className="space-x-1">
						<Label>email : </Label>
						<Input type="email" name="email" value={data.email} onChange={changeInput} />
						<Button name="email" onClick={clickReset}>
							리셋
						</Button>
					</span>
					<Button onClick={clickSave}>저장</Button>
					<Button onClick={clickResetAll}>초기화</Button>
				</div>
			</section>

			<section className="m-2 p-2 space-x-1 space-y-1">
				<ul className="space-y-2">
					{userList.map((item) => (
						<li key={item.id} className="space-x-1">
							<Checkbox name={item.id} checked={checkList.includes(item.id)} onChange={changeItem}>
								{/* {item.name} ({item.email}) */}
								{`---`}
							</Checkbox>
							<A name={item.id} checked={checkList.includes(item.id)}>
								{item.name} ({item.email})
							</A>
							<Button name={item.id} onClick={clickModify}>
								수정
							</Button>
							<Button name={item.id} onClick={clickRemove}>
								삭제
							</Button>
						</li>
					))}
				</ul>

				<div>{JSON.stringify(checkList)}</div>
				<div>
					{userList.map((item) => (
						<div key={item.id}>{JSON.stringify(item)}</div>
					))}
				</div>
			</section>
		</div>
	);
}
