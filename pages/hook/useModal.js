// useContext를 사용한 custom hook 구현
import {createContext, useState, useContext, useMemo} from 'react';

export const ModalContext = createContext();

export const useModal = () => {
	const value = useContext(ModalContext);

	return value;
};

export default function ModalProvider({children}) {
	const [isModal, setIsModal] = useState(false);

	const openModal = () => {
		setIsModal(true);
	};
	const closeModal = () => {
		setIsModal(false);
	};

	const value = useMemo(() => [isModal, openModal, closeModal], [isModal, openModal, closeModal]);

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
