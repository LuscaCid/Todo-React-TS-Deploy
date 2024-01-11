import {useEffect, useState, useContext} from 'react'
import { Container }  from './style/'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TaskForm } from './components/TaskForm'
import Task from './interfaces/TaskInterface'
import { TaskList } from './components/TaskList'
import Modal from './components/Modal'
import { AppContext } from './hooks/AppContext'
function App(){
  const {setTaskList,taskList} = useContext(AppContext)

  //vou ter um objeto que contem o tiyulo e a dificuldade da task
  
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null)
  const handleDeleteTask = (id : number) => {
    setTaskList!(taskList!.filter((task : Task) => task.id !== id))//retorna todos os valores que forem diferentes
  }

  const showOrHideModal = (display : boolean) : void => {
    //consigo pegar elementos html independente do arquivo...
    const modal = document.querySelector('#modal')
    if(display){
      modal?.classList.remove('hide')
    } else {
      modal?.classList.add('hide')
    }
  }
  const handleEdit = (task :Task) : void => {
    showOrHideModal(true)
    setTaskToUpdate(task)//o state é atualizado ao clicar na task reff
  }

  const updateTask = (id : number, title : string | undefined, difficult : number) => {
    const updatedTaskSub : Task = {id, title, difficult}
    const updatedItems : Task[] = taskList!.map(task => {
        return task.id === updatedTaskSub.id ? updatedTaskSub : task
    })

    setTaskList!(updatedItems)
    showOrHideModal(false)

}

  useEffect(() => {
    
    const taskListParsed = localStorage.getItem("@TS-react-todo")
    console.log(taskListParsed, "parsed")
  } )
  //o modal esta sendo retornado na funcao, ou seja, ele é um component html que atualmente
  //está na pagina, ent posso captura-lo e trabalhar suas classes com classlist do js
  return (
      <Container>
        <Modal children = {<TaskForm 
        btnTitle='Salvar alterações'
        setTaskList={setTaskList!}
        taskList={taskList!}
        task={taskToUpdate}
        handleUpdate={updateTask}
        />}/>
        
        <Header taskList={taskList!}/>
          <TaskForm 
          btnTitle='Criar task'
          setTaskList={setTaskList!}
          taskList={taskList!}
          task = {taskToUpdate}/>
          
          <TaskList 
          handleDeleteTask = {handleDeleteTask}
          taskList={taskList!}
          handleEdit = {handleEdit}
          />
          
        <Footer />
      </Container>
    
  )
}

export default App
