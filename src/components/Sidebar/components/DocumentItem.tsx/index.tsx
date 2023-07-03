import { File } from 'phosphor-react'
import { DocumentItemContainer, TextContainer } from './styles'
import { useContext } from 'react'
import { ActionsContext } from '../../../../contexts/ActionsContext'
import { SettingsContext } from '../../../../contexts/SettingsContext'

interface DocumentItemProps {
  id: string
  createdAt: string
  name: string
}

export function DocumentItem({ createdAt, name, id }: DocumentItemProps) {
  const { changeActiveDocument } = useContext(ActionsContext)
  const { handleCloseSidebar } = useContext(SettingsContext)

  function handleClickDocument() {
    changeActiveDocument(id)
    handleCloseSidebar()
  }

  return (
    <DocumentItemContainer onClick={handleClickDocument}>
      <File />
      <TextContainer>
        <span>{createdAt}</span>
        <p>{name}</p>
      </TextContainer>
    </DocumentItemContainer>
  )
}
