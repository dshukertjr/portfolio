import React, { FC } from 'react'

type onChange = (value: string) => void

const FormField: FC<{
  label: string
  name: string
  type: string
  onChange: onChange
  required?: boolean
}> = ({ label, name, type, onChange, required = false }) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <input
        className="border"
        id={name}
        name={name}
        type={type}
        required={required}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default FormField
