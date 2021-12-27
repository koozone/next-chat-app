import {useContext} from 'react';
import {ModalsDispatchContext} from './../component/ModalsContext';

export function useModals() {
	const {open, close} = useContext(ModalsDispatchContext);

	const openModal = (Component, props) => {
		console.log('openModal');
		open(Component, props);
	};

	const closeModal = (Component) => {
		close(Component);
	};

	return {
		openModal,
		closeModal,
	};
}

export default useModals;
