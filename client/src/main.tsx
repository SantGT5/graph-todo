import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import { store } from './redux/reduxStore'
import { Provider } from 'react-redux'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// Apollo
import { ApolloProvider } from '@apollo/client'
import { client } from './Apollo/Apollo.config'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>
)
