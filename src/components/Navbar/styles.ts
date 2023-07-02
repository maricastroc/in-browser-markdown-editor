import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${(props) => props.theme['secondary-bg']};
    color: ${(props) => props.theme['primary-text']};
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  .Toastify__close-button {
    color: ${(props) => props.theme['textarea-bg']};
  }

  .Toastify__toast-body svg {
    fill: ${(props) => props.theme['orange-500']};
  }

  .Toastify__progress-bar {
    background-color: ${(props) => props.theme['orange-500']};
  }
`

export const NavbarWrapper = styled.header`
  display: flex;
  flex-direction: column;
`

export const NavbarContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['tertiary-bg']};
`

export const ControlSideBar = styled.button`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['sidebar-btn-bg']};

  svg {
    font-size: 28px;
    color: ${(props) => props.theme['primary-text']};
  }

  &:focus {
    box-shadow: none;
  }

  &:hover {
    background-color: ${(props) => props.theme['orange-500']};
    transition: all 200ms;
  }

  @media (min-width: 1024px) {
    width: 4.5rem;
    height: 4.5rem;

    svg {
      font-size: 32px;
    }
  }
`

export const TitleContainer = styled.div`
  display: none;

  h2 {
    font-size: 0.94rem;
    font-family: 'Commissioner', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: left;
  }

  span {
    height: 2rem;
    width: 1.5px;
    background-color: ${(props) => props.theme['tertiary-text']};
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 20px;
    color: ${(props) => props.theme['primary-text']};
  }

  label {
    font-size: 0.8rem;
    color: ${(props) => props.theme['tertiary-text']};
  }

  input {
    cursor: pointer;
    font-size: 0.94rem;
    background-color: ${(props) => props.theme['tertiary-bg']};
    border: none;
    width: 6rem;
    color: ${(props) => props.theme['primary-text']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  @media (min-width: 480px) {
    input {
      cursor: pointer;
      font-size: 0.94rem;
      background-color: ${(props) => props.theme['tertiary-bg']};
      border: none;
      width: 15rem;
      color: ${(props) => props.theme['primary-text']};
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const IconsContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  .trash {
    font-size: 22px;
    color: ${(props) => props.theme['tertiary-text']};

    &:hover {
      color: ${(props) => props.theme['orange-500']};
      transition: all 200ms;
    }
  }
`

export const SaveButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['orange-500']};
  padding: 0.6rem;
  border-radius: 4px;
  gap: 0.5rem;
  border: none;
  margin-right: 0.5rem;

  p {
    color: ${(props) => props.theme['primary-text']};
    font-size: 0.93rem;
  }

  svg {
    font-size: 22px;
    color: ${(props) => props.theme['primary-text']};
  }

  &:hover {
    background-color: ${(props) => props.theme['orange-300']};
    transition: all 200ms;
  }

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`
