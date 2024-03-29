import {Container} from './style'
import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import Task from '../../interfaces/TaskInterface'
interface props {
    taskList : Task[]
}

export const Header = ( {taskList} : props) => {
    console.log(taskList)
    const [tamanho, setTamanho] = useState<number>(0)
    useEffect(() => {
        setTamanho(taskList.length)
    }, [taskList.length])
    return (
        <Container>
            <div className="react-img">
                <img src={reactLogo} alt="react-logo" />
            </div>
            <h1>
                TO-DO react - ts
            </h1>
            <span>tasks: {tamanho}</span>
        </Container>
    )
}