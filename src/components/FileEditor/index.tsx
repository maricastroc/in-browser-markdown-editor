import { ConverterContainer, TextContainer } from './styles'
import { useState, ChangeEvent, useContext } from 'react'
import data from '../../documents/data'
import ReactMarkdown from 'react-markdown'
import { MarkdownContext } from '../../contexts/MarkdownContext'

export function FileEditor() {
  const [text, setText] = useState(data[0].content)
  const { preview } = useContext(MarkdownContext)

  function handleSetText(ev: ChangeEvent<HTMLTextAreaElement>) {
    setText(ev.target.value)
  }

  return (
    <TextContainer>
      {preview ? (
        <ConverterContainer>
          <ReactMarkdown>{text}</ReactMarkdown>
        </ConverterContainer>
      ) : (
        <textarea
          value={text}
          onChange={handleSetText}
          spellCheck={false}
        ></textarea>
      )}
    </TextContainer>
  )
}
