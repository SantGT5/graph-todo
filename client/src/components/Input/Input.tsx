import './Input.style.scss'

import type { InputType } from './type'

export const Input = ({ value, onChange }: InputType) => {
  return (
    <div className="wrapper-input-component">
      <input
        placeholder="Title .."
        className="border-color"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
