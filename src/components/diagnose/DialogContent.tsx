import React from 'react'
import { diagnosisDataList } from 'src/config/diagnosisData'
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from '@material-ui/core'

type DialogContentProps = {
  diagnosisData: typeof diagnosisDataList[0]
  initialValue: any
  handle: any
}
const DialogContent: React.FC<DialogContentProps> = props => {
  const { diagnosisData, initialValue, handle } = props

  const formatPoint = (value: string) => {
    if (!diagnosisData?.answerList || !value) return null
    return diagnosisData.answerList.find(answer => answer.type === value)?.point
  }

  return (
    <>
      <div>
        <h3>{diagnosisData.title}</h3>
        {diagnosisData.type === 'radio' ? (
          <div>
            <RadioGroup
              aria-label='gender'
              value={initialValue}
              name='radio-buttons-group'
              onChange={e =>
                handle({
                  value: e.target.value,
                  point: formatPoint(e.target.value),
                })
              }
            >
              {diagnosisData.answerList.map((answer, idx) => (
                <FormControlLabel
                  key={idx}
                  value={answer.type}
                  control={<Radio />}
                  label={answer.text}
                />
              ))}
            </RadioGroup>
          </div>
        ) : diagnosisData.type === 'checkbox' ? (
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Label'
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label='Disabled'
              />
            </FormGroup>
          </div>
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
