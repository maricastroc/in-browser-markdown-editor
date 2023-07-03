import { createContext, ReactNode, useState } from 'react'

interface SettingsContextData {
  preview: boolean
  handleSetPreview: () => void
  openSidebar: boolean
  handleSetOpenSidebar: () => void
  handleCloseSidebar: () => void
  darkTheme: boolean
  handleSetDarkTheme: () => void
  handleSetPreviewWithValue: (value: boolean) => void
}

export const SettingsContext = createContext<SettingsContextData>(
  {} as SettingsContextData,
)

interface SettingsContextProviderProps {
  children: ReactNode
}

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [preview, setPreview] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSetPreview = () => {
    setPreview((prev) => !prev)
  }

  const handleSetOpenSidebar = () => {
    setOpenSidebar((prev) => !prev)
  }

  const handleCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleSetDarkTheme = () => {
    setDarkTheme((prev) => !prev)
  }

  const handleSetPreviewWithValue = (value: boolean) => {
    setPreview(value)
  }

  const SettingsContextValue: SettingsContextData = {
    preview,
    handleSetPreview,
    openSidebar,
    handleSetOpenSidebar,
    darkTheme,
    handleSetDarkTheme,
    handleCloseSidebar,
    handleSetPreviewWithValue,
  }

  return (
    <SettingsContext.Provider value={SettingsContextValue}>
      {children}
    </SettingsContext.Provider>
  )
}
