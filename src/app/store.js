import {configureStore} from '@reduxjs/toolkit'
import quotesSlice from '../features/quotesSlice'

export const store = configureStore({
  reducer: quotesSlice,
});