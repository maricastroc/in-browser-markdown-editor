import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  ChangeEvent,
} from 'react'
import defaultDocuments from '../documents/data.json'
import { v4 as uuidv4 } from 'uuid'

interface NewDocumentProps {
  id: string
  name: string
  createdAt: string
  content: string
}

interface MarkdownContextData {
  documents: any[]
  activeDocument: NewDocumentProps | undefined
  preview: boolean
  handleSetPreview: () => void
  openSidebar: boolean
  handleSetOpenSidebar: () => void
  createDocument: () => void
  onDocumentContentChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void
  onDocumentNameChange: (ev: ChangeEvent<HTMLInputElement>) => void
  saveDocument: () => void
  deleteDocument: () => void
  changeActiveDocument: (id: string) => void
}

export const MarkdownContext = createContext<MarkdownContextData>(
  {} as MarkdownContextData,
)

interface MarkdownContextProviderProps {
  children: ReactNode
}

export function MarkdownContextProvider({
  children,
}: MarkdownContextProviderProps) {
  const [preview, setPreview] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [documents, setDocuments] = useState<any[]>([])
  const [activeDocument, setActiveDocument] = useState<NewDocumentProps>()

  useEffect(() => {
    const storedDocuments = localStorage.getItem('documents')
    const parsedDocuments = storedDocuments
      ? JSON.parse(storedDocuments)
      : defaultDocuments
    setDocuments(parsedDocuments)
  }, [])

  useEffect(() => {
    const storedActiveDocument = localStorage.getItem('activeDocument')
    const parsedActiveDocument = storedActiveDocument
      ? JSON.parse(storedActiveDocument)
      : defaultDocuments[0]
    setActiveDocument(parsedActiveDocument)
  }, [])

  const createDocument = () => {
    const newID = uuidv4()
    const newDateObject = new Date()
    const newDateString =
      newDateObject.toLocaleString('default', {
        day: 'numeric',
      }) +
      ' ' +
      newDateObject.toLocaleString('default', {
        month: 'long',
      }) +
      ' ' +
      newDateObject.toLocaleString('default', {
        year: 'numeric',
      })

    const newDocument = {
      id: newID,
      name: 'untitled-document.md',
      createdAt: newDateString,
      content: '# Create your new markdown here!',
    }

    setActiveDocument(newDocument)

    setDocuments((existingDocuments) => [...existingDocuments, newDocument])
  }

  const onDocumentContentChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setActiveDocument((prev) => ({ ...prev!, content: ev.target.value }))
  }

  const onDocumentNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setActiveDocument((prev) => ({ ...prev!, name: ev.target.value }))
  }

  const saveDocument = () => {
    setDocuments((existingDocuments) => {
      return existingDocuments.map((document) => {
        if (document.id === activeDocument!.id) {
          return {
            ...document,
            name: activeDocument!.name,
            content: activeDocument!.content,
          }
        }
        return document
      })
    })
  }

  const deleteDocument = () => {
    const existingDocuments = documents.filter(
      (document) => document.id !== activeDocument!.id,
    )
    setDocuments(existingDocuments)
    existingDocuments.length === 0
      ? setActiveDocument(undefined)
      : setActiveDocument(existingDocuments[0])
  }

  const changeActiveDocument = (id: string) => {
    const selectedDocument = documents.find((document) => document.id === id)
    setActiveDocument(selectedDocument)
  }

  const handleSetPreview = () => {
    setPreview((prev) => !prev)
  }

  const handleSetOpenSidebar = () => {
    setOpenSidebar((prev) => !prev)
  }

  const MarkdownContextValue: MarkdownContextData = {
    preview,
    handleSetPreview,
    openSidebar,
    handleSetOpenSidebar,
    documents,
    activeDocument,
    createDocument,
    onDocumentContentChange,
    onDocumentNameChange,
    saveDocument,
    deleteDocument,
    changeActiveDocument,
  }

  return (
    <MarkdownContext.Provider value={MarkdownContextValue}>
      {children}
    </MarkdownContext.Provider>
  )
}
