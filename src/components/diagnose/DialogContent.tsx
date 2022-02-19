import React from 'react'
import { diagnosisDataList } from 'src/config/diagnosisData'
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import TextInput from 'src/components/form/TextInput'

type DialogContentProps = {
  diagnosisData: typeof diagnosisDataList[0]
  initialValue: any
  handle: any
  currentVal: any
}
const DialogContent: React.FC<DialogContentProps> = props => {
  const { diagnosisData, initialValue, handle, currentVal } = props

  const formatPoint = (value: string) => {
    if (!diagnosisData?.answerList || !value) return null
    return diagnosisData.answerList.find(answer => answer.type === value)?.point
  }
  console.log({ currentVal, initialValue })

  return (
    <>
      <div>
        <h3>{diagnosisData.title}</h3>
        {diagnosisData.type === 'radio' ? (
          <div>
            <RadioGroup
              value={initialValue}
              name='radio-buttons-group'
              onChange={e =>
                handle({
                  question_id: diagnosisData._id,
                  type: diagnosisData.type,
                  value: e.target.value,
                  point: formatPoint(e.target.value),
                })
              }
            >
              {diagnosisData.answerList.map((answer, idx) => (
                <FormControlLabel
                  key={`${answer.id}-${idx}`}
                  value={answer.type}
                  control={<Radio />}
                  label={answer.text}
                />
              ))}
            </RadioGroup>
          </div>
        ) : diagnosisData.type === 'input' ? (
          <TextInput
            label={diagnosisData.input?.label}
            multiline={diagnosisData.input?.multiline}
            required={diagnosisData.input?.required}
            value={initialValue}
            onChange={e =>
              handle({
                question_id: diagnosisData._id,
                type: diagnosisData.type,
                value: e.target.value,
              })
            }
          />
        ) : diagnosisData.type === 'email' ? (
          <TextInput
            label={diagnosisData.input?.label}
            required={diagnosisData.input?.required}
            value={initialValue}
            onChange={e =>
              handle({
                question_id: diagnosisData._id,
                type: diagnosisData.type,
                value: e.target.value,
              })
            }
          />
        ) : diagnosisData.type === 'phone' ? (
          <TextInput
            label={diagnosisData.input?.label}
            required={diagnosisData.input?.required}
            type='number'
            value={initialValue}
            onChange={e =>
              handle({
                question_id: diagnosisData._id,
                type: diagnosisData.type,
                value: e.target.value,
              })
            }
          />
        ) : null}
      </div>
    </>
  )
}

export default DialogContent
