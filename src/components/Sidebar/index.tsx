import { ActionsContext } from '../../contexts/ActionsContext'
import { SettingsContext } from '../../contexts/SettingsContext'
import { DocumentItem } from './components/DocumentItem.tsx'
import {
  DocumentItemsContainer,
  DocumentsContainer,
  DocumentsContent,
  NewDocumentBtn,
  ThemeButtonContainer,
} from './styles'
import { useContext } from 'react'
import * as Switch from '@radix-ui/react-switch'
import { Sun, Moon } from 'phosphor-react'

export function Sidebar() {
  const { openSidebar, darkTheme, handleSetDarkTheme } =
    useContext(SettingsContext)
  const { documents } = useContext(ActionsContext)

  console.log(documents)

  return (
    <DocumentsContainer hidden={!openSidebar}>
      <DocumentsContent>
        <h1>Markdown</h1>
        <h2>My documents</h2>
        <NewDocumentBtn>
          <p>+ New Document</p>
        </NewDocumentBtn>
        <DocumentItemsContainer>
          {documents.map((document) => {
            return (
              <DocumentItem
                key={document.id}
                id={document.id}
                name={document.name}
                createdAt={document.createdAt}
              />
            )
          })}
        </DocumentItemsContainer>
      </DocumentsContent>
      <ThemeButtonContainer>
        <Moon className={darkTheme ? 'active' : ''} />
        <Switch.Root
          className="SwitchRoot"
          id="dark-theme"
          onClick={() => handleSetDarkTheme()}
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
        <Sun className={darkTheme ? '' : 'active'} />
      </ThemeButtonContainer>
    </DocumentsContainer>
  )
}
