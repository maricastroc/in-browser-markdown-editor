import styled, { css } from 'styled-components'

export const DocumentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.7rem;
  background-color: ${(props) => props.theme['base-900']};
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  transform: translateX(${(props) => (props.hidden ? '-250px' : '0px')});
  transition: 0.3s;

  h1 {
    font-size: 0.94rem;
    font-family: 'Commissioner', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    text-align: left;
  }

  h2 {
    margin-top: 1.8rem;
    font-size: 0.94rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1.3px;
    color: ${(props) => props.theme['base-500']};
  }

  ${(props) =>
    props.hidden &&
    css`
      transform: translateX(-250px)
      overflow: hidden;
    `}
`

export const NewDocumentBtn = styled.button`
  margin-top: 1.875rem;
  display: flex;
  width: 100%;
  padding: 0.7rem;
  background-color: ${(props) => props.theme['orange-500']};
  border-radius: 4px;
  border: none;
  justify-content: center;
  cursor: pointer;

  p {
    color: ${(props) => props.theme['base-100']};
  }
`
