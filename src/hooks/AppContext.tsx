import { useContext, createContext, useMemo, ReactElement } from "react";
import Task from "../interfaces/TaskInterface";

interface IAppContextProps {
    memoryArray : Task[]
}

const memoryArray : Task[] = []  
const defaultContextValues : IAppContextProps = {
    memoryArray
}
const AppContext = createContext(defaultContextValues) //contexto de array
interface Props {
    children : React.ReactNode
}
export function ContextProvider( props  : Props){

    return (
        <AppContext.Provider value={{memoryArray}}>
            {props.children}
        </AppContext.Provider>
    )
}