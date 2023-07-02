import styled from 'styled-components'

export const TextAreaContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: hidden;

  textarea {
    overflow-y: hidden;
    padding: 1.5rem 1.5rem 2rem;
    color: ${(props) => props.theme['textarea-bg']};
    font-size: 0.875rem;
    font-family: 'Roboto Mono', serif;
    resize: none;
    background-color: ${(props) => props.theme['primary-bg']};
    border: none;
    min-height: 100%;
    width: 100%;
    line-height: 180%;
  }

  @media (min-width: 768px) {
    border-right: solid 2px ${(props) => props.theme['tertiary-bg']};
  }
`
