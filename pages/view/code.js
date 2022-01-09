import {useData} from '../hook/useData';
import {useCount} from '../hook/useCount';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';
import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Label, Checkbox, Checkbox2, Checkbox3, Radio, Radio2} from '../component/ui';
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
				<Label deco="la-2">id :</Label>
				<Input
					type="text"
					deco="in-1"
					value={data.id}
					name="id"
					icon="bx-user"
					placeholder="id 입력"
					onChange={onChageInput}
					className="w-[150px]"
					ref={idInput}
				/>
				<Button deco="bu-3" name="id" onClick={onClickReset}>
					reset
				</Button>
				<Label deco="la-5">{data.id}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">password :</Label>
				<Input
					type="password"
					deco="in-1"
					value={data.password}
					name="password"
					icon="bx-key"
					placeholder="password 입력"
					onChange={onChageInput}
					className="w-[150px]"
				/>
				<Button deco="bu-3" name="password" onClick={onClickReset}>
					reset
				</Button>
				<Label deco="la-5">{data.password}</Label>
			</div>

			<Button deco="bu-3" onClick={onClickResetAll}>
				reset
			</Button>
			<Label deco="la-3">{JSON.stringify(data)}</Label>
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
				<Label deco="la-2">coffee :</Label>
				<Input
					type="text"
					deco="in-3"
					value={count.coffee}
					name="coffee"
					icon="bx-coffee-togo"
					placeholder="coffee 입력"
					onChange={onChageInput}
					className="w-[80px]"
				/>
				<Button deco="bu-1" name="coffee" onClick={onClickIncrement}>
					<i className="bx bx-message-square-add" />
				</Button>
				<Button deco="bu-1" name="coffee" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus" />
				</Button>
				<Button deco="bu-3" name="coffee" onClick={onClickReset}>
					reset
				</Button>
				<Label deco="la-5">{count.coffee.toString()}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">bread :</Label>
				<Input
					type="text"
					deco="in-3"
					value={count.bread}
					name="bread"
					icon="bx-baguette"
					placeholder="bread 입력"
					onChange={onChageInput}
					className="w-[80px]"
				/>
				<Button deco="bu-1" name="bread" onClick={onClickIncrement}>
					<i className="bx bx-message-square-add" />
				</Button>
				<Button deco="bu-1" name="bread" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus" />
				</Button>
				<Button deco="bu-3" name="bread" onClick={onClickReset}>
					reset
				</Button>
				<Label deco="la-5">{count.bread.toString()}</Label>
			</div>

			<Button deco="bu-3" onClick={onClickResetAll}>
				reset
			</Button>
			<Label deco="la-3">{JSON.stringify(count)}</Label>
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
			<Button deco="bu-3" onClick={onClickModal}>
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
			<Button deco="bu-3" onClick={onClickSideMenu}>
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
			<Button deco="bu-3" onClick={onClickSideMenu}>
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
				<Button deco="bu-1" name="Primary" />
				<Button deco="bu-2" name="Secodary" />
				<Button deco="bu-3" name="Success" />
				<Button deco="bu-4" name="Danger" />
				<Button deco="bu-5" name="Warning" />
				<Button deco="bu-6" name="Info" />
			</div>
			<div className="space-x-2">
				<Button deco="bu-1" name="MENU" icon="bx-menu" />
				<Button deco="bu-1" name="MENU" icon="bx-menu" checked />
				<Button deco="bu-1" name="Primary" icon="bx-leaf" iconR="bxs-chevron-right" checked />
				<Button deco="bu-1" name="Secodary" iconR="bxs-chevron-right" />
				<Button deco="bu-1" name="다음단계" iconR="bxs-chevron-right" className="text-xl w-[150px] h-[40px]" />
				<Button deco="bu-1" name="경고" icon="bx-bug" />
				<Button deco="bu-1" name="Warning" />
				<Button deco="bu-1" name="Info" />
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
				<Label deco="la-2">bird :</Label>
				<Checkbox
					deco="ch-1"
					name="bird"
					icon="bx-leaf"
					iconR="bxs-chevron-right"
					checked={data.includes('bird')}
					onChange={onChangeCheckbox}
					className="text-xl w-[150px] h-[40px]"
				/>
				<Label deco="la-5">{data.includes('bird') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">cat :</Label>
				<Checkbox deco="ch-1" name="cat" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('cat')} onChange={onChangeCheckbox} />
				<Label deco="la-5">{data.includes('cat') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">mouse :</Label>
				<Checkbox2 deco="ch-2" name="mouse" iconR="bxs-chevron-right" checked={data.includes('mouse')} onChange={onChangeCheckbox} />
				<Label deco="la-5">{data.includes('mouse') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">dog :</Label>
				<Checkbox3 deco="ch-2" name="dog" iconR="bxs-chevron-right" checked={data.includes('dog')} onChange={onChangeCheckbox}>
					DOG
				</Checkbox3>
				<Label deco="la-5">{data.includes('dog') ? 'true' : 'false'}</Label>
			</div>

			<Button deco="bu-3" onClick={onClickResetAll}>
				reset
			</Button>
			<Label deco="la-3">{JSON.stringify(data)}</Label>
		</>
	);
};
const CodeUseRadio = () => {
	const [data, runData] = useData([
		// 'apple',
		// 'banana',
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
				<Label deco="la-2">apple :</Label>
				<Radio deco="ra-1" name="apple" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('apple')} onChange={onChangeRadio} />
				<Label deco="la-5">{data.includes('apple') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">banana :</Label>
				<Radio deco="ra-1" name="banana" icon="bx-leaf" iconR="bxs-chevron-right" checked={data.includes('banana')} onChange={onChangeRadio} />
				<Label deco="la-5">{data.includes('banana') ? 'true' : 'false'}</Label>
			</div>
			<div className="space-x-2">
				<Label deco="la-2">orange :</Label>
				<Radio2 deco="ra-2" name="orange" checked={data.includes('orange')} onChange={onChangeRadio} />
				<Label deco="la-5">{data.includes('orange') ? 'true' : 'false'}</Label>
			</div>

			<Button deco="bu-3" onClick={onClickResetAll}>
				reset
			</Button>
			<Label deco="la-3">{JSON.stringify(data)}</Label>
		</>
	);
};

export default function code() {
	return (
		<>
			<Header />

			<div className="p-3 space-y-2">
				<Label deco="la-1">Label</Label>

				<div className="space-x-2">
					<Label deco="la-3">
						Lorem ipsum,
						<Label deco="la-5" className="inline-block">
							dolor sit amet consectetur adipisicing elit.
						</Label>
						Voluptates deserunt officiis recusandae sunt totam optio, facilis blanditiis hic, placeat voluptatibus provident facere consequatur
						earum. Laudantium in inventore distinctio animi voluptas.
					</Label>
					<Label deco="la-2" icon="bx-menu" />
					<Label deco="la-2" name="menu" />
					<Label deco="la-2" icon="bx-menu" name="MENU" />
					<Label deco="la-2">menu</Label>
				</div>
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">A</Label>

				<div className="space-x-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
					<A href="http://naver.com" deco="a-3">
						Explicabo quisquam magni nisi eum blanditiis vero animi
					</A>
					, qui suscipit aliquid excepturi consequatur quasi. Dolore explicabo exercitationem possimus ea praesentium vel error.
				</div>
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">Button</Label>
				<CodeUseButton />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">Checkbox</Label>
				<CodeUseCheckbox />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">Radio</Label>
				<CodeUseRadio />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">useData (useState 사용)</Label>
				<CodeUseData />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">useCount (useReducer 사용)</Label>
				<CodeUseCount />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">useModal (useContext 사용)</Label>
				<CodeUseModal />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">useSideMenu (useContext 사용)</Label>
				<CodeUseSideMenu />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">useDog (axios 사용)</Label>
				<CodeUseDog />
			</div>

			<div className="p-3 space-y-2">
				<Label deco="la-1">header</Label>
				<Header1 />
				<Header2 />
				<Header3 />
			</div>
		</>
	);
}
