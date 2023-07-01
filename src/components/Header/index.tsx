import { List, File, Trash, FloppyDisk, X } from 'phosphor-react'
import {
  FileContainer,
  OpenSidebar,
  CloseSidebar,
  HeaderContainer,
  IconsContainer,
  SaveButton,
} from './styles'
import { MarkdownContext } from '../../contexts/MarkdownContext'
import { useContext } from 'react'

export function Header() {
  const { handleSetOpenSidebar, openSidebar } = useContext(MarkdownContext)
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
        <p>welcome.md</p>
      </FileContainer>
      <IconsContainer>
        <Trash className="trash" />
        <SaveButton>
          <FloppyDisk />
        </SaveButton>
      </IconsContainer>
    </HeaderContainer>
  )
}
