import Header from '../component/header';
import {Input, Label, Button, Checkbox, Checkbox3, A, I} from '../component/ui';
import {UseData} from '../hook/useData';
import {useRef, useEffect} from 'react';
import uid from 'tiny-uid';

const initData = {name: 'koozone', email: ''};
const initUserList = [
	{id: uid(), name: 'hiroo', email: 'hiroo@gmail.com', active: true},
	{id: uid(), name: 'happy', email: 'happy@gmail.com', active: false},
];

export default function test() {
	const nameInput = useRef(null);
	const [data, runData] = UseData(initData);
	const [userList, runUserList] = UseData([]);
	const [checkList, runCheckList] = UseData([]);

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
				<Label deco="la-3">{JSON.stringify(data)}</Label>

				<div className="space-x-2">
					<span className="space-x-1">
						<Label deco="la-2">name : </Label>
						<Input
							type="text"
							deco="in-1"
							name="name"
							icon="bx-key"
							placeholder="password 입력"
							value={data.name}
							onChange={changeInput}
							ref={nameInput}
						/>
						<Button deco="bu-3" name="name" onClick={clickReset}>
							리셋
						</Button>
					</span>
					<span className="space-x-1">
						<Label deco="la-2">email : </Label>
						<Input type="email" deco="in-1" name="email" icon="bx-key" placeholder="password 입력" value={data.email} onChange={changeInput} />
						<Button deco="bu-3" name="email" onClick={clickReset}>
							리셋
						</Button>
					</span>
					<Button deco="bu-1" onClick={clickSave}>
						저장
					</Button>
					<Button deco="bu-1" onClick={clickResetAll}>
						초기화
					</Button>
				</div>
			</section>

			<section className="m-2 p-2 space-x-1 space-y-2">
				<ul className="space-y-2">
					{userList.map((item) => (
						<li key={item.id} className="space-x-2">
							<Checkbox3 deco="ch-2" name={item.id} checked={checkList.includes(item.id)} onChange={changeItem}>
								<I deco={`ch-2:off`} icon="bxs-checkbox" />
								<I deco={`ch-2:on`} icon="bx-checkbox-checked" />
							</Checkbox3>
							<A deco="a-2" name={item.id} checked={checkList.includes(item.id)}>
								{item.name} ({item.email})
							</A>
							<Button deco="bu-3" name={item.id} onClick={clickModify}>
								수정
							</Button>
							<Button deco="bu-4" name={item.id} onClick={clickRemove}>
								삭제
							</Button>
						</li>
					))}
				</ul>

				<Label deco="la-3">{JSON.stringify(checkList)}</Label>
				<div>
					{userList.map((item) => (
						<Label key={item.id} deco="la-3" className="block">
							{JSON.stringify(item)}
						</Label>
					))}
				</div>
			</section>
		</div>
	);
}
