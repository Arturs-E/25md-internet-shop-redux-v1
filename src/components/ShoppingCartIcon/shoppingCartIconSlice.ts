import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCartIcon {
  count: number;
}

const initialState: ShoppingCartIcon = {
  count: 0,
};

const shoppingCartIconSlice = createSlice({
  name: 'shoppingCartIconProductCount',
  initialState,
  reducers: {
    increaseCartProductCount: (state, action: PayloadAction<number>) => ({ count: action.payload + 1 }),
    decreaseCartProductCount: (state, action: PayloadAction<number>) => ({ count: action.payload - 1 }),
  },
});

const { increaseCartProductCount, decreaseCartProductCount } = shoppingCartIconSlice.actions;

const shoppingCartIconSliceReducer = shoppingCartIconSlice.reducer;

export { increaseCartProductCount, decreaseCartProductCount, shoppingCartIconSliceReducer };
