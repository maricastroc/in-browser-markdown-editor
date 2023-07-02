import { ConverterContainer } from './styles'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { ActionsContext } from '../../../../contexts/ActionsContext'

export function Converter() {
  const { activeDocument } = useContext(ActionsContext)

  return (
    <ConverterContainer>
      <ReactMarkdown>{activeDocument!.content}</ReactMarkdown>
    </ConverterContainer>
  )
}
