import { PreviewBarContainer } from './styles'
import { Eye } from 'phosphor-react'
import { MarkdownContext } from '../../contexts/MarkdownContext'
import { useContext } from 'react'

export function PreviewBar() {
  const { handleSetPreview } = useContext(MarkdownContext)
  return (
    <PreviewBarContainer>
      <p>Markdown</p>
      <Eye onClick={() => handleSetPreview()} />
    </PreviewBarContainer>
  )
}
