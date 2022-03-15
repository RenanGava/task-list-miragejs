import { useState } from "react";
import { Container } from "./style";

export function Dashboard() {

    const [isActive, setIsActive] = useState(Boolean)

    function handleClickActive(event: any){
        setIsActive(event.target.checked)
    }
    console.log(isActive);
    

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Concluída</th>
                        <th>Titulo</th>
                        <th>Sobre a Task</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={isActive ? 'complete' : ''}>
                        <td>
                            <input 
                                type="checkbox" 
                                onClick={handleClickActive}
                            />
                        </td>
                        <td>Estudar</td>
                        <td>Historia, fisica e quimica</td>
                        <td>14/03/2002</td>
                    </tr>
                    <tr className={isActive ? 'complete' : ''}>
                        <td>
                            <input 
                                type="checkbox"
                                onClick={handleClickActive}
                            />
                        </td>
                        <td>Estudar</td>
                        <td>Historia, fisica e quimica</td>
                        <td>14/03/2002</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}