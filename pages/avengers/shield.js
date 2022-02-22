import {createElement, forwardRef, useEffect, useRef} from 'react';
import {PocketA, PocketB, SectionA, SectionB} from './doctorStrange';
import {CardItem, PostItem} from './hulk';
import {Area, Highlight, VariableArea} from './ironMan';
import {AreaItem} from './spiderMan';
import {fakeFetch, getRandomSrc} from './thor';
import {UseData} from './vision';

export const TestHighlight = () => {
	return (
		<Highlight language="html">
			{`
				<div className="w-[300px] h-[200px] bg-red-400">
					<span>안녕</span>
				</div>
			`}
		</Highlight>
	);
};

export const TestDiv = forwardRef((props, ref) => {
	return (
		<div ref={ref} className="w-[100px] h-[100px] bg-red-400">
			<span>안녕</span>
		</div>
	);
});

export const TestAreaA = () => {
	return (
		<VariableArea>
			<TestDiv />
			<TestDiv />
			<TestDiv />
			<TestDiv />
		</VariableArea>
	);
};
export const TestAreaB = () => {
	return <VariableArea src="http://localhost:3000/view/dress" />;
};

export const TestLab = () => {
	return (
		<SectionA>
			<AreaItem title="TestDiv" height="500">
				<div className="py-4 px-8">
					<div className="w-fit mx-auto flex items-center space-x-3">
						<TestDiv />
						<TestDiv />
						<TestDiv />
						<TestDiv />
					</div>
				</div>
			</AreaItem>
			<AreaItem title="Dress" src="http://localhost:3000/view/dress" />
			<AreaItem title="Layout" height="500" src="http://localhost:3000/view/layout" />
			<AreaItem title="PhotoList" height="500" src="http://localhost:3000/view/photoList" />
		</SectionA>
	);
};

export const TestArea = () => {
	return (
		<div className="max-w-[1024px] mx-auto p-10 space-y-10">
			<Area src="http://localhost:3000/avengers/item/cardItem" />
			<Area src="http://localhost:3000/avengers/item/postItem" />
		</div>
	);
};

export const TestBlank = () => {
	return (
		<div className="max-w-[1024px] mx-auto py-10 space-y-10">
			<Area height="640" src="http://localhost:3000/avengers/module/photoModule" />
		</div>
	);
};

export const TestCalendar = () => {
	return (
		<div className="max-w-[1024px] mx-auto py-10 space-y-10">
			<Area height="640" src="http://localhost:3000/avengers/module/calendarModule" />
		</div>
	);
};

export default TestCalendar;
