import styled from 'styled-components'

export const HomeContainer = styled.header`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme['base-1000']};
`

export const EditArea = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme['base-1000']};
  transition: transform 0.3s;

  &.moving {
    transform: translateX(250px);
  }

  &.backing {
    transform: translateX(0);
  }
`
