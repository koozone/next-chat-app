import Header from '../component/header';
import {UseData} from '../hook/useData';

export const MenuTitle = (props) => {
	const {title = ''} = props;

	return (
		<div className="flex items-center mb-3 whitespace-nowrap">
			<h2 className="font-medium text-gray-900 truncate">{title}</h2>
			<div className="flex-none flex items-center ml-auto pl-4 sm:pl-6">
				<span>icon</span>
			</div>
		</div>
	);
};

export const VariableArea = (props) => {
	const [sizeData, runSizeData] = UseData({
		hasCapture: false,
		circleLeft: 300,
		circleTop: 0,
		isDragging: false,
		previousLeft: 0,
		previousTop: 0,
	});

	const onDown = (event) => {
		runSizeData.change('isDragging', true);
		event.target.setPointerCapture(event.pointerId);

		// We store the initial coordinates to be able to calculate the changes
		// later on.
		extractPositionDelta(event);
		// console.log('onDown', sizeData);
	};

	const onMove = (event) => {
		if (!sizeData.isDragging) {
			return;
		}
		const {left, top} = extractPositionDelta(event);

		runSizeData.change('circleLeft', sizeData.circleLeft + left);
		runSizeData.change('circleTop', sizeData.circleTop + top);
	};

	const onUp = (event) => {
		runSizeData.change('isDragging', false);
		console.log('onUp', event);
	};
	const onGotCapture = (event) => runSizeData.change('hasCapture', true);
	const onLostCapture = (event) => runSizeData.change('hasCapture', false);

	const extractPositionDelta = (event) => {
		const left = event.pageX;
		const top = event.pageY;
		const delta = {
			left: left - sizeData.previousLeft,
			top: top - sizeData.previousTop,
		};

		runSizeData.change('previousLeft', left);
		runSizeData.change('previousTop', top);

		return delta;
	};

	return (
		<div className={`relative bg-gray-500 rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden`}>
			{/* <div className="block"> */}
			{/* <div className="min-w-full sm:min-w-[0px] relative sm:pr-4" style={{maxWidth: '100%', width: `${sizeData.previousLeft}px`}}> */}
			<div className="min-w-full max-w-full sm:min-w-[300px] relative sm:pr-[100px]" style={{width: `${sizeData.circleLeft + 100}px`}}>
				<div className="bg-white h-auto">
					<div className="h-80"></div>
					<div
						// className={`sr-only sm:not-sr-only sm:border-l sm:${sizeData.hasCapture ? 'bg-red-500' : 'bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-[100px] cursor-[ew-resize]`}
						className={`sr-only sm:not-sr-only sm:border-l ${sizeData.hasCapture ? 'sm:bg-red-200' : 'sm:bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-[100px] cursor-[ew-resize]`}
						onPointerDown={onDown}
						onPointerMove={onMove}
						onPointerUp={onUp}
						onPointerCancel={onUp}
						onGotPointerCapture={onGotCapture}
						onLostPointerCapture={onLostCapture}
						// style={{left: `${sizeData.circleLeft}px`, top: `${sizeData.circleTop}px`}}
					>
						<div className="absolute inset-y-0 -inset-x-2"></div>
						<svg aria-hidden="true" className="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
							<path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
						</svg>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export const ExampleSection = (props) => {
	const {} = props;

	return (
		<section>
			<MenuTitle {...props} />
			<VariableArea />
		</section>
	);
};

export default function test() {
	return (
		<>
			<Header />

			<div className="max-w-[60rem] mx-auto px-4 py-20">
				<div className="space-y-20">
					<ExampleSection title="Avatar group stacked bottom to top" />
					<ExampleSection title="Circular avatars" />
				</div>
			</div>
		</>
	);
}
