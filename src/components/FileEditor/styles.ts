import styled from 'styled-components'

export const FileEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PreviewBarContainer = styled.div`
  display: flex;
  position: sticky;
`

export const PreviewContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 1rem 0;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    align-items: center;

    > div {
      max-width: 45rem;
    }
  }
`

export const NoPreviewContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const EmptyArea = styled.div`
  display: flex;
  padding: 1.5rem;

  p {
    color: ${(props) => props.theme['textarea-bg']};
    font-size: 0.875rem;
    font-family: 'Roboto Mono', serif;
    line-height: 180%;
  }
`
