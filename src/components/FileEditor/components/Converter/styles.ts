import styled from 'styled-components'

export const ConverterContainer = styled.div`
  padding: 1.5rem 1.5rem 2rem;
  height: 100%;

  h1 {
    color: ${(props) => props.theme['secondary-text']};
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    line-height: 140%;
  }

  h2 {
    color: ${(props) => props.theme['secondary-text']};
    font-family: 'Roboto Slab', serif;
    font-size: 1.75rem;
    font-weight: 300;
    margin-top: 1.25rem;
  }

  h3 {
    color: ${(props) => props.theme['secondary-text']};
    font-family: 'Roboto Slab', serif;
    font-size: 1.5rem;
    margin-top: 1.25rem;
    line-height: 140%;
  }

  h4 {
    color: ${(props) => props.theme['secondary-text']};
    font-family: 'Roboto Slab', serif;
    font-size: 1.25rem;
    margin-top: 1.25rem;
    line-height: 140%;
  }

  h5 {
    color: ${(props) => props.theme['secondary-text']};
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
    color: ${(props) => props.theme['textarea-bg']};
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
    color: ${(props) => props.theme['textarea-bg']};
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
    background-color: ${(props) => props.theme['quote-bg']};
    padding: 1.5rem;
    border-radius: 4px;
    border-left: solid 5px ${(props) => props.theme['orange-500']};

    p {
      margin-top: 0;
      font-family: 'Roboto Slab', serif;
      font-weight: 700;
      color: ${(props) => props.theme['secondary-text']};
      font-size: 0.875rem;
      line-height: 170%;

      a {
        color: ${(props) => props.theme['secondary-text']};
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
    background-color: ${(props) => props.theme['code-bg']};

    code {
      color: ${(props) => props.theme['secondary-text']};
      font-family: 'Roboto Mono', serif;
      font-size: 0.875rem;
      white-space: pre-wrap;
      width: 70%;
      line-height: 200%;
    }
  }
`
