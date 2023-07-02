import { ActionsContext } from '../../../../contexts/ActionsContext'
import { TextAreaContainer } from './styles'
import { ChangeEvent, useContext } from 'react'

export function TextArea() {
  const { activeDocument, onDocumentContentChange } = useContext(ActionsContext)

  function handleChangeActiveDocument(ev: ChangeEvent<HTMLTextAreaElement>) {
    onDocumentContentChange(ev)
  }

  return (
    <TextAreaContainer>
      <textarea
        value={activeDocument?.content}
        onChange={handleChangeActiveDocument}
        spellCheck={false}
      ></textarea>
    </TextAreaContainer>
  )
}
