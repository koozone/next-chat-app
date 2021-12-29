import {useInput} from '../hook/useInput';
import {useCount} from '../hook/useCount_useState';
import {useModal} from '../hook/useModal';
import {useSideMenu} from '../hook/useSideMenu';

const CodeUseInput = () => {
	const [inputData, runInputData] = useInput({id: '', pw: '123'});

	const onChageInput = (event) => {
		const {name, value} = event.target;

		runInputData.change({name, value});
	};
	const onClickReset = (event) => {
		const {name} = event.target;

		runInputData.reset({name});
	};
	const onClickResetAll = (event) => {
		runInputData.reset();
	};

	return (
		<div>
			<div>
				<input type="text" value={inputData.id} name="id" onChange={onChageInput} />
				<span>{inputData.id}</span>

				<button type="button" name="id" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<div>
				<input type="text" value={inputData.pw} name="pw" onChange={onChageInput} />
				<span>{inputData.pw}</span>

				<button type="button" name="pw" onClick={onClickReset}>
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
	const [inputData, runInputData] = useCount({
		countA: 0,
		countB: 10,
	});

	const onChageInput = (event) => {
		const {name, value} = event.target;

		runInputData.change({name, value});
	};
	const onClickIncrement = (event) => {
		const {name} = event.target;

		runInputData.increment({name});
	};
	const onClickDecrement = (event) => {
		const {name} = event.target;

		runInputData.decrement({name});
	};
	const onClickReset = (event) => {
		const {name} = event.target;

		runInputData.reset({name});
	};
	const onClickResetAll = (event) => {
		runInputData.reset();
	};

	return (
		<div>
			<div>
				<input type="text" value={inputData.countA} name="countA" onChange={onChageInput} />
				<span>{inputData.countA}</span>

				<button type="button" name="countA" onClick={onClickIncrement}>
					[ + ]
				</button>
				<button type="button" name="countA" onClick={onClickDecrement}>
					[ - ]
				</button>
				<button type="button" name="countA" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<div>
				<input type="text" value={inputData.countB} name="countB" onChange={onChageInput} />
				<span>{inputData.countB}</span>

				<button type="button" name="countB" onClick={onClickIncrement}>
					[ + ]
				</button>
				<button type="button" name="countB" onClick={onClickDecrement}>
					[ - ]
				</button>
				<button type="button" name="countB" onClick={onClickReset}>
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
	const [isModal, openModal, closeModal] = useModal();

	const onClickModal = (event) => {
		openModal();
	};

	return (
		<button type="button" onClick={onClickModal}>
			[modal]
		</button>
	);
};

const CodeUseSideMenu = () => {
	const [isSideMenu, openSideMenu, closeSideMenu] = useSideMenu();

	const onClickSideMenu = (event) => {
		openSideMenu();
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
			<div className="p-3">
				<h2 className="text-2xl font-semibold">useState를 사용한 useInput 구현</h2>
				<CodeUseInput />
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
		</>
	);
}
