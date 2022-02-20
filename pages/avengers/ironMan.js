import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import classNames from 'classnames';
import {useCallback, useEffect, useRef} from 'react';
import {UseData} from './vision';
import {copyClipboard} from './thor';
import {debounce, throttle} from 'lodash';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('json', json);
// 콘솔창에 "이스케이프 처리되지 않은 HTML이 포함 경고" 제거
hljs.configure({ignoreUnescapedHTML: true});

export const Highlight = (props) => {
	const {children = '', language, className} = props;
	const [stateData, runStateData] = UseData();

	const tabCount = children.match(/\t*$/g)[0].length;
	const tabReg = new RegExp(`^\t{${tabCount}}`, 'gm');
	const content = children.replace(/^\t*\n|\n\t*$/g, '').replace(tabReg, '');

	useEffect(() => {
		hljs.highlightAll();
	}, [content]);

	const clickCopy = (event) => {
		const result = copyClipboard(document.getElementById('sampleCode'));

		if (result) {
			runStateData.change('isCopy', true);

			setTimeout(() => {
				runStateData.change('isCopy', false);
			}, 1000);
		}
	};

	return (
		<pre id="sampleCode" className="relative rounded-lg overflow-auto whitespace-pre">
			<code className={classNames('!pr-8', className, {[`language-${language}`]: language})}>{content}</code>
			<div className="pl-5 absolute right-0 top-0">
				{/* <Button
					className="z-0"
					theme="default-FB-md-lg-md8::success-F-md-lg-md8"
					icon="bx-copy-alt::bx-check"
					// bg="/sheet/symbol2-md2.png"
					checked={stateData}
					onClick={clickCopy}
				/> */}
				<div className={classNames('w-8 h-8 cursor-pointer', {'bg-gray-300': !stateData.isCopy, 'bg-red-300': stateData.isCopy})} onClick={clickCopy} />
			</div>
		</pre>
	);
};

