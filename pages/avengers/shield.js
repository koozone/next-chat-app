import {PocketA, PocketB, SectionA, SectionB} from './doctorStrange';
import {Highlight, VariableArea} from './ironMan';
import {AreaItem} from './spiderMan';

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

export const TestDiv = () => {
	return (
		<div className="w-[100px] h-[100px] bg-red-400">
			<span>안녕</span>
		</div>
	);
};

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
			<AreaItem title="TestDiv">
				<TestDiv />
				<TestDiv />
				<TestDiv />
				<TestDiv />
			</AreaItem>
			<AreaItem title="Dress" src="http://localhost:3000/view/dress" />
			<AreaItem title="Layout" src="http://localhost:3000/view/layout" />
		</SectionA>
	);
};

export default TestLab;
