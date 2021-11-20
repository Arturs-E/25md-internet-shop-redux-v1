import { configureStore } from '@reduxjs/toolkit';
import { selectLanguageSliceReducer } from '../../components/SelectLanguage/selectLanguageSlice';
import { productsSliceReducer } from '../../components/Products/productsSlice';

export const store = configureStore({
  reducer: {
    language: selectLanguageSliceReducer,
    products: productsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
