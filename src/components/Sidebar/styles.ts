import styled, { css } from 'styled-components'

export const DocumentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.7rem;
  background-color: ${(props) => props.theme['base-sidebar']};
  min-height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;

  transform: translateX(${(props) => (props.hidden ? '-250px' : '0px')});
  transition: 0.3s;

  h1 {
    font-size: 0.94rem;
    font-family: 'Commissioner', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
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

export const DocumentsContent = styled.div`
  display: flex;
  flex-direction: column;
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
    color: ${(props) => props.theme['base-font']};
  }
`

export const DocumentItemsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
`

export const ThemeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .SwitchRoot {
    cursor: pointer;
    width: 48px;
    height: 24px;
    background-color: ${(props) => props.theme['base-600']};
    border-radius: 9999px;
    border: none;
    position: relative;
    padding: 0 0.2rem;

    &:focus {
      box-shadow: none;
    }

    &[data-state='checked'] {
      background-color: ${(props) => props.theme['base-600']};
    }
  }

  .SwitchThumb {
    display: block;
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.theme['base-font']};
    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(2px);
    will-change: transform;

    &[data-state='checked'] {
      transform: translateX(28px);
    }
  }

  svg {
    font-size: 21px;
    color: ${(props) => props.theme['base-600']};

    &.active {
      color: ${(props) => props.theme['base-font']};
    }
  }
`
