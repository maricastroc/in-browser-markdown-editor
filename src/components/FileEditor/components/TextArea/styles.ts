import styled from 'styled-components'

export const TextAreaContainer = styled.textarea`
  padding: 1.5rem;
  color: ${(props) => props.theme['textarea-bg']};
  font-size: 0.875rem;
  font-family: 'Roboto Mono', serif;
  background-color: ${(props) => props.theme['primary-bg']};
  border: none;
  min-height: 100vh;
  width: 100%;
  resize: none;
  line-height: 180%;

  &:focus {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    overflow: hidden;
    border-right: solid 2px ${(props) => props.theme['tertiary-bg']};
  }
`
