import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  padding-bottom: 3.375rem;

  textarea {
    color: ${(props) => props.theme['base-400']};
    font-size: 0.875;
    font-family: 'Roboto Mono', serif;
    resize: none;
    background-color: ${(props) => props.theme['base-1000']};
    border: none;
    height: 100vh;
    line-height: 170%;

    ::-webkit-scrollbar {
      display: none;
    }

    &:focus {
      box-shadow: none;
    }
  }
`

export const ConverterContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['base-100']};
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    line-height: 140%;
  }

  h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.75rem;
    font-weight: 300;
    margin-top: 1.25rem;
  }

  h3 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.5rem;
    margin-top: 1.25rem;
    line-height: 140%;
  }

  h4 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.25rem;
    margin-top: 1.25rem;
    line-height: 140%;
  }

  h5 {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    margin-top: 1.25rem;
    line-height: 140%;
  }

  h6 {
    font-family: 'Roboto Slab', serif;
    font-size: 0.875rem;
    margin-top: 1.25rem;
    line-height: 140%;
    color: ${(props) => props.theme['orange-500']};
  }

  p {
    margin-top: 1.25rem;
    font-size: 0.875rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-400']};
    line-height: 180%;
  }

  ol,
  ul {
    margin-top: 1.25rem;
  }

  li {
    margin-left: 2rem;
    font-size: 0.875rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-400']};
    line-height: 180%;
  }

  li + li {
    margin-top: 0.5rem;
  }

  ul li::marker {
    color: ${(props) => props.theme['orange-500']};
  }

  blockquote {
    margin-top: 1.25rem;
    background-color: ${(props) => props.theme['base-quote']};
    padding: 1.5rem;
    border-radius: 4px;
    border-left: solid 5px ${(props) => props.theme['orange-500']};

    p {
      margin-top: 0;
      font-family: 'Roboto Slab', serif;
      font-weight: 700;
      color: ${(props) => props.theme['base-100']};
      font-size: 0.875rem;
      line-height: 170%;

      a {
        color: ${(props) => props.theme['base-100']};
      }
    }
  }

  code {
    font-family: 'Roboto Mono', serif;
    font-size: 0.875rem;
  }

  pre {
    margin-top: 1.25rem;
    display: block;
    padding: 1.5rem;
    border-radius: 4px;
    font-family: monospace;
    background-color: ${(props) => props.theme['base-800']};

    code {
      font-family: 'Roboto Mono', serif;
      font-size: 0.875rem;
      white-space: pre-wrap;
      width: 70%;
      line-height: 200%;
    }
  }
`
