import { MarkdownContext } from '../../contexts/MarkdownContext'
import { DocumentsContainer, NewDocumentBtn } from './styles'
import { useContext } from 'react'

export function Sidebar() {
  const { openSidebar } = useContext(MarkdownContext)
  return (
    <DocumentsContainer hidden={!openSidebar}>
      <h1>Markdown</h1>
      <h2>My documents</h2>
      <NewDocumentBtn>
        <p>+ New Document</p>
      </NewDocumentBtn>
    </DocumentsContainer>
  )
}
