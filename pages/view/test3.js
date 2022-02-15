import {useEffect, useRef} from 'react';
import Header from '../component/header';
import {Toggle} from '../component/ui_ds7';
import {UseData} from '../hook/useData';
import Test, {Avatar, Card} from './test2';

export const TitleMenu = (props) => {
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

export const Area = (props) => {
	const {children, src} = props;
	const divRef = useRef(null);
	const iframeRef = useRef(null);
	const [sizeData, runSizeData] = UseData({
		hasCapture: false,
		isDragging: false,
		nowLeft: 9999,
		nowTop: 0,
		prevLeft: 0,
		prevTop: 0,

		height: 0,
	});

	const onLoad = (event) => {
		runSizeData.change('height', iframeRef.current.contentWindow.document.body.scrollHeight);
	};

	const onDown = (event) => {
		// nowLeft 위치 보정
		runSizeData.change('nowLeft', divRef.current.offsetWidth);
		runSizeData.change('isDragging', true);
		event.target.setPointerCapture(event.pointerId);

		extractPositionDelta(event);
	};

	const onMove = (event) => {
		if (!sizeData.isDragging) {
			return;
		}
		const {moveX, moveY} = extractPositionDelta(event);

		runSizeData.change('nowLeft', sizeData.nowLeft + moveX);
		runSizeData.change('nowTop', sizeData.nowTop + moveY);
	};

	const onUp = (event) => runSizeData.change('isDragging', false);
	const onGotCapture = (event) => runSizeData.change('hasCapture', true);
	const onLostCapture = (event) => runSizeData.change('hasCapture', false);

	const extractPositionDelta = (event) => {
		const pointX = event.screenX;
		const pointY = event.screenY;
		const delta = {
			moveX: pointX - sizeData.prevLeft,
			moveY: pointY - sizeData.prevTop,
		};

		runSizeData.change('prevLeft', pointX);
		runSizeData.change('prevTop', pointY);

		return delta;
	};

	return (
		<div className={`relative bg-gray-500 rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden`}>
			{/* <div className="block"> */}
			{/* <div className="min-w-full sm:min-w-[0px] relative sm:pr-4" style={{maxWidth: '100%', width: `${sizeData.prevLeft}px`}}> */}
			<div ref={divRef} className="min-w-full max-w-full sm:min-w-[300px] relative sm:pr-4" style={{width: `${sizeData.nowLeft}px`}}>
				{/* <div className="h-auto"> */}
				<div className="bg-white w-full">
					{/* <iframe ref={iframeRef} src={src} className="w-full" onLoad={onLoad} style={{height: `${sizeData.height}px`}} /> */}
					{/* <iframe ref={iframeRef} src={src} className="w-full" style={{height: `${sizeData.height}px`}} onLoad={onLoad} /> */}
					<div className="py-10">
						<div className="w-fit mx-auto">{children}</div>
					</div>
					<div
						// className={`sr-only sm:not-sr-only sm:border-l sm:${sizeData.hasCapture ? 'bg-red-500' : 'bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-[100px] cursor-[ew-resize]`}
						className={`sr-only sm:not-sr-only sm:border-l ${sizeData.hasCapture ? 'sm:bg-blue-100' : 'sm:bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-4 cursor-[ew-resize]`}
						onPointerDown={onDown}
						onPointerMove={onMove}
						onPointerUp={onUp}
						onPointerCancel={onUp}
						onGotPointerCapture={onGotCapture}
						onLostPointerCapture={onLostCapture}
						// style={{left: `${sizeData.nowLeft}px`, top: `${sizeData.nowTop}px`}}
					>
						<div className="absolute inset-y-0 -inset-x-2"></div>
						<svg aria-hidden="true" className="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
							<path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
						</svg>
					</div>
				</div>
				{/* </div> */}
			</div>
			{/* </div> */}
		</div>
	);
};
export const VariableArea = (props) => {
	const {src} = props;
	const divRef = useRef(null);
	const iframeRef = useRef(null);
	const [sizeData, runSizeData] = UseData({
		hasCapture: false,
		isDragging: false,
		nowLeft: 9999,
		nowTop: 0,
		prevLeft: 0,
		prevTop: 0,

		height: 0,
	});

	const onLoad = (event) => {
		runSizeData.change('height', iframeRef.current.contentWindow.document.body.scrollHeight);
	};

	const onDown = (event) => {
		// nowLeft 위치 보정
		runSizeData.change('nowLeft', divRef.current.offsetWidth);
		runSizeData.change('isDragging', true);
		event.target.setPointerCapture(event.pointerId);

		extractPositionDelta(event);
	};

	const onMove = (event) => {
		if (!sizeData.isDragging) {
			return;
		}
		const {moveX, moveY} = extractPositionDelta(event);

		runSizeData.change('nowLeft', sizeData.nowLeft + moveX);
		runSizeData.change('nowTop', sizeData.nowTop + moveY);
	};

	const onUp = (event) => runSizeData.change('isDragging', false);
	const onGotCapture = (event) => runSizeData.change('hasCapture', true);
	const onLostCapture = (event) => runSizeData.change('hasCapture', false);

	const extractPositionDelta = (event) => {
		const pointX = event.screenX;
		const pointY = event.screenY;
		const delta = {
			moveX: pointX - sizeData.prevLeft,
			moveY: pointY - sizeData.prevTop,
		};

		runSizeData.change('prevLeft', pointX);
		runSizeData.change('prevTop', pointY);

		return delta;
	};

	return (
		<div className={`relative bg-gray-500 rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden`}>
			{/* <div className="block"> */}
			{/* <div className="min-w-full sm:min-w-[0px] relative sm:pr-4" style={{maxWidth: '100%', width: `${sizeData.prevLeft}px`}}> */}
			<div ref={divRef} className="min-w-full max-w-full sm:min-w-[300px] relative sm:pr-4" style={{width: `${sizeData.nowLeft}px`}}>
				{/* <div className="h-auto"> */}
				<div className="bg-white w-full">
					{/* <div className="mx-auto my-auto w-[300px] h-[100px] bg-green-400"></div> */}
					{/* <iframe ref={iframeRef} src={src} className="w-full" onLoad={onLoad} style={{height: `${sizeData.height}px`}} /> */}
					<iframe ref={iframeRef} src={src} className="w-full" style={{height: `${sizeData.height}px`}} onLoad={onLoad} />
					<div
						// className={`sr-only sm:not-sr-only sm:border-l sm:${sizeData.hasCapture ? 'bg-red-500' : 'bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-[100px] cursor-[ew-resize]`}
						className={`sr-only sm:not-sr-only sm:border-l ${sizeData.hasCapture ? 'sm:bg-blue-100' : 'sm:bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-4 cursor-[ew-resize]`}
						onPointerDown={onDown}
						onPointerMove={onMove}
						onPointerUp={onUp}
						onPointerCancel={onUp}
						onGotPointerCapture={onGotCapture}
						onLostPointerCapture={onLostCapture}
						// style={{left: `${sizeData.nowLeft}px`, top: `${sizeData.nowTop}px`}}
					>
						<div className="absolute inset-y-0 -inset-x-2"></div>
						<svg aria-hidden="true" className="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
							<path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
						</svg>
					</div>
				</div>
				{/* </div> */}
			</div>
			{/* </div> */}
		</div>
	);
};

export const ExampleSection = (props) => {
	const {src} = props;

	return src ? (
		<section>
			<TitleMenu {...props} />
			<VariableArea {...props} />
		</section>
	) : (
		<section>
			<TitleMenu {...props} />
			<Area {...props} />
		</section>
	);
};

export default function test() {
	return (
		<>
			<Header />

			<div className="max-w-[60rem] mx-auto px-4 py-20">
				<div className="space-y-20">
					<ExampleSection title="Avatar group stacked bottom to top" src="http://localhost:3000/view/sampleSelectbox2" />
					{/* <ExampleSection title="Circular avatars" src="http://localhost:3000/view/sampleChip3" /> */}
					<ExampleSection title="Layout" src="http://localhost:3000/view/room" />
					<ExampleSection title="Layout" src="http://localhost:3000/view/layout" />
					<ExampleSection title="Normal Sample">
						{/* <div className="w-[300px] h-[200px] bg-red-400" /> */}
						<Avatar />
					</ExampleSection>
					<ExampleSection title="Normal Sample">
						<div className="flex items-center flex-wrap space-x-3">
							<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
							<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
							<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
							<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
						</div>
					</ExampleSection>
					<ExampleSection title="Normal Sample">
						<div className="flex items-center flex-wrap space-x-3">
							<Toggle theme="primary-CF-lg-md-full::primary-CF-6xl-md-full" img="/image/bean.jpg::/image/coffee.jpg" />
							<Toggle theme="primary-CF-3xl-md-full::primary-CF-6xl-md-full" img="/image/bean.jpg::/image/coffee.jpg" />
							<Toggle theme="primary-CF-6xl-md-full::primary-CF-6xl-md-full" img="/image/bean.jpg::/image/coffee.jpg" />
						</div>
					</ExampleSection>
					<ExampleSection title="Normal Sample">
						<div className="flex items-center flex-wrap space-x-3">
							<Toggle theme="primary-CF-2xl-md-full::primary-CF-2xl-md-full" bg="/sheet/switch6-lg3.png::/sheet/switch6-lg3.png" />
						</div>
					</ExampleSection>
				</div>
			</div>
		</>
	);
}
