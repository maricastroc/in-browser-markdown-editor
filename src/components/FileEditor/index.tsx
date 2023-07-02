import {
  PreviewContainer,
  FileEditorContainer,
  NoPreviewContainer,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { ActionsContext } from '../../contexts/ActionsContext'
import { TextArea } from './components/TextArea'
import { Converter } from './components/Converter'

export function FileEditor() {
  const { preview, handleCloseSidebar } = useContext(SettingsContext)
  const { activeDocument } = useContext(ActionsContext)
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

  return (
    <FileEditorContainer onClick={() => handleCloseSidebar()}>
      {preview && activeDocument?.content !== 'undefined' ? (
        <PreviewContainer>
          <Converter />
        </PreviewContainer>
      ) : (
        <NoPreviewContainer>
          <TextArea />
          {windowWidth > 768 && <Converter />}
        </NoPreviewContainer>
      )}
    </FileEditorContainer>
  )
}
