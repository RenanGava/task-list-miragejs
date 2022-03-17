import styled from "styled-components";


export const Container = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    

    input{
        outline: 0;
        line-height: 3rem;
        padding-left: 1rem;
        border-radius: 0.25rem;
        border: 0;
        background: var(--shape);

        & + input{
            margin-top: 1rem;
        }
    }

    button{
        margin: 1rem auto 0 auto;
        line-height: 3rem;
        width: 100%;
        max-width: 100px;
        border: 0;
        background: var(--green);
        border-radius: 0.25rem;
    }
`