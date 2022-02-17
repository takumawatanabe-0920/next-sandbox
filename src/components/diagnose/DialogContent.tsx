import React from 'react'
import { diagnosisDataList } from 'src/config/diagnosisData'
import { TextField } from '@material-ui/core'

type DialogContentProps = {
  diagnosisData: typeof diagnosisDataList[0]
  initialValue: any
}
const DialogContent: React.FC<DialogContentProps> = props => {
  const { diagnosisData, initialValue } = props
  console.log({ initialValue })
  return (
    <>
      <div>
        <h3>{diagnosisData.title}</h3>
        {diagnosisData.type === 'radio' ? (
          <div></div>
        ) : diagnosisData.type === 'checkbox' ? (
          <></>
        ) : diagnosisData.type === 'input' ? (
          <TextField></TextField>
        ) : diagnosisData.type === 'email' ? (
          <TextField></TextField>
        ) : diagnosisData.type === 'phone' ? (
          <TextField></TextField>
        ) : null}
      </div>
    </>
  )
}

export default DialogContent
