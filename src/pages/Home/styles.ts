import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme['primary-bg']};
  overflow-x: hidden;
  align-items: stretch;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  top: 0;
`

export const EditArea = styled.div`
  margin-top: 6.8rem;
  display: flex;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme['primary-bg']};
  transition: transform 0.3s;

  &.moving {
    transform: translateX(250px);
  }

  &.backing {
    transform: translateX(0);
  }
`
