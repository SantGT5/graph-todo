import './Button.style.scss'

import { ButtonType } from './type'

export const Button = ({ onClick, label, id }: ButtonType) => {
  return (
    <div className="button-wrapper">
      <button id={id} onClick={onClick}>
        {label}
      </button>
    </div>
  )
}
