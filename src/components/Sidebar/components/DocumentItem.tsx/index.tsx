import { File } from 'phosphor-react'
import { DocumentItemContainer, TextContainer } from './styles'
import { useContext } from 'react'
import { ActionsContext } from '../../../../contexts/ActionsContext'

interface DocumentItemProps {
  id: string
  createdAt: string
  name: string
}

export function DocumentItem({ createdAt, name, id }: DocumentItemProps) {
  const { changeActiveDocument } = useContext(ActionsContext)

  return (
    <DocumentItemContainer onClick={() => changeActiveDocument(id)}>
      <File />
      <TextContainer>
        <span>{createdAt}</span>
        <p>{name}</p>
      </TextContainer>
    </DocumentItemContainer>
  )
}
