import React from 'react'
import { diagnosisDataList } from 'src/config/diagnosisData'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import TextInput from 'src/components/form/TextInput'
import { useDiagnosisHook } from 'src/hooks'
type ValueOf<T> = T[keyof T]
type Handle = ValueOf<ReturnType<typeof useDiagnosisHook>['handler']>
type DialogContentProps = {
  diagnosisData: typeof diagnosisDataList[0]
  handle: (
    args: Parameters<Handle>[0] & { point?: number }
  ) => ReturnType<Handle>
  currentVal: Parameters<Handle>[0]
}

const DialogContent: React.FC<DialogContentProps> = props => {
  const {
    diagnosisData,
    handle,
    currentVal = {} as Parameters<Handle>[0],
  } = props

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
              value={currentVal.value}
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
            label={(diagnosisData.input as any)?.label}
            multiline={(diagnosisData.input as any)?.multiline}
            required={(diagnosisData.input as any)?.required}
            value={currentVal.value}
            name='input'
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
            label={(diagnosisData.input as any)?.label}
            required={(diagnosisData.input as any)?.required}
            value={currentVal.value}
            onChange={e =>
              handle({
                question_id: diagnosisData._id,
                type: diagnosisData.type,
                value: e.target.value,
              })
            }
            name='email'
          />
        ) : diagnosisData.type === 'phone' ? (
          <TextInput
            name='phone'
            label={(diagnosisData.input as any)?.label}
            required={(diagnosisData.input as any)?.required}
            type='number'
            value={currentVal.value}
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
