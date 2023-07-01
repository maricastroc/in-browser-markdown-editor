import { FileEditor } from '../../components/FileEditor'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { PreviewBar } from '../../components/PreviewBar'
import { MarkdownContext } from '../../contexts/MarkdownContext'
import { EditArea, HomeContainer } from './styles'
import { useContext } from 'react'

export function Home() {
  const { openSidebar } = useContext(MarkdownContext)
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