export const VariableArea = (props) => {
	const {children, src, height} = props;
	const divRef = useRef(null);
	const iframeRef = useRef(null);
	const [sizeData, runSizeData] = UseData({
		hasCapture: false,
		isDragging: false,
		prevWidth: 0,
		width: 9999,
		height: height || 0,

		barClass: 'bg-gray-100',
	});

	useEffect(() => {
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	useEffect(() => {
		runSizeData.change(
			'barClass',
			classNames({
				'bg-gray-100': !sizeData.hasCapture,
				'bg-gray-200': sizeData.hasCapture && sizeData.width < 640,
				'bg-green-200': sizeData.hasCapture && sizeData.width >= 640 && sizeData.width < 768,
				'bg-blue-200': sizeData.hasCapture && sizeData.width >= 768 && sizeData.width < 1024,
				'bg-red-200': sizeData.hasCapture && sizeData.width >= 1024,
			})
		);
	}, [sizeData.hasCapture, sizeData.width]);

	const onResize = debounce(
		throttle(
			useCallback(() => {
				runSizeData.change('height', height || iframeRef.current?.contentWindow?.document?.body?.scrollHeight || 0);
			}, []),
			500
		),
		100
	);

	const onDown = useCallback((event) => {
		event.target.setPointerCapture(event.pointerId);

		// width 위치 보정
		runSizeData.change('width', divRef.current.offsetWidth);
		runSizeData.change('isDragging', true);
		extractPositionDelta(event);
	}, []);

	const onMove = useCallback(
		(event) => {
			if (!sizeData.isDragging) {
				return;
			}

			const {moveX, moveY} = extractPositionDelta(event);

			runSizeData.change('width', sizeData.width + moveX);
			onResize();
		},
		[sizeData.isDragging, sizeData.width]
	);

	const onUp = useCallback((event) => runSizeData.change('isDragging', false), []);
	const onGotCapture = useCallback((event) => runSizeData.change('hasCapture', true), []);
	const onLostCapture = useCallback((event) => runSizeData.change('hasCapture', false), []);

	const extractPositionDelta = useCallback(
		(event) => {
			const pointX = event.screenX;
			const delta = {
				moveX: pointX - sizeData.prevWidth,
			};

			runSizeData.change('prevWidth', pointX);

			return delta;
		},
		[sizeData.prevWidth]
	);

	return (
		<div className={`bg-gray-500 rounded-lg ring-1 ring-gray-500 overflow-hidden sm:pr-4`}>
			{/* <div className="block"> */}
			{/* <div className="min-w-full sm:min-w-[0px] relative sm:pr-4" style={{maxWidth: '100%', width: `${sizeData.prevWidth}px`}}> */}
			<div ref={divRef} className="relative min-w-full max-w-full sm:min-w-[320px]" style={{width: `${sizeData.width}px`}}>
				{/* <div className="h-auto"> */}
				{/* <div className="bg-white">
					<div className="mx-auto py-16 px-4">
						<div className="flex items-center flex-wrap space-x-3">{children}</div>
					</div> */}
				{/* <div className="bg-white"> */}
				{/* <div className="bg-white py-4 px-8">
					<div className="w-fit mx-auto flex space-x-3">{children}</div>
				</div> */}
				{src ? (
					<div className="bg-white overflow-auto">
						<div style={{height: sizeData.height ? `${sizeData.height}px` : 'auto'}}>
							<iframe ref={iframeRef} src={src} className="w-full h-full" onLoad={onResize} />
						</div>
					</div>
				) : (
					// <div className="bg-white overflow-hidden py-4 px-8">
					// 	<div className="w-fit mx-auto flex items-center space-x-3" style={{height: sizeData.height ? `${sizeData.height}px` : 'auto'}}>
					// 		{children}
					// 	</div>
					// </div>
					<div className="bg-white overflow-auto">
						<div style={{height: sizeData.height ? `${sizeData.height}px` : 'auto'}}>{children}</div>
					</div>
				)}
				<div
					// className={`sr-only sm:not-sr-only sm:border-l sm:${sizeData.hasCapture ? 'bg-red-500' : 'bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-[100px] cursor-[ew-resize]`}
					// className={`sr-only sm:not-sr-only sm:border-l ${sizeData.hasCapture ? 'sm:bg-blue-200' : 'sm:bg-gray-100'} sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-4 cursor-[ew-resize]`}
					className={classNames(sizeData.barClass, 'sr-only sm:not-sr-only sm:border-l sm:absolute sm:-right-4 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-4 cursor-[ew-resize]')}
					onPointerDown={onDown}
					onPointerMove={onMove}
					onPointerUp={onUp}
					onPointerCancel={onUp}
					onGotPointerCapture={onGotCapture}
					onLostPointerCapture={onLostCapture}
				>
					<div className="absolute inset-y-0 -inset-x-2"></div>
					<svg aria-hidden="true" className="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
					</svg>
				</div>
				{/* </div> */}
				{/* </div> */}
			</div>
			{/* </div> */}
		</div>
	);
};

export const Area = (props) => {
	const {children, src, height} = props;
	const divRef = useRef(null);
	const iframeRef = useRef(null);
	const [sizeData, runSizeData] = UseData({
		hasCapture: false,
		isDragging: false,
		prevWidth: 0,
		width: 9999,
		height: height || 0,

		barClass: 'bg-gray-100',
	});

	useEffect(() => {
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	useEffect(() => {
		runSizeData.change(
			'barClass',
			classNames({
				'bg-gray-100': !sizeData.hasCapture,
				'bg-gray-200': sizeData.hasCapture && sizeData.width < 640,
				'bg-green-200': sizeData.hasCapture && sizeData.width >= 640 && sizeData.width < 768,
				'bg-blue-200': sizeData.hasCapture && sizeData.width >= 768 && sizeData.width < 1024,
				'bg-red-200': sizeData.hasCapture && sizeData.width >= 1024,
			})
		);
	}, [sizeData.hasCapture, sizeData.width]);

	const onResize = debounce(
		throttle(
			useCallback(() => {
				runSizeData.change('height', height || iframeRef.current?.contentWindow?.document?.body?.scrollHeight || 0);
			}, []),
			500
		),
		100
	);

	const onDown = useCallback((event) => {
		event.target.setPointerCapture(event.pointerId);

		// width 위치 보정
		runSizeData.change('width', divRef.current.offsetWidth);
		runSizeData.change('isDragging', true);
		extractPositionDelta(event);
	}, []);

	const onMove = useCallback(
		(event) => {
			if (!sizeData.isDragging) {
				return;
			}

			const {moveX, moveY} = extractPositionDelta(event);

			runSizeData.change('width', sizeData.width + moveX);
			onResize();
		},
		[sizeData.isDragging, sizeData.width]
	);

	const onUp = useCallback((event) => runSizeData.change('isDragging', false), []);
	const onGotCapture = useCallback((event) => runSizeData.change('hasCapture', true), []);
	const onLostCapture = useCallback((event) => runSizeData.change('hasCapture', false), []);

	const extractPositionDelta = useCallback(
		(event) => {
			const pointX = event.screenX;
			const delta = {
				moveX: pointX - sizeData.prevWidth,
			};

			runSizeData.change('prevWidth', pointX);

			return delta;
		},
		[sizeData.prevWidth]
	);

	return (
		<div className={`ring-1 ring-gray-500`}>
			<div ref={divRef} className="relative min-w-full max-w-full sm:min-w-[320px]" style={{width: `${sizeData.width}px`}}>
				{src ? (
					<div className="bg-white overflow-auto">
						<div style={{height: sizeData.height ? `${sizeData.height}px` : 'auto'}}>
							<iframe ref={iframeRef} src={src} className="w-full h-full" onLoad={onResize} />
						</div>
					</div>
				) : (
					<div className="bg-white overflow-auto">
						<div style={{height: sizeData.height ? `${sizeData.height}px` : 'auto'}}>{children}</div>
					</div>
				)}
				<div
					className={classNames('sr-only sm:not-sr-only sm:absolute sm:-right-4 sm:inset-y-0 sm:flex sm:justify-center sm:items-center sm:w-4 cursor-[ew-resize]')}
					onPointerDown={onDown}
					onPointerMove={onMove}
					onPointerUp={onUp}
					onPointerCancel={onUp}
					onGotPointerCapture={onGotCapture}
					onLostPointerCapture={onLostCapture}
				>
					<div className="absolute inset-y-0 -inset-x-2"></div>
					<svg aria-hidden="true" className="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
						<path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
					</svg>
				</div>
			</div>
		</div>
	);
};
