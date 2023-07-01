import styled from 'styled-components'

export const DocumentItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 20px;
    color: ${(props) => props.theme['base-font']};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  span {
    font-size: 0.812rem;
    color: ${(props) => props.theme['base-500']};
  }

  p {
    font-size: 0.93em;
  }
`