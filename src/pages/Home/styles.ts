import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme['primary-bg']};
  align-items: stretch;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  overflow-x: hidden;
`

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  top: 0;
`

export const EditArea = styled.div`
  display: flex;
  flex-direction: column;
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
