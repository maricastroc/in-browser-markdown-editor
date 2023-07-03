import { List, File, Trash, FloppyDisk, X } from 'phosphor-react'
import {
  FileContainer,
  ControlSideBar,
  NavbarContainer,
  IconsContainer,
  SaveButton,
  InfoContainer,
  TitleContainer,
  NavbarWrapper,
  StyledToastContainer,
} from './styles'
import { SettingsContext } from '../../contexts/SettingsContext'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ActionsContext } from '../../contexts/ActionsContext'
import * as Dialog from '@radix-ui/react-dialog'
import { DeleteModal } from './components/DeleteModal'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export function Navbar() {
  const { handleSetOpenSidebar, openSidebar } = useContext(SettingsContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { activeDocument, saveDocument, onDocumentNameChange, documents } =
    useContext(ActionsContext)

  function handleDocumentNameChange(ev: ChangeEvent<HTMLInputElement>) {
    onDocumentNameChange(ev)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleSaveDocument() {
    saveDocument()
    toast.success('Changes successfully saved!')
  }

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <InfoContainer>
          {openSidebar ? (
            <ControlSideBar onClick={() => handleSetOpenSidebar()}>
              <X />
            </ControlSideBar>
          ) : (
            <ControlSideBar onClick={() => handleSetOpenSidebar()}>
              <List />
            </ControlSideBar>
          )}
          <TitleContainer>
            <h2>Markdown</h2>
            <span></span>
          </TitleContainer>
          {documents.length !== 0 && (
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
          )}
        </InfoContainer>
        {documents.length !== 0 && (
          <IconsContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Trash className="trash" />
              </Dialog.Trigger>
              <DeleteModal name={activeDocument?.name} />
            </Dialog.Root>
            <SaveButton onClick={handleSaveDocument}>
              <FloppyDisk />
              {windowWidth > 768 && <p>Save Changes</p>}
            </SaveButton>
          </IconsContainer>
        )}
      </NavbarContainer>
      <StyledToastContainer position="top-right" autoClose={5000} />
    </NavbarWrapper>
  )
}
