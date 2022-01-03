import {useValue} from '../hook/useValue';
import {useCount} from '../hook/useCount';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';
import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Label, Checkbox, Checkbox2} from '../component/ui';
import {useDog} from '../hook/useDog';

const CodeUseValue = () => {
	const [value, runValue] = useValue({
		id: 'koozone',
		password: '123',
	});

	const onChageInput = (event) => {
		const {name, value} = event.currentTarget;

		runValue.change({
			name,
			value,
		});
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runValue.reset({
			name,
		});
	};
	const onClickResetAll = (event) => {
		runValue.reset();
	};

	return (
		<div>
			<div className="space-x-2">
				<span>id :</span>
				<Input
					type="text"
					deco="primary"
					value={value.id}
					name="id"
					icon="bx-user"
					placeholder="id 입력"
					onChange={onChageInput}
					className="w-[150px]"
				/>
				<Button deco="success" name="id" onClick={onClickReset}>
					reset
				</Button>
				<span>{value.id}</span>
			</div>
			<div className="space-x-2">
				<span>password :</span>
				<Input
					type="password"
					deco="primary"
					value={value.password}
					name="password"
					icon="bx-key"
					placeholder="password 입력"
					onChange={onChageInput}
					className="w-[150px]"
				/>
				<Button deco="success" name="password" onClick={onClickReset}>
					reset
				</Button>
				<span>{value.password}</span>
			</div>
			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
		</div>
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
		<div>
			<div className="space-x-2">
				<span>coffee :</span>
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
					<i className="bx bx-message-square-add bx-fw" />
				</Button>
				<Button deco="secondary" name="coffee" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus bx-fw" />
				</Button>
				<Button deco="success" name="coffee" onClick={onClickReset}>
					reset
				</Button>
				<span>{count.coffee}</span>
			</div>
			<div className="space-x-2">
				<span>bread :</span>
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
					<i className="bx bx-message-square-add bx-fw" />
				</Button>
				<Button deco="secondary" name="bread" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus bx-fw" />
				</Button>
				<Button deco="success" name="bread" onClick={onClickReset}>
					reset
				</Button>
				<span>{count.bread}</span>
			</div>
			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
		</div>
	);
};

const CodeUseModal = () => {
	const [modal, runModal] = useModal();

	const onClickModal = (event) => {
		runModal.open();
	};

	return (
		<Button deco="primary" onClick={onClickModal}>
			modal
		</Button>
	);
};

const CodeUseSideMenu = () => {
	const [sideMenu, runSideMenu] = useSideMenu();

	const onClickSideMenu = (event) => {
		runSideMenu.open();
	};

	return (
		<Button deco="primary" onClick={onClickSideMenu}>
			sideMenu
		</Button>
	);
};

const CodeUseDog = () => {
	const [sideMenu, runSideMenu] = useSideMenu();

	const onClickSideMenu = (event) => {
		runSideMenu.open();
	};

	return (
		<Button deco="primary" onClick={onClickSideMenu}>
			dog
		</Button>
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

			<A href="/view/layout" name="home" icon="bx-math" />

			{/* <Img src={imageList[0]?.src} name="home" icon="bx-math" className="h-[100px]" /> */}
		</>
	);
};
const CodeUseCheckbox = () => {
	const [value, runValue] = useValue({
		bird: true,
		cat: false,
		mouse: true,
	});

	const onChangeCheckbox = (event) => {
		const {name, checked: value} = event.currentTarget;

		runValue.change({
			name,
			value,
		});
	};

	const onClickResetAll = (event) => {
		runValue.reset();
	};

	return (
		<>
			<div className="space-x-2">
				<span>bird :</span>
				<Checkbox deco="checkbox" name="bird" icon="bx-leaf" iconR="bxs-chevron-right" checked={value.bird} onChange={onChangeCheckbox} />
				<span>{value.bird ? 'true' : 'false'}</span>
			</div>
			<div className="space-x-2">
				<span>cat :</span>
				<Checkbox deco="checkbox" name="cat" icon="bx-leaf" iconR="bxs-chevron-right" checked={value.cat} onChange={onChangeCheckbox} />
				<span>{value.cat ? 'true' : 'false'}</span>
			</div>
			<div className="space-x-2">
				<span>mouse :</span>
				<Checkbox2 deco="checkbox" name="mouse" icon="bx-leaf" checked={value.mouse} onChange={onChangeCheckbox} />
				<span>{value.mouse ? 'true' : 'false'}</span>
			</div>

			<Button deco="primary" onClick={onClickResetAll}>
				reset
			</Button>
		</>
	);
};

export default function code() {
	return (
		<>
			<Header />

			<div className="p-3">
				<Label deco="400" className="block">
					Label
				</Label>

				<Label deco="300">
					Lorem ipsum,{' '}
					<Label deco="100" className="text-red-500">
						dolor sit amet consectetur adipisicing elit.
					</Label>{' '}
					Voluptates deserunt officiis recusandae sunt totam optio, facilis blanditiis hic, placeat voluptatibus provident facere consequatur earum.
					Laudantium in inventore distinctio animi voluptas.
				</Label>
				<Label icon="bx-menu" className="text-white" />
				<Label name="menu" />
				<Label icon="bx-menu" name="MENU" className="text-red-500" />
				<Label>menu</Label>
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useValue (useState 사용)</h2>
				<CodeUseValue />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useCount (useReducer 사용)</h2>
				<CodeUseCount />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useModal (useContext 사용)</h2>
				<CodeUseModal />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useSideMenu (useContext 사용)</h2>
				<CodeUseSideMenu />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useDog (axios 사용)</h2>
				<CodeUseDog />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">ui Button</h2>
				<CodeUseButton />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">ui Checkbox</h2>
				<CodeUseCheckbox />
			</div>

			<div className="p-3">
				<h2 className="text-2xl font-semibold">header</h2>
				<Header1 />
				<Header2 />
				<Header3 />
			</div>
		</>
	);
}
