import {
  PreviewContainer,
  FileEditorContainer,
  NoPreviewContainer,
  EmptyArea,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { ActionsContext } from '../../contexts/ActionsContext'
import { TextArea } from './components/TextArea'
import { Converter } from './components/Converter'

export function FileEditor() {
  const { preview, handleCloseSidebar, handleSetPreviewWithValue } =
    useContext(SettingsContext)
  const { activeDocument, documents } = useContext(ActionsContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    documents.length === 0 && handleSetPreviewWithValue(true)
  }, [documents, handleSetPreviewWithValue])

  return (
    <FileEditorContainer onClick={() => handleCloseSidebar()}>
      {documents.length !== 0 && (
        <>
          {preview && activeDocument?.content !== undefined ? (
            <PreviewContainer>
              <Converter />
            </PreviewContainer>
          ) : (
            <NoPreviewContainer>
              <TextArea />
              {windowWidth > 768 && <Converter />}
            </NoPreviewContainer>
          )}
        </>
      )}
      {documents.length === 0 && (
        <EmptyArea>
          <p>
            Hey, looks like you deleted everything! Please create a new document
            in the sidebar.
          </p>
        </EmptyArea>
      )}
    </FileEditorContainer>
  )
}
