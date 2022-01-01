import {useFiled} from '../hook/useFiled';
import {useCount} from '../hook/useCount';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';
import Header, {Header1, Header2, Header3} from '../component/header';
import {A, Button, Img, Input, Label} from '../component/ui';
import {useDog} from '../hook/useDog';

const CodeUseFiled = () => {
	const [field, runField] = useFiled({id: 'koozone', password: '123'});

	const onChageInput = (event) => {
		const {name, value} = event.currentTarget;

		runField.change({name, value});
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runField.reset({name});
	};
	const onClickResetAll = (event) => {
		runField.reset();
	};

	return (
		<div>
			<div>
				id :{/* <input type="text" value={field.id} name="id" onChange={onChageInput} /> */}
				<Input
					type="text"
					css="primary"
					value={field.id}
					name="id"
					icon="bx-user"
					placeholder="id 입력"
					onChange={onChageInput}
					className="w-[150px]"
				/>
				<Button css="success" name="id" onClick={onClickReset}>
					reset
				</Button>
				<span>{field.id}</span>
			</div>
			<div>
				password :{/* <input type="password" value={field.password} name="password" onChange={onChageInput} /> */}
				<Input
					type="password"
					css="primary"
					value={field.password}
					name="password"
					icon="bx-key"
					placeholder="password 입력"
					onChange={onChageInput}
					className="w-[150px]"
				/>
				<Button css="success" name="password" onClick={onClickReset}>
					reset
				</Button>
				<span>{field.password}</span>
			</div>
			<Button css="primary" onClick={onClickResetAll}>
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

		runCount.change({name, value});
	};
	const onClickIncrement = (event) => {
		const {name} = event.currentTarget;

		runCount.increment({name});
	};
	const onClickDecrement = (event) => {
		const {name} = event.currentTarget;

		runCount.decrement({name});
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runCount.reset({name});
	};
	const onClickResetAll = (event) => {
		runCount.reset();
	};

	return (
		<div>
			<div>
				coffee :{/* <input type="text" value={count.coffee} name="coffee" onChange={onChageInput} /> */}
				<Input
					type="text"
					css="primary"
					value={count.coffee}
					name="coffee"
					icon="bx-coffee-togo"
					placeholder="coffee 입력"
					onChange={onChageInput}
					className="w-[80px]"
				/>
				<Button css="secondary" name="coffee" onClick={onClickIncrement}>
					<i className="bx bx-message-square-add bx-fw" />
				</Button>
				<Button css="secondary" name="coffee" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus bx-fw" />
				</Button>
				<Button css="success" name="coffee" onClick={onClickReset}>
					reset
				</Button>
				<span>{count.coffee}</span>
			</div>
			<div>
				bread :{/* <input type="text" value={count.bread} name="bread" onChange={onChageInput} /> */}
				<Input
					type="text"
					css="danger"
					value={count.bread}
					name="bread"
					icon="bx-baguette"
					placeholder="bread 입력"
					onChange={onChageInput}
					className="w-[80px]"
				/>
				<Button css="secondary" name="bread" onClick={onClickIncrement}>
					<i className="bx bx-message-square-add bx-fw" />
				</Button>
				<Button css="secondary" name="bread" onClick={onClickDecrement}>
					<i className="bx bx-message-square-minus bx-fw" />
				</Button>
				<Button css="success" name="bread" onClick={onClickReset}>
					reset
				</Button>
				<span>{count.bread}</span>
			</div>
			<Button css="primary" onClick={onClickResetAll}>
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
		<Button css="primary" onClick={onClickModal}>
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
		<Button css="primary" onClick={onClickSideMenu}>
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
		<Button css="primary" onClick={onClickSideMenu}>
			dog
		</Button>
	);
};

export default function code() {
	const [imageList, imageRefresh] = useDog({count: 1 + Math.round(Math.random() * 4)});

	return (
		<>
			<Header />

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useFiled (useState 사용)</h2>
				<Label>kkkkk</Label>
				<CodeUseFiled />
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
				<h2 className="text-2xl font-semibold">button</h2>
				<div className="flex items-center gap-x-2">
					<Button css="primary" name="Primary" />
					<Button css="secondary" name="Secodary" />
					<Button css="success" name="Success" />
					<Button css="danger" name="Danger" />
					<Button css="warning" name="Warning" />
					<Button css="info" name="Info" />
				</div>
				<div className="flex items-center gap-x-2">
					<Button css="normal" name="MENU" icon="bx-menu" />
					<Button css="bold" name="MENU" icon="bx-menu" checked />
					<Button css="primary" name="Primary" icon="bx-leaf" iconR="bxs-chevron-right" checked />
					<Button css="secondary" name="Secodary" iconR="bxs-chevron-right" />
					<Button css="success" name="다음단계" iconR="bxs-chevron-right" className="w-[150px]" />
					<Button css="danger" name="경고" icon="bx-bug" />
					<Button css="warning" name="Warning" />
					<Button css="info" name="Info" />
				</div>

				<A href="/view/layout" name="home" icon="bx-math" />

				<Img src={imageList[0]?.src} name="home" icon="bx-math" className="h-[100px]" />
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
