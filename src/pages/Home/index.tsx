import { FileEditor } from '../../components/FileEditor'
import { Navbar } from '../../components/Navbar'
import { PreviewBar } from '../../components/PreviewBar'
import { Sidebar } from '../../components/Sidebar'
import { SettingsContext } from '../../contexts/SettingsContext'
import { EditArea, HeaderContainer, HomeContainer, HomeContent } from './styles'
import { useContext } from 'react'

export function Home() {
  const { openSidebar } = useContext(SettingsContext)
  return (
    <HomeContainer>
      <HomeContent>
        <Sidebar />
        <EditArea className={openSidebar ? 'moving' : 'backing'}>
          <HeaderContainer>
            <Navbar />
            <PreviewBar />
          </HeaderContainer>
          <FileEditor />
        </EditArea>
      </HomeContent>
    </HomeContainer>
  )
}
