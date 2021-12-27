import {createContext, useState, useContext} from 'react';

export const ModalContext = createContext();

export const useModal = () => {
	return useContext(ModalContext);
};

export default function ModalProvider({children}) {
	const [isModal, setIsModal] = useState(true);

	const openModal = () => {
		setIsModal(true);
	};
	const closeModal = () => {
		setIsModal(false);
	};

	return (
		<ModalContext.Provider
			value={{
				isModal,
				openModal,
				closeModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
