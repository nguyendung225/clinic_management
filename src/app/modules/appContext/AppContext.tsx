import React, { FC, createContext, useState } from "react";
import { ItemBreakCrumb, menu, tabs } from "./AppContextModel";
import { WithChildren } from "../../../_metronic/helpers";
import ScreenLoader from "../component/loading/ScreenLoader";

type AppContextProps = {
    breakCrumb: ItemBreakCrumb[];
    DSMenu: menu[];
    DSTabs: tabs[];
    eventKey?: string;
    isLoading?: boolean;
    setBreakCrumb: (breakCrumb: ItemBreakCrumb[]) => void;
    setDSMenu: (DSMenu: menu[]) => void;
    setDSTabs: (DSTabs: tabs[]) => void;
    setEventKey: (eventKey: string | undefined) => void;
    setIsLoading: (isLoading: boolean) => void;
}

const initAppContextPropsState = {
    breakCrumb: [],
    DSMenu: [],
    DSTabs: [],
    eventKey: undefined as string | undefined,
    isLoading: false,
    setDSMenu: () => { },
    setBreakCrumb: () => { },
    setDSTabs: () => { },
    setEventKey: () => { },
    setIsLoading: () => {},
}

export const AppContext = createContext<AppContextProps>(initAppContextPropsState)

const AppContextProvider: FC<WithChildren> = ({ children }) => {
    const [eventKey, setEventKey] = useState<string | undefined>();
    const [breakCrumb, setBreakCrumb] = useState<ItemBreakCrumb[]>([]);
    const [DSMenu, setDSMenu] = useState<menu[]>([]);
    const [DSTabs, setDSTabs] = useState<tabs[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    return (
        <AppContext.Provider
            value={{
                breakCrumb, setBreakCrumb,
                DSMenu, setDSMenu,
                DSTabs, setDSTabs,
                eventKey, setEventKey,
                isLoading, setIsLoading,
            }}
        >
            {isLoading && <ScreenLoader />}
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
