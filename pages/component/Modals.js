import React, {useContext} from 'react';
import {ModalsDispatchContext, ModalsStateContext} from './ModalsContext';

const Modals = () => {
	const openedModals = useContext(ModalsStateContext);
	const {close} = useContext(ModalsDispatchContext);
	console.log('Modals');

	return openedModals.map((modal, index) => {
		const {Component, props} = modal;
		const {onSubmit, ...restProps} = props;

		const onClose = () => {
			close(Component);
		};

		const handleSubmit = async () => {
			if (typeof onSubmit === 'function') {
				await onSubmit();
			}
			onClose();
		};

		return <Component key={index} {...restProps} onClose={onClose} onSubmit={handleSubmit} />;
	});
};

export default Modals;
