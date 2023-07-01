import { PreviewBarContainer } from './styles'
import { Eye } from 'phosphor-react'
import { MarkdownContext } from '../../contexts/MarkdownContext'
import { useContext } from 'react'

export function PreviewBar() {
  const { handleSetPreview, preview } = useContext(MarkdownContext)
  return (
    <PreviewBarContainer>
      <p>{preview ? 'Preview' : 'Markdown'}</p>
      <Eye onClick={() => handleSetPreview()} />
    </PreviewBarContainer>
  )
}
