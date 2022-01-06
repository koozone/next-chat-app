import {useData} from '../hook/useData';
import {useCount} from '../hook/useCount';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';
import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Label, Checkbox, Radio} from '../component/ui';
import {useDog} from '../hook/useDog';
import {useRef} from 'react';

const CodeUseData = () => {
	const idInput = useRef(null);
	const [data, runData] = useData({
		id: 'koozone',
		password: '123',
	});

	const onChageInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runData.reset(name);
	};
	const onClickResetAll = (event) => {
		runData.reset();

		idInput.current.focus();
	};

	return (
		<>
			<div className="space-x-2">
				<Label>id :</Label>
				<Input
					type="text"
					// deco="primary"
					value={data.id}
					name="id"
					icon="bx-user"
					placeholder="id 입력"
					onChange={onChageInput}
					className="w-[150px]"
					ref={idInput}
				/>
				<Button deco="success" name="id" onClick={onClickReset}>
					reset
				</Button>
				<Label>{data.id}</Label>
			</div>
			<div className="space-x-2">
				<Label>password :</Label>
				<Input
					type="password"
					deco="primary"
					value={data.password}
					name="password"
					icon="bx-key"
					placeholder="password 입력"
					onChange={onChageInput}
					className="w-[150px]"
				/>
				<Button deco="success" name="password" onClick={onClickReset}>
					reset
				</Button>
				<Label>{data.password}</Label>
			</div>

			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
			<Label>{JSON.stringify(data)}</Label>
		</>
	);
};

const CodeUseCount = () => {
	const [count, runCount] = useCount({
		coffee: 0,
		bread: 10,
	});

	const onChageInput = (event) => {
		const {name, value} = event.currentTarget;

		runCount.change({
			name,
			value,
		});
	};
	const onClickIncrement = (event) => {
		const {name} = event.currentTarget;

		runCount.increment({
			name,
		});
	};
	const onClickDecrement = (event) => {
		const {name} = event.currentTarget;

		runCount.decrement({
			name,
		});
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runCount.reset({
			name,
		});
	};
	const onClickResetAll = (event) => {
		runCount.reset();
	};

	return (
		<>
			<div className="space-x-2">
				<Label>coffee :</Label>
				<Input
					type="text"
					deco="primary"
					value={count.coffee}
					name="coffee"
					icon="bx-coffee-togo"
					placeholder="coffee 입력"
					onChange={onChageInput}
					className="w-[80px]"
				/>
				<Button deco="secondary" name="coffee" onClick={onClickIncrement}>
					<i className="bx bx-message-square-add" />
				</Button>
				<Button deco="secondary" name="coffee" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus" />
				</Button>
				<Button deco="success" name="coffee" onClick={onClickReset}>
					reset
				</Button>
				<Label>{count.coffee.toString()}</Label>
			</div>
			<div className="space-x-2">
				<Label>bread :</Label>
				<Input
					type="text"
					deco="danger"
					value={count.bread}
					name="bread"
					icon="bx-baguette"
					placeholder="bread 입력"
					onChange={onChageInput}
					className="w-[80px]"
				/>
				<Button deco="secondary" name="bread" onClick={onClickIncrement}>
					<i className="bx bx-message-square-add" />
				</Button>
				<Button deco="secondary" name="bread" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus" />
				</Button>
				<Button deco="success" name="bread" onClick={onClickReset}>
					reset
				</Button>
				<Label>{count.bread.toString()}</Label>
			</div>

			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
			<Label>{JSON.stringify(count)}</Label>
		</>
	);
};

const CodeUseModal = () => {
	const [modal, runModal] = useModal();

	const onClickModal = (event) => {
		runModal.open();
	};

	return (
		<div className="space-x-2">
			<Button deco="primary" onClick={onClickModal}>
				modal
			</Button>
		</div>
	);
};

const CodeUseSideMenu = () => {
	const [sideMenu, runSideMenu] = useSideMenu();

	const onClickSideMenu = (event) => {
		runSideMenu.open();
	};

	return (
		<div className="space-x-2">
			<Button deco="primary" onClick={onClickSideMenu}>
				sideMenu
			</Button>
		</div>
	);
};

const CodeUseDog = () => {
	const [sideMenu, runSideMenu] = useSideMenu();

	const onClickSideMenu = (event) => {
		runSideMenu.open();
	};

	return (
		<div className="space-x-2">
			<Button deco="primary" onClick={onClickSideMenu}>
				dog
			</Button>
		</div>
	);
};

