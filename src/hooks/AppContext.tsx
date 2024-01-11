import { useContext, createContext, useMemo, ReactElement, SetStateAction, useState } from "react";
import Task from "../interfaces/TaskInterface";
import IAppContextProps from "../interfaces/ContextInterface";

export const AppContext = createContext<IAppContextProps>({}) //contexto de array q é exportado para ser consumid

interface Props {
    children : React.ReactNode
}
export function ContextProvider( {children} : Props){
    
    const [taskList, setTaskList] = useState<Task[]>([])
    

    return (
        <AppContext.Provider value={{taskList, setTaskList}}>
            {children}
        </AppContext.Provider>
    )
}

