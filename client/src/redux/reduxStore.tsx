import { configureStore, combineReducers } from '@reduxjs/toolkit'

// redux persist
import { persistReducer, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducers
import themeSlice from './slices/ThemeMode/ThemeMode'

const persistConfig = {
  key: 'root',
  version: 1,
  // blacklist: ['themeSlice'], // themeSlice will not be persisted
  // whitelist: ['themeSlice'], // only themeSlice will be persisted
  storage,
}

const rootReducer = combineReducers({ themeSlice })

const persisted = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST], // or false
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
