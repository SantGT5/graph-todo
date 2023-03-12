import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import { store } from '../redux/reduxStore'
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// Apollo
import { ApolloProvider } from '@apollo/client'
import { client } from '../Apollo/Apollo.config'

type WrapperProps = {
  children?: React.ReactNode
}

afterEach(() => cleanup())

const persistor = persistStore(store)

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }: WrapperProps) => {
      return (
        <Router>
          <ApolloProvider client={client}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {children}
              </PersistGate>
            </Provider>
          </ApolloProvider>
        </Router>
      )
    },
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
