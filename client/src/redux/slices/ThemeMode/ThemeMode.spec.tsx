import { store } from '../../reduxStore'
import { themeController } from './ThemeMode'

describe('Theme Mode', () => {
  it('initialState', () => {
    const state = store.getState().themeSlice

    expect(state).toHaveProperty('value')
    expect(state.value).toBe('light')
  })

  it('should dispatch action & switch to dark mode', () => {
    store.dispatch(themeController())
    const state = store.getState().themeSlice

    expect(state).toHaveProperty('value')
    expect(state.value).toBe('dark')
  })

  it('should dispatch action & switch to light mode', () => {
    store.dispatch(themeController())
    const state = store.getState().themeSlice

    expect(state).toHaveProperty('value')
    expect(state.value).toBe('light')
  })
})
