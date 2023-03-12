import { createSlice } from '@reduxjs/toolkit'

export type ThemeModeType = {
  value: string
}

const initialState: ThemeModeType = {
  value: 'light',
}

export const themeModeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeController: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    },
  },
})

export const { themeController } = themeModeSlice.actions

export default themeModeSlice.reducer
