import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(124, 129, 135, 0.5);
`

export const Content = styled(Dialog.Content)`
  padding: 2rem;
  background-color: ${(props) => props.theme['secondary-bg']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(320px, 80vw, 340px);
  border-radius: 4px;

  @media (min-width: 768px) {
    width: clamp(320px, 80vw, 358px);
  }
`

export const Title = styled(Dialog.Title)`
  font-family: 'Roboto Slab', serif;
  color: ${(props) => props.theme['primary-text']};
  font-size: 1.25rem;
  text-align: left;
`

export const Description = styled(Dialog.Description)`
  font-size: 0.875rem;
  font-family: 'Roboto Slab', serif;
  width: 100%;
  margin-top: 1rem;
  text-align: left;
  color: ${(props) => props.theme['textarea-bg']};
  line-height: 180%;
`

export const CloseButton = styled(Dialog.Close)`
  color: ${(props) => props.theme['primary-text']};
  font-weight: 700;
  position: absolute;
  display: flex;
  transform: translate(-50%, -50%);
  top: 15%;
  left: 93%;
  cursor: pointer;
  background-color: ${(props) => props.theme['secondary-bg']};
  border: 0;

  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme['orange-500']};
    transition: 200ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['orange-500']};
  }
`

export const ConfirmButton = styled(Dialog.Close)`
  margin-top: 1rem;
  color: ${(props) => props.theme['primary-text']};
  width: 100%;
  text-align: center;
  padding: 0.625rem;
  cursor: pointer;
  background-color: ${(props) => props.theme['orange-500']};
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme['orange-300']};
    transition: all 200ms;
  }
`
