// import { useContext, useEffect, useState } from "react";
import { useTask } from "../../hooks/useTasks";
import { Container } from "./style";



export function Dashboard() {

    const { tasks, changeComplete } = useTask()
    
    function handleChangeComplete(id:number, complete:boolean){
        changeComplete(id, complete)
    }
    console.log(tasks);
    

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Concluída</th>
                        <th>Titulo</th>
                        <th>Sobre  Task</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=>{
                            return(
                                <tr 
                                    key={task.id}
                                    className={task.complete ? 'complete': ''}
                                >
                                    <td>
                                        {
                                            task.complete?
                                            <input 
                                            type="checkbox" 
                                            checked
                                            onClick={(e)=>{
                                                handleChangeComplete(task.id, e.currentTarget.checked)
                                            }}
                                            />:
                                            <input 
                                            type="checkbox" 
                                            onClick={(e)=>{
                                                handleChangeComplete(task.id, e.currentTarget.checked)
                                            }}
                                            />
                                        }
                                    </td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{new Intl.DateTimeFormat('pt-br').format(
                                    new Date(task.date))}</td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </table>
        </Container>
    )
}