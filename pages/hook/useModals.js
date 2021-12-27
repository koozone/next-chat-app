import {useContext} from 'react';
import {ModalsDispatchContext} from './../component/ModalsContext';

export function useModals() {
	const {open, close} = useContext(ModalsDispatchContext);

	const openModals = (Component, props) => {
		console.log('openModals');
		open(Component, props);
	};

	const closeModals = (Component) => {
		close(Component);
	};

	return {
		openModals,
		closeModals,
	};
}

export default useModals;
