import './HomePage.style.scss'
import React from 'react'

import { Input } from '../../components'

type ReducerActionType = { type: string; payload: string }

const reducer = (state = '', { type, payload }: ReducerActionType): string => {
  switch (type) {
    case 'ON_CHANGE':
      return payload

    default:
      return state
  }
}

export const HomePage = () => {
  const [state, dispatch] = React.useReducer(reducer, '')

  return (
    <div className="wrapper-home-page">
      <Input
        value={state}
        onChange={({ currentTarget }) =>
          dispatch({ type: 'ON_CHANGE', payload: currentTarget.value })
        }
      />
    </div>
  )
}
