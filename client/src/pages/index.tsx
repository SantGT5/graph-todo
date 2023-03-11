import React from 'react'

const HomePage = React.lazy(() =>
  import('./HomePage/HomePage').then(({ HomePage }) => {
    return { default: HomePage }
  })
)

export { HomePage }
