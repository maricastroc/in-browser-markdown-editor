import { List, File, Trash, FloppyDisk, X } from 'phosphor-react'
import {
  FileContainer,
  OpenSidebar,
  CloseSidebar,
  HeaderContainer,
  IconsContainer,
  SaveButton,
} from './styles'
import { SettingsContext } from '../../contexts/SettingsContext'
import { ChangeEvent, useContext } from 'react'
import { ActionsContext } from '../../contexts/ActionsContext'

export function Header() {
  const { handleSetOpenSidebar, openSidebar } = useContext(SettingsContext)
  const { activeDocument, saveDocument, onDocumentNameChange } =
    useContext(ActionsContext)

  function handleDocumentNameChange(ev: ChangeEvent<HTMLInputElement>) {
    onDocumentNameChange(ev)
  }

  return (
    <HeaderContainer>
      {openSidebar ? (
        <CloseSidebar onClick={() => handleSetOpenSidebar()}>
          <X />
        </CloseSidebar>
      ) : (
        <OpenSidebar onClick={() => handleSetOpenSidebar()}>
          <List />
        </OpenSidebar>
      )}
      <FileContainer>
        <File />
        <div>
          <label htmlFor="">Document Name</label>
          <input
            value={activeDocument?.name}
            onChange={handleDocumentNameChange}
          />
        </div>
      </FileContainer>
      <IconsContainer>
        <Trash className="trash" />
        <SaveButton onClick={() => saveDocument()}>
          <FloppyDisk />
        </SaveButton>
      </IconsContainer>
    </HeaderContainer>
  )
}
