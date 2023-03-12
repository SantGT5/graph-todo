import './InputCheckBox.style.scss'

import { InputCheckBoxType } from './type'

export const InputCheckBox = ({
  onChange,
  name,
  value,
  checked,
}: InputCheckBoxType) => {
  return (
    <div className="check-box-wrapper">
      <input
        type="checkbox"
        id="isDone"
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label className="text-color" htmlFor="isDone">
        Done
      </label>
    </div>
  )
}
