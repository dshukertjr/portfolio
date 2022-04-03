import React, { FC } from 'react'

type onChange = (value: string) => void

const FormField: FC<{
  label: string
  name: string
  type: 'text' | 'email' | 'textarea'
  onChange: onChange
  required?: boolean
}> = ({ label, name, type, onChange, required = false }) => {
  return (
    <div className="py-2 w-full">
      <label htmlFor={name}>
        {label}
        <span className="text-red-500">{required ? ' *' : ''}</span>
      </label>
      {type == 'textarea' ? (
        <textarea
          className="border border-neutral-700 rounded-sm block w-full p-2"
          id={name}
          name={name}
          required={required}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          rows={4}
        ></textarea>
      ) : (
        <input
          className="border border-neutral-700 rounded-sm block w-full p-2"
          id={name}
          name={name}
          type={type}
          required={required}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
      )}
    </div>
  )
}

export default FormField
