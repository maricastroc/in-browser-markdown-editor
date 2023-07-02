import styled from 'styled-components'

export const FileEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
