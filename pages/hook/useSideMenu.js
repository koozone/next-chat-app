import {createContext, useState, useContext} from 'react';

export const SideMenuContext = createContext();

export const useSideMenu = () => {
	return useContext(SideMenuContext);
};

export default function SideMenuProvider({children}) {
	const [isSideMenu, setIsSideMenu] = useState(false);

	const openSideMenu = () => {
		setIsSideMenu(true);
	};
	const closeSideMenu = () => {
		setIsSideMenu(false);
	};

	return (
		<SideMenuContext.Provider
			value={{
				isSideMenu,
				openSideMenu,
				closeSideMenu,
			}}
		>
			{children}
		</SideMenuContext.Provider>
	);
}
