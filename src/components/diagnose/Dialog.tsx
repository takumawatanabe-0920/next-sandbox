import React from 'react'
import BasicDialog from 'src/components/dialog/BasicDialog'
import DialogContent from 'src/components/diagnose/DialogContent'

type DialogProps = {
  open: boolean
  onClose: () => void
  onSubmit?: () => void
}
const Dialog: React.FC<DialogProps> = props => {
  const { open, onClose, onSubmit } = props
  return (
    <BasicDialog
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
      title='診断コンテンツ'
    >
      <DialogContent />
    </BasicDialog>
  )
}

export default Dialog
