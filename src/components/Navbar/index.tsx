import { List, File, Trash, FloppyDisk, X } from 'phosphor-react'
import {
  FileContainer,
  OpenSidebar,
  CloseSidebar,
  NavbarContainer,
  IconsContainer,
  SaveButton,
  InfoContainer,
} from './styles'
import { SettingsContext } from '../../contexts/SettingsContext'
import { ChangeEvent, useContext } from 'react'
import { ActionsContext } from '../../contexts/ActionsContext'
import * as Dialog from '@radix-ui/react-dialog'
import { DeleteModal } from './components/DeleteModal'

export function Navbar() {
  const { handleSetOpenSidebar, openSidebar } = useContext(SettingsContext)
  const { activeDocument, saveDocument, onDocumentNameChange } =
    useContext(ActionsContext)

  function handleDocumentNameChange(ev: ChangeEvent<HTMLInputElement>) {
    onDocumentNameChange(ev)
  }

  return (
    <NavbarContainer>
      <InfoContainer>
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
      </InfoContainer>
      <IconsContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Trash className="trash" />
          </Dialog.Trigger>
          <DeleteModal name={activeDocument?.name} />
        </Dialog.Root>
        <SaveButton onClick={() => saveDocument()}>
          <FloppyDisk />
        </SaveButton>
      </IconsContainer>
    </NavbarContainer>
  )
}
