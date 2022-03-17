import { Container, Content } from "./styles";

interface HeaderProps{
    openModal: () => void
}

export function Header({openModal}: HeaderProps) {

    return(
        <Container>
            <Content>
                <h1>
                    <span>Task</span>
                    <span>List</span>
                </h1>
                <button 
                    onClick={openModal}
                >
                    Nova Task
                </button>
            </Content>
        </Container>
    )
}