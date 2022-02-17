import { useCallback, useState } from 'react'
import { diagnosisDataList } from 'src/config/diagnosisData'

const useHook = () => {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentVal, setCurrentVal] = useState(null)

  const useOnNext = useCallback(
    args => {
      const { onSubmit } = args
      const _length = diagnosisDataList.length
      try {
        if (index > _length - 1) {
          throw new Error('エラーが発生しました。')
        }
        if (index === _length - 1) {
          return onSubmit()
        }
        if (currentVal) {
          answers[index] = currentVal
          setAnswers([...answers])
        }
        setIndex(index + 1)
        setCurrentVal(null)
      } catch (e) {
        console.error({ e })
      }
    },
    [index, answers, currentVal]
  )

  const useOnBack = useCallback(
    args => {
      const { onClose } = args
      try {
        if (index < 0) {
          throw new Error('エラーが発生しました。')
        }
        if (index === 0) {
          return onClose()
        }
        setIndex(index - 1)
        setCurrentVal(null)
      } catch (e) {
        console.error({ e })
      }
    },
    [index]
  )

  const handleInput = () => {}
  const handlePhone = () => {}
  const handleEmail = () => {}
  const handleSingle = () => {}
  const handleMultiple = () => {}

  return {
    useOnNext,
    useOnBack,
    currentVal,
    index,
    answers,
  }
}

export default useHook