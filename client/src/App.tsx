import './styles/_main.scss'

// page
import { HomePage } from './pages'

// redux
import type { RootState } from './redux/reduxStore'
import { useSelector } from 'react-redux'

import { Routes, Route } from 'react-router-dom'

export const App = () => {
  const theme: string = useSelector(
    (state: RootState) => state.themeSlice.value
  )

  return (
    <div data-theme={"light"}>
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  )
}
