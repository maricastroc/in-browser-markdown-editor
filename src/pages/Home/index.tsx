import { FileEditor } from '../../components/FileEditor'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { PreviewBar } from '../../components/PreviewBar'
import { SettingsContext } from '../../contexts/SettingsContext'
import { EditArea, HomeContainer } from './styles'
import { useContext } from 'react'

export function Home() {
  const { openSidebar } = useContext(SettingsContext)
  return (
    <HomeContainer>
      <Sidebar />
      <EditArea className={openSidebar ? 'moving' : 'backing'}>
        <Header />
        <PreviewBar />
        <FileEditor />
      </EditArea>
    </HomeContainer>
  )
}
