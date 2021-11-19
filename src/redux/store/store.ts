import { configureStore } from '@reduxjs/toolkit';
import selectLanguageReducer from '../../components/SelectLanguage/selectLanguageSlice';

export const store = configureStore({
  reducer: {
    language: selectLanguageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
