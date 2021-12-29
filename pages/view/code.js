import {useFiled} from '../hook/useFiled';
import {useCount} from '../hook/useCount';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';
import {Header3} from '../component/header';
import {Button} from '../component/button';

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
				<input type="password" value={field.password} name="password" onChange={onChageInput} />
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
	return (
		<>
			<Header3 />
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

			<div class="space-x-2">
				<Button type="normal" name="MENU" icon="bx-menu" />
				<Button type="bold" name="MENU" icon="bx-menu" />
				<Button type="primary" name="MENU" className="text-3xl" />
			</div>
		</>
	);
}
