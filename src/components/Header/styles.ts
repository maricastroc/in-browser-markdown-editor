import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['base-800']};
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

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['orange-500']};
  padding: 0.6rem;
  border-radius: 4px;
  border: none;
  margin-right: 0.5rem;

  svg {
    font-size: 22px;
    color: ${(props) => props.theme['base-100']};
  }
`
