import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Description,
  Title,
  Content,
  CloseButton,
  ConfirmButton,
} from './styles'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { ActionsContext } from '../../../../contexts/ActionsContext'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

interface DeleteModalProps {
  name: string | undefined
}

export function DeleteModal({ name }: DeleteModalProps) {
  const { deleteDocument } = useContext(ActionsContext)

  function handleDeleteDocument() {
    deleteDocument()
    toast.success('Document successfully deleted!')
  }

  return (
    <Dialog.Portal>
      <Overlay className="DialogOverlay" />
      <Content className="DialogContent">
        <CloseButton>
          <X size={18} alt="Cancel remove transaction" />
        </CloseButton>
        <Title className="DialogTitle">Delete this Document?</Title>
        <Description className="DialogDescription">
          {`Are you sure you want to delete the '${name}' document
          contents? This action cannot be reversed.`}
        </Description>
        <ConfirmButton onClick={handleDeleteDocument}>
          Confirm & Delete
        </ConfirmButton>
      </Content>
    </Dialog.Portal>
  )
}
