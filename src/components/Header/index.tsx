import { List, File, Trash, FloppyDisk } from 'phosphor-react'
import {
  FileContainer,
  HamburgerMenu,
  HeaderContainer,
  IconsContainer,
  SaveButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HamburgerMenu>
        <List />
      </HamburgerMenu>
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
