import styled from 'styled-components'

export const FileEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const PreviewContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
