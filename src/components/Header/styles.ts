import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    background: var(--blue-light); 
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    

    h1{
        
    }

    h1 > span{
        text-decoration: underline;
        color: var(--green);
        margin-right: 5px;
        font-weight: 600;

        &:first-child{
            font-style: italic;
            color:  #fff;
        }
    }

    button{
        border-radius: 0.25rem;
        height: 2.5rem;
        width: 8rem;
        background: var(--blue);
        border: 0;
        color: #fff;
        font-size: 1rem;

        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`