import {useEffect, useRef} from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import beautify from 'simply-beautiful';
import Header from '../component/header';
import {Highlight} from '../component/temp_ds';
import {Toggle} from '../component/ui_ds7';
import {UseData} from '../hook/useData';
import Dress from './dress';
import {SelectBox} from './sampleSelectbox2';
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
				{/* <div className="bg-white">
					<div className="mx-auto py-16 px-4">
						<div className="flex items-center flex-wrap space-x-3">{children}</div>
					</div> */}
				<div className="bg-white">
					<div className="py-16 px-4">
						<div className="w-fit mx-auto flex items-center flex-wrap space-x-3">{children}</div>
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
				<div className="bg-white">
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
	const {children, src} = props;
	const htmlString = renderToStaticMarkup(children);
	const prettyString = beautify.html(htmlString, {
		indent_size: 4,
		space_before_conditional: true,
		jslint_happy: true,
		max_char: 0,
	});

	return src ? (
		<section>
			<TitleMenu {...props} />
			<VariableArea {...props} />
		</section>
	) : (
		<section>
			<TitleMenu {...props} />
			<Area {...props} />
			<Highlight className="language-html max-h-80">
				{`
				${prettyString}
				`}
			</Highlight>
		</section>
	);
};

export default function test() {
	return (
		<>
			<Header />

			<div className="max-w-[80rem] mx-auto px-4 py-20">
				<div className="space-y-20">
					{/* <ExampleSection title="Circular avatars" src="http://localhost:3000/view/sampleChip3" /> */}
					<ExampleSection title="SampleSelectbox" src="http://localhost:3000/view/sampleSelectbox2" />
					<ExampleSection title="Room" src="http://localhost:3000/view/room" />
					<ExampleSection title="Layout" src="http://localhost:3000/view/layout" />
					<ExampleSection title="Avatar">
						<Avatar />
					</ExampleSection>
					<ExampleSection title="Dress" src="http://localhost:3000/view/dress" />
					<ExampleSection title="UI Sample">
						<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
						<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
						<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
						<Toggle theme="info-KL-md-md-md::success-IL-md-md-md" icon="bx-leaf::bx-lemon" imgR="/image/shell.jpg::/image/noodle.jpg" text="Off::On" />
					</ExampleSection>
					<ExampleSection title="UI Sample">
						<Toggle theme="primary-CF-lg-md-full::primary-CF-6xl-md-full" img="/image/bean.jpg::/image/coffee.jpg" />
						<Toggle theme="primary-CF-3xl-md-full::primary-CF-6xl-md-full" img="/image/bean.jpg::/image/coffee.jpg" />
						<Toggle theme="primary-CF-6xl-md-full::primary-CF-6xl-md-full" img="/image/bean.jpg::/image/coffee.jpg" />
					</ExampleSection>
					<ExampleSection title="UI Sample">
						<Toggle theme="primary-CF-2xl-md-full::primary-CF-2xl-md-full" bg="/sheet/switch6-lg3.png::/sheet/switch6-lg3.png" />
					</ExampleSection>
					<ExampleSection title="UI Sample">
						<SelectBox
							value="food"
							label="음식"
							data={UseData()}
							options={[
								{value: 'lemon', label: '레몬'},
								{value: 'baguette', label: '바게트'},
								{value: 'bowl-rice', label: '밥'},
								{value: 'bowl-hot', label: '국수'},
								{value: 'coffee', label: '커피'},
								{value: 'beer', label: '맥주'},
							]}
						/>
					</ExampleSection>
					<ExampleSection title="UI Sample">
						<div className="w-[300px] h-[200px] bg-red-400">
							<span>안녕</span>
						</div>
					</ExampleSection>
				</div>
			</div>
		</>
	);
}
