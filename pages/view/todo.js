import Header from '../component/header';
import {UseData} from '../hook/useData';
import {useRef, useEffect} from 'react';
import uid from 'tiny-uid';
import {Input, Label, Button, Toggle, A, Icon, Text, Box} from '../component/ui_ds4';

const initData = {name: '', email: ''};
const initUserList = [
	{id: uid(), name: 'hiroo', email: 'hiroo@gmail.com', active: true},
	{id: uid(), name: 'happy', email: 'happy@gmail.com', active: false},
];

export default function Todo() {
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
			<section className="m-2 p-2 space-y-2">
				<Text deco="font-success" className="block">
					{JSON.stringify(data)}
				</Text>

				<div className="space-x-2">
					<span className="space-x-1">
						<Text deco="font-danger">name : </Text>
						<Input
							type="text"
							deco="basket-default box-success font-default"
							name="name"
							placeholder="name 입력"
							value={data.name}
							onChange={changeInput}
							ref={nameInput}
						>
							<Icon deco="font-primary">bx-id-card</Icon>
						</Input>
						<Button deco="basket-default box-primary" name="name" onClick={clickReset}>
							<Text deco="font-primary">reset</Text>
						</Button>
					</span>
					<span className="space-x-1">
						<Text deco="font-danger">email : </Text>
						<Input
							type="email"
							deco="basket-default box-success font-default"
							name="email"
							placeholder="email 입력"
							value={data.email}
							onChange={changeInput}
						>
							<Icon deco="font-primary">bx-mail-send</Icon>
						</Input>
						<Button deco="basket-default box-primary" name="email" onClick={clickReset}>
							<Text deco="font-primary">reset</Text>
						</Button>
					</span>
					<Button deco="basket-default box-primary" onClick={clickSave} checked>
						<Text deco="font-primary">저장</Text>
					</Button>
					<Button deco="basket-default box-warning" onClick={clickResetAll} checked>
						<Text deco="font-primary">초기화</Text>
					</Button>
				</div>
			</section>

			<section className="m-2 p-2 space-y-2">
				<Text deco="font-success">{JSON.stringify(checkList)}</Text>
			</section>

			<section className="m-2 p-2 space-x-1 space-y-2">
				<ul className="space-y-2">
					{userList.map((item) => (
						<li key={item.id} className="space-x-2">
							<Toggle deco="basket-default" name={item.id} checked={checkList.includes(item.id)} onChange={changeItem}>
								<Box deco="box-switch" />
								<Box deco="box-switch-dot" />
								<A
									href="#"
									deco="basket-a-default"
									className={checkList.includes(item.id) ? 'line-through decoration-red-500 opacity-60' : 'no-underline'}
								>
									<Text deco="font-primary" className={`text-lg font-semibold ${checkList.includes(item.id) ? 'opacity-60' : 'opacity-100'}`}>
										{item.name} ({item.email})
									</Text>
								</A>
							</Toggle>
							<Button deco="basket-default box-default" name={item.id} onClick={clickModify}>
								<Icon deco="font-primary">bxs-message-square-edit</Icon>
							</Button>
							<Button deco="basket-default box-default" name={item.id} onClick={clickRemove}>
								<Icon deco="font-danger">bxs-message-square-x</Icon>
							</Button>
						</li>
					))}
				</ul>

				<div>
					{userList.map((item) => (
						<Text key={item.id} deco="font-success" className="block">
							{JSON.stringify(item)}
						</Text>
					))}
				</div>
			</section>
		</div>
	);
}
