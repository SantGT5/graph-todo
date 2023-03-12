type inputStateType = {
  title: string
  text: string
  done: boolean
}

type inputActionType = {
  [T: string]: string | boolean
}

const initInputState: inputStateType = {
  title: '',
  text: '',
  done: false,
}

export { initInputState }
export type { inputStateType, inputActionType }
