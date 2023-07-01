import { ConverterContainer, TextContainer } from './styles'
import { ChangeEvent, useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { SettingsContext } from '../../contexts/SettingsContext'
import { ActionsContext } from '../../contexts/ActionsContext'

export function FileEditor() {
  const { preview, handleCloseSidebar } = useContext(SettingsContext)
  const { activeDocument, onDocumentContentChange } = useContext(ActionsContext)

  function handleChangeActiveDocument(ev: ChangeEvent<HTMLTextAreaElement>) {
    onDocumentContentChange(ev)
  }

  return (
    <TextContainer onClick={() => handleCloseSidebar()}>
      {preview && activeDocument?.content !== 'undefined' ? (
        <ConverterContainer>
          <ReactMarkdown>{activeDocument!.content}</ReactMarkdown>
        </ConverterContainer>
      ) : (
        <textarea
          value={activeDocument?.content}
          onChange={handleChangeActiveDocument}
          spellCheck={false}
        ></textarea>
      )}
    </TextContainer>
  )
}
