import {createContext, useState, useContext, useMemo} from 'react';

export const SideMenuContext = createContext();

export const UseSideMenu = () => {
	const value = useContext(SideMenuContext);

	return value;
};

export default function SideMenuProvider({children}) {
	const [data, setData] = useState(false);

	const open = () => {
		setData(true);
	};
	const close = () => {
		setData(false);
	};

	const value = useMemo(() => [data, {open, close}], [data, open, close]);

	return <SideMenuContext.Provider value={value}>{children}</SideMenuContext.Provider>;
}
