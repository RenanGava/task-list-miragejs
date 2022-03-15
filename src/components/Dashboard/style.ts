import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-top: 4rem;
    
    table{
        margin: 0 auto;
        max-width: 1120px;
        width: 100%;
        height: 100%;

        border-spacing: 0.05rem;
        border-radius: 025rem;

        tbody tr{
            line-height: 3rem;
            background: #fff;
            
            font-size: 1rem;

            &.complete{
                background: var(--green);
                text-decoration: line-through;
            }
            
        }

        td{
            text-align: center;

            input{
                width: 1rem;
                height: 1rem;
                line-height: 60px;
            }
        }
    }
`