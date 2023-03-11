import './ThemeBtn.style.scss'

// redux
import type { RootState, AppDispatch } from '../../redux/reduxStore'
import { useSelector, useDispatch } from 'react-redux'
import { themeController } from '../../redux/slices/ThemeMode'

export const ThemeBtn = () => {
  const theme = useSelector((state: RootState) => state.themeSlice.value)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="theme-btn-wrapper">
      <button
        className="text-btn-color"
        onClick={() => dispatch(themeController())}
      >
        {`${theme} mode`}
      </button>
    </div>
  )
}
