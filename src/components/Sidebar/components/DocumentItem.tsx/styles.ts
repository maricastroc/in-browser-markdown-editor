import styled from 'styled-components'

export const DocumentItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 20px;
    color: ${(props) => props.theme['primary-text']};
  }

  &:hover {
    p {
      color: ${(props) => props.theme['orange-500']};
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  span {
    font-size: 0.812rem;
    color: ${(props) => props.theme['tertiary-text']};
  }

  p {
    font-size: 0.93em;
  }
`
