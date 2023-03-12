import './Input.style.scss'

import type { InputType } from './type'

export const Input = ({ value, onChange, name, placeholder }: InputType) => {
  return (
    <div className="wrapper-input-component">
      <input
        placeholder={placeholder}
        className="border-color"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
