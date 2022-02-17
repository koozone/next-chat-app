import {TitleMenu} from './hulk';
import {VariableArea} from './ironMan';

export const AreaItem = (props) => {
	return (
		<div className="space-y-3">
			<TitleMenu {...props} />
			<VariableArea {...props} />
		</div>
	);
};
