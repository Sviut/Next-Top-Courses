import {createContext, ReactNode, useState} from 'react'
import {MenuItem} from '../interfaces/menu.interface'
import {TopLevelCategory} from '../interfaces/topPage.interface'

export interface IAppContext {
    menu: MenuItem[]
    firstCategory: TopLevelCategory
    setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses})

export const AppContextProvider = ({
    menu,
    children,
    firstCategory,
}: IAppContext & { children: ReactNode }): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);

    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu)
    }

    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
        {children}
    </AppContext.Provider>
}
