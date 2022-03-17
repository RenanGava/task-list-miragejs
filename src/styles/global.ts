import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --red:#E62E4D;
        --green: #33CC95;
        --blue: #5429CC;
        
        --blue-light:#6933ff;
        
        --text-title:#363F5F;
        --text-body:#969CB3;

        --shape:#FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        margin: 0 auto;
        @media (max-width: 1000px) {
            font-size: 93.75%; // 16px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 15px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    .react-modal-overlay{
        background: rgb(0,0,0, 0.5);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 350px;
        background: var(--background);
        position: relative;
        padding: 3rem;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        padding: 0.25rem;
        background: var(--red);
        color: #fff;
        font-size: 400;

        border: 0;

        border-radius: 0.25rem;

        &:hover{
            filter: brightness(0.9);
        }
    }
`