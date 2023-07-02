import { FileEditor } from '../../components/FileEditor'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { PreviewBar } from '../../components/PreviewBar'
import { SettingsContext } from '../../contexts/SettingsContext'
import { EditArea, HeaderContainer, HomeContainer, HomeContent } from './styles'
import { useContext } from 'react'

export function Home() {
  const { openSidebar } = useContext(SettingsContext)
  return (
    <HomeContainer>
      <Sidebar />
      <HomeContent>
        <HeaderContainer>
          <Navbar />
          <PreviewBar />
        </HeaderContainer>
        <EditArea className={openSidebar ? 'moving' : 'backing'}>
          <FileEditor />
        </EditArea>
      </HomeContent>
    </HomeContainer>
  )
}
