// useContext를 사용한 custom hook 구현
import {createContext, useState, useContext, useMemo} from 'react';

export const ModalContext = createContext();

export const useModal = () => {
	const value = useContext(ModalContext);

	return value;
};

export default function ModalProvider({children}) {
	const [data, setData] = useState(false);

	const open = () => {
		setData(true);
	};
	const close = () => {
		setData(false);
	};

	const value = useMemo(() => [data, {open, close}], [data, open, close]);

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
