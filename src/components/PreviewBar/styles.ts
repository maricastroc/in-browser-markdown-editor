import styled from 'styled-components'

export const PreviewBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-900']};

  p {
    color: ${(props) => props.theme['base-500']};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.875rem;
  }

  svg {
    color: ${(props) => props.theme['base-500']};
    font-size: 25px;
  }
`
