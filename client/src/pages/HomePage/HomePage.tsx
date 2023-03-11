import './HomePage.style.scss'
import React from 'react'

import { Input } from '../../components'

// redux
// import type { RootState, AppDispatch } from '../../redux/reduxStore'
// import { useSelector, useDispatch } from 'react-redux'
// import { themeController } from '../../redux/slices/ThemeMode'

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
  // const result = useSelector((state: RootState) => state.themeSlice.value)
  // const dispatch: AppDispatch = useDispatch()
  const [state, dispatch] = React.useReducer(reducer, '')

  return (
    <div className='wrapper-home-page'>
      <Input
        value={state}
        onChange={({ currentTarget }) =>
          dispatch({ type: 'ON_CHANGE', payload: currentTarget.value })
        }
      />
      {/* <button
        className="text-color"
        onClick={() => dispatch(themeController())}
      >
        mode
      </button> */}
    </div>
  )
}
