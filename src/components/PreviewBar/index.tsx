import {
  NoPreviewMode,
  PreviewMode,
  PreviewBarContainer,
  ItemPreview,
  ItemMarkdown,
} from './styles'
import { Eye, EyeSlash } from 'phosphor-react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { useContext, useEffect, useState } from 'react'
import { ActionsContext } from '../../contexts/ActionsContext'

export function PreviewBar() {
  const { documents } = useContext(ActionsContext)
  const { handleSetPreview, preview } = useContext(SettingsContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    documents.length !== 0 && (
      <PreviewBarContainer>
        {preview ? (
          <PreviewMode>
            <p>Preview</p>
            <EyeSlash onClick={() => handleSetPreview()} />
          </PreviewMode>
        ) : (
          <NoPreviewMode>
            <ItemMarkdown>
              <p>Markdown</p>
              <Eye onClick={() => handleSetPreview()} />
              <span></span>
            </ItemMarkdown>
            {windowWidth > 768 && (
              <ItemPreview>
                <p>Preview</p>
                <Eye onClick={() => handleSetPreview()} />
              </ItemPreview>
            )}
          </NoPreviewMode>
        )}
      </PreviewBarContainer>
    )
  )
}
