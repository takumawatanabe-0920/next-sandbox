import React from 'react'
import { diagnosisData } from 'src/config/diagnosisData'

type DialogContentProps = {}
const DialogContent: React.FC<DialogContentProps> = props => {
  const {} = props
  return (
    <>
      {diagnosisData.map((data, idx) => (
        <div key={idx}>
          <h3>{data.title}</h3>
          {data.type === 'single' ? (
            <div></div>
          ) : data.type === 'multiple' ? (
            <></>
          ) : data.type === 'input' ? (
            <></>
          ) : data.type === 'email' ? (
            <></>
          ) : data.type === 'phone' ? (
            <></>
          ) : null}
        </div>
      ))}
    </>
  )
}

export default DialogContent
