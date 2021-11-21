import { configureStore } from '@reduxjs/toolkit';
import { selectLanguageSliceReducer } from '../../components/SelectLanguage/selectLanguageSlice';
import { productsSliceReducer } from '../../components/Products/productsSlice';
import { shoppingCartSliceReducer } from '../../components/ShoppingCart/shoppingCartSlice';
import { shoppingCartIconSliceReducer } from '../../components/ShoppingCartIcon/shoppingCartIconSlice';

export const store = configureStore({
  reducer: {
    language: selectLanguageSliceReducer,
    products: productsSliceReducer,
    shoppingCart: shoppingCartSliceReducer,
    shoppingCartProductCount: shoppingCartIconSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
