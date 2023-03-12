import './HomePage.style.scss'
import React from 'react'

// components
import { Input, InputCheckBox } from '../../components'

// type
import { initInputState } from './type'
import type { inputStateType, inputActionType } from './type'

const formHandler = (state: inputStateType, newState: inputActionType) => ({
  ...state,
  ...newState,
})

export const HomePage = () => {
  const [input, dispatch] = React.useReducer(formHandler, initInputState)

  const handleChangeValue = (event: React.SyntheticEvent) => {
    const { name, value } = event.target as HTMLInputElement

    dispatch({ [name]: value })
  }

  return (
    <div className="wrapper-home-page">
      <Input
        placeholder="Title .."
        value={input.title}
        name="title"
        onChange={handleChangeValue}
      />
      <Input
        placeholder="Description .."
        value={input.text}
        name="text"
        onChange={handleChangeValue}
      />
      <InputCheckBox
        name="done"
        checked={input.done}
        onChange={({ currentTarget }) =>
          dispatch({ [currentTarget.name]: currentTarget.checked })
        }
      />
    </div>
  )
}