const CodeUseButton = () => {
	// const [imageList, imageRefresh] = useDog({
	// 	count: 1 + Math.round(Math.random() * 4),
	// });

	return (
		<>
			<div className="space-x-2">
				<Button deco="primary" name="Primary" />
				<Button deco="secondary" name="Secodary" />
				<Button deco="success" name="Success" />
				<Button deco="danger" name="Danger" />
				<Button deco="warning" name="Warning" />
				<Button deco="info" name="Info" />
			</div>
			<div className="space-x-2">
				<Button deco="normal" name="MENU" icon="bx-menu" />
				<Button deco="bold" name="MENU" icon="bx-menu" checked />
				<Button deco="primary" name="Primary" icon="bx-leaf" iconR="bxs-chevron-right" checked />
				<Button deco="secondary" name="Secodary" iconR="bxs-chevron-right" />
				<Button deco="success" name="다음단계" iconR="bxs-chevron-right" className="w-[150px]" />
				<Button deco="danger" name="경고" icon="bx-bug" />
				<Button deco="warning" name="Warning" />
				<Button deco="info" name="Info" />
			</div>

			{/* <A href="/view/layout" name="home" icon="bx-math" /> */}

			{/* <Img src={imageList[0]?.src} name="home" icon="bx-math" className="h-[100px]" /> */}
		</>
	);
};

const CodeUseCheckbox = () => {
	const [data, runData] = useData([
		'bird',
		// 'cat',
		'mouse',
	]);

	const onChangeCheckbox = (event) => {
		const {name, checked} = event.currentTarget;

		if (checked) {
			runData.change([...data, name]);
		} else {
			runData.change(data.filter((item) => item != name));
		}
	};

	const onClickResetAll = (event) => {
		runData.reset();
	};

	return (
		<>
			<div className="space-x-2">
				<Label>bird :</Label>
				<Checkbox deco="checkbox" name="bird" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('bird')} onChange={onChangeCheckbox} />
				<Label>{data.includes('bird') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label>cat :</Label>
				<Checkbox deco="checkbox" name="cat" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('cat')} onChange={onChangeCheckbox} />
				<Label>{data.includes('cat') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label>mouse :</Label>
				<Checkbox deco="checkbox" name="mouse" icon="bx-leaf" checked={data.includes('mouse')} onChange={onChangeCheckbox} />
				<Label>{data.includes('mouse') ? 'true' : 'false'}</Label>
			</div>

			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
			<Label>{JSON.stringify(data)}</Label>
		</>
	);
};
const CodeUseRadio = () => {
	const [data, runData] = useData([
		// 'apple',
		'banana',
		// 'orange',
	]);

	const onChangeRadio = (event) => {
		const {name, checked} = event.currentTarget;

		runData.change([name]);
	};

	const onClickResetAll = (event) => {
		runData.reset();
	};

	return (
		<>
			<div className="space-x-2">
				<Label>apple :</Label>
				<Radio deco="checkbox" name="apple" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('apple')} onChange={onChangeRadio} />
				<Label>{data.includes('apple') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label>banana :</Label>
				<Radio deco="checkbox" name="banana" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('banana')} onChange={onChangeRadio} />
				<Label>{data.includes('banana') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label>orange :</Label>
				<Radio deco="checkbox" name="orange" icon="bx-leaf" checked={data.includes('orange')} onChange={onChangeRadio} />
				<Label>{data.includes('orange') ? 'true' : 'false'}</Label>
			</div>

			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
			<Label>{JSON.stringify(data)}</Label>
		</>
	);
};

export default function code() {
	return (
		<>
			<Header />

			<div className="p-3 space-y-2">
				<Label deco="t4">Label</Label>

				<div className="space-x-2">
					<Label deco="t3">
						Lorem ipsum,
						<Label deco="t2" className="inline-block">
							dolor sit amet consectetur adipisicing elit.
						</Label>
						Voluptates deserunt officiis recusandae sunt totam optio, facilis blanditiis hic, placeat voluptatibus provident facere consequatur
						earum. Laudantium in inventore distinctio animi voluptas.
					</Label>
					<Label icon="bx-menu" />
					<Label name="menu" />
					<Label icon="bx-menu" name="MENU" />
					<Label>menu</Label>
				</div>
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">Button</Label>
				<CodeUseButton />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">Checkbox</Label>
				<CodeUseCheckbox />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">Radio</Label>
				<CodeUseRadio />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">useData (useState 사용)</Label>
				<CodeUseData />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">useCount (useReducer 사용)</Label>
				<CodeUseCount />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">useModal (useContext 사용)</Label>
				<CodeUseModal />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">useSideMenu (useContext 사용)</Label>
				<CodeUseSideMenu />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">useDog (axios 사용)</Label>
				<CodeUseDog />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="t4">header</Label>
				<Header1 />
				<Header2 />
				<Header3 />
			</div>
		</>
	);
}
