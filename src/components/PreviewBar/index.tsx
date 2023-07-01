import { PreviewBarContainer } from './styles'
import { Eye, EyeSlash } from 'phosphor-react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { useContext } from 'react'

export function PreviewBar() {
  const { handleSetPreview, preview } = useContext(SettingsContext)
  return (
    <PreviewBarContainer>
      <p>{preview ? 'Preview' : 'Markdown'}</p>
      {preview ? (
        <EyeSlash onClick={() => handleSetPreview()} />
      ) : (
        <Eye onClick={() => handleSetPreview()} />
      )}
    </PreviewBarContainer>
  )
}
