import { FormEvent, useState } from "react";
import Modal from "react-modal"
import { useTask } from "../../hooks/useTasks";
import { Container } from "./styles";

interface TasksModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTaskModal({isOpen, onRequestClose}: TasksModalProps){

    const { createTask } = useTask()
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function handleCreateTask(event: FormEvent){
        event.preventDefault()
        
        await createTask({
            title, 
            description
        });

        setTitle('')
        setDescription('')
        onRequestClose()
    }


    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className={'react-modal-content'}
        >
            <button
            onClick={onRequestClose}
                className="react-modal-close"
            >
                Fechar
            </button>

            <Container onSubmit={handleCreateTask}>
                <input 
                type="text" 
                placeholder="Title"
                onChange={(e)=> setTitle(e.target.value)}/>
                <input 
                type="text" 
                placeholder="Description"
                onChange={(e)=> setDescription(e.target.value)}/>

                <button type="submit">Enviar</button>
            </Container>
        </Modal>
    )
}