import Task from './TaskInterface'
interface IAppContextProps {
    taskList? : Task[]
    setTaskList? : React.Dispatch<React.SetStateAction<Task[]>> 
}
export default IAppContextProps