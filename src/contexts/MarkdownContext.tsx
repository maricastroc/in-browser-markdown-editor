import { createContext, ReactNode, useState } from 'react'

interface MarkdownContextData {
  preview: boolean
  handleSetPreview: () => void
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

  function handleSetPreview() {
    setPreview(!preview)
  }

  const MarkdownContextValue: MarkdownContextData = {
    preview,
    handleSetPreview,
  }

  return (
    <MarkdownContext.Provider value={MarkdownContextValue}>
      {children}
    </MarkdownContext.Provider>
  )
}
