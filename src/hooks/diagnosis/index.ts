import { useCallback, useState } from 'react'
import { diagnosisDataList } from 'src/config/diagnosisData'

interface HandleBaseArgs {
  question_id: typeof diagnosisDataList[number]['_id']
  type: typeof diagnosisDataList[number]['type']
}
interface HandleRadioArgs extends HandleBaseArgs {
  value: 'passion' | 'reality' | 'sincerity'
  point: number
}

interface HandleEmailArgs extends HandleBaseArgs {
  value: string
}

interface HandlePhoneArgs extends HandleBaseArgs {
  value: string
}

interface HandleInputArgs extends HandleBaseArgs {
  value: string
}

const useHook = () => {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentVal, setCurrentVal] = useState(null)

  const onNext = useCallback(
    args => {
      const { onSubmit } = args
      const _length = diagnosisDataList.length
      try {
        if (index > _length - 1) {
          throw new Error('エラーが発生しました。')
        }
        if (currentVal) {
          answers[index] = currentVal
          setAnswers([...answers])
        }
        const nextStep = index + 1
        if (nextStep === _length - 1) {
          return onSubmit()
        }
        setIndex(nextStep)
        setCurrentVal(answers[nextStep])
      } catch (e) {
        console.error({ e })
      }
      console.log({ answers })
    },
    [index, answers, currentVal]
  )

  const onBack = useCallback(
    args => {
      const { onClose } = args
      try {
        if (index < 0) {
          throw new Error('エラーが発生しました。')
        }
        if (index === 0) {
          return onClose()
        }
        const backStep = index - 1
        setIndex(backStep)
        setCurrentVal(answers[backStep])
      } catch (e) {
        console.error({ e })
      }
    },
    [index, answers]
  )

  const handleInput = (args: HandleInputArgs) => {
    console.log({ handleInput: args })
    setCurrentVal(args)
  }
  const handlePhone = (args: HandlePhoneArgs) => {
    console.log({ handlePhone: args })
    setCurrentVal(args)
  }
  const handleEmail = (args: HandleEmailArgs) => {
    console.log({ handleEmail: args })
    setCurrentVal(args)
  }

  const handleRadio = (args: HandleRadioArgs) => {
    console.log({ handleRadio: args })
    setCurrentVal(args)
  }
  // TODO: いつか
  // const handleCheckbox = args => {}

  const handler = {
    radio: handleRadio,
    input: handleInput,
    email: handleEmail,
    phone: handlePhone,
  }

  return {
    onNext,
    onBack,
    currentVal,
    index,
    answers,
    handler,
  }
}

export default useHook
