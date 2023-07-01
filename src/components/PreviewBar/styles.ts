import styled from 'styled-components'

export const PreviewBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-900']};

  p {
    color: ${(props) => props.theme['base-400']};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.875rem;
  }

  svg {
    font-size: 16px;
  }
`

export const HamburgerMenu = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['base-700']};

  svg {
    font-size: 28px;
    color: ${(props) => props.theme['base-100']};
  }
`

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 20px;
  }

  p {
    font-size: 0.94rem;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .trash {
    font-size: 22px;
    color: ${(props) => props.theme['base-500']};
  }
`
