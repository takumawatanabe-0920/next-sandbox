import React from 'react'
import BasicDialog from 'src/components/dialog/BasicDialog'
import DialogContent from 'src/components/diagnose/DialogContent'
import { diagnosisDataList } from 'src/config/diagnosisData'
import { useDiagnosisHook } from 'src/hooks'

type DialogProps = {
  open: boolean
  onClose: () => void
  onSubmit?: () => void
}
const Dialog: React.FC<DialogProps> = props => {
  const { open, onClose, onSubmit } = props
  const { index, answers, currentVal, onNext, onBack, handler } =
    useDiagnosisHook()
  const diagnosisData = diagnosisDataList[index] as typeof diagnosisDataList[0]

  console.log({ diagnosisData, h: handler[diagnosisData.type] })

  return (
    <BasicDialog
      open={open}
      onClose={() =>
        onBack({
          onClose,
        })
      }
      onSubmit={() =>
        onNext({
          onSubmit,
        })
      }
      title='診断コンテンツ'
      submitText='次へ'
    >
      <DialogContent
        diagnosisData={diagnosisData}
        currentVal={currentVal || {}}
        handle={handler[diagnosisData.type]}
      />
    </BasicDialog>
  )
}

export default Dialog
