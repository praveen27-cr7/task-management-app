import { createContext, useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-toastify'

const TaskContext = createContext()

const TaskContextProvider = (data) => {

    const [tasks, setTasks] = useState(() => {
         const savedTasks = localStorage.getItem("tasks")
         return savedTasks ? JSON.parse(savedTasks) : []
    })

    useEffect(() => {
        localStorage.setItem("tasks" , JSON.stringify(tasks))
    }, [tasks])

   

    const addTask = (newTask) => {
        const taskwithid = {...newTask, id: uuidv4()}
        setTasks([...tasks, taskwithid])
        console.log(tasks)
          toast.success("Task Added Successfully")

    }

     const handledelte = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
     toast.error('Task Deleted')
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => 
        task.id === updatedTask.id ? updatedTask : task
    ))
    toast.info('Task Updated')
  }
  

  return (
        <TaskContext.Provider value={{tasks, addTask, setTasks, handledelte, updateTask}}>
            {data.children}
        </TaskContext.Provider>
  )
}

export default TaskContextProvider
export {TaskContext}