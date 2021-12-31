import {useFiled} from '../hook/useFiled';
import {useCount} from '../hook/useCount';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';
import Header from '../component/header';
import {A, Button, Img} from '../component/button';
import {useDog} from '../hook/useDog';

const CodeUseFiled = () => {
	const [field, runField] = useFiled({id: '', password: '123'});

	const onChageInput = (event) => {
		const {name, value} = event.target;

		runField.change({name, value});
	};
	const onClickReset = (event) => {
		const {name} = event.target;

		runField.reset({name});
	};
	const onClickResetAll = (event) => {
		runField.reset();
	};

	return (
		<div>
			<div>
				id :
				<input type="text" value={field.id} name="id" onChange={onChageInput} />
				<span>{field.id}</span>
				<button type="button" name="id" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<div>
				password :
				<input
					type="password"
					value={field.password}
					name="password"
					onChange={onChageInput}
				/>
				<span>{field.password}</span>
				<button type="button" name="password" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<button type="button" onClick={onClickResetAll}>
				[reset]
			</button>
		</div>
	);
};

const CodeUseCount = () => {
	const [count, runCount] = useCount({
		coffee: 0,
		bread: 10,
	});

	const onChageInput = (event) => {
		const {name, value} = event.target;

		runCount.change({name, value});
	};
	const onClickIncrement = (event) => {
		const {name} = event.target;

		runCount.increment({name});
	};
	const onClickDecrement = (event) => {
		const {name} = event.target;

		runCount.decrement({name});
	};
	const onClickReset = (event) => {
		const {name} = event.target;

		runCount.reset({name});
	};
	const onClickResetAll = (event) => {
		runCount.reset();
	};

	return (
		<div>
			<div>
				coffee :
				<input type="text" value={count.coffee} name="coffee" onChange={onChageInput} />
				<span>{count.coffee}</span>
				<button type="button" name="coffee" onClick={onClickIncrement}>
					[ + ]
				</button>
				<button type="button" name="coffee" onClick={onClickDecrement}>
					[ - ]
				</button>
				<button type="button" name="coffee" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<div>
				bread :
				<input type="text" value={count.bread} name="bread" onChange={onChageInput} />
				<span>{count.bread}</span>
				<button type="button" name="bread" onClick={onClickIncrement}>
					[ + ]
				</button>
				<button type="button" name="bread" onClick={onClickDecrement}>
					[ - ]
				</button>
				<button type="button" name="bread" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<button type="button" onClick={onClickResetAll}>
				[reset]
			</button>
		</div>
	);
};

const CodeUseModal = () => {
	const [modal, runModal] = useModal();

	const onClickModal = (event) => {
		runModal.open();
	};

	return (
		<button type="button" onClick={onClickModal}>
			[modal]
		</button>
	);
};

const CodeUseSideMenu = () => {
	const [sideMenu, runSideMenu] = useSideMenu();

	const onClickSideMenu = (event) => {
		runSideMenu.open();
	};

	return (
		<button type="button" onClick={onClickSideMenu}>
			[sideMenu]
		</button>
	);
};

export default function code() {
	const [imageList, imageRefresh] = useDog({count: 1 + Math.round(Math.random() * 4)});

	return (
		<>
			<Header />

			<div className="p-3">
				<h2 className="text-2xl font-semibold">useState를 사용한 useFiled 구현</h2>
				<CodeUseFiled />
			</div>
			<div className="p-3">
				<h2 className="text-2xl font-semibold">useReducer를 사용한 useCount 구현</h2>
				<CodeUseCount />
			</div>
			<div className="p-3">
				<h2 className="text-2xl font-semibold">useContext를 사용한 useModal 구현</h2>
				<CodeUseModal />
			</div>
			<div className="p-3">
				<h2 className="text-2xl font-semibold">useContext를 사용한 useSideMenu 구현</h2>
				<CodeUseSideMenu />
			</div>

			<div className="space-x-2">
				<div className="flex items-center gap-x-2">
					<Button type="primary" name="Primary" />
					<Button type="secondary" name="Secodary" />
					<Button type="success" name="Success" />
					<Button type="danger" name="Danger" />
					<Button type="warning" name="Warning" />
					<Button type="info" name="Info" />
				</div>
				<div className="flex items-center gap-x-2">
					<Button type="normal" name="MENU" icon="bx-menu" />
					<Button type="bold" name="MENU" icon="bx-menu" selected={true} />
					<Button
						type="primary"
						name="Primary"
						icon="bx-leaf"
						iconR="bxs-chevron-right"
					/>
					<Button type="secondary" name="Secodary" iconR="bxs-chevron-right" />
					<Button
						type="success"
						name="다음단계"
						iconR="bxs-chevron-right"
						className="w-[150px]"
					/>
					<Button type="danger" name="Danger" />
					<Button type="warning" name="Warning" />
					<Button type="info" name="Info" />
				</div>

				<A href="/view/layout" name="home" icon="bx-math" />

				<Img src={imageList[0]?.src} name="home" icon="bx-math" className="h-[100px]" />
			</div>
		</>
	);
}
