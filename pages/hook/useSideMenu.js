import {createContext, useState, useContext, useMemo} from 'react';

export const SideMenuContext = createContext();

export const useSideMenu = () => {
	const value = useContext(SideMenuContext);

	return value;
};

export default function SideMenuProvider({children}) {
	const [isSideMenu, setIsSideMenu] = useState(false);

	const openSideMenu = () => {
		setIsSideMenu(true);
	};
	const closeSideMenu = () => {
		setIsSideMenu(false);
	};

	const value = useMemo(
		() => [isSideMenu, openSideMenu, closeSideMenu],
		[isSideMenu, openSideMenu, closeSideMenu]
	);

	return <SideMenuContext.Provider value={value}>{children}</SideMenuContext.Provider>;
}
