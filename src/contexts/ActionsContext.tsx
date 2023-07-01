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

interface ActionsContextData {
  documents: any[]
  activeDocument: NewDocumentProps | undefined
  createDocument: () => void
  onDocumentContentChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void
  onDocumentNameChange: (ev: ChangeEvent<HTMLInputElement>) => void
  saveDocument: () => void
  deleteDocument: () => void
  changeActiveDocument: (id: string) => void
}

export const ActionsContext = createContext<ActionsContextData>(
  {} as ActionsContextData,
)

interface ActionsContextProviderProps {
  children: ReactNode
}

export function ActionsContextProvider({
  children,
}: ActionsContextProviderProps) {
  const [documents, setDocuments] = useState(() => {
    const storedDocuments = localStorage.getItem('documents')
    if (typeof storedDocuments === 'string') {
      return JSON.parse(storedDocuments)
    } else {
      return defaultDocuments
    }
  })

  const [activeDocument, setActiveDocument] = useState<NewDocumentProps>()

  useEffect(() => {
    try {
      const storedDocuments = localStorage.getItem('documents')
      const parsedDocuments = storedDocuments
        ? JSON.parse(storedDocuments)
        : defaultDocuments
      setDocuments(parsedDocuments)
      console.log(parsedDocuments)
    } catch (error) {
      console.error('Error parsing documents:', error)
      setDocuments(defaultDocuments)
    }
  }, [])

  useEffect(() => {
    try {
      const storedActiveDocument = localStorage.getItem('activeDocument')
      const parsedActiveDocument = storedActiveDocument
        ? JSON.parse(storedActiveDocument)
        : defaultDocuments[0]
      setActiveDocument(parsedActiveDocument)
    } catch (error) {
      console.error('Error parsing active document:', error)
      setActiveDocument(defaultDocuments[0])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents))
    localStorage.setItem('activeDocument', JSON.stringify(activeDocument))
  }, [documents, activeDocument])

  // Activated on clicking "New Document" in Sidebar component
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
      content: '# Create your new Actions here!',
    }

    setActiveDocument(newDocument)

    setDocuments((existingDocuments: NewDocumentProps[]) => [
      ...existingDocuments,
      newDocument,
    ])
  }

  // Activated on "onChange" effect in markdown editor in Home component
  const onDocumentContentChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setActiveDocument((prev) => ({ ...prev!, content: ev.target.value }))
  }

  // Activated on "onChange" effect in DocumentNameEditor component in Header component
  const onDocumentNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setActiveDocument((prev) => ({ ...prev!, name: ev.target.value }))
  }

  // Actived on clicking "Save Changes" button in Header component
  const saveDocument = () => {
    setDocuments((existingDocuments: NewDocumentProps[]) => {
      return existingDocuments.map((document: NewDocumentProps) => {
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

  // Activated on clicking delete icon in Header component and confirming in modal
  const deleteDocument = () => {
    const existingDocuments = documents.filter(
      (document: NewDocumentProps) => document.id !== activeDocument!.id,
    )
    setDocuments(existingDocuments)
    existingDocuments.length === 0
      ? setActiveDocument(undefined)
      : setActiveDocument(existingDocuments[0])
  }

  // Activated on clicking any document listed in the Sidebar component
  const changeActiveDocument = (id: string) => {
    const selectedDocument = documents.find(
      (document: NewDocumentProps) => document.id === id,
    )
    setActiveDocument(selectedDocument)
  }

  const ActionsContextValue: ActionsContextData = {
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
    <ActionsContext.Provider value={ActionsContextValue}>
      {children}
    </ActionsContext.Provider>
  )
}
