import {useCount} from '../hook/useCount';

const test4 = () => {
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
					[increment]
				</button>
				<button type="button" name="countA" onClick={onClickDecrement}>
					[decrement]
				</button>
				<button type="button" name="countA" onClick={onClickReset}>
					[reset]
				</button>
			</div>
			<div>
				<input type="text" value={inputData.countB} name="countB" onChange={onChageInput} />
				<span>{inputData.countB}</span>

				<button type="button" name="countB" onClick={onClickIncrement}>
					[increment]
				</button>
				<button type="button" name="countB" onClick={onClickDecrement}>
					[decrement]
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

export default test4;
