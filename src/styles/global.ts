import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --sky: #caebf2;
        --carbon: #a9a9a9;
        --watermelon: #ff3b3f;
        --neutral: #efefef;
        --blackboard: #565656;

        --micro: 0.75rem;
        --small: 1.5rem;
        --medium: 3rem;
        --large: 5rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
        color: var(--carbon);
        background-color: var(--neutral);
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


    input {
        border: 0;
        border-bottom: 1px solid;
        margin-left: var(--micro);
        background: none;
    }

    input:focus {
        outline: 0;
        border-bottom: 2px solid var(--sky);
        ::placeholder {
            visibility: hidden;
        }
    }

    button {
        border: 0;
        border-radius: var(--small);
        cursor: pointer;
        padding: 0.5rem;
    }

`

export default GlobalStyles
