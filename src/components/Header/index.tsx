import { Container, Content } from "./styles";

export function Header() {
    return(
        <Container>
            <Content>
                <h1>
                    <span>Task</span>
                    <span>List</span>
                </h1>
                <button>
                    Nova Task
                </button>
            </Content>
        </Container>
    )
}