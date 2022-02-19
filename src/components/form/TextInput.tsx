import React from 'react'
import { TextField } from '@material-ui/core'

type TextInputProsp = {
  label: string
  type?: 'text' | 'number' | 'password'
  required?: boolean
  multiline?: boolean
  variant?: 'outlined'
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value: string
}

const TextInput: React.FC<TextInputProsp> = props => {
  const {
    label,
    type = 'text',
    required = false,
    multiline = false,
    variant = 'outlined',
    onChange,
    value,
  } = props

  return (
    <TextField
      id='outlined-basic'
      variant={variant}
      label={label}
      type={type}
      multiline={multiline}
      required={required}
      onChange={onChange}
      value={value}
    />
  )
}

export default TextInput
