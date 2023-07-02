import styled from 'styled-components'

export const PreviewBarContainer = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  width: 100%;
  height: 2.625rem;
  background-color: ${(props) => props.theme['secondary-bg']};

  p {
    color: ${(props) => props.theme['tertiary-text']};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.875rem;
  }

  svg {
    color: ${(props) => props.theme['tertiary-text']};
    font-size: 22px;
  }
`

export const PreviewMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const NoPreviewMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ItemMarkdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    display: none;
  }

  @media (min-width: 768px) {
    span {
      display: flex;
      width: 1px;
      height: 2.6rem;
      background-color: ${(props) => props.theme['tertiary-bg']};
    }

    svg {
      display: none;
    }
  }
`

export const ItemPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 1rem;

  svg {
    margin-right: 1rem;
  }
`
