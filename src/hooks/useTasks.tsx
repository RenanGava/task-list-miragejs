import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TasksProviderProps{
    children: ReactNode
}

interface Tasks{
    id: number
    title: string,
    description: string
    date: number
    complete: boolean
}


interface TasksInput{
    title: string
    description: string
}



interface TasksContextData{
    tasks: Tasks[]
    createTask: (tasks: TasksInput) => void
    changeComplete: (id:any, complete:any) => void
}

export const TaskContext = createContext<TasksContextData>({} as TasksContextData)

export function TasksProvider({children}: TasksProviderProps){

    const [tasks, setTasks] = useState<Tasks[]>([])
    

    useEffect(()=>{
        api.get('/tasks')
        .then(res => {
            setTasks(res.data.tasks)
        })
    },[])

    async function changeComplete(id:any, complete:any){
        await api.put(`/tasks/${id}`, {
            complete: complete
        })

        await api.get('/tasks')
            .then(res => {
                setTasks(res.data.tasks)
            })
    }

    async function createTask(taskInput: TasksInput){
        const response = await api.post('/tasks',{
            ...taskInput,
            date: new Date(),
            complete: false
        })

        const { task } = response.data

        setTasks([...tasks, task]);
    }


    return(
        <TaskContext.Provider value={{tasks, createTask, changeComplete}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTask(){
    const context = useContext(TaskContext)

    return context
}