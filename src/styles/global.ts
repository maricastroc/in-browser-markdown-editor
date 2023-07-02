import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['orange-500']};
  }

  body {
    background: ${(props) => props.theme['primary-bg']}; //why?
    color: ${(props) => props.theme['primary-text']};
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
