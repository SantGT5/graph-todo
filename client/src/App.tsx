import './styles/_main.scss'
import React from 'react'

// page
import { HomePage } from './pages'

import { ThemeBtn } from './components'

// redux
import type { RootState } from './redux/reduxStore'
import { useSelector } from 'react-redux'

import { Routes, Route } from 'react-router-dom'

export const App = () => {
  const theme: string = useSelector(
    (state: RootState) => state.themeSlice.value
  )

  return (
    <div data-theme={theme}>
      <div className="page">
        <ThemeBtn />
        <React.Suspense fallback={<>Loading Page..</>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  )
}
