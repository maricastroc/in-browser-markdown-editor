import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['base-800']};
`

const BaseButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 28px;
    color: ${(props) => props.theme['base-font']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const OpenSidebar = styled(BaseButton)`
  background-color: ${(props) => props.theme['base-700']};
`

export const CloseSidebar = styled(BaseButton)`
  background-color: ${(props) => props.theme['orange-500']};
`

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 20px;
    color: ${(props) => props.theme['base-font']};
  }

  label {
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-500']};
  }

  input {
    font-size: 0.94rem;
    background-color: ${(props) => props.theme['base-800']};
    border: none;
    width: 7rem;
    color: ${(props) => props.theme['base-font']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
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
    color: ${(props) => props.theme['base-font']};
  }
`
